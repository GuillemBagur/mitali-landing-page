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
    footer_privacy: "Privacy",
    footer_legal: "Legal",

    comming_soon_title: "Comming soon",
    comming_soon_explanation: `Yes... we know you're excited about having your virtual shelf!
    We are working hard (even during our vacation) to have the app
    ready as soon as possible. We are planning to launch it on August. Stay tuned!`,
    comming_soon_pic_legend: "We're working even on the beach!",

    aboutus_greeting: "Hi! It's Guiem Bagur",
    aboutus_bio: `
    I'm the founder of Mitali. I'm also the developer & mantainer
    (with the support of
    <a href="https://pangea.org/">Pangea.org</a>) of
    <a href="https://sunflowerseeds.pangea.org/" target="_blank"
      >SunflowerSeeds</a
    >, an opensource app thought for dyslexic people.
    <br />
    <br />
    I'm from Menorca, Spain. A really beautiful island, but
    nowadays is seriously affected by pollution. That's why I
    always try to create ecologic solutions.
    <br />
    <br />
    I love running and playing chess. Thanks to that, during these
    years, I've won some humble trophies. This has inspired me to
    create this app.
    `,
    aboutus_pic_legend: "Guiem during a trophy ceremony",

    faqs_title: "FAQs",
    faqs_introduction: `Here we will answer some of the most common Mitali related
    questions. If you dont find your answer here,
    <a href="mailto:guillembagurmoll@gmail.com"
      >please contact us</a
    >, we are happy to help you!`,

    faqs_what_is_mitali_title: "What is Mitali?",
    faqs_what_is_mitali_title: `It's an app to show all of your trophies to the Internet. Your
    profile will be linked to an URL, so you can share it with whoever
    you want.`,
    faqs_is_mitali_free_title: "Is Mitali free?",
    faqs_is_mitali_free_title: `Of course! We will keep a completely free plan forever. In the
    future, maybe we add some extra features, for premium users. But,
    if you create your account now, you'll have access to all the
    features for free forever!`,
    faqs_trophies_info_title: "How do you get all the trophies info?",
    faqs_trophies_info_title: `We use your real name to automatically search into sports
    federation websites, in search of your performances. If we miss
    any important trophy, you can
    <a href="mailto:guillembagurmoll@gmail.com">contact us</a> to
    claim it.`,
    faqs_identity_title: "My identity is already taken, what should I do?",
    faqs_identity_title: `If someone has used your name, you can claim that shelf. Please,
    <a href="mailto:guillembagurmoll@gmail.com">contact us</a>.`,
    faqs_paid_plan_title: "Do you have a paid plan?",
    faqs_paid_plan_title: `At the moment, no. But we're planning to add some extra features
    for users who want the best.`,
    join_waitlist_title: "Join our waitlist!",
    join_waitlist_explanation:
      "Mitali is already in beta phase! If you want to be one of the first people to have his own virtual shelf, you can join our waitlist.<br><br>We are gradually giving access to some users!",
    join_waitlist_button: "Join",
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
    footer_privacy: "Privacidad",
    footer_legal: "Aviso legal",

    comming_soon_title: "Muy pronto",
    comming_soon_explanation: `Sí... sabemos que tienes muchas ganas de tener ya tu <i>shelf</i> virtual. Estamos trabajando duro (hasta en nuestras vacaciones) para tener la aplicación lista lo antes posible. Tenemos planeado lanzarla en agosto. ¡Estate atent@! 👀`,
    comming_soon_pic_legend: "¡Trabajamos hasta cuando vamos a la playa!",

    aboutus_greeting: "¡Hola! Soy Guiem Bagur",
    aboutus_bio: `
    Soy el fundador de Mitali. También, soy el desarrollador y mantenidor 

    (con el soporte de
    <a href="https://pangea.org/">Pangea.org</a>) de
    <a href="https://sunflowerseeds.pangea.org/" target="_blank"
      >SunflowerSeeds</a
    >, una aplicación <i>opensource</i> pensada para personas con dislexia.
    <br />
    <br />
    Soy de Menorca, España. Una isla preciosa pero, hoy en día, se empiezan
    a notar los efectos de la polución. Es por eso que siempre intento
    crear soluciones ecológicas.
    <br />
    <br />
    Me encanta ir a correr y jugar al ajedrez. Gracias a estas dos aficiones,
    he ganado unos cuantos trofeos a lo largo de mi vida. Ésto me ha inspirado
    a crear esta aplicación.
    `,
    aboutus_pic_legend: "Guiem durante una entrega de trofeos",

    faqs_introduction:
      "Aquí responderemos algunas de las preguntas más comunes relacionadas con Mitali. Si no encuentras tu respuesta aquí, por favor, <a href='mailto:guillembagurmoll@gmail.com'>contáctanos</a>, ¡estaremos encantados de ayudarte!",

    faqs_what_is_mitali_title: "¿Qué es Mitali?",
    faqs_what_is_mitali_explanation:
      "Es una aplicación para mostrar todos tus trofeos en Internet. Tu perfil estará vinculado a una URL, para que puedas compartirla con quien desees.",

    faqs_is_mitali_free_title: "¿Es gratis?",
    faqs_is_mitali_free_explanation:
      "¡Por supuesto! Mantendremos un plan completamente gratuito para siempre. En el futuro, agreguemos algunas funciones adicionales para usuarios premium. Pero si creas tu cuenta ahora, ¡tendrás acceso a todas las funciones de forma gratuita para siempre!",

    faqs_trophies_info_title:
      "¿De dónde sacamos toda la información de los trofeos?",
    faqs_trophies_info_explanation:
      "Utilizamos tu nombre real para buscar automáticamente en los sitios web de las federaciones deportivas en busca de tus logros. Si nos falta algún trofeo importante, puedes <a href='mailto:guillembagurmoll@gmail.com'>contactarnos</a> para reclamarlo.",

    faqs_identity_title: "Mi identidad ya está tomada, ¿qué debo hacer?",
    faqs_identity_explanation:
      "Si alguien ha utilizado tu nombre, puedes reclamar esa estantería. Por favor, <a href='mailto:guillembagurmoll@gmail.com'>contáctanos</a>.",

    faqs_paid_plan_title: "¿Tenéis un plan de pago?",
    faqs_paid_plan_explanation:
      "De momento, no. Pero estamos planeando agregar algunas funciones adicionales para los usuarios que deseen lo mejor.",
    join_waitlist_title: "¡Únete a nuestra lista de espera!",
    join_waitlist_explanation:
      "¡Mitali ya está en fase beta! Si quieres ser uno de los primeros en tener tu propia estantería virtual, puedes unirte a nuestra lista de espera.<br><br>¡Estamos dando acceso gradualmente a algunos usuarios!",
    join_waitlist_button: "Unirse",
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
      "Escanejem llocs web oficials de federacions esportives i bases de dades per buscar les teves victòries i millors actuacions. Després, t'otorguem un trofeu cada vegada que t'ho mereixis.",
    section_2_feature_3_title: "Comparteix! 🎉",
    section_2_feature_3_p:
      "Comparteix la teva prestatgeria i sent-te orgullós de les teves victòries! També pot ajudar-te a donar-te a conèixer entre els clubs esportius.",
    see_a_video_button: "Veure un vídeo",
    section_3_title: "Tot a punt?",
    section_3_p: "Sigues un dels primers atletes amb un Shelf!",
    cta_2: "Crea la teva prestatgeria gratis",
    footer_contact: "Contacte",
    footer_aboutus: "Sobre nosaltres",
    footer_faqs: "Preguntes freqüents",
    footer_privacy: "Privacitat",
    footer_legal: "Avís legal",

    comming_soon_title: "Molt aviat",
    comming_soon_explanation: `Sí... sabem que tens moltes ganes de poder crear el teu <i>shelf</i> virtual. Estem treballant de valent (fins i tot, durant les nostres vacances) per tenir l'app a punt l'abans possible. Planegem publicar-la l'agost. Estigues atent/a! 👀`,
    comming_soon_pic_legend: "Treballem, fins i tot, quan anem a la platja!",

    aboutus_greeting: "Hola! Sóc en Guiem Bagur",
    aboutus_bio: `
    Sóc el fundador de Mitali. També, el desenvolupador i mantenidor 
    (amb el suport de 
    <a href="https://pangea.org/">Pangea.org</a>) de
    <a href="https://sunflowerseeds.pangea.org/" target="_blank"
      >SunflowerSeeds</a
    >, una aplicació <i>opensource</i> pensada per a persones amb dislèxia.
    <br />
    <br />
    Sóc de Menorca, Espanya. Una illa preciosa però, avui dia, es començen
    a notar els efectes de la pol·lució. És per això que sempre intenro
    crear solucions ecològiques.
    <br />
    <br />
    M'encanta córrer i jugar a escacs. Gràcies a aquestes dues aficions,
    he guanyat uns quants trofeus humils durant la meva vida. Això m'ha
    inspirat a crear aquesta aplicació.
    `,
    aboutus_pic_legend: "En Guiem durant una entrega de trofeus",

    faqs_introduction:
      "Aquí respondrem algunes de les preguntes més comunes relacionades amb Mitali. Si no trobes la teva resposta aquí, si us plau, <a href='mailto:guillembagurmoll@gmail.com'>contacta'ns</a>, estarem encantats d'ajudar-te!",

    faqs_what_is_mitali_title: "Què és Mitali?",
    faqs_what_is_mitali_explanation:
      "És una aplicació per mostrar tots els teus trofeus a Internet. El teu perfil estarà vinculat a una URL, perquè puguis compartir-la amb qui vulguis.",

    faqs_is_mitali_free_title: "És gratis?",
    faqs_is_mitali_free_explanation:
      "Per descomptat! Mantindrem un pla completament gratuït per sempre. En el futur, potser afegim algunes funcions addicionals per a usuaris premium. Però, si crees el teu compte ara, tindràs accés a totes les funcionalitats de forma gratuïta per sempre!",

    faqs_trophies_info_title: "D'on obteniu tota la informació dels trofeus?",
    faqs_trophies_info_explanation:
      "Utilitzem el teu nom real per buscar automàticament als llocs web de les federacions esportives, a la recerca dels teus resultats. Si ens falta algun trofeu important, pots <a href='mailto:guillembagurmoll@gmail.com'>contactar-nos</a> per reclamar-lo.",

    faqs_identity_title: "La meva identitat ja està presa, què haig de fer?",
    faqs_identity_explanation:
      "Si algú ha utilitzat el teu nom, pots reclamar aquella prestatgeria. Si us plau, <a href='mailto:guillembagurmoll@gmail.com'>contacta'ns</a>.",

    faqs_paid_plan_title: "Teniu un pla de pagament?",
    faqs_paid_plan_explanation:
      "De moment, no. Però estem planejant afegir algunes funcions addicionals per als usuaris que vulguin el millor.",
    join_waitlist_title: "Uneix-te a la nostra llista d'espera!",
    join_waitlist_explanation:
      "Mitali ja està en fase beta! Si vols ser un dels primers a tenir la teva pròpia prestatgeria virtual, pots unir-te a la nostra llista d'espera.<br><br>Estem donant accés progressivament a alguns usuaris!",
    join_waitlist_button: "Unir-se",
  },
};

function checkDefaultLang() {
  const availableLangs = Object.keys(langs);
  const userLangBrowser = navigator.language || navigator.userLanguage;
  const userLang = userLangBrowser.split("-")[0];
  console.log(userLang);
  if (!availableLangs.includes(userLang)) {
    return "es";
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
  console.log(lang);
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
  const { target } = e;
  const { value } = target;
  setLang(value);
});
