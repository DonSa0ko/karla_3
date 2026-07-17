const HITOS = [
  {
    fecha:  "17 · 08 · 2025",
    titulo: "El primer sendero, de muchos que vendrán",
    texto:  "Me acuerdo mucho de este día, donde esta era nuestra segunda cita, y qué mejor que haciendo deporte jeje. Ese día iba con toda la personalidad para poder explicarte que quería ser algo más que \u201Camigos\u201D, pero en el buen sentido, ya que de verdad estaba muy enganchado a ti en estas fechas. Algo que recuerdo con mucho cariño era la tensión que había entre nosotros dos al bajar el sendero, y se terminó de una forma bakán comiendo McDonald\u2019s SJASKSAA. Había que recuperar esas calorías quemadas deaaa.",
    foto:   "fotos/1.jpg",
    icono:  "💛"
  },
  {
    fecha:  "10 · 03 · 2026",
    titulo: "Nueva temporada",
    texto:  "Este día, te iba a ver después de 198 días amor mío, y la verdad es que estaba re nervioso ese día! Desde las maletas que no me llegaban y a la vez tu mensaje \u201C¡LLEGUÉ AL AEROPUERTO!\u201D mi estómago hizo BOOOOM, pero una vez ya al ver a mi familia y a ti desde la lejanía, todo ese nerviosismo quedó atrás, donde entre el millón de fotos que sacaste, quedó esta para la historia como nuestro reencuentro y yo diría que el inicio de una nueva temporada en nuestras vidas como pareja en ese entonces.",
    foto:   "fotos/2.jpg",
    icono:  "💛"
  },
  {
    fecha:  "04 · 04 · 2026",
    titulo: "Día familiar especial",
    texto:  "Me acuerdo mucho de este día, ya que fue la primera vez que estuve en tu casa y pude pasar más tiempo con tu familia. Si bien ya los conocía de antes, como cuando subimos el cerro San Cristóbal por el Domingo de Ramos o cuando fue tu ceremonia de juramento, este día era especial: era un día entero donde ya pude conocer un poco más de ti y de toda tu querida familia. Ese día de verdad que me sentí como en casa, donde tuvimos una mañana de pelis viendo Crepúsculo y Weapons (ni idea de por qué no la terminamos...). Comimos muy rico ese día, y una de las comidas que más me sorprendió fue la torta de piña, que de verdad estaba 1000/10.",
    foto:   "fotos/3.jpg",
    icono:  "💛"
  },
  {
    fecha:  "19 · 04 · 2026",
    titulo: "Primer día siendo tu pololo",
    texto:  "Si bien esta foto fue al finalizar este lindo fin de semana junto a ti, diría que es el resumen de todo lo que ocurrió en esa salida a Reñaca, donde fuimos como pareja y volvimos siendo pololos. Algo que me trae muy bonitos recuerdos de ese día fue la antesala a pedirte pololeo, ya que desde la mañana yo te iba diciendo \u201CUUUUUUUFFFFF QUE ME GUSTARÍA VER EL ATARDECER EN LA PLAYA...\u201D, y como te dije tanto ello, me acuerdo que nos pegamos un tuto a las 17:00 donde tú, media dormida, decías \u201CBenji... hay que ir a ver el atardecer... no quiero que te enojes conmigo\u201D (pd: nunca en la vida me enojaría por algo así amor mío). También me acuerdo que mis amigas pusieron todo casi al final de la playa SJAJSJAJSAJSAJ, tú me decías \u201Cyo creo que aquí está bien amor\u201D y yo cagándome por dentro diciendo: \u201CEs que me gustaría un poco más allá\u201D. Bueno, al final de todo, salió muy bien mi propuesta y siendo las 18:01 de ese día, iniciaba nuestra relación de manera formal, mi bella y dulce polola.",
    foto:   "fotos/4.jpg",
    icono:  "💛"
  },
  {
    fecha:  "18 · 05 · 2026",
    titulo: "UN MES",
    texto:  "Este día cayó un día lunes, un día que fue muy ajetreado para ambos, pero que recuerdo con mucho cariño, ya que a pesar de todo el cansancio acumulado por detrás, nos dimos el tiempo de tener una linda cita para nuestro primer cumplemes, donde fuimos a jugar juegos, nos sacamos fotos y comimos rico. En este momento ambos teníamos nuestros regalos jeje, y fue un momento muy emocionante, ya que es algo nuevo el poder recibir este tipo de regalos y ver todo lo que hiciste: cada recorte pegado de manera precisa, tus bellas palabras, y el lindo gesto de pegar una de las fotos en el regalo (también había pensado en ello JSJSAJSJA). Hace de verdad muy lindo el gesto, mi chica catan bella preciosa...",
    foto:   "fotos/5.jpg",
    icono:  "💛"
  },
  
  {
    fecha:  "Hoy",
    titulo: "Y seguimos caminando juntos",
    texto:  "Y bueno, ya siendo 18 de julio de 2026, hoy se cumplen 3 meses de que iniciamos nuestra relación, y de verdad no tengo idea de cómo agradecerte por estos 3 meses, donde he tenido la fortuna de vivir momentos inolvidables junto a ti, a tu familia, y a todos los que te rodean. En estas fechas no pudimos estar juntos para celebrar como se debe, pero los fines de semana anteriores los quería hacer especiales en honor a ti y a nuestra relación. Por eso mismo, hago entrega de este camino de recuerdos, el cual servirá para poder recordar algunos momentos en los cuales me he sentido amado, escuchado, feliz, emocionado, extasiado y un millón de cosas que no sabría cómo describir. Pero en resumen: me siento el hombre más suertudo de la faz de la tierra, ya que tengo a la mejor polola de todo el universo, y aunque estemos a 13.400, 14 u 899 km, siempre trataré de ser el pololo que mereces hoy y siempre, porque eso es lo que merece alguien como tú, mi bella y dulce karlirta. La amo muchísimo, mi corazón mío <3",
    foto:   "fotos/hoy.jpg",
    icono:  "💛"
  }
];

