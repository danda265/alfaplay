// AlfaPlay — Sons e TTS
// Anderson Rodrigo Costa © 2026

const SFX = (() => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  function beep(freq = 440, dur = 0.15, vol = 0.3, type = 'square') {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.start(); o.stop(ctx.currentTime + dur);
  }

  function acerto() {
    beep(523, 0.1, 0.3, 'square');
    setTimeout(() => beep(659, 0.1, 0.3, 'square'), 100);
    setTimeout(() => beep(784, 0.2, 0.3, 'square'), 200);
  }

  function erro() {
    beep(200, 0.3, 0.3, 'sawtooth');
  }

  function nivel() {
    [523,587,659,698,784,880,988,1047].forEach((f,i) =>
      setTimeout(() => beep(f, 0.12, 0.25, 'square'), i * 80));
  }

  function click() {
    beep(800, 0.05, 0.2, 'square');
  }

  function flip() {
    beep(600, 0.08, 0.2, 'sine');
  }

  function vitoria() {
    const notes = [784,784,784,659,784,880,784];
    const times = [0,200,400,600,800,1000,1200];
    notes.forEach((f,i) => setTimeout(() => beep(f, 0.15, 0.3, 'square'), times[i]));
  }

  return { acerto, erro, nivel, click, flip, vitoria };
})();

// ── TTS — voz neural pt-BR na nuvem, com fallback pra voz do sistema ──
const TTS_URL = 'https://alfaplay-voz.alfredobc.workers.dev/tts';
let _ttsAudio = null;               // áudio atual (pra parar)
const _ttsCache = new Map();        // "texto|rate" -> objectURL

// Vozes do sistema (usadas só se a nuvem falhar)
let _sysVoices = [], _bestVoice = null;
function _loadVoices() {
  try { _sysVoices = speechSynthesis.getVoices() || []; } catch (e) { _sysVoices = []; }
  const pt = _sysVoices.filter(v => /pt/i.test(v.lang || ''));
  _bestVoice =
    pt.find(v => /google/i.test(v.name) && /portug|pt-?br/i.test(v.name)) ||
    pt.find(v => /natural|online/i.test(v.name)) ||
    pt.find(v => /maria/i.test(v.name)) ||        // Maria soa melhor que Daniel
    pt.find(v => /pt-?br/i.test(v.lang)) ||
    pt[0] || null;
}
if (typeof speechSynthesis !== 'undefined') {
  _loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = _loadVoices;
}

function _falarLocal(texto, velocidade) {
  if (!window.speechSynthesis) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(texto));
    u.lang = 'pt-BR';
    u.rate = Math.max(0.6, Math.min(1, velocidade || 0.9));
    u.pitch = 1.0;
    if (_bestVoice) u.voice = _bestVoice;
    speechSynthesis.speak(u);
  } catch (e) {}
}

async function falar(texto, velocidade = 0.9) {
  texto = String(texto == null ? '' : texto).trim();
  if (!texto) return;
  // para o que estiver tocando
  try { if (_ttsAudio) { _ttsAudio.pause(); _ttsAudio.currentTime = 0; } } catch (e) {}
  try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}

  const rate = velocidade >= 1 ? '0%' : velocidade >= 0.9 ? '-8%' : '-18%';
  const key = texto + '|' + rate;
  try {
    let src = _ttsCache.get(key);
    if (!src) {
      const r = await fetch(`${TTS_URL}?text=${encodeURIComponent(texto)}&rate=${encodeURIComponent(rate)}`);
      if (!r.ok) throw new Error('tts ' + r.status);
      const blob = await r.blob();
      if (blob.size < 400) throw new Error('audio curto');
      src = URL.createObjectURL(blob);
      _ttsCache.set(key, src);
    }
    const a = new Audio(src);
    _ttsAudio = a;
    a.playbackRate = 1;
    await a.play();
  } catch (e) {
    _falarLocal(texto, velocidade); // offline / bloqueio / erro → voz do sistema
  }
}
