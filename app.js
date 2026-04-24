const APP_KEY = 'anestezjologia-techwet-v2';
const PIN_KEY = 'anestezjologia-pin-v1';
const DRAFT_KEY = 'anestezjologia-draft-v1';
const THEME_KEY = 'anestezjologia-theme-v1';

const AUTHOR = 'Tech.Wet Woroch Marcin';
const APP_NAME = 'Anestezjologia';
const defaultPin = '123071';

const DOG_BREEDS = [
  'Affenpinscher',
  'Airedale Terrier',
  'Akita',
  'Alaskan Malamute',
  'American Bully',
  'American Cocker Spaniel',
  'American Eskimo Dog',
  'American Foxhound',
  'American Staffordshire Terrier',
  'Australian Cattle Dog',
  'Australian Shepherd',
  'Australian Silky Terrier',
  'Basenji',
  'Basset Hound',
  'Beagle',
  'Bearded Collie',
  'Beauceron',
  'Bedlington Terrier',
  'Berneński pies pasterski',
  'Bichon Frise',
  'Bloodhound',
  'Bokser',
  'Bolończyk',
  'Border Collie',
  'Border Terrier',
  'Boston Terrier',
  'Briard',
  'Bull Terrier',
  'Bulldog angielski',
  'Bulldog francuski',
  'Bullmastiff',
  'Cairn Terrier',
  'Cane Corso',
  'Cavalier King Charles Spaniel',
  'Charcik włoski',
  'Chart afgański',
  'Chart polski',
  'Chihuahua',
  'Chinese Crested Dog',
  'Chow Chow',
  'Cocker Spaniel angielski',
  'Collie długowłosy',
  'Collie krótkowłosy',
  'Coton de Tulear',
  'Dalmatyńczyk',
  'Doberman',
  'Dog argentyński',
  'Dog de Bordeaux',
  'Dog niemiecki',
  'English Springer Spaniel',
  'Entlebucher',
  'Eurasier',
  'Field Spaniel',
  'Fila Brasileiro',
  'Flat Coated Retriever',
  'Fox Terrier krótkowłosy',
  'Fox Terrier szorstkowłosy',
  'Golden Retriever',
  'Gończy polski',
  'Greyhound',
  'Gryfonik brukselski',
  'Hawańczyk',
  'Hiszpański pies wodny',
  'Hovawart',
  'Irish Soft Coated Wheaten Terrier',
  'Irish Terrier',
  'Irish Wolfhound',
  'Jack Russell Terrier',
  'Jamnik długowłosy',
  'Jamnik krótkowłosy',
  'Jamnik szorstkowłosy',
  'Kai',
  'Keeshond',
  'King Charles Spaniel',
  'Labrador Retriever',
  'Lagotto Romagnolo',
  'Lakeland Terrier',
  'Landseer',
  'Leonberger',
  'Lhasa Apso',
  'Maltańczyk',
  'Manchester Terrier',
  'Mastif angielski',
  'Mastif neapolitański',
  'Mastif tybetański',
  'Miniature American Shepherd',
  'Mops',
  'Mudi',
  'Norfolk Terrier',
  'Norwich Terrier',
  'Nova Scotia Duck Tolling Retriever',
  'Nowofundland',
  'Owczarek australijski Kelpie',
  'Owczarek belgijski Groenendael',
  'Owczarek belgijski Laekenois',
  'Owczarek belgijski Malinois',
  'Owczarek belgijski Tervueren',
  'Owczarek kaukaski',
  'Owczarek niemiecki',
  'Owczarek podhalański',
  'Owczarek szkocki długowłosy',
  'Papillon',
  'Parson Russell Terrier',
  'Pekińczyk',
  'Petit Basset Griffon Vendeen',
  'Pinczer austriacki',
  'Pinczer miniaturowy',
  'Pinczer średni',
  'Pointer angielski',
  'Polski owczarek nizinny',
  'Pomeranian',
  'Pudel duży',
  'Pudel miniaturowy',
  'Pudel toy',
  'Pudel średni',
  'Puli',
  'Rhodesian Ridgeback',
  'Rottweiler',
  'Samojed',
  'Schipperke',
  'Schnauzer miniaturowy',
  'Schnauzer olbrzym',
  'Schnauzer średni',
  'Seter angielski',
  'Seter irlandzki',
  'Seter szkocki Gordon',
  'Shar Pei',
  'Sheltie',
  'Shiba',
  'Shih Tzu',
  'Siberian Husky',
  'Skye Terrier',
  'Spaniel kontynentalny miniaturowy',
  'Springer Spaniel angielski',
  'Staffordshire Bull Terrier',
  'Terier australijski',
  'Terier irlandzki',
  'Terier szkocki',
  'Terier walijski',
  'Tosa Inu',
  'Welsh Corgi Cardigan',
  'Welsh Corgi Pembroke',
  'West Highland White Terrier',
  'Whippet',
  'Wyżeł czeski fousek',
  'Wyżeł niemiecki krótkowłosy',
  'Wyżeł niemiecki szorstkowłosy',
  'Wyżeł weimarski',
  'Wyżeł węgierski krótkowłosy',
  'Wyżeł węgierski szorstkowłosy',
  'Yorkshire Terrier'
];