function aplicarHora(){
  const forzado = new URLSearchParams(location.search).get("hora");
  const validos = ["manana","tarde","atardecer","noche"];
  let modo;

  if (forzado && validos.includes(forzado)) {
    modo = forzado;
  } else {
    const ahora = new Date();
    const h = ahora.getHours(), m = ahora.getMinutes();
    if (h >= 6 && h < 12)                       modo = "manana";
    else if (h >= 12 && h < 18)                 modo = "tarde";
    else if (h === 20 && m === 0 || (h >= 18 && h < 20)) modo = "atardecer";
    else                                        modo = "noche";
  }
  document.body.className = modo;
}
aplicarHora();
setInterval(aplicarHora, 60 * 1000);

(function crearEstrellas(){
  const cont = document.getElementById("estrellas");
  for (let i = 0; i < 60; i++){
    const e = document.createElement("div");
    e.className = "estrella";
    e.style.left = Math.random() * 100 + "%";
    e.style.top  = Math.random() * 55 + "%";
    e.style.animationDelay    = (Math.random() * 3).toFixed(2) + "s";
    e.style.animationDuration = (2 + Math.random() * 3).toFixed(2) + "s";
    cont.appendChild(e);
  }
})();

const ESPACIADO = 165;
const MARGEN_SUP = 70;

