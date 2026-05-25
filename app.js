const scenarioInfo = {
  cpr: "RKO: priorytetem są uciski, wentylacja, defibrylacja przy rytmach do defibrylacji i leki zgodnie z protokołem. Kalkulator pokazuje dawki pomocnicze, nie zastępuje decyzji lekarza.",
  bradycardia: "Bradykardia: najpierw oceń głębokość znieczulenia, tętno obwodowe, ciśnienie, perfuzję i leki użyte w premedykacji. Potem dopiero farmakologia, bo oczywiście organizm lubi robić teatr.",
  hypotension: "Hipotensja: sprawdź głębokość znieczulenia, krwawienie, nawodnienie, temperaturę, mankiet i tętno. Leczenie zależy od przyczyny.",
  anaphylaxis: "Anafilaksja: przerwij potencjalny czynnik, zabezpiecz drogi oddechowe, tlen, płyny i adrenalina według decyzji lekarza. To tryb bez filozofowania.",
  seizures: "Drgawki: zabezpiecz pacjenta, tlen, temperatura, glukoza, dostęp IV. Leki przeciwdrgawkowe podawaj zgodnie z decyzją lekarza.",
  hypoglycemia: "Hipoglikemia: potwierdź glukometrem, jeśli to możliwe. Glukozę hipertoniczną zwykle rozcieńcza się przed podaniem IV.",
  reversal: "Odwracanie sedacji: odwrócenie może zabrać też analgezję. Pacjent budzący się z bólem to nie sukces, tylko zemsta farmakologii.",
  all: "Wszystkie leki z listy. Przydatne, kiedy chcesz mieć pełną ściągę bez klikania po sytuacjach."
};

