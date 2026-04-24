const APP_KEY = 'anestezjologia-techwet-v2';
const PIN_KEY = 'anestezjologia-pin-v1';
const DRAFT_KEY = 'anestezjologia-draft-v1';
const THEME_KEY = 'anestezjologia-theme-v1';
const CUSTOM_DRUGS_KEY = 'anestezjologia-custom-drugs-v1';

const AUTHOR = 'Tech.Wet Woroch Marcin';
const APP_NAME = 'Anestezjologia';
const defaultPin = '123071';

const DOG_BREEDS = [
  'Airedale Terrier',
  'Akita',
  'Alaskan Malamute',
  'American Staffordshire Terrier',
  'Australian Shepherd',
  'Basset Hound',
  'Beagle',
  'Berneński pies pasterski',
  'Bichon Frise',
  'Border Collie',
  'Boston Terrier',
  'Bokser',
  'Bull Terrier',
  'Bulldog angielski',
  'Bulldog francuski',
  'Cane Corso',
  'Cavalier King Charles Spaniel',
  'Chihuahua',
  'Chart polski',
  'Cocker Spaniel angielski',
  'Collie długowłosy',
  'Dalmatyńczyk',
  'Doberman',
  'Dog niemiecki',
  'Golden Retriever',
  'Gończy polski',
  'Greyhound',
  'Hiszpański pies wodny',
  'Hovawart',
  'Jack Russell Terrier',
  'Jamnik krótkowłosy',
  'Labrador Retriever',
  'Lagotto Romagnolo',
  'Landseer',
  'Maltańczyk',
  'Mastif tybetański',
  'Nova Scotia Duck Tolling Retriever',
  'Nowofundland',
  'Owczarek belgijski',
  'Owczarek niemiecki',
  'Owczarek podhalański',
  'Papillon',
  'Pekińczyk',
  'Pinczer miniaturowy',
  'Pointer angielski',
  'Pudel duży',
  'Pudel miniaturowy',
  'Pudel średni',
  'Pudel toy',
  'Rhodesian Ridgeback',
  'Rottweiler',
  'Samojed',
  'Schnauzer miniaturowy',
  'Schnauzer średni',
  'Schnauzer olbrzym',
  'Shar Pei',
  'Shiba',
  'Shih Tzu',
  'Springer Spaniel angielski',
  'Terier walijski',
  'Welsh Corgi Cardigan',
  'Welsh Corgi Pembroke',
  'West Highland White Terrier',
  'Whippet',
  'Wyżeł niemiecki krótkowłosy',
  'Wyżeł weimarski',
  'Yorkshire Terrier'
];

const CAT_BREEDS = [
  'Abyssinian',
  'American Curl Longhair',
  'American Curl Shorthair',
  'Balinese',
  'Bengal',
  'Birman',
  'British Longhair',
  'British Shorthair',
  'Burmese',
  'Burmilla',
  'Chartreux',
  'Cornish Rex',
  'Cymric',
  'Devon Rex',
  'Don Sphynx',
  'European',
  'Exotic',
  'German Rex',
  'Japanese Bobtail Longhair',
  'Japanese Bobtail Shorthair',
  'Korat',
  'Kurilean Bobtail Longhair',
  'Kurilean Bobtail Shorthair',
  'LaPerm Longhair',
  'LaPerm Shorthair',
  'Maine Coon',
  'Manx',
  'Norwegian Forest Cat',
  'Ocicat',
  'Oriental Longhair',
  'Oriental Shorthair',
  'Persian',
  'Peterbald',
  'Ragdoll',
  'Russian Blue',
  'Sacred Birman',
  'Selkirk Rex Longhair',
  'Selkirk Rex Shorthair',
  'Siamese',
  'Siberian',
  'Singapura',
  'Snowshoe',
  'Sokoke',
  'Somali',
  'Sphynx',
  'Thai',
  'Turkish Angora',
  'Turkish Van'
];

