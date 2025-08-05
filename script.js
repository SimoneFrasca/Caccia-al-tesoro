// 🔐 CREAZIONE UTENTI squadra_1 ... squadra_10
const USERS = {
  pantasemi: "ziwpdz",
  vizzochi: "pqjcsq",
  pampani: "jmmzva",
  follacciani: "zdknkl",
  pronghitti: "vzedfm",
  agline: "azrijl",
  sezzeleca: "gqcxgi",
  manicuti: "nqivkw"
};


// ✅ RISPOSTE CORRETTE PER OGNI SEZIONE
const RISPOSTE = {
  "sezione0": { key: "ciak_si_gira" },
  "sezione1": {
    q1: "assettate na cica",
    q2: "te voglio",
    q3: "una ne fa",
    q4: "pasqua co glio tizzo",
    q5: "se scarozza la macera",
    q6: "a lavora la vita e cionca",
    q7: "ma glosso scoccia",
    q8: "ci pizzica glio tavano",
    q9: "quando ci va a cavaglio la nepote",
    q10: "la possinaccoralla comme gode",
    q11: "fa piove nanzi a casema",
    q12: "e famme campa lasena",
    q13: "glio mazzareglio addo si glio mette",
    q14: "che belle cazzette che mammeta fa",
    q15: "va alla messa e non se nzonocchia",
    q16: "pecoraro sia benitto",
    q17: "si comme la castegna",
    q18: "glasino porta la paglia",
    q19: "triste chella casa addo laglina canta"
  },
  "sezione2": { q1: "garofano" },
  "sezione3": {
    q1: "Lucio Affilano",
    q2: "Marco Valerio Admeto",
    q3: "Persio Floriano",
    q4: "Quirico",
    q5: "Rutilio Scotti",
    q6: "Cesare Catarinozzi",
    q7: "Bartolomeo Titocci",
    q8: "Padre Domenico Mosetti",
    q9: "Sante De Sanctis",
    q10: "Don Salvatore Marsili",
    q11: "Ignazio De Romanis",
    q12: "Rodolfo Graziani",
    q13: "Vittorio Puccinelli",
    q14: "Monsignor Giovanni Rossi",
    q15: "Giulio Cesare Graziani",
    q16: "Luigi Ciuffa"
  },
  "sezione5": { key: "premio_oscar" },
  "sezione6": {},
  "sezione7": { costo: "70000000" },
  "sezione8": { antonio: "cruciverba" },
  "sezione9": { animale: "spinosa" },
  "sezione10": { key: "492867" },
  "sezione11": { cimitero: "35" },
  "sezione12": { letora: "16" },
  "sezione13": { tufo_rustico: "45" },
  "sezione14": { parco: ["259","260","261","262","263","264","265"]},
  "sezione15": { bottino: "10" },
};

// 🔑 CHIAVI PERSONALIZZATE PER SEZIONE 6
const CHIAVI_SEZIONE6 = {
  pantasemi: "vento",
  vizzochi: "acqua",
  pampani: "fuoco",
  follacciani: "terra",
  pronghitti: "fulmine",
  agline: "nebbia",
  sezzeleca: "ghiaccio",
  manicuti: "ferro"
};

// ⏳ TEMPI DI BLOCCO PER OGNI SEZIONE
// Questi sono i tempi in millisecondi per bloccare l'utente dopo risposte errate
// Puoi personalizzare questi valori in base alle tue esigenze
const TEMPI_BLOCCO = {
  /*sezione0: 60000,     // 1 minuto
  sezione1: 60000,     // 1 minuto
  sezione2: 0,     // non serve
  sezione3: 180000,     // 3 minuti
  sezione4: 0,     // non serve
  sezione5: 0,     // non serve
  sezione6: 0,     // non serve
  sezione7: 300000,    // 5 minuti
  sezione8: 300000,    // 5 minuti
  sezione9: 300000,    // 5 minuti
  sezione10: 600000,    // 10 minuti
  sezione11: 180000,     // 3 minuti
  sezione12: 180000,     // 3 minuti
  sezione13: 180000,     // 3 minuti
  sezione14: 180000,     // 3 minuti
  sezione15: 180000,     // 3 minuti*/
  sezione0: 2000,     // 1 minuto
  sezione1: 2000,     // 1 minuto
  sezione2: 2000,     // 1 minuto
  sezione3: 2000,     // 1 minuto
  sezione4: 2000,     // 1 minuto
  sezione5: 2000,     // 1 minuto
  sezione6: 2000,     // 1 minuto
  sezione7: 2000,    // 5 minuti
  sezione8: 2000,    // 5 minuti
  sezione9: 2000,    // 5 minuti
  sezione10: 2000,    // 10 minuti
  sezione11: 2000,     // 2 minuti
  sezione12: 2000,     // 2 minuti
  sezione13: 2000,     // 2 minuti
  sezione14: 2000,     // 2 minuti
  sezione15: 2000,     // 2 minuti
  // ... aggiungi tutte le sezioni che ti servono
};