const emergencyDrugs = [
  {
    scenario: ["cpr"],
    name: "Adrenalina - RKO",
    doseText: "0,01 mg/kg IV/IO",
    doseMgKg: 0.01,
    concentrationMgMl: 1,
    route: "IV/IO",
    note: "Dla adrenaliny 1 mg/ml: objętość = 0,01 ml/kg. Według RECOVER 2024 nie stosować rutynowo wysokiej dawki adrenaliny."
  },
  {
    scenario: ["cpr"],
    name: "Wazopresyna - RKO",
    doseText: "0,8 U/kg IV/IO",
    doseUnitKg: 0.8,
    unit: "U",
    concentrationUnitMl: 20,
    route: "IV/IO",
    note: "Alternatywa/lek wazopresyjny w protokole RKO. Sprawdź stężenie preparatu, bo fiolki lubią mieć własny charakter."
  },
  {
    scenario: ["cpr", "bradycardia"],
    name: "Atropina",
    doseText: "0,04 mg/kg IV/IO w RKO; 0,02-0,04 mg/kg przy bradykardii",
    doseMgKg: 0.04,
    concentrationMgMl: 0.5,
    route: "IV/IO/IM zależnie od sytuacji",
    note: "W RKO według RECOVER 2024: pojedyncza dawka przy rytmach niedefibrylacyjnych, jeśli wskazana."
  },
  {
    scenario: ["bradycardia", "reversal"],
    name: "Atipamezol",
    doseText: "0,1 mg/kg IM lub objętość zależna od użytej deksmedetomidyny/medetomidyny",
    doseMgKg: 0.1,
    concentrationMgMl: 5,
    route: "IM/IV według decyzji lekarza",
    note: "Odwraca alfa-2. Może szybko zmienić sedację, analgezję i zachowanie pacjenta. Wspaniale, czyli kolejna rzecz do pilnowania."
  },
  {
    scenario: ["hypotension"],
    name: "Bolus krystaloidu",
    doseText: "Pies 5-10 ml/kg; kot 3-5 ml/kg, potem ocena efektu",
    doseMlKg: 5,
    route: "IV",
    note: "Dawka startowa do ostrożnej oceny. U pacjentów kardiologicznych/nerkowych nie lej jak do wiadra."
  },
  {
    scenario: ["hypotension"],
    name: "Efedryna",
    doseText: "0,05-0,1 mg/kg IV powoli",
    doseMgKg: 0.05,
    concentrationMgMl: 50,
    route: "IV",
    note: "Wymaga rozcieńczenia i decyzji lekarza. Przydatna przy hipotensji z zachowaną objętością, zależnie od przyczyny."
  },
  {
    scenario: ["anaphylaxis"],
    name: "Adrenalina - anafilaksja",
    doseText: "0,01 mg/kg IM; IV tylko w ciężkim stanie i pod ścisłą kontrolą",
    doseMgKg: 0.01,
    concentrationMgMl: 1,
    route: "IM/IV",
    note: "Przy anafilaksji dawka i droga zależą od stanu pacjenta. Tlen, płyny i monitoring są obowiązkowe."
  },
  {
    scenario: ["anaphylaxis"],
    name: "Difenhydramina",
    doseText: "2 mg/kg IM/IV powoli",
    doseMgKg: 2,
    concentrationMgMl: 50,
    route: "IM/IV",
    note: "Lek wspomagający. Nie zastępuje adrenaliny w ciężkiej anafilaksji."
  },
  {
    scenario: ["seizures"],
    name: "Diazepam",
    doseText: "0,5 mg/kg IV lub PR",
    doseMgKg: 0.5,
    concentrationMgMl: 5,
    route: "IV/PR",
    note: "Drgawki. Zabezpiecz drogi oddechowe i temperaturę."
  },
  {
    scenario: ["seizures"],
    name: "Midazolam",
    doseText: "0,2-0,5 mg/kg IV/IM/IN",
    doseMgKg: 0.2,
    concentrationMgMl: 5,
    route: "IV/IM/IN",
    note: "Dawka startowa w kalkulatorze: 0,2 mg/kg. Można zmienić w kodzie, jeśli klinika ma własny protokół."
  },
  {
    scenario: ["hypoglycemia"],
    name: "Glukoza 40%",
    doseText: "0,5 ml/kg IV po rozcieńczeniu",
    doseMlKg: 0.5,
    route: "IV",
    note: "Najczęściej rozcieńczyć do niższego stężenia przed podaniem IV. Po bolusie kontrola glikemii i wlew, jeśli potrzeba."
  },
  {
    scenario: ["reversal"],
    name: "Nalokson",
    doseText: "0,01 mg/kg IV/IM, miareczkować do efektu",
    doseMgKg: 0.01,
    concentrationMgMl: 0.4,
    route: "IV/IM",
    note: "Odwraca opioidy, także analgezję. Pacjent może wrócić do bólu szybciej niż człowiek do złych decyzji."
  },
  {
    scenario: ["reversal"],
    name: "Flumazenil",
    doseText: "0,01 mg/kg IV",
    doseMgKg: 0.01,
    concentrationMgMl: 0.1,
    route: "IV",
    note: "Odwraca benzodiazepiny."
  },
  {
    scenario: ["cpr"],
    name: "Lidokaina - pies",
    doseText: "2 mg/kg IV powoli",
    doseMgKg: 2,
    concentrationMgMl: 20,
    route: "IV",
    species: "dog",
    note: "Arytmie komorowe u psów. U kotów tylko po decyzji lekarza, ostrożnie."
  }
];

let activeScenario = "cpr";

function getPatientWeightKg() {
  const possibleIds = ["weight", "masa", "patientWeight", "waga", "masaCiala"];
  for (const id of possibleIds) {
    const element = document.getElementById(id);
    if (!element) continue;
    const value = parseFloat(String(element.value).replace(",", "."));
    if (!Number.isNaN(value) && value > 0) return value;
  }
  return null;
}

function getSpecies() {
  const species = document.getElementById("species")?.value;
  return species || "dog";
}

function roundDose(value) {
  if (value < 0.01) return value.toFixed(4);
  if (value < 0.1) return value.toFixed(3);
  if (value < 10) return value.toFixed(2);
  return value.toFixed(1);
}

function createDoseText(drug, weight) {
  if (!weight) return "Uzupełnij masę ciała, żeby wyliczyć dawkę.";

  if (drug.doseMgKg) {
    const dose = drug.doseMgKg * weight;
    const volume = drug.concentrationMgMl ? dose / drug.concentrationMgMl : null;
    return volume
      ? `${roundDose(dose)} mg = ${roundDose(volume)} ml przy stężeniu ${drug.concentrationMgMl} mg/ml`
      : `${roundDose(dose)} mg`;
  }

  if (drug.doseUnitKg) {
    const dose = drug.doseUnitKg * weight;
    const volume = drug.concentrationUnitMl ? dose / drug.concentrationUnitMl : null;
    return volume
      ? `${roundDose(dose)} ${drug.unit} = ${roundDose(volume)} ml przy stężeniu ${drug.concentrationUnitMl} ${drug.unit}/ml`
      : `${roundDose(dose)} ${drug.unit}`;
  }

  if (drug.doseMlKg) {
    const dose = drug.doseMlKg * weight;
    return `${roundDose(dose)} ml`;
  }

  return "Dawka zależna od protokołu.";
}

