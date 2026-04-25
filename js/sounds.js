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

// TTS — fala palavra em português
function falar(texto, velocidade = 0.9) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(texto);
  u.lang = 'pt-BR';
  u.rate = velocidade;
  u.pitch = 1.1;
  // Tenta voz pt-BR
  const vozes = speechSynthesis.getVoices();
  const voz = vozes.find(v => v.lang.startsWith('pt')) || null;
  if (voz) u.voice = voz;
  speechSynthesis.speak(u);
}

// Garante vozes carregadas antes de usar
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => {};
}
