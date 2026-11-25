// shared data and helpers
const hospitals=[
{name:"Valencia Polymedic General Hospital, Inc.",addr:"P-13, Sayre Highway, Hagkol / Poblacion, Valencia City, 8709 Bukidnon",er:"N/A",land:"088-828-8000 / 088-828-5784"},
{name:"Laviña General Hospital",addr:"ML Quezon Street, Poblacion, Valencia City, 8709 Bukidnon",er:"0906-603-1019",land:"088-828-6150 / 088-828-3210"},
{name:"Adventist Medical Center",addr:"A. Aguilar Street, Poblacion, Valencia City, 8709 Bukidnon",er:"0965-192-4530",land:"088-828-7777"},
{name:"Medidas Medical Center",addr:"P-10 Guinoyuran Road, Valencia City, 8709 Bukidnon",er:"0965-396-1283 / 0917-150-4469",land:"088-828-6889"},
{name:"Esther Hospital",addr:"Purok 2, Sayre Highway, Valencia City, 8709 Bukidnon",er:"N/A",land:"088-828-4444 / 088-828-4445"}
];
const diseases=[{name:"Urinary Tract Infection (UTI)",def:"Bacterial infection of urinary system.",symptoms:["Pain in side/abdomen/pelvis","Cloudy urine","Frequent urination","Burning when urinating","Blood in urine","Fever/chills"]}];
let selectedHospital=localStorage.getItem('hospital')||hospitals[0].name;
let selectedTests=JSON.parse(localStorage.getItem('tests')||'[]');
const checklistItems=["Valid ID","Doctor's request","Medical records","Previous lab results","Prescription/referral","PhilHealth info","Other documents"];
let checklistState=JSON.parse(localStorage.getItem('checklist')||'{}');
function save(){localStorage.setItem('hospital',selectedHospital);localStorage.setItem('tests',JSON.stringify(selectedTests));localStorage.setItem('checklist',JSON.stringify(checklistState));}
function navHtml(){return `<header><nav><div class="logo"><img src="928836873_2474342203098920_5816522049615883325_n.png" alt="Health Pathway"></div><ul>
<li><a href="index.html">Home</a></li><li><a href="dashboard.html">Dashboard</a></li><li><a href="prices.html">Test & Prices</a></li><li><a href="hospitals.html">Hospitals</a></li><li><a href="diseases.html">Diseases & Symptoms</a></li><li><a href="visit.html">My Visit</a></li></ul></nav></header>`;}