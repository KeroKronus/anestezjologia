const STORAGE_KEY = 'techwet-anesthesia-records-v1';
const SETTINGS_KEY = 'techwet-anesthesia-settings-v1';
const PIN_KEY = 'techwet-anesthesia-pin-v1';
const TIMES = ['0','5','10','15','20','25','30','35','40','45','50','55','60'];

const defaultForm = () => ({
  visitDate: new Date().toISOString().slice(0,10),
  ownerName: '', animalName: '', species: '', breed: '', age: '', weight: '',
  historyChronic: '', historyMedsAllergies: '', historyPrevAnesthesia: '',
  generalState: 'Swiadomy',
  temperament: { wesoly:false, agresywny:false, cichy:false, spokojny:false, niespokojny:false },
  procedureAsa: '',
  drugTable: Array.from({length:6}, () => ({name:'', dose:'', route:'', notes:''})),
  planPremed: '', planInduction: '', planMaintenance: '', planAnalgesia: '',
  intraopDrugs: Array.from({length:5}, () => ({name:'', dose:'', hour:'', notes:''})),
  surgeryStart: '', surgeryEnd: '', surgeon: '', assistant: '',
  vitals: TIMES.map(t => ({ time:t, hr:'', spo2:'', etco2:'', temp:'', pressure:'', mac:'' }))
});
const defaultSettings = () => ({ watermark:'Tech.Wet Woroch Marcin', requirePin:true, pin:'123071' });

let records = loadRecords();
let settings = loadSettings();
let currentId = null;
let form = defaultForm();

const $ = (id) => document.getElementById(id);