function construirMapa(){
  const mapa = document.getElementById("mapa");
  const svg  = document.getElementById("camino-svg");
  const n    = HITOS.length;

  const alto = MARGEN_SUP + (n - 1) * ESPACIADO + 140;
  mapa.style.height = alto + "px";
  svg.setAttribute("viewBox", `0 0 100 ${alto}`);
  svg.setAttribute("preserveAspectRatio", "none");

  const puntos = HITOS.map((_, i) => ({
    x: i % 2 === 0 ? 28 : 72,
    y: MARGEN_SUP + i * ESPACIADO
  }));

  let d = `M ${puntos[0].x} ${puntos[0].y}`;
  for (let i = 1; i < puntos.length; i++){
    const a = puntos[i-1], b = puntos[i];
    const ymedia = (a.y + b.y) / 2;
    d += ` C ${a.x} ${ymedia}, ${b.x} ${ymedia}, ${b.x} ${b.y}`;
  }
  svg.querySelector(".camino-borde").setAttribute("d", d);
  svg.querySelector(".camino-centro").setAttribute("d", d);

  HITOS.forEach((hito, i) => {
    const btn = document.createElement("button");
    btn.className = "nivel" + (i === n - 1 ? " final" : "");
    btn.style.left = puntos[i].x + "%";
    btn.style.top  = puntos[i].y + "px";
    btn.style.animationDelay = (i * 0.12) + "s";
    btn.setAttribute("aria-label", `${hito.titulo} — ${hito.fecha}`);
    btn.innerHTML = `
      <span class="icono">${hito.icono}</span>
      <span class="num">${i === n - 1 ? "HOY" : i + 1}</span>
      <span class="etiqueta">${hito.fecha}</span>`;
    btn.addEventListener("click", () => abrirModal(hito));
    mapa.appendChild(btn);
  });
}
construirMapa();

const velo   = document.getElementById("velo");
const fotoEl = document.getElementById("modal-foto");

function abrirModal(hito){
  fotoEl.src = hito.foto;
  fotoEl.alt = hito.titulo;
  document.getElementById("modal-fecha").textContent  = hito.fecha;
  document.getElementById("modal-titulo").textContent = hito.titulo;
  document.getElementById("modal-texto").textContent  = hito.texto;
  velo.classList.add("abierto");
  document.body.style.overflow = "hidden";
}
function cerrarModal(){
  velo.classList.remove("abierto");
  document.body.style.overflow = "";
}

document.getElementById("btn-cerrar").addEventListener("click", cerrarModal);
velo.addEventListener("click", e => { if (e.target === velo) cerrarModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarModal(); });

