const langSelect = document.getElementById("lang-select");

const langs = {
  en: {
    web_introduction: `
    The first virtual shelf, to share your trophies & achievements
                  with all of your followers!
                  <br />
                  <br />
                  <strong>For free, forever.</strong>
    `,
    cta_1: "Create your shelf",
    section_1_title: "A simple link",
    section_1_p: `You can add it to your Instagram bio, paste it on your
    personal website or share it with your friends!`,
    your_name: "your_name",
    see_a_demo_button: "See a Demo",
    section_2_title: "How does it work?",
    section_2_feature_1_title: "You register",
    section_2_feature_1_p: `When you register we ask you to put your real name and
    your favorite sports (and other disciplines).`,
    section_2_feature_2_title: "We do some magic",
    section_2_feature_2_p: `We scan official sports federation websites and
    databases to search for your wins and best performances.
    Then, we give you a trophy every time you deserve it.`,
    section_2_feature_3_title: "You share! 🎉",
    section_2_feature_3_p: `Share your shelf and be proud of your achievements! It
    can also help you to introduce yourself to sportsclubs.`,
    see_a_video_button: "See a video",
    section_3_title: "Get it",
    section_3_p: "Be one of the first athletes with a Shelf!",
    cta_2: "Create your shelf for free",
    footer_contact: "Contact",
    footer_aboutus: "About us",
    footer_faqs: "FAQ's",
    footer_suppoer: "Support",
  },

  es: {
    web_introduction:
      "¡La primera estantería virtual para compartir tus trofeos y logros con todos tus seguidores! <br /> <br /> <strong>¡Gratis, para siempre!</strong>",
    cta_1: "Crea tu Shelf",
    section_1_title: "Con un simple enlace",
    section_1_p:
      "Puedes agregarlo a tu biografía de Instagram, pegarlo en tu página web personal o compartirlo con tus amigos.",
    your_name: "tu_nombre",
    see_a_demo_button: "Ver una demostración",
    section_2_title: "¿Cómo funciona?",
    section_2_feature_1_title: "Tú te registras",
    section_2_feature_1_p:
      "Cuando te registras, te pedimos que pongas tu nombre real y tus deportes favoritos (y otras disciplinas).",
    section_2_feature_2_title: "Nosotros hacemos un poco de magia",
    section_2_feature_2_p:
      "Exploramos los sitios web y bases de datos oficiales de federaciones deportivas para buscar tus victorias y mejores actuaciones. ¡Después, te otorgamos un trofeo cada vez que te lo mereces!",
    section_2_feature_3_title: "¡Comparte! 🎉",
    section_2_feature_3_p:
      "¡Comparte tu Shelf y siéntete orgulloso de tus logros! También puede ayudarte a darte a conocer entre clubes deportivos.",
    see_a_video_button: "Ver un video",
    section_3_title: "¿Estás list@?",
    section_3_p: "¡Sé uno de los primeros atletas con un Shelf!",
    cta_2: "Crea tu Shelf gratis",
    footer_contact: "Contacto",
    footer_aboutus: "Sobre nosotros",
    footer_faqs: "Preguntas frecuentes",
    footer_support: "Soporte",
  },

  ca: {
    web_introduction:
      "La primera prestatgeria virtual per compartir els teus trofeus i èxits amb tots els teus seguidors! <br /> <br /> <strong>Gratuït, per sempre.</strong>",
    cta_1: "Crea la teva prestatgeria",
    section_1_title: "Amb un simple enllaç",
    section_1_p:
      "Pots afegir-lo a la teva biografia d'Instagram, enganxar-lo al teu lloc web personal o compartir-lo amb els teus amics!",
    your_name: "el_teu_nom",
    see_a_demo_button: "Veure una demostració",
    section_2_title: "Com funciona?",
    section_2_feature_1_title: "Tu et registres",
    section_2_feature_1_p:
      "Quan et registres, et demanem que posis el teu nom real i els teus esports preferits (i altres disciplines).",
    section_2_feature_2_title: "Nosaltres fem una mica de màgia",
    section_2_feature_2_p:
      "Escanejem llocs web oficials de federacions esportives i bases de dades per buscar les teves victòries i millors actuacions. Després, t'atorguem un trofeu cada vegada que t'ho mereixis.",
    section_2_feature_3_title: "Comparteix! 🎉",
    section_2_feature_3_p:
      "Comparteix la teva prestatgeria i sent-te orgullós dels teus èxits! També pot ajudar-te a donar-te a conèixer entre els clubs esportius.",
    see_a_video_button: "Veure un vídeo",
    section_3_title: "Tot a punt?",
    section_3_p: "Sigues un dels primers atletes amb un Shelf!",
    cta_2: "Crea la teva prestatgeria de franc",
    footer_contact: "Contacte",
    footer_aboutus: "Sobre nosaltres",
    footer_faqs: "Preguntes freqüents",
    footer_support: "Suport",
  },
};

function checkDefaultLang() {
  const availableLangs = Object.keys(langs);
  const userLang = navigator.language || navigator.userLanguage;
  if (!availableLangs.includes(userLang.split("-")[0])) {
    return "en";
  }

  return userLang;
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

function loadLang() {
  let lang = localStorage.getItem("lang");
  if (!lang) lang = checkDefaultLang();
  localStorage.setItem("lang", lang);
  return lang;
}

function translate(lang) {
  const allRoles = Object.keys(langs[lang]);
  for (let role of allRoles) {
    try {
      const el = document.querySelector(`[data-role="${role}"]`);
      const text = langs[lang][role];
      console.log(el, text);
      if (!text) continue;
      el.innerHTML = text;
    } catch (err) {
      console.log(err);
    }
  }
}

function execTranslation() {
  const lang = loadLang();
  translate(lang);
  langSelect.value = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  execTranslation();
});

langSelect.addEventListener("change", (e) => {
  const {target} = e;
  const {value} = target;
  setLang(value);
})