function loadRecords(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; } }
function saveRecords(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(records)); }
function loadSettings(){
  try { return { ...defaultSettings(), ...(JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}')) }; }
  catch { return defaultSettings(); }
}
function saveSettings(){ localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); localStorage.setItem(PIN_KEY, settings.pin); }
function currentPin(){ return localStorage.getItem(PIN_KEY) || settings.pin || '123071'; }
function uid(){ return Math.random().toString(36).slice(2,10); }

function bindSimpleFields(){
  const fields = ['visitDate','ownerName','animalName','species','breed','age','weight','historyChronic','historyMedsAllergies','historyPrevAnesthesia','generalState','procedureAsa','planPremed','planInduction','planMaintenance','planAnalgesia','surgeryStart','surgeryEnd','surgeon','assistant'];
  fields.forEach(id => $(id).addEventListener('input', e => form[id] = e.target.value));
  ['wesoly','agresywny','cichy','spokojny','niespokojny'].forEach(key => {
    $(`t_${key}`).addEventListener('change', e => form.temperament[key] = e.target.checked);
  });
}

function renderDrugTables(){
  renderEditableTable('drugTable', form.drugTable, ['name','dose','route','notes']);
  renderEditableTable('intraopTable', form.intraopDrugs, ['name','dose','hour','notes']);
}
function renderEditableTable(tableId, rows, keys){
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = '';
  rows.forEach((row, i) => {
    const tr = document.createElement('tr');
    keys.forEach(key => {
      const td = document.createElement('td');
      const input = document.createElement('input');
      input.value = row[key] || '';
      input.addEventListener('input', e => row[key] = e.target.value);
      td.appendChild(input);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function renderVitalsTable(){
  const tbody = document.querySelector('#vitalsTable tbody');
  tbody.innerHTML = '';
  form.vitals.forEach((row, i) => {
    const tr = document.createElement('tr');
    const timeTd = document.createElement('td');
    timeTd.textContent = row.time;
    tr.appendChild(timeTd);
    ['hr','spo2','etco2','temp','pressure','mac'].forEach(key => {
      const td = document.createElement('td');
      const input = document.createElement('input');
      input.value = row[key] || '';
      input.addEventListener('input', e => row[key] = e.target.value);
      td.appendChild(input);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function applyFormToUI(){
  Object.entries(form).forEach(([key, value]) => {
    const el = $(key);
    if (el && typeof value !== 'object') el.value = value || '';
  });
  ['wesoly','agresywny','cichy','spokojny','niespokojny'].forEach(key => {
    $(`t_${key}`).checked = !!form.temperament[key];
  });
  $('watermarkPreview').textContent = settings.watermark;
  renderDrugTables();
  renderVitalsTable();
}

function recordLabel(r){
  const d = r.data;
  return `${d.animalName || 'Pacjent'} • ${d.ownerName || 'brak wlasciciela'}`;
}

function renderHistory(filter=''){
  const list = $('historyList');
  list.innerHTML = '';
  const q = filter.trim().toLowerCase();
  const filtered = records.filter(r => {
    const d = r.data;
    return [d.ownerName, d.animalName, d.species, d.breed, d.weight, d.procedureAsa, d.visitDate].join(' ').toLowerCase().includes(q);
  });
  if (!filtered.length) {
    list.innerHTML = '<div class="history-item"><small>Brak zapisanych kart.</small></div>';
    return;
  }
  filtered.forEach(r => {
    const d = r.data;
    const item = document.createElement('div');
    item.className = 'history-item' + (r.id === currentId ? ' active' : '');
    item.innerHTML = `
      <strong>${escapeHtml(recordLabel(r))}</strong>
      <small>${escapeHtml(d.visitDate || '')}</small>
      <div class="meta">
        ${d.species ? `<span class="tag">${escapeHtml(d.species)}/${escapeHtml(d.breed || '')}</span>` : ''}
        ${d.weight ? `<span class="tag">${escapeHtml(d.weight)} kg</span>` : ''}
        ${d.procedureAsa ? `<span class="tag">${escapeHtml(d.procedureAsa)}</span>` : ''}
      </div>
      <div class="history-actions">
        <button data-open="${r.id}" class="secondary">Otworz</button>
        <button data-delete="${r.id}" class="secondary">Usun</button>
      </div>`;
    list.appendChild(item);
  });

  list.querySelectorAll('[data-open]').forEach(btn => btn.addEventListener('click', () => openRecord(btn.dataset.open)));
  list.querySelectorAll('[data-delete]').forEach(btn => btn.addEventListener('click', () => deleteRecord(btn.dataset.delete)));
}

function openRecord(id){
  const rec = records.find(r => r.id === id);
  if (!rec) return;
  currentId = id;
  form = structuredClone(rec.data);
  applyFormToUI();
  renderHistory($('searchInput').value);
}

function saveCurrent(){
  if (!form.animalName && !form.ownerName) { alert('Uzupelnij przynajmniej imie zwierzecia lub wlasciciela.'); return; }
  const now = new Date().toISOString();
  if (currentId) {
    records = records.map(r => r.id === currentId ? { ...r, data: { ...form, updatedAt: now } } : r);
  } else {
    currentId = uid();
    records.unshift({ id: currentId, data: { ...form, createdAt: now, updatedAt: now } });
  }
  saveRecords();
  renderHistory($('searchInput').value);
  alert('Karta zapisana.');
}

function deleteRecord(id){
  if (!confirm('Usunac te karte?')) return;
  records = records.filter(r => r.id !== id);
  if (currentId === id) { currentId = null; form = defaultForm(); applyFormToUI(); }
  saveRecords();
  renderHistory($('searchInput').value);
}

function newRecord(copyPatient=false){
  const old = form;
  currentId = null;
  form = defaultForm();
  if (copyPatient) {
    Object.assign(form, {
      ownerName: old.ownerName,
      animalName: old.animalName,
      species: old.species,
      breed: old.breed,
      age: old.age,
      weight: old.weight,
    });
  }
  applyFormToUI();
  renderHistory($('searchInput').value);
}

function exportBackup(){
  const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `anestezjologia-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importBackup(file){
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!Array.isArray(parsed)) throw new Error();
      records = parsed;
      saveRecords();
      if (records[0]) openRecord(records[0].id);
      else { form = defaultForm(); applyFormToUI(); }
      renderHistory();
      alert('Kopia zapasowa zostala wczytana.');
    } catch {
      alert('Nie udalo sie wczytac kopii.');
    }
  };
  reader.readAsText(file);
}

function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

function unlock(){
  const pin = $('pinInput').value;
  if (pin === currentPin()) {
    $('lockScreen').classList.add('hidden');
    $('app').classList.remove('hidden');
  } else {
    alert('Nieprawidlowy PIN.');
  }
}

function applySettingsToUI(){
  $('requirePinToggle').checked = !!settings.requirePin;
  $('watermarkInput').value = settings.watermark || '';
  $('pinSettingsInput').value = currentPin();
  $('watermarkPreview').textContent = settings.watermark || '';
}

function init(){
  bindSimpleFields();
  renderDrugTables();
  renderVitalsTable();
  applySettingsToUI();

  $('unlockBtn').addEventListener('click', unlock);
  $('pinInput').addEventListener('keydown', e => { if (e.key === 'Enter') unlock(); });

  if (!settings.requirePin) {
    $('lockScreen').classList.add('hidden');
    $('app').classList.remove('hidden');
  }

  $('newRecordBtn').addEventListener('click', () => newRecord(false));
  $('samePatientBtn').addEventListener('click', () => newRecord(true));
  $('saveBtn').addEventListener('click', saveCurrent);
  $('printBtn').addEventListener('click', () => window.print());
  $('searchInput').addEventListener('input', e => renderHistory(e.target.value));
  $('exportBtn').addEventListener('click', exportBackup);
  $('importInput').addEventListener('change', e => e.target.files[0] && importBackup(e.target.files[0]));
  $('requirePinToggle').addEventListener('change', e => { settings.requirePin = e.target.checked; saveSettings(); });
  $('watermarkInput').addEventListener('input', e => { settings.watermark = e.target.value; saveSettings(); $('watermarkPreview').textContent = settings.watermark; });
  $('pinSettingsInput').addEventListener('change', e => { settings.pin = e.target.value || '123071'; saveSettings(); });

  if (records[0]) {
    openRecord(records[0].id);
  } else {
    form = defaultForm();
    applyFormToUI();
    renderHistory();
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
}

init();