// 📌 Imposta chiave personalizzata per sezione6
const utente = localStorage.getItem("utente");
if (utente in CHIAVI_SEZIONE6) {
  RISPOSTE["sezione6"].key = CHIAVI_SEZIONE6[utente];
}

// 🔓 Funzione di login
function login() {
  const u = document.getElementById("username").value.trim().toLowerCase();
  const p = document.getElementById("password").value.trim();

  if (USERS[u] && USERS[u] === p) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("utente", u);
    window.location.href = "sezione0.html";
  } else {
    document.getElementById("login-error").textContent = "Credenziali errate.";
  }
}

function normalizza(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function checkPrevious(sezionePrecedente) {
  if (localStorage.getItem(sezionePrecedente + "_completato") !== "true") {
    window.location.href = sezionePrecedente + ".html";
  }
}

function checkAnswers(sezione) {
  const risposteCorrette = RISPOSTE[sezione];
  let corrette = true;
  let feedbackMostrato = false;

  for (let key in risposteCorrette) {
    const input = document.getElementById(key);
    const val = input?.value || "";
    const rispostaUtente = normalizza(val);

    const rispostaCorretta = risposteCorrette[key];

    let corretta = false;
    if (Array.isArray(rispostaCorretta)) {
      corretta = rispostaCorretta.some(r => normalizza(r) === rispostaUtente);
    } else {
      corretta = normalizza(rispostaCorretta) === rispostaUtente;
    }

    if (!corretta) {
      corrette = false;
    }
  }

  if (corrette) {
    localStorage.setItem(sezione + "_completato", "true");
    localStorage.removeItem(sezione + "_errorCount");
    window.location.href = nextPage(sezione);
  } else {
    // Incrementa contatore errori
    let count = parseInt(localStorage.getItem(sezione + "_errorCount") || "0");
    count++;
    localStorage.setItem(sezione + "_errorCount", count);

    // Se più di 5 errori, mostra feedback dettagliato
    if (count >= 5) {
      mostraFeedback(sezione);
      feedbackMostrato = true;
    }

    const TEMPO_BLOCCO = TEMPI_BLOCCO[sezione] || 60000;
    const tempoSec = Math.floor(TEMPO_BLOCCO / 1000);
    document.getElementById("error").textContent = `Alcune risposte sono errate. Riprova tra ${tempoSec} secondi.`;
    const now = Date.now();
    localStorage.setItem(sezione + "_blockUntil", now + TEMPO_BLOCCO);
    disableForm();
    startTimer(sezione);
  }
}


function mostraFeedback(sezione) {
  const risposteCorrette = RISPOSTE[sezione];

  for (let key in risposteCorrette) {
    const input = document.getElementById(key);
    if (!input) continue;

    const rispostaUtente = normalizza(input.value || "");
    const rispostaCorretta = normalizza(risposteCorrette[key]);

    const esito = document.createElement("span");
    esito.style.marginLeft = "10px";

    if (rispostaUtente === rispostaCorretta) {
      esito.textContent = "✅";
      esito.style.color = "green";
    } else {
      esito.textContent = `❌`;
      esito.style.color = "red";
    }

    // Rimuovi eventuali feedback precedenti
    if (input.nextElementSibling && input.nextElementSibling.tagName === "SPAN") {
      input.nextElementSibling.remove();
    }

    input.parentNode.insertBefore(esito, input.nextSibling);
  }
}

function nextPage(sezione) {
  const numero = parseInt(sezione.replace("sezione", ""), 10);
  if (numero >= 0 && numero < 20) {
    return `sezione${numero + 1}.html`;
  }
  return "fine.html";
}

function disableForm() {
  document.querySelectorAll("input").forEach(i => i.disabled = true);
  document.getElementById("submit-btn").disabled = true;
}

function enableForm() {
  document.querySelectorAll("input").forEach(i => i.disabled = false);
  document.getElementById("submit-btn").disabled = false;
}

function checkBlock(sezione) {
  const blockUntil = parseInt(localStorage.getItem(sezione + "_blockUntil") || "0");
  const now = Date.now();

  if (blockUntil > now) {
    disableForm();
    startTimer(sezione);
  }
}

function startTimer(sezione) {
  const timerEl = document.getElementById("timer");
  const interval = setInterval(() => {
    const remaining = parseInt(localStorage.getItem(sezione + "_blockUntil")) - Date.now();
    if (remaining <= 0) {
      clearInterval(interval);
      enableForm();
      timerEl.textContent = "";
      document.getElementById("error").textContent = "";
    } else {
      timerEl.textContent = "Attendi " + Math.ceil(remaining / 1000) + " secondi...";
    }
  }, 500);
}

// 🔄 Fine script