const CAT_BREEDS = [
  'Abyssinian',
  'American Bobtail Longhair',
  'American Bobtail Shorthair',
  'American Curl Longhair',
  'American Curl Shorthair',
  'American Shorthair',
  'American Wirehair',
  'Australian Mist',
  'Balinese',
  'Bengal',
  'Birman',
  'Bombay',
  'British Longhair',
  'British Shorthair',
  'Burmese',
  'Burmilla',
  'Chartreux',
  'Chausie',
  'Cornish Rex',
  'Cymric',
  'Devon Rex',
  'Don Sphynx',
  'Egyptian Mau',
  'European',
  'Exotic',
  'German Rex',
  'Havana Brown',
  'Japanese Bobtail Longhair',
  'Japanese Bobtail Shorthair',
  'Khao Manee',
  'Korat',
  'Kurilean Bobtail Longhair',
  'Kurilean Bobtail Shorthair',
  'LaPerm Longhair',
  'LaPerm Shorthair',
  'Lykoi',
  'Maine Coon',
  'Manx',
  'Munchkin',
  'Nebelung',
  'Neva Masquerade',
  'Norwegian Forest Cat',
  'Ocicat',
  'Oriental Longhair',
  'Oriental Shorthair',
  'Persian',
  'Peterbald',
  'Pixie-bob',
  'Ragamuffin',
  'Ragdoll',
  'Russian Blue',
  'Savannah',
  'Scottish Fold Longhair',
  'Scottish Fold Shorthair',
  'Selkirk Rex Longhair',
  'Selkirk Rex Shorthair',
  'Serengeti',
  'Siamese',
  'Siberian',
  'Singapura',
  'Snowshoe',
  'Sokoke',
  'Somali',
  'Sphynx',
  'Thai',
  'Tonkinese',
  'Toyger',
  'Turkish Angora',
  'Turkish Van',
  'Ukrainian Levkoy'
];

