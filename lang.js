// --- GLOBAL TRANSLATION DICTIONARY ---
const translations = {
  en: {
    // Nav & Header
    navHome:'Home', navDash:'Dashboard', navAdmin:'Admin Login', guest:'Guest User',
    // Home Page
    heroTitle:'Your Health Journey Starts Here.',
    heroSub:'HealthPathway bridges the gap between patients and healthcare providers. We help you explore common diseases, understand medical tests, compare estimated hospital prices, and seamlessly prepare for your hospital visit — all in one secure platform.',
    btnEnter:'Enter Client Dashboard', whyTitle:'Why Choose HealthPathway?', whySub:'We simplify the often confusing process of navigating hospital visits, medical tests, and price estimates.',
    feat1Title:'Hospital Directory', feat1Desc:'Browse trusted medical facilities in Valencia City. View their exact addresses, emergency room contacts, and landlines to plan your visit.',
    feat2Title:'Disease & Symptom Guide', feat2Desc:'Understand 15 common diseases with clear definitions and comprehensive symptom lists. Educate yourself before consulting a doctor.',
    feat3Title:'Price Transparency', feat3Desc:'Compare estimated medical test prices across 5 major hospitals. Request a quotation to get a clear, confirmed estimate before you go.',
    howTitle:'How It Works', howSub:'Three simple steps to prepare for your next hospital visit.',
    step1:'Explore & Search', step1D:'Use our dashboard to look up symptoms, find hospitals, and check estimated test prices.',
    step2:'Request a Visit', step2D:'Select your preferred hospital, the tests you need, and submit a reservation request.',
    step3:'Receive a Quotation', step3D:'Our administrators will review your request, calculate the costs, and send you an official quotation to accept.',
    // Dashboard Page
    navOverview:'Overview', navHospitals:'Hospitals', navDiseases:'Diseases & Symptoms', navTests:'Test & Prices', navRequest:'Request Visit',
    titleOverview:'Information Dashboard', descOverview:'Browse our directory of hospitals, diseases, and medical tests.',
    welcome:'Welcome to HealthPathway', welcomeDesc:'Use the tabs above or the sidebar to explore all available data.',
    btnReqVisit:'Request a Hospital Visit', btnViewHosp:'View Hospitals', btnViewDis:'View Diseases',
    searchHosp:'Search hospitals by name or address...', searchDis:'Search diseases...', searchTests:'Search tests...',
    labelHosp:'Available Hospitals', labelDis:'Diseases & Symptoms', labelTests:'Test & Prices',
    filterHosp:'Filter by Hospital:', symptoms:'Symptoms:', definition:'Definition:',
    // Request Page
    titleReq:'Request Hospital Visit', subReq:'Fill in your details and select your preferred hospital, disease/symptoms, and required medical tests.',
    formTitle:'Visit Request', formDesc:'Your information will be sent to the selected hospital for review and quotation.',
    lblName:'Full Name *', lblContact:'Contact Number *', lblEmail:'Email Address', lblAddr:'Address', lblDob:'Date of Birth', lblGender:'Gender',
    optGender:'Select gender', optMale:'Male', optFemale:'Female', optOther:'Other', lblHosp:'Select Hospital *', optHosp:'-- Choose a hospital --',
    lblDis:'Disease / Symptoms *', optDis:'-- Choose a disease --', lblTests:'Select Medical Tests', testsDesc:'Prices shown are for your selected hospital.',
    lblDate:'Visit Date *', lblTime:'Visit Time *', lblNotes:'Additional Notes', btnSubmit:'Submit Visit Request',
    sumTitle:'Request Summary', lblSumHosp:'Hospital', lblSumDis:'Disease', lblSumTests:'Tests Selected', lblSumDate:'Visit Date', sumTotal:'Estimated Total',
    awaiting:'Awaiting quotation'
  },
  tl: {
    // Nav & Header
    navHome:'Bahay', navDash:'Dashboard', navAdmin:'Admin Login', guest:'Bisita',
    // Home Page
    heroTitle:'Ang Iyong Lakbay sa Kalusugan Nagsisimula Dito.',
    heroSub:'Ang HealthPathway ay nag-uugnay sa pagitan ng mga pasyente at tagapagbigay ng kalusugan. Tinutulungan ka naming tuklasin ang mga karaniwang sakit, maunawaan ang mga medikal na test, ihambing ang tinatayang presyo ng ospital, at maghanda para sa iyong bisita — lahat sa isang secure na platform.',
    btnEnter:'Pumasok sa Client Dashboard', whyTitle:'Bakit Piliin ang HealthPathway?', whySub:'Pinasimple namin ang proseso ng pag-navigate sa mga bisita sa ospital, medikal na test, at pagtantya ng presyo.',
    feat1Title:'Direktoryo ng Ospital', feat1Desc:'I-browse ang mga pinagkakatiwalaang medikal na pasilidad sa Valencia City. Tingnan ang kanilang mga address, ER contact, at landline.',
    feat2Title:'Gabay sa Sakit at Sintomas', feat2Desc:'Unawain ang 15 karaniwang sakit na may malinaw na kahulugan at listahan ng sintomas. Mag-aral bago kumonsulta sa doktor.',
    feat3Title:'Transparency sa Presyo', feat3Desc:'Ihambing ang tinatayang presyo ng medikal na test sa 5 pangunahing ospital. Humiling ng kwotasyon para sa malinaw na estimate.',
    howTitle:'Paano Ito Gumagana', howSub:'Tatlong simpleng hakbang para maghanda sa iyong susunod na bisita sa ospital.',
    step1:'Tuklasin at Maghanap', step1D:'Gamitin ang aming dashboard para maghanap ng sintomas, ospital, at presyo ng test.',
    step2:'Humiling ng Bisita', step2D:'Piliin ang iyong gustong ospital, mga test na kailangan, at magsumite ng request.',
    step3:'Tumanggap ng Kwotasyon', step3D:'Susuriin ng aming admin ang iyong request, kalkulahin ang gastos, at magpadala ng opisyal na kwotasyon.',
    // Dashboard Page
    navOverview:'Pangkalahatang-ideya', navHospitals:'Mga Ospital', navDiseases:'Mga Sakit at Sintomas', navTests:'Mga Test at Presyo', navRequest:'Humiling ng Bisita',
    titleOverview:'Dashboard ng Impormasyon', descOverview:'I-browse ang aming direktoryo ng mga ospital, sakit, at medikal na test.',
    welcome:'Maligayang Pagdating sa HealthPathway', welcomeDesc:'Gamitin ang mga tab sa itaas o sidebar para tuklasin ang lahat ng data.',
    btnReqVisit:'Humiling ng Bisita sa Ospital', btnViewHosp:'Tingnan ang mga Ospital', btnViewDis:'Tingnan ang mga Sakit',
    searchHosp:'Maghanap ng ospital...', searchDis:'Maghanap ng sakit...', searchTests:'Maghanap ng test...',
    labelHosp:'Mga Available na Ospital', labelDis:'Mga Sakit at Sintomas', labelTests:'Mga Test at Presyo',
    filterHosp:'I-filter ayon sa Ospital:', symptoms:'Mga Sintomas:', definition:'Kahulugan:',
    // Request Page
    titleReq:'Humiling ng Bisita sa Ospital', subReq:'Ilagay ang iyong mga detalye at piliin ang gustong ospital, sakit, at mga medikal na test.',
    formTitle:'Kahilingan sa Bisita', formDesc:'Ang iyong impormasyon ay ipapadala sa napiling ospital para sa pagsusuri at kwotasyon.',
    lblName:'Buong Pangalan *', lblContact:'Numero ng Telepono *', lblEmail:'Email Address', lblAddr:'Tirahan', lblDob:'Petsa ng Kapanganakan', lblGender:'Kasarian',
    optGender:'Pumili ng kasarian', optMale:'Lalaki', optFemale:'Babae', optOther:'Iba pa', lblHosp:'Pumili ng Ospital *', optHosp:'-- Pumili ng ospital --',
    lblDis:'Sakit / Sintomas *', optDis:'-- Pumili ng sakit --', lblTests:'Pumili ng Medikal na Test', testsDesc:'Ang mga presyo ay para sa napili mong ospital.',
    lblDate:'Petsa ng Bisita *', lblTime:'Oras ng Bisita *', lblNotes:'Karagdagang Tala', btnSubmit:'Isumite ang Kahilingan',
    sumTitle:'Buod ng Kahilingan', lblSumHosp:'Ospital', lblSumDis:'Sakit', lblSumTests:'Napiling Tests', lblSumDate:'Petsa ng Bisita', sumTotal:'Tinatayang Kabuuan',
    awaiting:'Naghihintay ng kwotasyon'
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

// This function is called automatically every time the language changes
function applyLang() {
  document.documentElement.lang = currentLang;
  localStorage.setItem('lang', currentLang);
  
  // Translate all elements with the data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = translations[currentLang][key];
      else el.textContent = translations[currentLang][key];
    }
  });

  // Update the toggle button text
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = currentLang === 'en' ? 'EN / TL' : 'TL / EN';

  // If the page has a re-render function, call it so grids update too
  if (typeof renderHospitalsTab === 'function') renderHospitalsTab();
  if (typeof renderDiseasesTab === 'function') renderDiseasesTab();
  if (typeof renderTestsTab === 'function') renderTestsTab();
  if (typeof renderTests === 'function') renderTests();
}

// Wire up the language button when the DOM loads
window.addEventListener('DOMContentLoaded', () => {
  applyLang();
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'tl' : 'en';
      applyLang();
    });
  }
});