fotoEl.addEventListener("error", () => {
  fotoEl.src = "data:image/svg+xml;utf8," + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>
       <rect width='100%' height='100%' fill='#f3e8f7'/>
       <text x='50%' y='50%' font-size='60' text-anchor='middle' dominant-baseline='middle'>💜</text>
     </svg>`);
});

const ACCIONES = [
  { clase: "jugando",   emoji: "🎾", duracion: 3200 },
  { clase: "comiendo",  emoji: "🍖", duracion: 4000 },
  { clase: "durmiendo", emoji: "💤", duracion: 5200 }
];

function accionPerro(perro){

  if (perro.classList.contains("en-accion")) return;

  const accion = ACCIONES[Math.floor(Math.random() * ACCIONES.length)];
  perro.classList.add("en-accion", accion.clase);

  const r = perro.getBoundingClientRect();
  const burbuja = document.createElement("div");
  burbuja.className = "burbuja-accion";
  burbuja.textContent = accion.emoji;
  burbuja.style.left = (r.left + r.width * 0.55) + "px";
  burbuja.style.top  = (r.top - 8) + "px";
  document.body.appendChild(burbuja);

  setTimeout(() => {
    perro.classList.remove("en-accion", accion.clase);
    burbuja.remove();
  }, accion.duracion);
}

document.getElementById("luca").addEventListener("click",  () => accionPerro(document.getElementById("luca")));
document.getElementById("kaika").addEventListener("click", () => accionPerro(document.getElementById("kaika")));


const FECHA_LANZAMIENTO = new Date(2026, 6, 18, 0, 0);
const HASH_CLAVE = "f6337dce66f318712251e58867294cfd47ca2240c688f8f84c0e9286902fe838";
const MAX_INTENTOS = 5;
const BLOQUEO_MS = 30000;

const candado    = document.getElementById("candado");
const vistaCuenta = document.getElementById("vista-cuenta");
const vistaClave  = document.getElementById("vista-clave");
const inputClave  = document.getElementById("clave");
const btnEntrar   = document.getElementById("btn-entrar");
const errorClave  = document.getElementById("error-clave");

async function sha256(texto){
  const datos = new TextEncoder().encode(texto);
  const hash = await crypto.subtle.digest("SHA-256", datos);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
}

function guardar(k, v){ try { localStorage.setItem(k, v); } catch(e){} }
function leer(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }

function abrirRegalo(){
  candado.classList.add("abierto");
  document.body.style.overflow = "";
}

function mostrarVistaClave(){
  vistaCuenta.hidden = true;
  vistaClave.hidden = false;
  inputClave.focus();
}

async function sesionValida(){
  const token = leer("camino-token");
  if (!token) return false;
  return token === await sha256(HASH_CLAVE + "|abierto");
}

function mostrarError(msj){
  errorClave.textContent = msj;
  errorClave.hidden = false;
  errorClave.style.animation = "none";
  void errorClave.offsetWidth;
  errorClave.style.animation = "";
}

async function comprobarClave(){
  const bloqueoHasta = Number(leer("camino-bloqueo")) || 0;
  if (Date.now() < bloqueoHasta){
    const seg = Math.ceil((bloqueoHasta - Date.now()) / 1000);
    mostrarError("Demasiados intentos. Espera " + seg + " segundos…");
    return;
  }
  const intento = inputClave.value.trim();
  if (!intento){ mostrarError("Escribe la llave primero 😉"); return; }

  btnEntrar.disabled = true;
  const hash = await sha256(intento);
  btnEntrar.disabled = false;

  if (hash === HASH_CLAVE){
    guardar("camino-token", await sha256(HASH_CLAVE + "|abierto"));
    guardar("camino-intentos", "0");
    abrirRegalo();
  } else {
    const intentos = (Number(leer("camino-intentos")) || 0) + 1;
    guardar("camino-intentos", String(intentos));
    if (intentos >= MAX_INTENTOS){
      guardar("camino-bloqueo", String(Date.now() + BLOQUEO_MS));
      guardar("camino-intentos", "0");
      mostrarError("Demasiados intentos. Espera 30 segundos…");
    } else {
      mostrarError("Esa no es la llave… pídesela a Benja 💛");
    }
    inputClave.value = "";
  }
}

function revisarCandado(){
  if (candado.classList.contains("abierto")){
    document.body.style.overflow = "";
    return true;
  }
  const falta = FECHA_LANZAMIENTO - new Date();
  if (falta <= 0){
    if (vistaClave.hidden && !candado.classList.contains("abierto")) mostrarVistaClave();
    return true;
  }
  document.body.style.overflow = "hidden";
  const s = Math.floor(falta / 1000);
  document.getElementById("c-dias").textContent  = Math.floor(s / 86400);
  document.getElementById("c-horas").textContent = String(Math.floor(s % 86400 / 3600)).padStart(2, "0");
  document.getElementById("c-min").textContent   = String(Math.floor(s % 3600 / 60)).padStart(2, "0");
  document.getElementById("c-seg").textContent   = String(s % 60).padStart(2, "0");
  return false;
}

(async function iniciarCandado(){
  if (await sesionValida()){ abrirRegalo(); return; }
  if (!revisarCandado()){
    const reloj = setInterval(() => {
      if (revisarCandado()) clearInterval(reloj);
    }, 1000);
  }
})();

document.getElementById("link-llave").addEventListener("click", mostrarVistaClave);
btnEntrar.addEventListener("click", comprobarClave);
inputClave.addEventListener("keydown", e => { if (e.key === "Enter") comprobarClave(); });