const DRUG_PRESETS = [
  { name: 'Ketamina', species: 'Oba', category: 'Analgezja', mgMl: 100, mgKg: '', mgKgOptions: [0.5, 1, 2], mlPerKg: '', route: 'IV', routeOptions: ['IV', 'IM'], note: 'Analgezja: wybierz 0.5 mg/kg, 1 mg/kg lub 2 mg/kg.' },
  { name: 'Propofol', species: 'Oba', category: 'Indukcja', mgMl: 10, mgKg: '', mgKgOptions: [1, 2], mlPerKg: '', route: 'IV', routeOptions: ['IV'], note: 'Indukcja: wybierz 1 mg/kg lub 2 mg/kg. Podawać powoli do efektu.' },
  { name: 'Alfaxalon', species: 'Oba', category: 'Indukcja', mgMl: 10, mgKg: 2, mgKgOptions: [], mlPerKg: '', route: 'IV', routeOptions: ['IV'], note: 'Dawkę dopasować do premedykacji.' },
  { name: 'Diazepam', species: 'Oba', category: 'Premedykacja / Indukcja', mgMl: 5, mgKg: 0.2, mgKgOptions: [], mlPerKg: '', route: 'IV', routeOptions: ['IV'], note: 'Benzodiazepina: może być stosowana w premedykacji i indukcji.' },
  { name: 'Midazolam', species: 'Oba', category: 'Premedykacja / Indukcja', mgMl: 5, mgKg: 0.2, mgKgOptions: [], mlPerKg: '', route: 'IV', routeOptions: ['IV', 'IM'], note: 'Benzodiazepina: może być stosowana w premedykacji i indukcji.' },
  { name: 'Butorfanol', species: 'Oba', category: 'Analgezja', mgMl: 10, mgKg: 0.2, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Dobra sedacja i analgezja trzewna.' },
  { name: 'Buprenorfina', species: 'Kot', category: 'Analgezja', mgMl: 0.3, mgKg: 0.02, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Często stosowana u kotów.' },
  { name: 'Metadon', species: 'Pies', category: 'Analgezja / Premedykacja', mgMl: 10, mgKg: 0.2, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Pies: 0.2 mg/kg. IM w premedykacji lub IV w analgezji.' },
  { name: 'Metadon', species: 'Kot', category: 'Analgezja / Premedykacja', mgMl: 10, mgKg: 0.1, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Kot: 0.1 mg/kg. IM w premedykacji lub IV w analgezji.' },
  { name: 'Morfina', species: 'Pies', category: 'Analgezja', mgMl: 10, mgKg: 0.3, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Możliwa sedacja i wymioty.' },
  { name: 'Dexmedetomidyna', species: 'Oba', category: 'Premedykacja', mgMl: 0.5, mgKg: 0.005, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Małe dawki, ostrożnie u pacjentów ryzyka.' },
  { name: 'Medetomidyna', species: 'Oba', category: 'Premedykacja', mgMl: 1, mgKg: 0.02, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Sedacja i analgezja.' },
  { name: 'Acepromazyna', species: 'Pies', category: 'Premedykacja', mgMl: 2, mgKg: 0.02, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Ostrożnie przy hipotensji.' },
  { name: 'Atropina', species: 'Oba', category: 'Premedykacja', mgMl: 0.5, mgKg: 0.02, mgKgOptions: [], mlPerKg: '', route: 'SC', routeOptions: ['SC', 'IM', 'IV'], note: 'Według wskazań klinicznych.' },
  { name: 'Glikopirolat', species: 'Oba', category: 'Premedykacja', mgMl: 0.2, mgKg: 0.01, mgKgOptions: [], mlPerKg: '', route: 'IM', routeOptions: ['IM', 'IV'], note: 'Alternatywa dla atropiny.' },
  { name: 'Meloksykam', species: 'Oba', category: 'NLPZ', mgMl: 5, mgKg: 0.2, mgKgOptions: [], mlPerKg: '', route: 'SC', routeOptions: ['SC', 'IV'], note: 'Sprawdzić nawodnienie i nerki.' },
  { name: 'Metacam', species: 'Oba', category: 'NLPZ', mgMl: 20, mgKg: '', mgKgOptions: [], mlPerKg: 0.04, route: 'SC', routeOptions: ['SC', 'IV'], note: 'Schemat: 0.4 ml / 10 kg' },
  { name: 'Biovetalgin', species: 'Oba', category: 'Analgezja', mgMl: 500, mgKg: '', mgKgOptions: [], mlPerKg: 0.1, route: 'SC', routeOptions: ['SC', 'IM'], note: 'Schemat: 1 ml / 10 kg • SC/IM' },
  { name: 'Biofazolin', species: 'Oba', category: 'Antybiotyk', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.2, route: 'IV', routeOptions: ['IV'], note: 'Schemat: 1 ml / 5 kg' },
  { name: 'Cefazolina', species: 'Oba', category: 'Antybiotyk', mgMl: 100, mgKg: 22, mgKgOptions: [], mlPerKg: '', route: 'IV', routeOptions: ['IV'], note: 'Często okołooperacyjnie.' },
  { name: 'Lidokaina', species: 'Pies', category: 'Miejscowe / CRI', mgMl: 20, mgKg: 2, mgKgOptions: [], mlPerKg: '', route: 'IV', routeOptions: ['IV', 'Miejscowo'], note: 'Do bolusa lub CRI według schematu.' },
  { name: 'Bupiwakaina', species: 'Oba', category: 'Miejscowe', mgMl: 5, mgKg: 2, mgKgOptions: [], mlPerKg: '', route: 'Miejscowo', routeOptions: ['Miejscowo'], note: 'Blokady miejscowe.' },
  { name: 'Maropitant', species: 'Oba', category: 'Przeciwwymiotny', mgMl: 10, mgKg: 1, mgKgOptions: [], mlPerKg: '', route: 'SC', routeOptions: ['SC'], note: 'Przedmedykacja u pacjentów z ryzykiem wymiotów.' },
  { name: 'Synulox', species: 'Oba', category: 'Antybiotyk', substance: 'amoksycylina + kwas klawulanowy', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.1, doseRangeMlPerKg: [0.05, 0.1], route: 'SC', routeOptions: ['SC', 'IM'], note: 'Antybiotyk: zakres 1 ml / 20 kg do 1 ml / 10 kg. Podanie SC/IM.' },
  { name: 'Enroxil', species: 'Oba', category: 'Antybiotyk', substance: 'enrofloksacyna', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.1, route: 'SC', routeOptions: ['SC'], note: 'Antybiotyk: 1 ml / 10 kg. Wszystkie gatunki. Podanie SC.' },
  { name: 'Tolfine', species: 'Oba', category: 'NLPZ / przeciwbólowy', substance: 'kwas tolfenamowy', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.1, route: 'SC', routeOptions: ['SC'], note: 'NLPZ: 1 ml / 10 kg. Podanie SC.' },
  { name: 'Prevomax (maropitant)', species: 'Oba', category: 'Przeciwwymiotny', substance: 'maropitant', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.1, route: 'SC', routeOptions: ['SC'], note: 'Przeciwwymiotny: 1 ml / 10 kg. Podanie SC.' },
  { name: 'Dexafast', species: 'Oba', category: 'Steryd / przeciwzapalny', substance: 'deksametazon', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.05, route: 'SC', routeOptions: ['SC', 'IM'], note: 'Steryd: 0.5 ml / 10 kg. Podanie SC/IM.' },
  { name: 'Lincospectin', species: 'Oba', category: 'Antybiotyk', substance: 'linkomycyna + spektinomycyna', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.2, route: 'SC', routeOptions: ['SC'], note: 'Antybiotyk: 1 ml / 5 kg. Podanie SC.' },
  { name: 'Clamoxyl', species: 'Oba', category: 'Antybiotyk', substance: 'amoksycylina', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.1, route: 'SC', routeOptions: ['SC'], note: 'Antybiotyk: 1 ml / 10 kg. Podanie SC.' },
  { name: 'Catosal', species: 'Oba', category: 'Wspomagający / metaboliczny', substance: 'butafosfan + cyjanokobalamina', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.1, route: 'SC', routeOptions: ['SC'], note: 'Preparat wspomagający: 1 ml / 10 kg. Podanie SC.' },
  { name: 'Marfloxin', species: 'Pies', category: 'Antybiotyk', substance: 'marbofloksacyna', mgMl: '', mgKg: 2, mgKgOptions: [], mlPerKg: 0.1, route: 'SC', routeOptions: ['SC'], note: 'Pies: 2 mg/kg, praktycznie 1 ml / 10 kg. Podanie SC.' },
  { name: 'Marfloxin', species: 'Kot', category: 'Antybiotyk', substance: 'marbofloksacyna', mgMl: '', mgKg: 2, mgKgOptions: [], mlPerKg: 0.1, route: 'SC', routeOptions: ['SC'], note: 'Kot: 2 mg/kg, praktycznie 0.5 ml / 5 kg. Podanie SC.' },
  { name: 'Vecort', species: 'Oba', category: 'Steryd / przeciwzapalny', substance: 'kortykosteroid', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.05, route: 'SC', routeOptions: ['SC'], note: 'Steryd: 0.5 ml / 10 kg. Podanie SC.' },
  { name: 'Medetomidyna – chirurgiczna zdrowy pacjent', species: 'Pies', category: 'Premedykacja / protokół chirurgiczny', substance: 'medetomidyna', mgMl: 1, mgKg: '', mgKgOptions: [], mlPerKg: 0.01, route: 'IM', routeOptions: ['IM'], note: 'Pies: premedykacja do zabiegów chirurgicznych zdrowego pacjenta. Schemat: 0.01 ml/kg IM.' },
  { name: 'Metadon – chirurgiczny zdrowy pacjent', species: 'Pies', category: 'Premedykacja / protokół chirurgiczny', substance: 'metadon', mgMl: 10, mgKg: '', mgKgOptions: [], mlPerKg: 0.02, route: 'IM', routeOptions: ['IM'], note: 'Pies: premedykacja do zabiegów chirurgicznych zdrowego pacjenta. Schemat: 0.02 ml/kg IM.' },
  { name: 'Medetomidyna – chirurgiczna zdrowy pacjent', species: 'Kot', category: 'Premedykacja / protokół chirurgiczny', substance: 'medetomidyna', mgMl: 1, mgKg: '', mgKgOptions: [], mlPerKg: 0.04, route: 'IM', routeOptions: ['IM'], note: 'Kot: premedykacja do zabiegów chirurgicznych zdrowego pacjenta. Schemat: 0.2 ml / 5 kg IM.' },
  { name: 'Metadon – chirurgiczny zdrowy pacjent', species: 'Kot', category: 'Premedykacja / protokół chirurgiczny', substance: 'metadon', mgMl: 10, mgKg: '', mgKgOptions: [], mlPerKg: 0.02, route: 'IM', routeOptions: ['IM'], note: 'Kot: premedykacja do zabiegów chirurgicznych zdrowego pacjenta. Schemat: 0.1 ml / 5 kg IM.' },
  { name: 'Furosemid 5%', species: 'Oba', category: 'Diuretyk', substance: 'furosemid', mgMl: '', mgKg: '', mgKgOptions: [], mlPerKg: 0.1, route: 'SC', routeOptions: ['SC', 'IV'], note: 'Diuretyk: 1 ml / 10 kg. Podanie SC/IV.' }
];

const PROTOCOL_PRESETS = [
  {
    id: 'premed-chirurgia-zdrowy-pacjent',
    name: 'Premedykacja do zabiegów chirurgicznych (zdrowy pacjent)',
    short: 'Medetomidyna + metadon',
    description: 'Gotowy protokół objętościowy dla zdrowego pacjenta: pies i kot.',
    species: 'Oba',
    target: 'Premedykacja',
    drugs: [
      { name: 'Medetomidyna', species: 'Pies', route: 'IM', mlPerKg: 0.01, doseLabel: '0.01 ml/kg', note: 'Pies: medetomidyna 0.01 ml/kg IM.' },
      { name: 'Metadon', species: 'Pies', route: 'IM', mlPerKg: 0.02, doseLabel: '0.02 ml/kg', note: 'Pies: metadon 0.02 ml/kg IM.' },
      { name: 'Medetomidyna', species: 'Kot', route: 'IM', mlPerKg: 0.04, doseLabel: '0.2 ml / 5 kg', note: 'Kot: medetomidyna 0.2 ml / 5 kg IM.' },
      { name: 'Metadon', species: 'Kot', route: 'IM', mlPerKg: 0.02, doseLabel: '0.1 ml / 5 kg', note: 'Kot: metadon 0.1 ml / 5 kg IM.' }
    ]
  },
  { id: 'medetomidine-methadone-im', name: 'Medetomidyna + Metadon IM', short: 'Alfa2-agonista + opioid', description: 'Premedykacja domięśniowa: medetomidyna + metadon.', species: 'Oba', target: 'Premedykacja', drugs: [{ name: 'Medetomidyna', route: 'IM' }, { name: 'Metadon', route: 'IM' }] },
  { id: 'methadone-midazolam', name: 'Metadon + Midazolam', short: 'Opioid + benzodiazepina', description: 'Premedykacja / pacjent bólowy.', species: 'Oba', target: 'Premedykacja', drugs: [{ name: 'Metadon', route: 'IM' }, { name: 'Midazolam', route: 'IV' }] },
  { id: 'butorphanol-midazolam', name: 'Butorfanol + Midazolam', short: 'Badanie diagnostyczne', description: 'Spokojniejsze badanie diagnostyczne.', species: 'Oba', target: 'Premedykacja', drugs: [{ name: 'Butorfanol', route: 'IM' }, { name: 'Midazolam', route: 'IM' }] }
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
  doseWeight: '',
  doseDrugName: '',
  doseMgKg: '',
  doseMgMl: '',
  doseMlPerKg: '',
  dosePresetNote: '',
  doseRoute: '',
  doseMgKgChoice: '',
  librarySearch: '',
  librarySpecies: '',
  libraryWeight: '',
  libraryDrugName: ''
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

function getPresetByNameAndSpecies(name, species) {
  if (!name) return null;

  const exact = DRUG_PRESETS.find(
    (drug) => drug.name === name && (drug.species === 'Oba' || drug.species === species)
  );

  if (exact) return exact;

  return DRUG_PRESETS.find((drug) => drug.name === name) || null;
}

function getSelectedDrugPreset() {
  return getPresetByNameAndSpecies(state.doseDrugName, state.doseSpecies || '');
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

function buildProtocolPreview(protocol, species, weight) {
  if (!protocol || !species || !weight) return [];

  return protocol.drugs
    .filter((item) => !item.species || item.species === 'Oba' || item.species === species)
    .map((item) => {
      const preset = getPresetByNameAndSpecies(item.name, species);
      const route = item.route || preset?.route || '';
      const w = Number(weight || 0);
      const itemMlPerKg = Number(item.mlPerKg || 0);

      let totalMg = 0;
      let totalMl = 0;

      if (itemMlPerKg > 0 && w > 0) {
        totalMl = w * itemMlPerKg;
        const mgMl = Number(preset?.mgMl || 0);
        totalMg = mgMl > 0 ? totalMl * mgMl : 0;
      } else if (preset) {
        const calculated = calculateDoseValues(weight, preset);
        totalMg = calculated.totalMg;
        totalMl = calculated.totalMl;
      } else {
        return null;
      }

      const mgKg = item.mgKg !== undefined ? item.mgKg : preset?.mgKg;
      const doseLabel = item.doseLabel || (mgKg !== '' && mgKg !== undefined ? `${mgKg} mg/kg` : 'wg schematu');

      return {
        name: item.displayName || preset?.name || item.name,
        route,
        mgKg: mgKg !== '' && mgKg !== undefined ? mgKg : '',
        doseLabel,
        totalMg,
        totalMl,
        note: item.note || preset?.note || ''
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
    .map((item) => `${item.name} ${item.doseLabel || (item.mgKg !== '' ? item.mgKg + ' mg/kg' : '')} ${item.route}`.trim())
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

  // 🔥 PRO: pokaż więcej na start, ale nie wszystko
  if (!breedValue) return options.slice(0, 30);

  return options.filter((breed) =>
    breed.toLowerCase().includes(breedValue)
  );
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

  let filtered = DRUG_PRESETS;

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
    [drug.name, drug.category, drug.species, drug.substance || '', drug.note].join(' ').toLowerCase().includes(value)
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
  if (!preset) return '';

  const routes = Array.isArray(preset.routeOptions) ? preset.routeOptions : [];
  if (!routes.length) return '';

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
              <div class="small">Dawka: ${escapeHtml(item.doseLabel || (item.mgKg !== '' ? String(item.mgKg) + ' mg/kg' : 'wg schematu'))}</div>
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
  const weight = Number(state.doseWeight || 0);
  const mgKg = Number(state.doseMgKg || 0);
  const mgMl = Number(state.doseMgMl || 0);
  const mlPerKg = Number(state.doseMlPerKg || 0);

  let totalMg = 0;
  let totalMl = 0;

  if (weight > 0 && mlPerKg > 0) {
    totalMl = weight * mlPerKg;
    totalMg = mgMl > 0 ? totalMl * mgMl : 0;
  } else if (weight > 0 && mgKg > 0) {
    totalMg = weight * mgKg;
    totalMl = mgMl > 0 ? totalMg / mgMl : 0;
  }

  const mgBox = document.getElementById('doseTotalMg');
  const mlBox = document.getElementById('doseTotalMl');
  const noteBox = document.getElementById('dosePresetNote');

  if (mgBox) mgBox.textContent = `${totalMg.toFixed(2)} mg`;
  if (mlBox) mlBox.textContent = `${totalMl.toFixed(2)} ml`;
  if (noteBox) noteBox.textContent = state.dosePresetNote || 'Brak dodatkowej uwagi.';
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
    } else if (state.currentPage === 'biblioteka') {
      app.innerHTML = libraryView();
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
          <div class="menu-sub">Dawki, premedykacja i gotowe protokoły</div>
        </button>

        <button class="menu-card menu-card-library" data-nav="biblioteka">
          <div class="menu-icon">📚</div>
          <div class="menu-title">3. Biblioteka leków</div>
          <div class="menu-sub">Baza leków z szybkim przeliczeniem dawki</div>
        </button>

        <button class="menu-card menu-card-settings" data-nav="ustawienia">
          <div class="menu-icon">⚙️</div>
          <div class="menu-title">4. Ustawienia</div>
          <div class="menu-sub">PIN aplikacji, motyw i przyszłe opcje personalizacji</div>
        </button>

        <button class="menu-card menu-card-thanks" data-nav="podziekowania">
          <div class="menu-icon">🙏</div>
          <div class="menu-title">5. Szczególne podziękowania</div>
          <div class="menu-sub">Autor aplikacji i podziękowania</div>
        </button>
      </div>
    </div>
  `;
}

function dosesView() {
  const weight = Number(state.doseWeight || 0);
  const mgKg = Number(state.doseMgKg || 0);
  const mgMl = Number(state.doseMgMl || 0);
  const mlPerKg = Number(state.doseMlPerKg || 0);

  let totalMg = 0;
  let totalMl = 0;

  if (weight > 0 && mlPerKg > 0) {
    totalMl = weight * mlPerKg;
    totalMg = mgMl > 0 ? totalMl * mgMl : 0;
  } else if (weight > 0 && mgKg > 0) {
    totalMg = weight * mgKg;
    totalMl = mgMl > 0 ? totalMg / mgMl : 0;
  }

  return `
    <div class="app">
      <div class="toolbar">
        <button class="btn secondary" id="backHomeBtn">Powrot do menu</button>
      </div>

      <div class="card">
        <div class="card-body">
          <h3>Liczba dawek</h3>

          <div class="toolbar">
            <button class="btn ${state.doseTab === 'calculator' ? 'primary-btn' : 'secondary'}" id="doseTabCalculator">
              Kalkulator
            </button>
            <button class="btn ${state.doseTab === 'protocols' ? 'primary-btn' : 'secondary'}" id="doseTabProtocols">
              Protokoły
            </button>
          </div>

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
              <input id="doseWeight" type="number" inputmode="decimal" step="0.01" value="${escapeHtml(state.doseWeight || '')}">
            </div>
          </div>

          <div class="space-16"></div>

          ${
            state.doseTab === 'calculator'
              ? `
            <div class="grid g2">
              <div class="breed-field">
                <label class="label">Nazwa leku</label>
                <input id="doseDrugName" value="${escapeHtml(state.doseDrugName || '')}" placeholder="Np. ketamina" autocomplete="off">
                ${renderDrugSuggestionsMarkup()}
              </div>

              ${renderDoseOptionMarkup()}

              <div>
                <label class="label">Dawka (mg/kg)</label>
                <input id="doseMgKg" type="number" inputmode="decimal" step="0.01" value="${escapeHtml(state.doseMgKg || '')}">
              </div>

              <div>
                <label class="label">Stężenie preparatu (mg/ml)</label>
                <input id="doseMgMl" type="number" inputmode="decimal" step="0.01" value="${escapeHtml(state.doseMgMl || '')}">
              </div>

              <div>
                <label class="label">Schemat objętościowy (ml/kg)</label>
                <input id="doseMlPerKg" type="number" inputmode="decimal" step="0.001" value="${escapeHtml(state.doseMlPerKg || '')}">
              </div>

              ${renderDoseRouteMarkup()}
            </div>

            <div class="space-16"></div>

            <div class="card inner-card">
              <div class="card-body">
                <h3>Wynik</h3>

                <div class="results-grid">
                  <div class="result-box">
                    <div class="result-label">Dawka całkowita</div>
                    <div class="result-value" id="doseTotalMg">${totalMg.toFixed(2)} mg</div>
                  </div>

                  <div class="result-box">
                    <div class="result-label">Objętość do podania</div>
                    <div class="result-value" id="doseTotalMl">${totalMl.toFixed(2)} ml</div>
                  </div>
                </div>

                <div class="space-12"></div>

                <div class="small" id="dosePresetNote">${escapeHtml(state.dosePresetNote || 'Brak dodatkowej uwagi.')}</div>

                <div class="space-12"></div>

                <button class="btn primary-btn full-btn" id="addDoseToPlanBtn">
                  Dodaj wynik do planu leków
                </button>
              </div>
            </div>
          `
              : `
            <div class="card inner-card">
              <div class="card-body">
                <h3>Protokoły / kombinacje leków</h3>
                <div class="small">Na start: gotowe kombinacje do premedykacji.</div>
              </div>
            </div>

            <div class="space-16"></div>

            ${renderProtocolCardsMarkup()}

            <div class="space-16"></div>

            ${renderProtocolPreviewMarkup()}
          `
          }
        </div>
      </div>
    </div>
  `;
}


function formatDoseNumber(value) {
  const n = Number(value || 0);
  if (!Number.isFinite(n)) return '0';
  if (n === 0) return '0';
  if (Math.abs(n) < 1) return n.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
  return n.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
}

function getLibraryDrugs() {
  const q = (state.librarySearch || '').trim().toLowerCase();
  const species = state.librarySpecies || '';
  return DRUG_PRESETS.filter((drug) => {
    const speciesOk = !species || drug.species === 'Oba' || drug.species === species;
    const haystack = [drug.name, drug.category, drug.species, drug.substance || '', drug.note || '', drug.route || '']
      .join(' ')
      .toLowerCase();
    return speciesOk && (!q || haystack.includes(q));
  });
}

function getDrugMlResult(drug, weightValue) {
  const weight = Number(weightValue || 0);
  if (weight <= 0) return 'Wpisz masę ciała';

  if (Array.isArray(drug.doseRangeMlPerKg) && drug.doseRangeMlPerKg.length === 2) {
    const min = weight * Number(drug.doseRangeMlPerKg[0]);
    const max = weight * Number(drug.doseRangeMlPerKg[1]);
    return `${formatDoseNumber(min)}–${formatDoseNumber(max)} ml`;
  }

  const mlPerKg = Number(drug.mlPerKg || 0);
  if (mlPerKg > 0) return `${formatDoseNumber(weight * mlPerKg)} ml`;

  const mgKg = Number(drug.mgKg || 0);
  const mgMl = Number(drug.mgMl || 0);
  if (mgKg > 0 && mgMl > 0) return `${formatDoseNumber((weight * mgKg) / mgMl)} ml`;
  if (mgKg > 0) return `${formatDoseNumber(weight * mgKg)} mg`;

  return 'Brak danych do wyliczenia';
}

function getSelectedLibraryDrug() {
  if (!state.libraryDrugName) return null;
  const species = state.librarySpecies || '';
  return DRUG_PRESETS.find(
    (drug) =>
      drug.name === state.libraryDrugName &&
      (!species || drug.species === 'Oba' || drug.species === species)
  ) || DRUG_PRESETS.find((drug) => drug.name === state.libraryDrugName) || null;
}

function renderLibraryListMarkup() {
  const drugs = getLibraryDrugs();
  if (!drugs.length) return `<div class="small">Nie znaleziono leku.</div>`;

  return drugs
    .map((drug) => `
      <button type="button" class="drug-library-pick ${state.libraryDrugName === drug.name ? 'active' : ''}" data-library-drug="${escapeHtml(drug.name)}">
        <div>
          <div class="menu-title">${escapeHtml(drug.name)}</div>
          <div class="small">${escapeHtml(drug.category || '')}${drug.substance ? ' • ' + escapeHtml(drug.substance) : ''}</div>
        </div>
        <span class="badge">${escapeHtml(drug.species || 'Oba')}</span>
      </button>
    `)
    .join('');
}

function renderLibraryCalculatorMarkup() {
  const drug = getSelectedLibraryDrug();

  if (!drug) {
    return `
      <div class="card inner-card">
        <div class="card-body">
          <h3>Kalkulator</h3>
          <div class="small">Najpierw wybierz lek z listy po lewej, potem wpisz masę ciała.</div>
        </div>
      </div>
    `;
  }

  return `
    <div class="card inner-card">
      <div class="card-body">
        <h3>${escapeHtml(drug.name)}</h3>
        <div class="small">${escapeHtml(drug.category || '')}${drug.substance ? ' • ' + escapeHtml(drug.substance) : ''}</div>

        <div class="space-16"></div>

        <label class="label">Masa ciała (kg)</label>
        <input id="libraryWeight" type="number" inputmode="decimal" step="0.01" value="${escapeHtml(state.libraryWeight || state.doseWeight || state.form.weight || '')}" placeholder="Np. 12.5">

        <div class="space-16"></div>

        <div class="results-grid">
          <div class="result-box">
            <div class="result-label">Wynik</div>
            <div class="result-value small-result" id="libraryResult">${escapeHtml(getDrugMlResult(drug, state.libraryWeight || state.doseWeight || state.form.weight || ''))}</div>
          </div>
          <div class="result-box">
            <div class="result-label">Droga podania</div>
            <div class="result-value small-result">${escapeHtml((drug.routeOptions || [drug.route || '']).filter(Boolean).join(' / '))}</div>
          </div>
        </div>

        <div class="space-12"></div>
        <div class="small drug-note">${escapeHtml(drug.note || '')}</div>
      </div>
    </div>
  `;
}

function refreshLibraryListOnly() {
  const box = document.getElementById('libraryList');
  if (box) box.innerHTML = renderLibraryListMarkup();
  bindLibraryDrugButtons();
}

function refreshLibraryCalculatorOnly() {
  const box = document.getElementById('libraryCalculator');
  if (box) box.innerHTML = renderLibraryCalculatorMarkup();
  bindLibraryWeightInput();
}

function libraryView() {
  return `
    <div class="app">
      <div class="toolbar">
        <button class="btn secondary" id="backHomeBtn">Powrót do menu</button>
      </div>

      <div class="card">
        <div class="card-body">
          <h3>Biblioteka leków</h3>
          <div class="small">Osobna baza leków z kalkulatorem objętości. Wyszukiwarka działa bez przeładowywania całego ekranu.</div>

          <div class="space-16"></div>

          <div class="grid g2">
            <div>
              <label class="label">Szukaj leku</label>
              <input id="librarySearch" value="${escapeHtml(state.librarySearch || '')}" placeholder="Np. synulox, antybiotyk, maropitant" autocomplete="off">
            </div>
            <div>
              <label class="label">Gatunek</label>
              <select id="librarySpecies">
                <option value="">Wszystkie</option>
                <option value="Pies" ${state.librarySpecies === 'Pies' ? 'selected' : ''}>Pies</option>
                <option value="Kot" ${state.librarySpecies === 'Kot' ? 'selected' : ''}>Kot</option>
              </select>
            </div>
          </div>

          <div class="space-16"></div>

          <div class="library-layout">
            <div id="libraryList" class="drug-library-list">
              ${renderLibraryListMarkup()}
            </div>
            <div id="libraryCalculator">
              ${renderLibraryCalculatorMarkup()}
            </div>
          </div>
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
          <p>
            Szczególne podziękowania kieruję do mojej przyjaciółki Honoraty za ogromne wsparcie, motywację i wiarę w ten projekt od samego początku.
          </p>
          <p>
            Dziękuję za bycie pierwszą osobą testującą aplikację oraz za wszystkie cenne uwagi, które realnie przyczyniły się do jej rozwoju.
          </p>
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

function addDoseToPlan() {
  const weight = Number(state.doseWeight || 0);
  const mgKg = Number(state.doseMgKg || 0);
  const mgMl = Number(state.doseMgMl || 0);
  const mlPerKg = Number(state.doseMlPerKg || 0);
  const drugName = (state.doseDrugName || '').trim();
  const preset = getSelectedDrugPreset();

  if (!drugName) {
    alert('Najpierw wpisz lub wybierz nazwę leku.');
    return;
  }

  if (weight <= 0) {
    alert('Najpierw wpisz masę ciała.');
    return;
  }

  if (preset && Array.isArray(preset.mgKgOptions) && preset.mgKgOptions.length && !mgKg) {
    alert('Najpierw wybierz dawkę mg/kg z listy.');
    return;
  }

  let totalMg = 0;
  let totalMl = 0;

  if (weight > 0 && mlPerKg > 0) {
    totalMl = weight * mlPerKg;
    totalMg = mgMl > 0 ? totalMl * mgMl : 0;
  } else if (weight > 0 && mgKg > 0) {
    totalMg = weight * mgKg;
    totalMl = mgMl > 0 ? totalMg / mgMl : 0;
  } else {
    alert('Uzupełnij dawkę mg/kg albo schemat ml/kg.');
    return;
  }

  const newRow = {
    name: drugName,
    dose: `${totalMg.toFixed(2)} mg / ${totalMl.toFixed(2)} ml`,
    route: state.doseRoute || '',
    notes: state.dosePresetNote || ''
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

  saveDraft();
  alert('Dodano lek do planu leków.');
}


function bindLibraryDrugButtons() {
  document.querySelectorAll('[data-library-drug]').forEach((el) => {
    el.onclick = () => {
      state.libraryDrugName = el.dataset.libraryDrug || '';
      refreshLibraryListOnly();
      refreshLibraryCalculatorOnly();
    };
  });
}

function bindLibraryWeightInput() {
  const libraryWeight = document.getElementById('libraryWeight');
  if (!libraryWeight) return;
  if (!state.libraryWeight && libraryWeight.value) state.libraryWeight = libraryWeight.value;
  libraryWeight.oninput = (e) => {
    state.libraryWeight = e.target.value;
    const drug = getSelectedLibraryDrug();
    const result = document.getElementById('libraryResult');
    if (result && drug) result.textContent = getDrugMlResult(drug, state.libraryWeight);
  };
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


  const librarySearch = document.getElementById('librarySearch');
  if (librarySearch) {
    librarySearch.oninput = (e) => {
      state.librarySearch = e.target.value;
      refreshLibraryListOnly();
    };
  }

  const librarySpecies = document.getElementById('librarySpecies');
  if (librarySpecies) {
    librarySpecies.onchange = (e) => {
      state.librarySpecies = e.target.value;
      const selected = getSelectedLibraryDrug();
      if (!selected) state.libraryDrugName = '';
      refreshLibraryListOnly();
      refreshLibraryCalculatorOnly();
    };
  }

  bindLibraryDrugButtons();
  bindLibraryWeightInput();

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

  document.querySelectorAll('[data-field]').forEach((el) => {
    el.oninput = (e) => {
      const field = e.target.dataset.field;
      state.form[field] = e.target.value;

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
      saveDraft();
      refreshVitalsAlertsOnly();
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
render();