function getVisibleDrugs() {
  const species = getSpecies();
  return emergencyDrugs.filter((drug) => {
    const matchesScenario = activeScenario === "all" || drug.scenario.includes(activeScenario);
    const matchesSpecies = !drug.species || drug.species === species;
    return matchesScenario && matchesSpecies;
  });
}

function calculateEmergencyDrugs() {
  const weight = getPatientWeightKg();
  const resultsContainer = document.getElementById("emergencyResults");
  const weightInfo = document.getElementById("emergencyWeightInfo");
  const scenarioHelp = document.getElementById("scenarioHelp");

  if (!resultsContainer || !weightInfo || !scenarioHelp) return;

  weightInfo.textContent = weight ? `Masa pacjenta: ${weight} kg` : "Masa pacjenta: brak prawidłowej wartości";
  scenarioHelp.textContent = scenarioInfo[activeScenario];
  resultsContainer.innerHTML = "";

  if (!weight) {
    resultsContainer.innerHTML = `
      <div class="empty-state">
        Wpisz masę pacjenta w kg w sekcji Pacjent. Bez masy kalkulator nie liczy, bo matematyka też ma swoje granice godności.
      </div>
    `;
    return;
  }

  const visibleDrugs = getVisibleDrugs();

  if (visibleDrugs.length === 0) {
    resultsContainer.innerHTML = `<div class="empty-state">Brak leków dla wybranej sytuacji i gatunku.</div>`;
    return;
  }

  visibleDrugs.forEach((drug) => {
    const card = document.createElement("article");
    card.className = "emergency-card";
    card.innerHTML = `
      <h3>${drug.name}</h3>
      <div class="badge-row">
        <span class="badge">${drug.route || "droga wg decyzji"}</span>
        <span class="badge">${drug.doseText}</span>
      </div>
      <p class="emergency-dose">${createDoseText(drug, weight)}</p>
      <p>${drug.note}</p>
    `;
    resultsContainer.appendChild(card);
  });
}

function openEmergencyModal() {
  const modal = document.getElementById("emergencyModal");
  if (!modal) return;
  calculateEmergencyDrugs();
  modal.classList.remove("hidden");
}

function closeEmergencyModal() {
  document.getElementById("emergencyModal")?.classList.add("hidden");
}

function setActiveScenario(scenario) {
  activeScenario = scenario;
  document.querySelectorAll(".scenario-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.scenario === scenario);
  });
  calculateEmergencyDrugs();
}

function setupEmergency() {
  document.getElementById("emergencyBtn")?.addEventListener("click", openEmergencyModal);
  document.getElementById("closeEmergencyBtn")?.addEventListener("click", closeEmergencyModal);
  document.getElementById("emergencyModal")?.addEventListener("click", (event) => {
    if (event.target.id === "emergencyModal") closeEmergencyModal();
  });
  document.querySelectorAll(".scenario-tab").forEach((button) => {
    button.addEventListener("click", () => setActiveScenario(button.dataset.scenario));
  });
  document.getElementById("weight")?.addEventListener("input", calculateEmergencyDrugs);
  document.getElementById("species")?.addEventListener("change", calculateEmergencyDrugs);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeEmergencyModal();
  });
}

function setupTheme() {
  const savedTheme = localStorage.getItem("anestezjologia-theme");
  if (savedTheme === "dark") document.body.classList.add("dark");

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("anestezjologia-theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
}

function setupAutosave() {
  const fields = ["patientName", "species", "weight", "asa", "notes"];
  fields.forEach((id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const saved = localStorage.getItem(`anestezjologia-${id}`);
    if (saved !== null) element.value = saved;
    element.addEventListener("input", () => localStorage.setItem(`anestezjologia-${id}`, element.value));
    element.addEventListener("change", () => localStorage.setItem(`anestezjologia-${id}`, element.value));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupAutosave();
  setupTheme();
  setupEmergency();
});