const DRUG_PRESETS = [
  { name: 'Ketamina', species: 'Oba', category: 'Analgezja', mgMl: 100, mgKg: '', mgKgOptions: [0.5, 1, 2], mlPerKg: '', route: 'IV', routeOptions: ['IV', 'IM'], note: 'Analgezja: wybierz 0.5 mg/kg, 1 mg/kg lub 2 mg/kg.' },
  { name: 'Propofol', species: 'Oba', category: 'Indukcja', mgMl: 10, mgKg: '', mgKgOptions: [1, 2], mlPerKg: '', route: 'IV', routeOptions: ['IV'], note: 'Indukcja: wybierz 1 mg/kg lub 2 mg/kg. Podawać powoli do efektu.' },
  { name: 'Alfaxalon', species: 'Oba', category: 'Indukcja', mgMl: 10, mgKg: 2, mgKgOptions: [], mlPerKg: '', route: 'IV', routeOptions: ['IV'], note: 'Dawkę dopasować do premedykacji.' },
  { name: 'Diazepam', species: 'Oba', category: 'Premedykacja / Indukcja', mgMl: 5, mgKg: 0.2, mgKgOptions: [], mlPerKg: '', route: 'IV', routeOptions: ['IV'], note: 'Benzodiazepina: może być stosowana w premedykacji i indukcji.' },
  { name: 'Midazolam', species: 'Oba', category: 'Premedykacja / Indukcja', mgMl: 5, mgKg: 0.2, mgKgOptions: [], mlPerKg: '', route: 'IV', routeOptions: ['IV', 'IM'], note: 'Benzodiazepina: może być stosowana w premedykacji i indukcji.' },
  { name: 'Butorfanol', species: 'Oba', category: 'Analgezja', mgMl: 10, mgKg: 0.2, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Dobra sedacja i analgezja trzewna.' },
  { name: 'Buprenorfina', species: 'Kot', category: 'Analgezja', mgMl: 0.3, mgKg: 0.02, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Często stosowana u kotów.' },
  { name: 'Metadon', species: 'Pies', category: 'Analgezja / Premedykacja', mgMl: 10, mgKg: '', mgKgOptions: [], mlPerKg: 0.02, route: 'IM', routeOptions: ['IM', 'IV'], note: 'Premedykacja pies: 0.02 ml/kg.' },
  { name: 'Metadon', species: 'Kot', category: 'Analgezja / Premedykacja', mgMl: 10, mgKg: '', mgKgOptions: [], mlPerKg: 0.02, route: 'IM', routeOptions: ['IM', 'IV'], note: 'Premedykacja kot: 0.1 ml / 5 kg.' },
  { name: 'Morfina', species: 'Pies', category: 'Analgezja', mgMl: 10, mgKg: 0.3, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Możliwa sedacja i wymioty.' },
  { name: 'Dexmedetomidyna', species: 'Oba', category: 'Premedykacja', mgMl: 0.5, mgKg: 0.005, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Małe dawki, ostrożnie u pacjentów ryzyka.' },
  { name: 'Medetomidyna', species: 'Pies', category: 'Premedykacja', mgMl: 1, mgKg: '', mgKgOptions: [], mlPerKg: 0.01, route: 'IM', routeOptions: ['IM', 'IV'], note: 'Premedykacja pies: 0.01 ml/kg.' },
  { name: 'Medetomidyna', species: 'Kot', category: 'Premedykacja', mgMl: 1, mgKg: '', mgKgOptions: [], mlPerKg: 0.04, route: 'IM', routeOptions: ['IM', 'IV'], note: 'Premedykacja kot: 0.2 ml / 5 kg.' },
  { name: 'Acepromazyna', species: 'Pies', category: 'Premedykacja', mgMl: 2, mgKg: 0.02, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Ostrożnie przy hipotensji.' },
  { name: 'Atropina', species: 'Oba', category: 'Premedykacja', mgMl: 0.5, mgKg: 0.02, mgKgOptions: [], mlPerKg: '', route: 'SC', routeOptions: ['SC', 'IM', 'IV'], note: 'Według wskazań klinicznych.' },
  { name: 'Glikopirolat', species: 'Oba', category: 'Premedykacja', mgMl: 0.2, mgKg: 0.01, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Alternatywa dla atropiny.' },
  { name: 'Meloksykam', species: 'Oba', category: 'NLPZ', mgMl: 5, mgKg: 0.2, mgKgOptions: [], mlPerKg: '', route: 'SC', routeOptions: ['SC', 'IV'], note: 'Sprawdzić nawodnienie i nerki.' },
  { name: 'Metacam', species: 'Oba', category: 'NLPZ', mgMl: 20, mgKg: '', mgKgOptions: [], mlPerKg: 0.04, route: 'SC', routeOptions: ['SC', 'IV'], note: 'Schemat: 0.4 ml / 10 kg' },
  { name: 'Biovetalgin', species: 'Oba', category: 'Analgezja', mgMl: 500, mgKg: '', mgKgOptions: [], mlPerKg: 0.1, route: 'IV', routeOptions: ['IV'], note: 'Schemat: 1 ml / 10 kg' },
  { name: 'Biofazolin', species: 'Oba', category: 'Antybiotyk', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.2, route: 'IV', routeOptions: ['IV'], note: 'Schemat: 1 ml / 5 kg' },
  { name: 'Cefazolina', species: 'Oba', category: 'Antybiotyk', mgMl: 100, mgKg: 22, mgKgOptions: [], mlPerKg: '', route: 'IV', routeOptions: ['IV'], note: 'Często okołooperacyjnie.' },
  { name: 'Lidokaina', species: 'Pies', category: 'Miejscowe / CRI', mgMl: 20, mgKg: 2, mgKgOptions: [], mlPerKg: '', route: 'IV', routeOptions: ['IV', 'Miejscowo'], note: 'Do bolusa lub CRI według schematu.' },
  { name: 'Bupiwakaina', species: 'Oba', category: 'Miejscowe', mgMl: 5, mgKg: 2, mgKgOptions: [], mlPerKg: '', route: 'Miejscowo', routeOptions: ['Miejscowo'], note: 'Blokady miejscowe.' },
  { name: 'Maropitant', species: 'Oba', category: 'Przeciwwymiotny', mgMl: 10, mgKg: 1, mgKgOptions: [], mlPerKg: '', route: 'SC', routeOptions: ['SC'], note: 'Przedmedykacja u pacjentów z ryzykiem wymiotów.' }
];

const PROTOCOL_PRESETS = [
  { id: 'medetomidine-methadone-surgery', name: 'Medetomidyna + Metadon', short: 'Zabieg chirurgiczny', description: 'Protokół chirurgiczny dla psa i kota według dawek objętościowych ustawionych w kalkulatorze.', species: 'Oba', drugs: [{ name: 'Medetomidyna', route: 'IM' }, { name: 'Metadon', route: 'IM' }] }
];

const vitalsTemplate = () =>
  [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((t) => ({
    time: String(t),
    hr: '',
    spo2: '',
    etco2: '',
    temp: '',
    pressure: '',
    mac: ''
  }));

const drugRows = (n = 6) =>
  Array.from({ length: n }, () => ({
    name: '',
    dose: '',
    route: '',
    notes: ''
  }));

const intraRows = (n = 5) =>
  Array.from({ length: n }, () => ({
    name: '',
    dose: '',
    hour: '',
    notes: ''
  }));

const blankForm = () => ({
  clinicName: AUTHOR,
  authorMark: `Autorstwo: ${AUTHOR}`,
  visitDate: new Date().toISOString().slice(0, 10),
  ownerName: '',
  animalName: '',
  species: '',
  breed: '',
  age: '',
  weight: '',
  historyChronic: '',
  historyMedsAllergies: '',
  historyPrevAnesthesia: '',
  generalState: 'Swiadomy',
  temperament: {
    wesoly: false,
    agresywny: false,
    cichy: false,
    spokojny: false,
    niespokojny: false
  },
  procedureAsa: '',
  planPremed: '',
  planInduction: '',
  planMaintenance: '',
  planAnalgesia: '',
  surgeryStart: '',
  surgeryEnd: '',
  surgeon: '',
  assistant: '',
  drugTable: drugRows(),
  intraopDrugs: intraRows(),
  vitals: vitalsTemplate(),
  createdAt: '',
  updatedAt: ''
});

let state = {
  records: loadRecords(),
  selectedId: null,
  form: loadDraft() || blankForm(),
  query: '',
  unlocked: false,
  currentPage: 'home',
  theme: loadTheme(),
  doseTab: 'calculator',
  selectedProtocolId: '',
  doseSpecies: '',
  dosePurpose: 'Premedykacja',
  doseWeight: '',
  doseDrugName: '',
  doseMgKg: '',
  doseMgMl: '',
  doseMlPerKg: '',
  dosePresetNote: '',
  doseRoute: '',
  doseMgKgChoice: '',
  librarySearch: '',
  lastVitalsReminderAt: 0
};

function loadRecords() {
  try {
    return JSON.parse(localStorage.getItem(APP_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveRecords() {
  localStorage.setItem(APP_KEY, JSON.stringify(state.records));
}

function loadDraft() {
  try {
    return JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null');
  } catch {
    return null;
  }
}

function saveDraft() {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(state.form));
}

function clearDraft() {
  localStorage.removeItem(DRAFT_KEY);
}

function getPin() {
  return localStorage.getItem(PIN_KEY) || defaultPin;
}

function setPin(v) {
  localStorage.setItem(PIN_KEY, v);
}

function loadTheme() {
  return localStorage.getItem(THEME_KEY) || 'light';
}

function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

function loadCustomDrugs() {
  try {
    return JSON.parse(localStorage.getItem(CUSTOM_DRUGS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveCustomDrugs(drugs) {
  localStorage.setItem(CUSTOM_DRUGS_KEY, JSON.stringify(drugs));
}

function getAllDrugPresets() {
  return [...DRUG_PRESETS, ...loadCustomDrugs()];
}

function addCustomDrugFromLibrary() {
  const name = (document.getElementById('libraryDrugName')?.value || '').trim();
  const species = document.getElementById('libraryDrugSpecies')?.value || 'Oba';
  const category = document.getElementById('libraryDrugCategory')?.value || 'Premedykacja';
  const mgMl = document.getElementById('libraryDrugMgMl')?.value || '';
  const mgKg = document.getElementById('libraryDrugMgKg')?.value || '';
  const mlPerKg = document.getElementById('libraryDrugMlPerKg')?.value || '';
  const route = (document.getElementById('libraryDrugRoute')?.value || '').trim();
  const note = (document.getElementById('libraryDrugNote')?.value || '').trim();

  if (!name) {
    alert('Wpisz nazwę leku.');
    return;
  }

  const drugs = loadCustomDrugs();
  drugs.push({
    name,
    species,
    category,
    mgMl: mgMl === '' ? '' : Number(mgMl),
    mgKg: mgKg === '' ? '' : Number(mgKg),
    mgKgOptions: [],
    mlPerKg: mlPerKg === '' ? '' : Number(mlPerKg),
    route,
    routeOptions: route ? [route] : [],
    note: note || 'Lek dodany w bibliotece.'
  });
  saveCustomDrugs(drugs);
  alert('Dodano lek do biblioteki.');
  render();
}

function useLibraryDrug(name, species) {
  const preset =
    getAllDrugPresets().find((drug) => drug.name === name && drug.species === species) ||
    getAllDrugPresets().find((drug) => drug.name === name);

  if (!preset) return;

  state.doseTab = 'calculator';
  state.doseSpecies = preset.species === 'Oba' ? state.doseSpecies : preset.species;
  applyPresetToDoseFields(preset);
  render();
}

function applyTheme() {
  document.body.setAttribute('data-theme', state.theme);
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

if (!loadDraft() && state.records[0]) {
  state.selectedId = state.records[0].id;
  state.form = JSON.parse(JSON.stringify(state.records[0].data));
}


function getDosePurposeLabel() {
  return state.dosePurpose || 'Wszystkie';
}

function drugMatchesDosePurpose(drug, purpose = state.dosePurpose) {
  if (!purpose || purpose === 'Wszystkie') return true;
  const category = (drug.category || '').toLowerCase();
  const target = purpose.toLowerCase();

  if (category.includes(target)) return true;

  if (purpose === 'Analgezja') {
    return ['nlpz', 'miejscowe', 'cri'].some((word) => category.includes(word));
  }

  return false;
}

function getFilteredDosePresets() {
  const species = state.doseSpecies || '';
  return getAllDrugPresets().filter((drug) => {
    const speciesOk = !species || drug.species === 'Oba' || drug.species === species;
    return speciesOk && drugMatchesDosePurpose(drug);
  });
}

function getPresetByNameAndSpecies(name, species) {
  if (!name) return null;

  const exact = getAllDrugPresets().find(
    (drug) => drug.name === name && (drug.species === 'Oba' || drug.species === species)
  );

  if (exact) return exact;

  return getAllDrugPresets().find((drug) => drug.name === name) || null;
}

function getSelectedDrugPreset() {
  const name = state.doseDrugName;
  if (!name) return null;
  const fromCurrentGroup = getFilteredDosePresets().find((drug) => drug.name === name);
  return fromCurrentGroup || getPresetByNameAndSpecies(name, state.doseSpecies || '');
}

function getSelectedProtocol() {
  return PROTOCOL_PRESETS.find((p) => p.id === state.selectedProtocolId) || null;
}

function calculateDoseValues(weight, preset) {
  const w = Number(weight || 0);
  const mgKg = Number(preset?.mgKg || 0);
  const mgMl = Number(preset?.mgMl || 0);
  const mlPerKg = Number(preset?.mlPerKg || 0);

  let totalMg = 0;
  let totalMl = 0;

  if (w > 0 && mlPerKg > 0) {
    totalMl = w * mlPerKg;
    totalMg = mgMl > 0 ? totalMl * mgMl : 0;
  } else if (w > 0 && mgKg > 0) {
    totalMg = w * mgKg;
    totalMl = mgMl > 0 ? totalMg / mgMl : 0;
  }

  return { totalMg, totalMl };
}

function formatDoseNumber(value, decimals = 2) {
  const n = Number(value || 0);
  if (!Number.isFinite(n)) return '0';
  return n.toFixed(decimals).replace(/\.?0+$/, '');
}

function getDoseCalculation() {
  const weight = Number(state.doseWeight || 0);
  const mgKg = Number(state.doseMgKg || 0);
  const mgMl = Number(state.doseMgMl || 0);
  const mlPerKg = Number(state.doseMlPerKg || 0);
  const warnings = [];
  let totalMg = 0;
  let totalMl = 0;
  let method = 'Brak danych';
  let formula = 'Wpisz masę ciała oraz dawkę.';

  if (weight <= 0) warnings.push('Wpisz masę ciała pacjenta.');
  if (mgKg > 0 && mlPerKg > 0) warnings.push('Uzupełniono jednocześnie mg/kg i ml/kg — kalkulator używa schematu ml/kg.');

  if (weight > 0 && mlPerKg > 0) {
    totalMl = weight * mlPerKg;
    totalMg = mgMl > 0 ? totalMl * mgMl : 0;
    method = 'Schemat objętościowy';
    formula = `${formatDoseNumber(weight)} kg × ${formatDoseNumber(mlPerKg, 3)} ml/kg = ${formatDoseNumber(totalMl)} ml`;
    if (mgMl > 0) formula += `; ${formatDoseNumber(totalMl)} ml × ${formatDoseNumber(mgMl)} mg/ml = ${formatDoseNumber(totalMg)} mg`;
    else warnings.push('Brak stężenia mg/ml — pokazuję objętość, bez przeliczenia na mg.');
  } else if (weight > 0 && mgKg > 0) {
    totalMg = weight * mgKg;
    totalMl = mgMl > 0 ? totalMg / mgMl : 0;
    method = 'Dawka mg/kg';
    formula = `${formatDoseNumber(weight)} kg × ${formatDoseNumber(mgKg, 3)} mg/kg = ${formatDoseNumber(totalMg)} mg`;
    if (mgMl > 0) formula += `; ${formatDoseNumber(totalMg)} mg ÷ ${formatDoseNumber(mgMl)} mg/ml = ${formatDoseNumber(totalMl)} ml`;
    else warnings.push('Brak stężenia mg/ml — pokazuję dawkę w mg, bez przeliczenia na ml.');
  } else if (weight > 0) {
    warnings.push('Uzupełnij dawkę mg/kg albo schemat ml/kg.');
  }

  return { weight, mgKg, mgMl, mlPerKg, totalMg, totalMl, method, formula, warnings, hasResult: totalMg > 0 || totalMl > 0 };
}

function clearDoseCalculator() {
  state.doseDrugName = '';
  state.doseMgKg = '';
  state.doseMgMl = '';
  state.doseMlPerKg = '';
  state.dosePresetNote = '';
  state.doseRoute = '';
  state.doseMgKgChoice = '';
  render();
}

function usePatientWeightInDoseCalculator() {
  const weight = state.form.weight || '';
  if (!weight) {
    alert('W aktualnej karcie pacjenta nie ma wpisanej masy ciała.');
    return;
  }
  state.doseWeight = weight;
  render();
}

function buildProtocolPreview(protocol, species, weight) {
  if (!protocol || !species || !weight) return [];

  return protocol.drugs
    .map((item) => {
      const preset = getPresetByNameAndSpecies(item.name, species);
      if (!preset) return null;

      const route = item.route || preset.route || '';
      const { totalMg, totalMl } = calculateDoseValues(weight, preset);

      return {
        name: preset.name,
        route,
        mgKg: preset.mgKg !== '' ? preset.mgKg : '',
        totalMg,
        totalMl,
        note: preset.note || ''
      };
    })
    .filter(Boolean);
}

function addProtocolToPlan() {
  const protocol = getSelectedProtocol();
  const species = state.doseSpecies;
  const weight = Number(state.doseWeight || 0);

  if (!protocol) {
    alert('Najpierw wybierz protokół.');
    return;
  }

  if (!species) {
    alert('Najpierw wybierz gatunek.');
    return;
  }

  if (weight <= 0) {
    alert('Najpierw wpisz masę ciała.');
    return;
  }

  const preview = buildProtocolPreview(protocol, species, weight);

  if (!preview.length) {
    alert('Nie udało się wyliczyć protokołu.');
    return;
  }

  preview.forEach((item) => {
    const newRow = {
      name: item.name,
      dose: `${item.totalMg.toFixed(2)} mg / ${item.totalMl.toFixed(2)} ml`,
      route: item.route || '',
      notes: item.note || ''
    };

    const emptyRow = state.form.drugTable.find(
      (row) => !row.name && !row.dose && !row.route && !row.notes
    );

    if (emptyRow) {
      emptyRow.name = newRow.name;
      emptyRow.dose = newRow.dose;
      emptyRow.route = newRow.route;
      emptyRow.notes = newRow.notes;
    } else {
      state.form.drugTable.push(newRow);
    }
  });

  const protocolText = `${protocol.name}: ${preview
    .map((item) => `${item.name} ${item.mgKg !== '' ? item.mgKg + ' mg/kg' : ''} ${item.route}`.trim())
    .join(', ')}`;

  state.form.planPremed = state.form.planPremed
    ? `${state.form.planPremed}\n${protocolText}`
    : protocolText;

  saveDraft();
  alert('Dodano protokół do planu.');
}

function getBreedOptions() {
  if (state.form.species === 'Pies') return DOG_BREEDS;
  if (state.form.species === 'Kot') return CAT_BREEDS;
  return [];
}

function getBreedSuggestions() {
  const breedValue = (state.form.breed || '').trim().toLowerCase();
  const options = getBreedOptions();

  if (!state.form.species) return [];
  if (!breedValue) return options.slice(0, 8);

  return options.filter((breed) => breed.toLowerCase().includes(breedValue)).slice(0, 8);
}

function renderBreedSuggestionsMarkup() {
  if (!state.form.species) {
    return `<div id="breedSuggestions" class="breed-suggestions"></div>`;
  }

  const all = ['Mieszaniec', ...getBreedSuggestions()];

  return `
    <div id="breedSuggestions" class="breed-suggestions">
      ${all
        .map(
          (breed) => `
        <button
          type="button"
          class="breed-suggestion-item ${breed === 'Mieszaniec' ? 'mixed' : ''}"
          data-breed-pick="${escapeHtml(breed)}"
        >
          ${escapeHtml(breed)}
        </button>
      `
        )
        .join('')}
    </div>
  `;
}

function updateBreedSuggestions() {
  const box = document.getElementById('breedSuggestions');
  if (!box) return;

  if (!state.form.species) {
    box.innerHTML = '';
    return;
  }

  const all = ['Mieszaniec', ...getBreedSuggestions()];

  box.innerHTML = all
    .map(
      (breed) => `
    <button
      type="button"
      class="breed-suggestion-item ${breed === 'Mieszaniec' ? 'mixed' : ''}"
      data-breed-pick="${escapeHtml(breed)}"
    >
      ${escapeHtml(breed)}
    </button>
  `
    )
    .join('');

  bindBreedSuggestionButtons();
}

function bindBreedSuggestionButtons() {
  document.querySelectorAll('[data-breed-pick]').forEach((el) => {
    el.onclick = () => {
      state.form.breed = el.dataset.breedPick;
      saveDraft();

      const breedInput = document.getElementById('breedInput');
      if (breedInput) breedInput.value = state.form.breed;

      updateBreedSuggestions();
    };
  });
}

function getDrugSuggestions() {
  const value = (state.doseDrugName || '').trim().toLowerCase();
  const species = state.doseSpecies || '';

  let filtered = getFilteredDosePresets();

  if (species) {
    filtered = filtered.filter((drug) => drug.species === 'Oba' || drug.species === species);
  }

  if (!value) {
    const unique = [];
    const seen = new Set();

    filtered.forEach((drug) => {
      const key = `${drug.name}-${drug.species}`;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(drug);
      }
    });

    return unique.slice(0, 8);
  }

  const found = filtered.filter((drug) =>
    [drug.name, drug.category, drug.species, drug.note].join(' ').toLowerCase().includes(value)
  );

  const unique = [];
  const seen = new Set();

  found.forEach((drug) => {
    const key = `${drug.name}-${drug.species}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(drug);
    }
  });

  return unique.slice(0, 8);
}

function renderDrugSuggestionsMarkup() {
  const suggestions = getDrugSuggestions();

  return `
    <div id="drugSuggestions" class="breed-suggestions">
      ${suggestions
        .map(
          (drug) => `
        <button
          type="button"
          class="breed-suggestion-item"
          data-drug-pick="${escapeHtml(drug.name)}"
        >
          <strong>${escapeHtml(drug.name)}</strong><br>
          <span class="small">${escapeHtml(drug.species)} • ${escapeHtml(drug.category)} • ${escapeHtml(drug.route || '')}</span>
        </button>
      `
        )
        .join('')}
    </div>
  `;
}

function updateDrugSuggestions() {
  const box = document.getElementById('drugSuggestions');
  if (!box) return;

  const suggestions = getDrugSuggestions();

  box.innerHTML = suggestions
    .map(
      (drug) => `
    <button
      type="button"
      class="breed-suggestion-item"
      data-drug-pick="${escapeHtml(drug.name)}"
    >
      <strong>${escapeHtml(drug.name)}</strong><br>
      <span class="small">${escapeHtml(drug.species)} • ${escapeHtml(drug.category)} • ${escapeHtml(drug.route || '')}</span>
    </button>
  `
    )
    .join('');

  bindDrugSuggestionButtons();
}

function applyPresetToDoseFields(preset) {
  state.doseDrugName = preset.name;
  state.doseMgMl = preset.mgMl !== '' ? String(preset.mgMl) : '';
  state.doseMlPerKg = preset.mlPerKg !== '' ? String(preset.mlPerKg) : '';
  state.dosePresetNote = preset.note || '';
  state.doseRoute = preset.route || '';

  if (Array.isArray(preset.mgKgOptions) && preset.mgKgOptions.length) {
    state.doseMgKgChoice = '';
    state.doseMgKg = '';
  } else {
    state.doseMgKgChoice = '';
    state.doseMgKg = preset.mgKg !== '' ? String(preset.mgKg) : '';
  }
}

function bindDrugSuggestionButtons() {
  document.querySelectorAll('[data-drug-pick]').forEach((el) => {
    el.onclick = () => {
      const pickedName = el.dataset.drugPick;
      const preset =
        getDrugSuggestions().find((drug) => drug.name === pickedName) ||
        getPresetByNameAndSpecies(pickedName, state.doseSpecies || '');

      if (!preset) return;

      applyPresetToDoseFields(preset);
      render();
    };
  });
}

function renderDoseOptionMarkup() {
  const preset = getSelectedDrugPreset();
  if (!preset || !Array.isArray(preset.mgKgOptions) || !preset.mgKgOptions.length) {
    return '';
  }

  return `
    <div>
      <label class="label">Szybki wybór dawki (mg/kg)</label>
      <select id="doseMgKgChoice">
        <option value="">Wybierz dawkę</option>
        ${preset.mgKgOptions
          .map(
            (value) => `
          <option value="${value}" ${String(value) === String(state.doseMgKgChoice) ? 'selected' : ''}>
            ${value} mg/kg
          </option>
        `
          )
          .join('')}
      </select>
    </div>
  `;
}

function renderDoseRouteMarkup() {
  const preset = getSelectedDrugPreset();

  if (!preset) {
    return `
    <div>
      <label class="label">Droga podania</label>
      <input id="doseRouteInput" value="${escapeHtml(state.doseRoute || '')}" placeholder="Np. IV, IM, SC, miejscowo">
    </div>`;
  }

  const routes = Array.isArray(preset.routeOptions) ? preset.routeOptions : [];

  if (!routes.length) {
    return `
    <div>
      <label class="label">Droga podania</label>
      <input id="doseRouteInput" value="${escapeHtml(state.doseRoute || '')}" placeholder="Np. IV, IM, SC, miejscowo">
    </div>`;
  }

  return `
    <div>
      <label class="label">Droga podania</label>
      <select id="doseRouteSelect">
        ${routes
          .map(
            (route) => `
          <option value="${escapeHtml(route)}" ${route === state.doseRoute ? 'selected' : ''}>
            ${escapeHtml(route)}
          </option>
        `
          )
          .join('')}
      </select>
    </div>
  `;
}


function renderSelectedDrugInfoMarkup() {
  const preset = getSelectedDrugPreset();
  if (!preset) {
    return `<div class="small">Wpisz lek ręcznie albo wybierz z podpowiedzi. Przy leku ręcznym wpisz dawkę, stężenie i drogę podania samodzielnie.</div>`;
  }

  const doseText = preset.mlPerKg !== ''
    ? `${preset.mlPerKg} ml/kg`
    : preset.mgKg !== ''
      ? `${preset.mgKg} mg/kg`
      : Array.isArray(preset.mgKgOptions) && preset.mgKgOptions.length
        ? preset.mgKgOptions.map((v) => `${v} mg/kg`).join(' / ')
        : 'uzupełnij ręcznie';

  return `
    <div class="small">
      <strong>${escapeHtml(preset.name)}</strong> • ${escapeHtml(preset.species)} • ${escapeHtml(preset.category)}<br>
      Dawka: ${escapeHtml(String(doseText))} • Stężenie: ${preset.mgMl !== '' ? escapeHtml(String(preset.mgMl)) + ' mg/ml' : 'brak'}<br>
      ${escapeHtml(preset.note || '')}
    </div>`;
}

function renderProtocolCardsMarkup() {
  const species = state.doseSpecies || '';
  const available = PROTOCOL_PRESETS.filter(
    (p) => p.species === 'Oba' || p.species === species || !species
  );

  return `
    <div class="menu-grid">
      ${available
        .map(
          (protocol) => `
        <button
          type="button"
          class="menu-card ${state.selectedProtocolId === protocol.id ? 'record active' : ''}"
          data-protocol-pick="${protocol.id}"
        >
          <div class="menu-title">${escapeHtml(protocol.name)}</div>
          <div class="menu-sub">${escapeHtml(protocol.short)}</div>
          <div class="small" style="margin-top:8px;">${escapeHtml(protocol.description)}</div>
        </button>
      `
        )
        .join('')}
    </div>
  `;
}

function renderProtocolPreviewMarkup() {
  const protocol = getSelectedProtocol();
  const species = state.doseSpecies;
  const weight = Number(state.doseWeight || 0);

  if (!protocol) {
    return `<div class="small">Wybierz protokół, aby zobaczyć podgląd.</div>`;
  }

  if (!species || weight <= 0) {
    return `<div class="small">Aby wyliczyć protokół, wybierz gatunek i wpisz masę ciała.</div>`;
  }

  const preview = buildProtocolPreview(protocol, species, weight);

  if (!preview.length) {
    return `<div class="small">Brak danych do wyliczenia tego protokołu.</div>`;
  }

  return `
    <div class="card inner-card">
      <div class="card-body">
        <h3>Podgląd protokołu</h3>
        <div class="results-grid">
          ${preview
            .map(
              (item) => `
            <div class="result-box">
              <div class="result-label">${escapeHtml(item.name)} • ${escapeHtml(item.route)}</div>
              <div class="small">Dawka: ${item.mgKg !== '' ? escapeHtml(String(item.mgKg)) + ' mg/kg' : 'wg schematu'}</div>
              <div class="small">Wynik: ${item.totalMg.toFixed(2)} mg / ${item.totalMl.toFixed(2)} ml</div>
            </div>
          `
            )
            .join('')}
        </div>

        <div class="space-12"></div>

        <button class="btn primary-btn full-btn" id="addProtocolToPlanBtn">
          Dodaj protokół do planu
        </button>
      </div>
    </div>
  `;
}

function updateDoseCalculator() {
  const calc = getDoseCalculation();
  const mgBox = document.getElementById('doseTotalMg');
  const mlBox = document.getElementById('doseTotalMl');
  const noteBox = document.getElementById('dosePresetNote');
  const formulaBox = document.getElementById('doseFormula');
  const warningsBox = document.getElementById('doseWarnings');

  if (mgBox) mgBox.textContent = `${formatDoseNumber(calc.totalMg)} mg`;
  if (mlBox) mlBox.textContent = `${formatDoseNumber(calc.totalMl)} ml`;
  if (noteBox) noteBox.textContent = state.dosePresetNote || 'Brak dodatkowej uwagi.';
  if (formulaBox) formulaBox.textContent = calc.formula;
  if (warningsBox) {
    warningsBox.innerHTML = calc.warnings.length
      ? calc.warnings.map((warning) => `<div class="vitals-alert-item warning-text">${escapeHtml(warning)}</div>`).join('')
      : '<div class="small">Brak ostrzeżeń.</div>';
  }
}

function render() {
  try {
    applyTheme();

    const app = document.getElementById('app');
    if (!app) {
      document.body.innerHTML =
        '<pre style="padding:16px;color:red">Brak elementu #app w index.html</pre>';
      return;
    }

    if (!state.unlocked) {
      app.innerHTML = loginView();
    } else if (state.currentPage === 'home') {
      app.innerHTML = homeView();
    } else if (state.currentPage === 'plan') {
      app.innerHTML = mainView();
    } else if (state.currentPage === 'dawki') {
      app.innerHTML = dosesView();
    } else if (state.currentPage === 'ustawienia') {
      app.innerHTML = settingsView();
    } else if (state.currentPage === 'podziekowania') {
      app.innerHTML = thanksView();
    } else if (state.currentPage === 'printPreview') {
      app.innerHTML = printPreviewView();
    }

    bind();
  } catch (err) {
    const msg = err && err.stack ? err.stack : String(err);
    document.body.innerHTML =
      '<pre style="white-space:pre-wrap;padding:16px;background:#fff;color:#b00020;font:14px monospace">' +
      escapeHtml(msg) +
      '</pre>';
  }
}

function loginView() {
  return `
    <div class="login">
      <div class="card login-card">
        <div class="card-body">
          <div class="header login-header">
            <div class="app-icon-wrap">
              <img src="icons/icon-192.png" alt="Ikona aplikacji" class="app-icon">
            </div>
            <h1>${APP_NAME}</h1>
            <div class="sub">${AUTHOR}</div>
          </div>

          <label class="label">PIN</label>
          <input id="pinInput" type="password" inputmode="numeric" placeholder="Wpisz PIN">

          <button class="btn primary-btn" id="unlockBtn">Otworz aplikacje</button>

          <div class="footer-note center">Prywatna wersja mobilna</div>
        </div>
      </div>
    </div>
  `;
}

function homeView() {
  return `
    <div class="app">
      <div class="topbar">
        <div>
          <div class="topbar-title">${APP_NAME}</div>
          <div class="topbar-sub">Wybierz moduł</div>
        </div>
        <div class="theme-pill">${state.theme === 'dark' ? 'Tryb ciemny' : 'Tryb jasny'}</div>
      </div>

      <div class="hero-card">
        <div class="hero-title">Panel główny</div>
        <div class="hero-sub">Wybierz, co chcesz zrobić w aplikacji</div>
      </div>

      <div class="menu-grid">
        <button class="menu-card menu-card-plan" data-nav="plan">
          <div class="menu-icon">🩺</div>
          <div class="menu-title">1. Plan anestezjologiczny</div>
          <div class="menu-sub">Karty pacjentów, przebieg zabiegu, parametry i zapis danych</div>
        </button>

        <button class="menu-card menu-card-dose" data-nav="dawki">
          <div class="menu-icon">💉</div>
          <div class="menu-title">2. Kalkulator zabiegowy</div>
          <div class="menu-sub">Premedykacja, indukcja, analgezja, protokoły i biblioteka leków</div>
        </button>

        <button class="menu-card menu-card-settings" data-nav="ustawienia">
          <div class="menu-icon">⚙️</div>
          <div class="menu-title">3. Ustawienia</div>
          <div class="menu-sub">PIN aplikacji, motyw i przyszłe opcje personalizacji</div>
        </button>

        <button class="menu-card menu-card-thanks" data-nav="podziekowania">
          <div class="menu-icon">🙏</div>
          <div class="menu-title">4. Szczególne podziękowania</div>
          <div class="menu-sub">Autor aplikacji i podziękowania</div>
        </button>
      </div>
    </div>
  `;
}


function renderDrugLibraryMarkup() {
  const q = (state.librarySearch || '').trim().toLowerCase();
  const all = getAllDrugPresets().filter((drug) => {
    if (!q) return true;
    return [drug.name, drug.species, drug.category, drug.note, drug.route].join(' ').toLowerCase().includes(q);
  });

  return `
    <div class="card inner-card">
      <div class="card-body">
        <h3>Biblioteka leków</h3>
        <div class="small">Tu dodasz własne preparaty i użyjesz ich potem w kalkulatorze zabiegowym.</div>

        <div class="space-12"></div>

        <input id="librarySearch" placeholder="Szukaj leku..." value="${escapeHtml(state.librarySearch || '')}">

        <div class="space-16"></div>

        <div class="grid g2">
          <div>
            <label class="label">Nazwa leku</label>
            <input id="libraryDrugName" placeholder="Np. Ketamina">
          </div>
          <div>
            <label class="label">Gatunek</label>
            <select id="libraryDrugSpecies">
              <option value="Oba">Oba</option>
              <option value="Pies">Pies</option>
              <option value="Kot">Kot</option>
            </select>
          </div>
          <div>
            <label class="label">Grupa</label>
            <select id="libraryDrugCategory">
              <option>Premedykacja</option>
              <option>Indukcja</option>
              <option>Analgezja</option>
              <option>Antybiotyk</option>
              <option>NLPZ</option>
              <option>Miejscowe / CRI</option>
            </select>
          </div>
          <div>
            <label class="label">Droga podania</label>
            <input id="libraryDrugRoute" placeholder="Np. IM, IV, SC">
          </div>
          <div>
            <label class="label">Stężenie (mg/ml)</label>
            <input id="libraryDrugMgMl" type="number" inputmode="decimal" step="0.001">
          </div>
          <div>
            <label class="label">Dawka (mg/kg)</label>
            <input id="libraryDrugMgKg" type="number" inputmode="decimal" step="0.001">
          </div>
          <div>
            <label class="label">Schemat objętościowy (ml/kg)</label>
            <input id="libraryDrugMlPerKg" type="number" inputmode="decimal" step="0.001">
          </div>
          <div>
            <label class="label">Uwagi</label>
            <input id="libraryDrugNote" placeholder="Np. podawać powoli">
          </div>
        </div>

        <div class="space-12"></div>
        <button class="btn primary-btn full-btn" id="addLibraryDrugBtn">Dodaj lek do biblioteki</button>
      </div>
    </div>

    <div class="space-16"></div>

    <div class="card inner-card">
      <div class="card-body">
        <h3>Lista leków</h3>
        <div class="menu-grid">
          ${all.map((drug) => `
            <button type="button" class="menu-card" data-library-use="${escapeHtml(drug.name)}" data-library-species="${escapeHtml(drug.species)}">
              <div class="menu-title">${escapeHtml(drug.name)}</div>
              <div class="menu-sub">${escapeHtml(drug.species)} • ${escapeHtml(drug.category)} • ${escapeHtml(drug.route || '')}</div>
              <div class="small" style="margin-top:8px;">
                ${drug.mlPerKg !== '' ? escapeHtml(String(drug.mlPerKg)) + ' ml/kg' : drug.mgKg !== '' ? escapeHtml(String(drug.mgKg)) + ' mg/kg' : 'dawka ręczna'}
                ${drug.mgMl !== '' ? ' • ' + escapeHtml(String(drug.mgMl)) + ' mg/ml' : ''}
              </div>
              <div class="small" style="margin-top:6px;">Kliknij, aby użyć w kalkulatorze.</div>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function dosesView() {
  const calc = getDoseCalculation();
  const patientWeight = state.form.weight || '';

  return `
    <div class="app">
      <div class="toolbar">
        <button class="btn secondary" id="backHomeBtn">Powrót do menu</button>
      </div>

      <div class="card">
        <div class="card-body">
          <h3>Kalkulator zabiegowy</h3>
          <div class="small">Oblicz dawkę, wybierz etap zabiegu albo skorzystaj z biblioteki leków.</div>

          <div class="toolbar dose-toolbar">
            <button class="btn ${state.doseTab === 'calculator' ? 'primary-btn' : 'secondary'}" id="doseTabCalculator">Kalkulator</button>
            <button class="btn ${state.doseTab === 'protocols' ? 'primary-btn' : 'secondary'}" id="doseTabProtocols">Protokoły</button>
            <button class="btn ${state.doseTab === 'library' ? 'primary-btn' : 'secondary'}" id="doseTabLibrary">Biblioteka leków</button>
            <button class="btn secondary" id="clearDoseBtn" type="button">Wyczyść</button>
          </div>

          ${state.doseTab !== 'library' ? `
            <div class="grid g2">
              <div>
                <label class="label">Gatunek</label>
                <select id="doseSpecies">
                  <option value="">Wybierz</option>
                  <option value="Pies" ${state.doseSpecies === 'Pies' ? 'selected' : ''}>Pies</option>
                  <option value="Kot" ${state.doseSpecies === 'Kot' ? 'selected' : ''}>Kot</option>
                </select>
              </div>

              <div>
                <label class="label">Masa ciała (kg)</label>
                <div class="input-with-button">
                  <input id="doseWeight" type="number" inputmode="decimal" step="0.01" value="${escapeHtml(state.doseWeight || '')}">
                  <button class="btn secondary" id="usePatientWeightBtn" type="button" ${patientWeight ? '' : 'disabled'}>Z karty</button>
                </div>
              </div>
            </div>

            <div class="space-16"></div>
          ` : ''}

          ${
            state.doseTab === 'calculator'
              ? `
            <div class="grid g2">
              <div>
                <label class="label">Etap / grupa</label>
                <select id="dosePurpose">
                  <option value="Premedykacja" ${state.dosePurpose === 'Premedykacja' ? 'selected' : ''}>Premedykacja</option>
                  <option value="Indukcja" ${state.dosePurpose === 'Indukcja' ? 'selected' : ''}>Indukcja</option>
                  <option value="Analgezja" ${state.dosePurpose === 'Analgezja' ? 'selected' : ''}>Analgezja</option>
                  <option value="Wszystkie" ${state.dosePurpose === 'Wszystkie' ? 'selected' : ''}>Wszystkie leki</option>
                </select>
              </div>

              <div class="breed-field">
                <label class="label">Nazwa leku</label>
                <input id="doseDrugName" value="${escapeHtml(state.doseDrugName || '')}" placeholder="Np. medetomidyna" autocomplete="off">
                ${renderDrugSuggestionsMarkup()}
              </div>

              ${renderDoseOptionMarkup()}

              <div>
                <label class="label">Dawka (mg/kg)</label>
                <input id="doseMgKg" type="number" inputmode="decimal" step="0.001" value="${escapeHtml(state.doseMgKg || '')}">
              </div>

              <div>
                <label class="label">Stężenie preparatu (mg/ml)</label>
                <input id="doseMgMl" type="number" inputmode="decimal" step="0.001" value="${escapeHtml(state.doseMgMl || '')}">
              </div>

              <div>
                <label class="label">Schemat objętościowy (ml/kg)</label>
                <input id="doseMlPerKg" type="number" inputmode="decimal" step="0.001" value="${escapeHtml(state.doseMlPerKg || '')}">
              </div>

              ${renderDoseRouteMarkup()}
            </div>

            <div class="space-12"></div>
            ${renderSelectedDrugInfoMarkup()}

            <div class="space-16"></div>

            <div class="card inner-card">
              <div class="card-body">
                <h3>Wynik</h3>

                <div class="results-grid">
                  <div class="result-box">
                    <div class="result-label">Dawka całkowita</div>
                    <div class="result-value" id="doseTotalMg">${formatDoseNumber(calc.totalMg)} mg</div>
                  </div>

                  <div class="result-box">
                    <div class="result-label">Objętość do podania</div>
                    <div class="result-value" id="doseTotalMl">${formatDoseNumber(calc.totalMl)} ml</div>
                  </div>
                </div>

                <div class="space-12"></div>

                <div class="small" id="doseFormula">${escapeHtml(calc.formula)}</div>

                <div class="space-8"></div>

                <div class="small" id="dosePresetNote">${escapeHtml(state.dosePresetNote || 'Brak dodatkowej uwagi.')}</div>

                <div class="space-8"></div>

                <div id="doseWarnings">
                  ${calc.warnings.length ? calc.warnings.map((warning) => `<div class="vitals-alert-item warning-text">${escapeHtml(warning)}</div>`).join('') : '<div class="small">Brak ostrzeżeń.</div>'}
                </div>

                <div class="space-12"></div>

                <button class="btn primary-btn full-btn" id="addDoseToPlanBtn">
                  Dodaj wynik do planu leków
                </button>
              </div>
            </div>
          `
              : state.doseTab === 'protocols'
              ? `
            <div class="card inner-card">
              <div class="card-body">
                <h3>Protokoły</h3>
                <div class="small">Gotowy protokół chirurgiczny: medetomidyna + metadon dla psa i kota.</div>
              </div>
            </div>

            <div class="space-16"></div>

            ${renderProtocolCardsMarkup()}

            <div class="space-16"></div>

            ${renderProtocolPreviewMarkup()}
          `
              : renderDrugLibraryMarkup()
          }
        </div>
      </div>
    </div>
  `;
}

function settingsView() {
  return `
    <div class="app">
      <div class="toolbar">
        <button class="btn secondary" id="backHomeBtn">Powrot do menu</button>
      </div>

      <div class="card">
        <div class="card-body">
          <h3>Ustawienia</h3>

          <div class="settings-group">
            <label class="label">PIN aplikacji</label>
            <input id="pinChangeSettings" type="password" inputmode="numeric" value="${escapeHtml(getPin())}">
          </div>

          <div class="settings-group">
            <label class="label">Motyw aplikacji</label>
            <select id="themeSelect">
              <option value="light" ${state.theme === 'light' ? 'selected' : ''}>Jasny</option>
              <option value="dark" ${state.theme === 'dark' ? 'selected' : ''}>Ciemny</option>
            </select>
          </div>

          <div class="small">Zmiana motywu zapisuje się automatycznie.</div>
        </div>
      </div>
    </div>
  `;
}

function thanksView() {
  return `
    <div class="app">
      <div class="toolbar">
        <button class="btn secondary" id="backHomeBtn">Powrot do menu</button>
      </div>

      <div class="card">
        <div class="card-body">
          <h3>Szczególne podziękowania</h3>
          <p>Dziękuję wszystkim, którzy wspierają rozwój tej aplikacji.</p>
          <p><strong>Autor:</strong> ${AUTHOR}</p>
        </div>
      </div>
    </div>
  `;
}

function filtered() {
  const q = state.query.trim().toLowerCase();
  if (!q) return state.records;

  return state.records.filter((r) =>
    [
      r.data.visitDate,
      r.data.animalName,
      r.data.ownerName,
      `${r.data.species}/${r.data.breed}`,
      r.data.weight,
      r.data.procedureAsa
    ]
      .join(' ')
      .toLowerCase()
      .includes(q)
  );
}

function mainView() {
  return `
    <div class="app">
      <div class="toolbar no-print">
        <button class="btn secondary" id="backHomeBtn">Powrot do menu</button>
      </div>

      <div class="layout">
        <div class="card no-print">
          <div class="card-body">
            <h3>Karty pacjentow</h3>
            <input id="searchInput" placeholder="Szukaj..." value="${escapeHtml(state.query)}">
            <div class="space-12"></div>
            <button class="btn full-btn" id="newBtn">Nowa karta</button>
            <div class="space-14"></div>

            ${filtered()
              .map(
                (r) => `
              <div class="record ${state.selectedId === r.id ? 'active' : ''}" data-open="${r.id}">
                <div><strong>${escapeHtml(r.data.animalName || 'Pacjent')}</strong></div>
                <div class="small">${escapeHtml(r.data.visitDate || '')} • ${escapeHtml(r.data.ownerName || '')}</div>
                <div class="badges">
                  <span class="badge">${escapeHtml((r.data.species || '') + (r.data.breed ? ` / ${r.data.breed}` : ''))}</span>
                  <span class="badge">${escapeHtml(r.data.weight || '')}</span>
                </div>
                <div class="small record-note">${escapeHtml(r.data.procedureAsa || '')}</div>
                <div class="record-actions">
                  <button class="btn secondary openBtn" data-open="${r.id}" type="button">Otworz</button>
                  <button class="btn danger delBtn" data-del="${r.id}" type="button">Usun</button>
                </div>
              </div>
            `
              )
              .join('')}

            <div class="section-separator">
              <div class="small"><strong>Prywatnosc i kopia</strong></div>
              <div class="space-8"></div>
              <button class="btn secondary full-btn" id="exportBtn">Eksport kopii</button>
              <div class="space-8"></div>
              <label class="btn secondary full-btn import-label">
                Import kopii
                <input id="importInput" type="file" accept="application/json" style="display:none">
              </label>
              <div class="space-8"></div>
              <label class="label">PIN aplikacji</label>
              <input id="pinChange" type="password" inputmode="numeric" value="${escapeHtml(getPin())}">
            </div>
          </div>
        </div>

        <div>
          <div class="toolbar no-print">
            <button class="btn primary-btn" id="saveBtn">Zapisz</button>
            <button class="btn secondary" id="printBtn">Podglad wydruku</button>
            <button class="btn secondary" id="samePatientBtn">Nowa karta tego pacjenta</button>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="header">
                <div class="sub">${escapeHtml(state.form.clinicName)}</div>
                <h1>${APP_NAME}</h1>
                <div class="sub">Autorstwo: ${AUTHOR}</div>
              </div>

              <div class="grid g4">
                <div>
                  <label class="label">Data karty</label>
                  <input data-field="visitDate" type="date" value="${escapeHtml(state.form.visitDate)}">
                </div>
                <div>
                  <label class="label">Oznaczenie autorstwa</label>
                  <input value="${escapeHtml(state.form.authorMark)}" readonly>
                </div>
                <div>
                  <label class="label">Stan ogolny</label>
                  <select data-field="generalState">
                    <option ${sel('Swiadomy')}>Swiadomy</option>
                    <option ${sel('Nieswiadomy')}>Nieswiadomy</option>
                    <option ${sel('Otepialy')}>Otepialy</option>
                  </select>
                </div>
              </div>

              <div class="space-16"></div>

              <div class="grid g2">
                <div>
                  <label class="label">Imie i nazwisko wlasciciela</label>
                  <input data-field="ownerName" value="${escapeHtml(state.form.ownerName)}">
                </div>
                <div>
                  <label class="label">Imie zwierzecia</label>
                  <input data-field="animalName" value="${escapeHtml(state.form.animalName)}">
                </div>
                <div>
                  <label class="label">Gatunek</label>
                  <select data-field="species">
                    <option value=""></option>
                    <option ${speciesSel('Pies')}>Pies</option>
                    <option ${speciesSel('Kot')}>Kot</option>
                    <option ${speciesSel('Krolik')}>Krolik</option>
                  </select>
                </div>
                <div class="breed-field">
                  <label class="label">Rasa</label>
                  <input
                    id="breedInput"
                    data-field="breed"
                    value="${escapeHtml(state.form.breed)}"
                    placeholder="${state.form.species ? 'Wpisz rasę...' : 'Najpierw wybierz gatunek'}"
                    autocomplete="off"
                  >
                  ${renderBreedSuggestionsMarkup()}
                </div>
                <div>
                  <label class="label">Wiek</label>
                  <input data-field="age" type="number" inputmode="numeric" value="${escapeHtml(state.form.age)}">
                </div>
                <div>
                  <label class="label">Waga</label>
                  <input data-field="weight" type="number" inputmode="decimal" step="0.1" value="${escapeHtml(state.form.weight)}">
                </div>
              </div>

              <div class="space-16"></div>

              <div class="grid g2">
                <div>
                  <label class="label">Choroby przewlekle</label>
                  <textarea data-field="historyChronic">${escapeHtml(state.form.historyChronic)}</textarea>
                </div>
                <div>
                  <label class="label">Leki / alergie</label>
                  <textarea data-field="historyMedsAllergies">${escapeHtml(state.form.historyMedsAllergies)}</textarea>
                </div>
              </div>

              <div class="space-16"></div>

              <label class="label">Poprzednie znieczulenia</label>
              <textarea data-field="historyPrevAnesthesia">${escapeHtml(state.form.historyPrevAnesthesia)}</textarea>

              <div class="space-16"></div>

              <div class="card inner-card">
                <div class="card-body">
                  <h3>Charakter</h3>
                  <div class="temperament-list">
                    ${['wesoly', 'agresywny', 'cichy', 'spokojny', 'niespokojny']
                      .map(
                        (k) => `
                      <label class="temperament-item">
                        <input type="checkbox" data-temp="${k}" ${state.form.temperament[k] ? 'checked' : ''}>
                        <span>${cap(k)}</span>
                      </label>
                    `
                      )
                      .join('')}
                  </div>
                </div>
              </div>

              <div class="space-16"></div>

              <label class="label">Rodzaj zabiegu + ASA</label>
              <input data-field="procedureAsa" value="${escapeHtml(state.form.procedureAsa)}">

              <div class="space-16"></div>

              ${drugTable('Dawki lekow', state.form.drugTable, false)}

              <div class="space-16"></div>

              <div class="grid g2">
                <div>
                  <label class="label">Premedykacja</label>
                  <textarea data-field="planPremed">${escapeHtml(state.form.planPremed)}</textarea>
                </div>
                <div>
                  <label class="label">Indukcja</label>
                  <textarea data-field="planInduction">${escapeHtml(state.form.planInduction)}</textarea>
                </div>
                <div>
                  <label class="label">Podtrzymanie</label>
                  <textarea data-field="planMaintenance">${escapeHtml(state.form.planMaintenance)}</textarea>
                </div>
                <div>
                  <label class="label">Analgezja</label>
                  <textarea data-field="planAnalgesia">${escapeHtml(state.form.planAnalgesia)}</textarea>
                </div>
              </div>

              <div class="space-16"></div>

              <div class="grid g2">
                <div>
                  <label class="label">Rozpoczecie zabiegu</label>
                  <input data-field="surgeryStart" type="time" value="${escapeHtml(state.form.surgeryStart)}">
                </div>
                <div>
                  <label class="label">Zakonczenie zabiegu</label>
                  <input data-field="surgeryEnd" type="time" value="${escapeHtml(state.form.surgeryEnd)}">
                </div>
                <div>
                  <label class="label">Lekarz operujacy</label>
                  <input data-field="surgeon" value="${escapeHtml(state.form.surgeon)}">
                </div>
                <div>
                  <label class="label">Asysta</label>
                  <input data-field="assistant" value="${escapeHtml(state.form.assistant)}">
                </div>
              </div>

              <div class="space-16"></div>

              ${drugTable('Leki srodzabiegowe', state.form.intraopDrugs, true)}

              <div class="space-16"></div>

              ${vitalsTable()}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function printPreviewView() {
  return `
    <div class="app">
      <div class="toolbar no-print">
        <button class="btn secondary" id="backToPlanBtn">Powrot do planu</button>
        <button class="btn secondary" id="backHomeFromPreviewBtn">Powrot do menu</button>
        <button class="btn primary-btn" id="downloadPdfBtn">Pobierz PDF</button>
      </div>

      <div class="card no-print">
        <div class="card-body">
          <h3>Podglad wydruku</h3>
          <div class="small">
            To jest kliniczny podglad planu. Przyciskiem „Pobierz PDF” zapiszesz plik na komputerze lub telefonie.
          </div>
        </div>
      </div>

      <div class="space-16"></div>

      <div class="card">
        <div class="card-body">
          <div id="pdfContent">
            ${renderPrintableCardMarkup(state.form)}
          </div>
        </div>
      </div>
    </div>
  `;
}

function speciesSel(v) {
  return state.form.species === v ? 'selected' : '';
}

function sel(v) {
  return state.form.generalState === v ? 'selected' : '';
}

function drugTable(title, rows, intra) {
  return `
    <div class="card inner-card">
      <div class="card-body">
        <h3>${title}</h3>
        <div class="table-wrap mobile-table-wrap">
          <table class="data-table compact-table">
            <thead>
              <tr>
                <th>Lek</th>
                <th>Dawka</th>
                <th>${intra ? 'Godzina' : 'Droga'}</th>
                <th>Uwagi</th>
              </tr>
            </thead>
            <tbody>
              ${rows
                .map(
                  (r, i) => `
                <tr>
                  <td>
                    <input data-drug="${intra ? 'intra' : 'main'}" data-idx="${i}" data-key="name" value="${escapeHtml(r.name)}">
                  </td>
                  <td>
                    <input type="text" data-drug="${intra ? 'intra' : 'main'}" data-idx="${i}" data-key="dose" value="${escapeHtml(r.dose)}">
                  </td>
                  <td>
                    ${
                      intra
                        ? `<input type="time" data-drug="intra" data-idx="${i}" data-key="hour" value="${escapeHtml(r.hour)}">`
                        : `<select data-drug="main" data-idx="${i}" data-key="route">
                            <option value=""></option>
                            <option ${r.route === 'SC' ? 'selected' : ''}>SC</option>
                            <option ${r.route === 'IM' ? 'selected' : ''}>IM</option>
                            <option ${r.route === 'IV' ? 'selected' : ''}>IV</option>
                            <option ${r.route === 'Miejscowo' ? 'selected' : ''}>Miejscowo</option>
                          </select>`
                    }
                  </td>
                  <td>
                    <input data-drug="${intra ? 'intra' : 'main'}" data-idx="${i}" data-key="notes" value="${escapeHtml(r.notes)}">
                  </td>
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function getVitalAlertLevel(key, value) {
  const num = Number(value);

  if (value === '' || Number.isNaN(num)) return '';

  if (key === 'hr') {
    if (num < 40 || num > 140) return 'danger';
  }

  if (key === 'spo2') {
    if (num < 90) return 'danger';
    if (num < 93) return 'warning';
  }

  if (key === 'etco2') {
    if (num > 60) return 'danger';
    if (num > 55) return 'warning';
  }

  if (key === 'temp') {
    if (num < 35.5) return 'danger';
    if (num < 36) return 'warning';
    if (num > 39.1) return 'danger';
  }

  return '';
}

function getVitalAlertText(key, value) {
  const num = Number(value);

  if (value === '' || Number.isNaN(num)) return '';

  if (key === 'hr') {
    if (num < 40) return 'HR poniżej 40';
    if (num > 140) return 'HR powyżej 140';
  }

  if (key === 'spo2') {
    if (num < 90) return 'SpO2 poniżej 90';
    if (num < 93) return 'SpO2 poniżej 93';
  }

  if (key === 'etco2') {
    if (num > 60) return 'EtCO2 powyżej 60';
    if (num > 55) return 'EtCO2 powyżej 55';
  }

  if (key === 'temp') {
    if (num < 35.5) return 'Temperatura poniżej 35.5';
    if (num < 36) return 'Temperatura poniżej 36';
    if (num > 39.1) return 'Temperatura powyżej 39.1';
  }

  return '';
}

function getAllVitalAlerts() {
  const alerts = [];

  state.form.vitals.forEach((row, index) => {
    const timeLabel = row.time ? `${row.time} min` : `wiersz ${index + 1}`;

    ['hr', 'spo2', 'etco2', 'temp'].forEach((key) => {
      const level = getVitalAlertLevel(key, row[key]);
      const text = getVitalAlertText(key, row[key]);

      if (level && text) {
        alerts.push({
          level,
          text: `${timeLabel}: ${text}`
        });
      }
    });
  });

  return alerts;
}

function vitalsTable() {
  const alerts = getAllVitalAlerts();

  return `
    <div class="card inner-card">
      <div class="card-body">
        <h3>Parametry podczas zabiegu</h3>
        <div class="table-wrap mobile-table-wrap">
          <table class="data-table compact-table vitals-table">
            <thead>
              <tr>
                <th>Czas</th>
                <th>HR</th>
                <th>SpO2</th>
                <th>EtCO2</th>
                <th>Temp</th>
                <th>Cisnienie</th>
                <th>MAC %</th>
              </tr>
            </thead>
            <tbody>
              ${state.form.vitals
                .map(
                  (r, i) => `
                <tr>
                  <td class="center">${r.time}</td>
                  ${['hr', 'spo2', 'etco2', 'temp', 'pressure', 'mac']
                    .map((k) => {
                      const level = getVitalAlertLevel(k, r[k]);
                      const className =
                        level === 'danger'
                          ? 'vital-alert-danger'
                          : level === 'warning'
                          ? 'vital-alert-warning'
                          : '';

                      return `
                        <td>
                          <input
                            type="number"
                            inputmode="decimal"
                            class="${className}"
                            data-vitals="${i}"
                            data-key="${k}"
                            value="${escapeHtml(r[k])}"
                          >
                        </td>
                      `;
                    })
                    .join('')}
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>
        </div>

        <div class="space-12"></div>

        <div id="vitalsAlertsContainer">
          ${
            alerts.length
              ? `
            <div class="vitals-alert-box">
              <div class="vitals-alert-title">Alerty parametrów</div>
              <div class="vitals-alert-list">
                ${alerts
                  .map(
                    (alert) => `
                  <div class="vitals-alert-item ${alert.level === 'danger' ? 'danger-text' : 'warning-text'}">
                    ${escapeHtml(alert.text)}
                  </div>
                `
                  )
                  .join('')}
              </div>
            </div>
          `
              : `
            <div class="small">Brak alertów parametrów.</div>
          `
          }
        </div>
      </div>
    </div>
  `;
}

function refreshVitalsAlertsOnly() {
  const alerts = getAllVitalAlerts();

  document.querySelectorAll('[data-vitals]').forEach((input) => {
    const rowIndex = +input.dataset.vitals;
    const key = input.dataset.key;
    const value = state.form.vitals[rowIndex][key];
    const level = getVitalAlertLevel(key, value);

    input.classList.remove('vital-alert-warning', 'vital-alert-danger');

    if (level === 'warning') input.classList.add('vital-alert-warning');
    if (level === 'danger') input.classList.add('vital-alert-danger');
  });

  const alertBox = document.getElementById('vitalsAlertsContainer');
  if (!alertBox) return;

  if (!alerts.length) {
    alertBox.innerHTML = `<div class="small">Brak alertów parametrów.</div>`;
    return;
  }

  alertBox.innerHTML = `
    <div class="vitals-alert-box">
      <div class="vitals-alert-title">Alerty parametrów</div>
      <div class="vitals-alert-list">
        ${alerts
          .map(
            (alert) => `
          <div class="vitals-alert-item ${alert.level === 'danger' ? 'danger-text' : 'warning-text'}">
            ${escapeHtml(alert.text)}
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}


function vitalsRowHasAnyValue(row) {
  return ['hr', 'spo2', 'etco2', 'temp', 'pressure', 'mac'].some((key) => String(row?.[key] || '').trim() !== '');
}

function ensureExtraVitalsRows() {
  const rows = state.form.vitals || [];
  if (!rows.length) {
    state.form.vitals = vitalsTemplate();
    return false;
  }

  const last = rows[rows.length - 1];
  if (!vitalsRowHasAnyValue(last)) return false;

  const lastTime = Number(last.time || 0);
  for (let i = 1; i <= 5; i += 1) {
    rows.push({
      time: String(lastTime + i * 5),
      hr: '',
      spo2: '',
      etco2: '',
      temp: '',
      pressure: '',
      mac: ''
    });
  }

  return true;
}

function getSurgeryStartDateTime() {
  if (!state.form.surgeryStart) return null;
  const [hours, minutes] = state.form.surgeryStart.split(':').map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function hasVitalsAfterSurgeryStart() {
  return (state.form.vitals || []).some((row) => vitalsRowHasAnyValue(row));
}

function checkVitalsReminder() {
  if (!state.unlocked || state.currentPage !== 'plan') return;
  const start = getSurgeryStartDateTime();
  if (!start) return;

  const now = new Date();
  const minutesFromStart = (now - start) / 60000;
  if (minutesFromStart < 10) return;
  if (hasVitalsAfterSurgeryStart()) return;

  const last = Number(state.lastVitalsReminderAt || 0);
  if (last && now.getTime() - last < 10 * 60000) return;

  state.lastVitalsReminderAt = now.getTime();
  alert('Przypomnienie: zabieg trwa już około 10 minut. Wpisz parametry pacjenta podczas zabiegu.');
}

function addDoseToPlan() {
  const drugName = (state.doseDrugName || '').trim();
  const preset = getSelectedDrugPreset();
  const calc = getDoseCalculation();

  if (!drugName) {
    alert('Najpierw wpisz lub wybierz nazwę leku.');
    return;
  }

  if (calc.weight <= 0) {
    alert('Najpierw wpisz masę ciała.');
    return;
  }

  if (preset && Array.isArray(preset.mgKgOptions) && preset.mgKgOptions.length && !calc.mgKg) {
    alert('Najpierw wybierz dawkę mg/kg z listy.');
    return;
  }

  if (!calc.hasResult) {
    alert('Uzupełnij dawkę mg/kg albo schemat ml/kg.');
    return;
  }

  const doseParts = [];
  if (calc.totalMg > 0) doseParts.push(`${formatDoseNumber(calc.totalMg)} mg`);
  if (calc.totalMl > 0) doseParts.push(`${formatDoseNumber(calc.totalMl)} ml`);

  const details = [];
  if (calc.mgKg > 0 && calc.mlPerKg <= 0) details.push(`${formatDoseNumber(calc.mgKg, 3)} mg/kg`);
  if (calc.mlPerKg > 0) details.push(`${formatDoseNumber(calc.mlPerKg, 3)} ml/kg`);
  if (calc.mgMl > 0) details.push(`${formatDoseNumber(calc.mgMl)} mg/ml`);

  const newRow = {
    name: drugName,
    dose: doseParts.join(' / '),
    route: state.doseRoute || '',
    notes: [`Etap: ${getDosePurposeLabel()}`, details.join(' • '), state.dosePresetNote || ''].filter(Boolean).join(' | ')
  };

  const emptyRow = state.form.drugTable.find((row) => !row.name && !row.dose && !row.route && !row.notes);

  if (emptyRow) {
    emptyRow.name = newRow.name;
    emptyRow.dose = newRow.dose;
    emptyRow.route = newRow.route;
    emptyRow.notes = newRow.notes;
  } else {
    state.form.drugTable.push(newRow);
  }

  saveDraft();
  alert('Dodano lek do planu leków.');
}

function bind() {
  if (!state.unlocked) {
    const unlockBtn = document.getElementById('unlockBtn');
    if (unlockBtn) {
      unlockBtn.onclick = () => {
        const pinInput = document.getElementById('pinInput');
        if (pinInput && pinInput.value === getPin()) {
          state.unlocked = true;
          state.currentPage = 'home';
          render();
        } else {
          alert('Nieprawidlowy PIN.');
        }
      };
    }
    return;
  }

  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.onclick = () => {
      state.currentPage = el.dataset.nav;
      render();
    };
  });

  const backHomeBtn = document.getElementById('backHomeBtn');
  if (backHomeBtn) {
    backHomeBtn.onclick = () => {
      state.currentPage = 'home';
      render();
    };
  }

  const backToPlanBtn = document.getElementById('backToPlanBtn');
  if (backToPlanBtn) {
    backToPlanBtn.onclick = () => {
      state.currentPage = 'plan';
      render();
    };
  }

  const backHomeFromPreviewBtn = document.getElementById('backHomeFromPreviewBtn');
  if (backHomeFromPreviewBtn) {
    backHomeFromPreviewBtn.onclick = () => {
      state.currentPage = 'home';
      render();
    };
  }

  const downloadPdfBtn = document.getElementById('downloadPdfBtn');
  if (downloadPdfBtn) {
    downloadPdfBtn.onclick = () => {
      generatePDF();
    };
  }

  const pinChangeSettings = document.getElementById('pinChangeSettings');
  if (pinChangeSettings) {
    pinChangeSettings.onchange = (e) => setPin(e.target.value || defaultPin);
  }

  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    themeSelect.onchange = (e) => {
      state.theme = e.target.value;
      saveTheme(state.theme);
      render();
    };
  }

  const doseTabCalculator = document.getElementById('doseTabCalculator');
  if (doseTabCalculator) {
    doseTabCalculator.onclick = () => {
      state.doseTab = 'calculator';
      render();
    };
  }

  const doseTabProtocols = document.getElementById('doseTabProtocols');
  if (doseTabProtocols) {
    doseTabProtocols.onclick = () => {
      state.doseTab = 'protocols';
      render();
    };
  }

  const doseTabLibrary = document.getElementById('doseTabLibrary');
  if (doseTabLibrary) {
    doseTabLibrary.onclick = () => {
      state.doseTab = 'library';
      render();
    };
  }

  const clearDoseBtn = document.getElementById('clearDoseBtn');
  if (clearDoseBtn) {
    clearDoseBtn.onclick = () => clearDoseCalculator();
  }

  const usePatientWeightBtn = document.getElementById('usePatientWeightBtn');
  if (usePatientWeightBtn) {
    usePatientWeightBtn.onclick = () => usePatientWeightInDoseCalculator();
  }

  const doseSpecies = document.getElementById('doseSpecies');
  if (doseSpecies) {
    doseSpecies.onchange = (e) => {
      state.doseSpecies = e.target.value;

      const preset = getSelectedDrugPreset();
      if (preset) {
        applyPresetToDoseFields(preset);
      } else {
        state.doseMgKgChoice = '';
        state.doseMgKg = '';
        state.doseRoute = '';
        state.dosePresetNote = '';
      }

      render();
    };
  }

  const dosePurpose = document.getElementById('dosePurpose');
  if (dosePurpose) {
    dosePurpose.onchange = (e) => {
      state.dosePurpose = e.target.value;
      const preset = getSelectedDrugPreset();
      if (!preset || !drugMatchesDosePurpose(preset)) {
        state.doseDrugName = '';
        state.doseMgKg = '';
        state.doseMgMl = '';
        state.doseMlPerKg = '';
        state.dosePresetNote = '';
        state.doseRoute = '';
        state.doseMgKgChoice = '';
      }
      render();
    };
  }

  const doseWeight = document.getElementById('doseWeight');
  if (doseWeight) {
    doseWeight.oninput = (e) => {
      state.doseWeight = e.target.value;
      updateDoseCalculator();
    };
  }

  const doseDrugName = document.getElementById('doseDrugName');
  if (doseDrugName) {
    doseDrugName.oninput = (e) => {
      state.doseDrugName = e.target.value;

      const preset = getSelectedDrugPreset();

      if (!preset || !Array.isArray(preset.mgKgOptions) || !preset.mgKgOptions.length) {
        state.doseMgKgChoice = '';
      }

      updateDrugSuggestions();
    };
  }

  const doseMgKgChoice = document.getElementById('doseMgKgChoice');
  if (doseMgKgChoice) {
    doseMgKgChoice.onchange = (e) => {
      state.doseMgKgChoice = e.target.value;
      state.doseMgKg = e.target.value || '';
      updateDoseCalculator();
    };
  }

  const doseRouteSelect = document.getElementById('doseRouteSelect');
  if (doseRouteSelect) {
    doseRouteSelect.onchange = (e) => {
      state.doseRoute = e.target.value;
    };
  }

  const doseRouteInput = document.getElementById('doseRouteInput');
  if (doseRouteInput) {
    doseRouteInput.oninput = (e) => {
      state.doseRoute = e.target.value;
    };
  }

  const doseMgKg = document.getElementById('doseMgKg');
  if (doseMgKg) {
    doseMgKg.oninput = (e) => {
      state.doseMgKg = e.target.value;
      const preset = getSelectedDrugPreset();
      if (preset && Array.isArray(preset.mgKgOptions) && preset.mgKgOptions.length) {
        state.doseMgKgChoice = e.target.value;
      }
      updateDoseCalculator();
    };
  }

  const doseMgMl = document.getElementById('doseMgMl');
  if (doseMgMl) {
    doseMgMl.oninput = (e) => {
      state.doseMgMl = e.target.value;
      updateDoseCalculator();
    };
  }

  const doseMlPerKg = document.getElementById('doseMlPerKg');
  if (doseMlPerKg) {
    doseMlPerKg.oninput = (e) => {
      state.doseMlPerKg = e.target.value;
      updateDoseCalculator();
    };
  }

  document.querySelectorAll('[data-protocol-pick]').forEach((el) => {
    el.onclick = () => {
      state.selectedProtocolId = el.dataset.protocolPick;
      render();
    };
  });

  const addProtocolToPlanBtn = document.getElementById('addProtocolToPlanBtn');
  if (addProtocolToPlanBtn) {
    addProtocolToPlanBtn.onclick = () => {
      addProtocolToPlan();
    };
  }

  bindDrugSuggestionButtons();
  updateDoseCalculator();

  const addDoseToPlanBtn = document.getElementById('addDoseToPlanBtn');
  if (addDoseToPlanBtn) {
    addDoseToPlanBtn.onclick = () => {
      addDoseToPlan();
    };
  }

  const librarySearch = document.getElementById('librarySearch');
  if (librarySearch) {
    librarySearch.oninput = (e) => {
      state.librarySearch = e.target.value;
      render();
    };
  }

  const addLibraryDrugBtn = document.getElementById('addLibraryDrugBtn');
  if (addLibraryDrugBtn) {
    addLibraryDrugBtn.onclick = () => addCustomDrugFromLibrary();
  }

  document.querySelectorAll('[data-library-use]').forEach((el) => {
    el.onclick = () => {
      useLibraryDrug(el.dataset.libraryUse, el.dataset.librarySpecies);
    };
  });

  document.querySelectorAll('[data-field]').forEach((el) => {
    el.oninput = (e) => {
      const field = e.target.dataset.field;
      state.form[field] = e.target.value;

      if (field === 'surgeryStart') {
        state.lastVitalsReminderAt = 0;
      }

      if (field === 'species') {
        state.form.breed = '';
        saveDraft();
        render();
        return;
      }

      saveDraft();

      if (field === 'breed') updateBreedSuggestions();
    };

    el.onchange = (e) => {
      const field = e.target.dataset.field;
      state.form[field] = e.target.value;

      if (field === 'surgeryStart') {
        state.lastVitalsReminderAt = 0;
      }

      if (field === 'species') {
        state.form.breed = '';
        saveDraft();
        render();
        return;
      }

      saveDraft();

      if (field === 'breed') updateBreedSuggestions();
    };
  });

  document.querySelectorAll('[data-temp]').forEach((el) => {
    el.onchange = (e) => {
      state.form.temperament[e.target.dataset.temp] = e.target.checked;
      saveDraft();
    };
  });

  bindBreedSuggestionButtons();

  document.querySelectorAll('[data-drug]').forEach((el) => {
    el.oninput = (e) => {
      const type = e.target.dataset.drug === 'intra' ? 'intraopDrugs' : 'drugTable';
      const idx = +e.target.dataset.idx;
      const key = e.target.dataset.key;
      state.form[type][idx][key] = e.target.value;
      saveDraft();
    };

    el.onchange = (e) => {
      const type = e.target.dataset.drug === 'intra' ? 'intraopDrugs' : 'drugTable';
      const idx = +e.target.dataset.idx;
      const key = e.target.dataset.key;
      state.form[type][idx][key] = e.target.value;
      saveDraft();
    };
  });

  document.querySelectorAll('[data-vitals]').forEach((el) => {
    el.oninput = (e) => {
      state.form.vitals[+e.target.dataset.vitals][e.target.dataset.key] = e.target.value;
      const addedRows = ensureExtraVitalsRows();
      saveDraft();
      if (addedRows) render();
      else refreshVitalsAlertsOnly();
    };
  });

  const s = document.getElementById('searchInput');
  if (s) {
    s.oninput = (e) => {
      state.query = e.target.value;
      render();
    };
  }

  const n = document.getElementById('newBtn');
  if (n) {
    n.onclick = () => {
      state.selectedId = null;
      state.form = blankForm();
      clearDraft();
      render();
    };
  }

  const sv = document.getElementById('saveBtn');
  if (sv) sv.onclick = saveCurrent;

  const pr = document.getElementById('printBtn');
  if (pr) {
    pr.onclick = () => {
      state.currentPage = 'printPreview';
      render();
    };
  }

  const same = document.getElementById('samePatientBtn');
  if (same) {
    same.onclick = () => {
      const f = state.form;
      state.selectedId = null;
      state.form = blankForm();
      Object.assign(state.form, {
        ownerName: f.ownerName,
        animalName: f.animalName,
        species: f.species,
        breed: f.breed,
        age: f.age,
        weight: f.weight
      });
      saveDraft();
      render();
    };
  }

  document.querySelectorAll('[data-open]').forEach((b) => {
    b.onclick = (e) => {
      const id = e.currentTarget.dataset.open;
      const rec = state.records.find((r) => r.id === id);
      if (rec) {
        state.selectedId = id;
        state.form = JSON.parse(JSON.stringify(rec.data));
        saveDraft();
        render();
      }
    };
  });

  document.querySelectorAll('[data-del]').forEach((b) => {
    b.onclick = (e) => {
      e.stopPropagation();
      if (confirm('Usunac te karte?')) {
        state.records = state.records.filter((r) => r.id !== e.currentTarget.dataset.del);
        saveRecords();
        if (state.selectedId === e.currentTarget.dataset.del) {
          state.selectedId = null;
          state.form = blankForm();
        }
        render();
      }
    };
  });

  const ex = document.getElementById('exportBtn');
  if (ex) ex.onclick = exportBackup;

  const im = document.getElementById('importInput');
  if (im) im.onchange = (e) => importBackup(e.target.files[0]);

  const pc = document.getElementById('pinChange');
  if (pc) pc.onchange = (e) => setPin(e.target.value || defaultPin);

  document.querySelectorAll('input, textarea, select').forEach((el) => {
    el.addEventListener('input', () => saveDraft());
    el.addEventListener('change', () => saveDraft());
  });
}

function saveCurrent() {
  const now = new Date().toISOString();

  if (state.selectedId) {
    state.records = state.records.map((r) =>
      r.id === state.selectedId
        ? {
            ...r,
            data: {
              ...state.form,
              updatedAt: now,
              createdAt: state.form.createdAt || now
            }
          }
        : r
    );
  } else {
    const id = uid();
    state.selectedId = id;
    state.records.unshift({
      id,
      data: {
        ...state.form,
        createdAt: now,
        updatedAt: now
      }
    });
  }

  saveRecords();
  clearDraft();
  alert('Zapisano');
  render();
}

function exportBackup() {
  const blob = new Blob([JSON.stringify(state.records, null, 2)], {
    type: 'application/json'
  });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `anestezjologia-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function importBackup(file) {
  if (!file) return;

  const fr = new FileReader();
  fr.onload = () => {
    try {
      const data = JSON.parse(fr.result);
      if (!Array.isArray(data)) throw new Error();

      state.records = data;
      saveRecords();

      if (data[0]) {
        state.selectedId = data[0].id;
        state.form = JSON.parse(JSON.stringify(data[0].data));
      }

      alert('Import udany');
      render();
    } catch {
      alert('Nie udalo sie wczytac kopii.');
    }
  };
  fr.readAsText(file);
}

function cap(s) {
  return (
    {
      wesoly: 'Wesoly',
      agresywny: 'Agresywny',
      cichy: 'Cichy',
      spokojny: 'Spokojny',
      niespokojny: 'Niespokojny'
    }[s] || s
  );
}

function escapeHtml(s = '') {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function formatTemperament(temp) {
  return (
    Object.entries(temp || {})
      .filter(([, value]) => value)
      .map(([key]) => cap(key))
      .join(', ') || '-'
  );
}

function renderPrintableDrugRows(rows, intra = false) {
  const filteredRows = (rows || []).filter((row) =>
    Object.values(row).some((value) => String(value || '').trim() !== '')
  );

  if (!filteredRows.length) {
    return `<tr><td colspan="4" style="border:1px solid #000;padding:4px;">Brak danych</td></tr>`;
  }

  return filteredRows
    .map(
      (row) => `
      <tr>
        <td style="border:1px solid #000;padding:4px;">${escapeHtml(row.name || '')}</td>
        <td style="border:1px solid #000;padding:4px;">${escapeHtml(row.dose || '')}</td>
        <td style="border:1px solid #000;padding:4px;">${escapeHtml(intra ? row.hour || '' : row.route || '')}</td>
        <td style="border:1px solid #000;padding:4px;">${escapeHtml(row.notes || '')}</td>
      </tr>
    `
    )
    .join('');
}

function renderPrintableVitalsRows(rows) {
  const filteredRows = (rows || []).filter((row) =>
    ['time', 'hr', 'spo2', 'etco2', 'temp', 'pressure', 'mac'].some(
      (key) => String(row[key] || '').trim() !== ''
    )
  );

  const rowsToRender = filteredRows.length ? filteredRows : (rows || []);

  return rowsToRender
    .map(
      (row) => `
      <tr>
        <td style="border:1px solid #000;padding:4px;text-align:center;">${escapeHtml(row.time || '')}</td>
        <td style="border:1px solid #000;padding:4px;text-align:center;">${escapeHtml(row.hr || '')}</td>
        <td style="border:1px solid #000;padding:4px;text-align:center;">${escapeHtml(row.spo2 || '')}</td>
        <td style="border:1px solid #000;padding:4px;text-align:center;">${escapeHtml(row.etco2 || '')}</td>
        <td style="border:1px solid #000;padding:4px;text-align:center;">${escapeHtml(row.temp || '')}</td>
        <td style="border:1px solid #000;padding:4px;text-align:center;">${escapeHtml(row.pressure || '')}</td>
        <td style="border:1px solid #000;padding:4px;text-align:center;">${escapeHtml(row.mac || '')}</td>
      </tr>
    `
    )
    .join('');
}

function renderPrintableCardMarkup(form) {
  const lineBox = (content, minHeight = 58) => `
    <div style="min-height:${minHeight}px;">
      <div style="position:relative;z-index:2;">${content}</div>
      <div style="
        height:${Math.max(minHeight - 26, 28)}px;
        margin-top:4px;
        background-image:repeating-linear-gradient(
          to bottom,
          transparent 0,
          transparent 17px,
          #bdbdbd 18px
        );
      "></div>
    </div>
  `;

  return `
    <div style="
      width:190mm;
      margin:0 auto;
      color:#000;
      background:#fff;
      font-family:Arial, Helvetica, sans-serif;
      font-size:12px;
      line-height:1.28;
    ">

      <div style="min-height:277mm;display:flex;flex-direction:column;">
        <div style="text-align:center;border-bottom:2px solid #000;padding-bottom:6px;margin-bottom:8px;">
          <div style="font-size:11px;">${escapeHtml(form.clinicName || AUTHOR)}</div>
          <h1 style="margin:3px 0;font-size:23px;line-height:1.1;">KARTA ANESTEZJOLOGICZNA</h1>
          <div style="font-size:10.5px;">${escapeHtml(form.authorMark || `Autorstwo: ${AUTHOR}`)}</div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:8px;">
          <div style="border:1px solid #000;padding:6px;"><strong>Data:</strong><br>${escapeHtml(form.visitDate || '-')}</div>
          <div style="border:1px solid #000;padding:6px;"><strong>Pacjent:</strong><br>${escapeHtml(form.animalName || '-')}</div>
          <div style="border:1px solid #000;padding:6px;"><strong>Masa:</strong><br>${escapeHtml(form.weight || '-')} kg</div>
          <div style="border:1px solid #000;padding:6px;"><strong>ASA / zabieg:</strong><br>${escapeHtml(form.procedureAsa || '-')}</div>
        </div>

        <div style="border:1px solid #000;padding:7px;margin-bottom:8px;">
          <div style="font-weight:700;font-size:15px;margin-bottom:5px;border-bottom:1px solid #000;">Pacjent i właściciel</div>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:5px 12px;">
            <div><strong>Właściciel:</strong> ${escapeHtml(form.ownerName || '-')}</div>
            <div><strong>Imię zwierzęcia:</strong> ${escapeHtml(form.animalName || '-')}</div>
            <div><strong>Gatunek:</strong> ${escapeHtml(form.species || '-')}</div>
            <div><strong>Rasa:</strong> ${escapeHtml(form.breed || '-')}</div>
            <div><strong>Wiek:</strong> ${escapeHtml(form.age || '-')}</div>
            <div><strong>Stan ogólny:</strong> ${escapeHtml(form.generalState || '-')}</div>
          </div>
        </div>

        <div style="border:1px solid #000;padding:7px;margin-bottom:8px;">
          <div style="font-weight:700;font-size:15px;margin-bottom:5px;border-bottom:1px solid #000;">Wywiad i ocena pacjenta</div>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px 12px;">
            <div>
              <strong>Choroby przewlekłe:</strong>
              ${lineBox(`<div style="white-space:pre-wrap;">${escapeHtml(form.historyChronic || '-')}</div>`, 82)}
            </div>
            <div>
              <strong>Leki / alergie:</strong>
              ${lineBox(`<div style="white-space:pre-wrap;">${escapeHtml(form.historyMedsAllergies || '-')}</div>`, 82)}
            </div>
            <div>
              <strong>Poprzednie znieczulenia:</strong>
              ${lineBox(`<div style="white-space:pre-wrap;">${escapeHtml(form.historyPrevAnesthesia || '-')}</div>`, 72)}
            </div>
            <div>
              <strong>Charakter / zachowanie:</strong>
              ${lineBox(`<div>${escapeHtml(formatTemperament(form.temperament))}</div>`, 72)}
            </div>
          </div>
        </div>

        <div style="border:1px solid #000;padding:7px;margin-bottom:8px;">
          <div style="font-weight:700;font-size:15px;margin-bottom:5px;border-bottom:1px solid #000;">Plan znieczulenia</div>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px 12px;">
            <div>
              <strong>Premedykacja:</strong>
              ${lineBox(`<div style="white-space:pre-wrap;">${escapeHtml(form.planPremed || '-')}</div>`, 78)}
            </div>
            <div>
              <strong>Indukcja:</strong>
              ${lineBox(`<div style="white-space:pre-wrap;">${escapeHtml(form.planInduction || '-')}</div>`, 78)}
            </div>
            <div>
              <strong>Podtrzymanie:</strong>
              ${lineBox(`<div style="white-space:pre-wrap;">${escapeHtml(form.planMaintenance || '-')}</div>`, 66)}
            </div>
            <div>
              <strong>Analgezja:</strong>
              ${lineBox(`<div style="white-space:pre-wrap;">${escapeHtml(form.planAnalgesia || '-')}</div>`, 66)}
            </div>
          </div>
        </div>

        <div style="margin-bottom:8px;">
          <div style="font-weight:700;font-size:15px;margin-bottom:4px;">Dawki leków</div>
          <table style="width:100%;border-collapse:collapse;font-size:10.7px;">
            <thead>
              <tr>
                <th style="border:1px solid #000;padding:4px;text-align:left;">Lek</th>
                <th style="border:1px solid #000;padding:4px;text-align:left;">Dawka</th>
                <th style="border:1px solid #000;padding:4px;text-align:left;">Droga</th>
                <th style="border:1px solid #000;padding:4px;text-align:left;">Uwagi</th>
              </tr>
            </thead>
            <tbody>
              ${renderPrintableDrugRows(form.drugTable, false)}
            </tbody>
          </table>
        </div>

        <div style="margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:10px;">
          <div>Strona 1 / 2</div>
          <div style="text-align:right;">${escapeHtml(new Date().toLocaleString('pl-PL'))}</div>
        </div>
      </div>

      <div style="page-break-before:always;min-height:277mm;display:flex;flex-direction:column;">
        <div style="text-align:center;border-bottom:2px solid #000;padding-bottom:6px;margin-bottom:8px;">
          <h2 style="margin:3px 0;font-size:21px;">PRZEBIEG ZNIECZULENIA</h2>
          <div style="font-size:11px;">
            ${escapeHtml(form.animalName || 'Pacjent')} | ${escapeHtml(form.species || '-')} | ${escapeHtml(form.weight || '-')} kg
          </div>
        </div>

        <div style="border:1px solid #000;padding:7px;margin-bottom:8px;">
          <div style="font-weight:700;font-size:15px;margin-bottom:5px;border-bottom:1px solid #000;">Przebieg zabiegu</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;">
            <div><strong>Start:</strong><br>${escapeHtml(form.surgeryStart || '-')}</div>
            <div><strong>Koniec:</strong><br>${escapeHtml(form.surgeryEnd || '-')}</div>
            <div><strong>Lekarz:</strong><br>${escapeHtml(form.surgeon || '-')}</div>
            <div><strong>Asysta:</strong><br>${escapeHtml(form.assistant || '-')}</div>
          </div>
        </div>

        <div style="margin-bottom:8px;">
          <div style="font-weight:700;font-size:15px;margin-bottom:4px;">Leki śródzabiegowe</div>
          <table style="width:100%;border-collapse:collapse;font-size:10.7px;">
            <thead>
              <tr>
                <th style="border:1px solid #000;padding:4px;text-align:left;">Lek</th>
                <th style="border:1px solid #000;padding:4px;text-align:left;">Dawka</th>
                <th style="border:1px solid #000;padding:4px;text-align:left;">Godzina</th>
                <th style="border:1px solid #000;padding:4px;text-align:left;">Uwagi</th>
              </tr>
            </thead>
            <tbody>
              ${renderPrintableDrugRows(form.intraopDrugs, true)}
            </tbody>
          </table>
        </div>

        <div style="margin-bottom:8px;">
          <div style="font-weight:700;font-size:15px;margin-bottom:4px;">Parametry podczas zabiegu</div>
          <table style="width:100%;border-collapse:collapse;font-size:10px;">
            <thead>
              <tr>
                <th style="border:1px solid #000;padding:4px;">Czas</th>
                <th style="border:1px solid #000;padding:4px;">HR</th>
                <th style="border:1px solid #000;padding:4px;">SpO₂</th>
                <th style="border:1px solid #000;padding:4px;">EtCO₂</th>
                <th style="border:1px solid #000;padding:4px;">Temp</th>
                <th style="border:1px solid #000;padding:4px;">Ciśnienie</th>
                <th style="border:1px solid #000;padding:4px;">MAC %</th>
              </tr>
            </thead>
            <tbody>
              ${renderPrintableVitalsRows(form.vitals)}
            </tbody>
          </table>
        </div>

        <div style="border:1px solid #000;padding:8px;margin-bottom:8px;flex:1;">
          <div style="font-weight:700;font-size:15px;margin-bottom:6px;border-bottom:1px solid #000;">Uwagi śródzabiegowe / zalecenia / obserwacje</div>
          <div style="
            min-height:125px;
            background-image:repeating-linear-gradient(
              to bottom,
              transparent 0,
              transparent 19px,
              #bdbdbd 20px
            );
          "></div>
        </div>

        <div style="border:1px solid #000;padding:8px;margin-top:auto;">
          <div style="font-weight:700;font-size:15px;margin-bottom:8px;">Uwagi końcowe / podpis</div>
          <div style="
            height:54px;
            margin-bottom:16px;
            background-image:repeating-linear-gradient(
              to bottom,
              transparent 0,
              transparent 20px,
              #bdbdbd 21px
            );
          "></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">
            <div style="border-top:1px solid #000;padding-top:5px;text-align:center;">Podpis osoby monitorującej</div>
            <div style="border-top:1px solid #000;padding-top:5px;text-align:center;">Podpis lekarza</div>
          </div>
        </div>

        <div style="margin-top:5px;display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:10px;">
          <div>Strona 2 / 2</div>
          <div style="text-align:right;">Wygenerowano: ${escapeHtml(new Date().toLocaleString('pl-PL'))}</div>
        </div>
      </div>
    </div>
  `;
}

function generatePDF() {
  const element = document.getElementById('pdfContent');

  if (!element) {
    alert('Nie znaleziono danych do PDF.');
    return;
  }

  if (typeof html2pdf === 'undefined') {
    alert('Biblioteka PDF nie została wczytana. Sprawdź index.html.');
    return;
  }

  const patientName = (state.form.animalName || 'pacjent')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-ąćęłńóśźż]/gi, '');

  const opt = {
    margin: [4, 4, 4, 4],
    filename: `plan-anestezjologiczny-${patientName || 'pacjent'}-${new Date().toISOString().slice(0, 10)}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2.5,
      useCORS: true,
      backgroundColor: '#ffffff',
      scrollY: 0
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: {
      mode: ['css', 'legacy']
    }
  };

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .catch((err) => {
      console.error('Błąd PDF:', err);
      alert('Nie udało się wygenerować PDF.');
    });
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden && state.unlocked) saveDraft();
});

window.addEventListener('pagehide', () => {
  if (state.unlocked) saveDraft();
});

applyTheme();
setInterval(checkVitalsReminder, 60000);
render();
