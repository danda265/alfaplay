// AlfaPlay — Ilustrações pedagógicas por palavra
// Anderson Rodrigo Costa © 2026
// Cada função retorna uma Promise<HTMLImageElement> com SVG colorido

const IL = {};

function _svgImg(svgStr) {
  return new Promise(res => {
    const blob = new Blob([`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">${svgStr}</svg>`], {type:'image/svg+xml'});
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(url); res(img); };
    img.onerror = () => { URL.revokeObjectURL(url); res(null); };
    img.src = url;
  });
}

// ── 1º ANO ──────────────────────────────────────────────────────

IL.bola = () => _svgImg(`
  <defs><radialGradient id="bg" cx="30%" cy="30%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#e2e8f0"/></radialGradient></defs>
  <circle cx="100" cy="105" r="78" fill="url(#bg)" stroke="#1e293b" stroke-width="4"/>
  <path d="M100,27 L116,70 L160,70 L126,95 L138,140 L100,115 L62,140 L74,95 L40,70 L84,70 Z" fill="#1e293b" stroke="#1e293b" stroke-width="1" stroke-linejoin="round"/>
  <circle cx="73" cy="65" r="12" fill="#1e293b"/>
  <circle cx="127" cy="65" r="12" fill="#1e293b"/>
  <circle cx="55" cy="110" r="10" fill="#1e293b"/>
  <circle cx="145" cy="110" r="10" fill="#1e293b"/>
  <circle cx="100" cy="155" r="11" fill="#1e293b"/>
  <ellipse cx="82" cy="48" rx="14" ry="8" fill="rgba(255,255,255,0.6)" transform="rotate(-30,82,48)"/>
`);

IL.casa = () => _svgImg(`
  <rect x="0" y="145" width="200" height="55" fill="#4ade80"/>
  <rect x="30" y="105" width="140" height="95" fill="#fef3c7" stroke="#1e293b" stroke-width="4"/>
  <polygon points="15,108 100,30 185,108" fill="#ef4444" stroke="#1e293b" stroke-width="4" stroke-linejoin="round"/>
  <rect x="80" y="155" width="40" height="45" rx="5" fill="#92400e" stroke="#1e293b" stroke-width="3"/>
  <circle cx="115" cy="178" r="4" fill="#facc15"/>
  <rect x="40" y="118" width="38" height="32" rx="4" fill="#bae6fd" stroke="#1e293b" stroke-width="3"/>
  <line x1="59" y1="118" x2="59" y2="150" stroke="#1e293b" stroke-width="2"/>
  <line x1="40" y1="134" x2="78" y2="134" stroke="#1e293b" stroke-width="2"/>
  <rect x="122" y="118" width="38" height="32" rx="4" fill="#bae6fd" stroke="#1e293b" stroke-width="3"/>
  <line x1="141" y1="118" x2="141" y2="150" stroke="#1e293b" stroke-width="2"/>
  <line x1="122" y1="134" x2="160" y2="134" stroke="#1e293b" stroke-width="2"/>
  <rect x="148" y="58" width="18" height="52" fill="#92400e" stroke="#1e293b" stroke-width="3"/>
`);

IL.gato = () => _svgImg(`
  <polygon points="52,100 72,45 100,92" fill="#f97316" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
  <polygon points="62,98 74,58 96,93" fill="#fda4af" stroke="none"/>
  <polygon points="100,92 128,45 148,100" fill="#f97316" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
  <polygon points="104,93 126,58 138,98" fill="#fda4af" stroke="none"/>
  <circle cx="100" cy="130" r="72" fill="#f97316" stroke="#1e293b" stroke-width="4"/>
  <ellipse cx="72" cy="118" rx="18" ry="22" fill="#6ee7b7" stroke="#1e293b" stroke-width="3"/>
  <ellipse cx="72" cy="122" rx="7" ry="14" fill="#1e293b"/>
  <circle cx="69" cy="116" r="3" fill="#ffffff"/>
  <ellipse cx="128" cy="118" rx="18" ry="22" fill="#6ee7b7" stroke="#1e293b" stroke-width="3"/>
  <ellipse cx="128" cy="122" rx="7" ry="14" fill="#1e293b"/>
  <circle cx="125" cy="116" r="3" fill="#ffffff"/>
  <ellipse cx="100" cy="155" rx="34" ry="25" fill="#fde68a" stroke="#1e293b" stroke-width="2"/>
  <polygon points="100,142 92,154 108,154" fill="#fda4af" stroke="#1e293b" stroke-width="2"/>
  <path d="M92,154 Q100,165 108,154" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="30" y1="150" x2="90" y2="156" stroke="#1e293b" stroke-width="2"/>
  <line x1="30" y1="162" x2="90" y2="162" stroke="#1e293b" stroke-width="2"/>
  <line x1="110" y1="156" x2="170" y2="150" stroke="#1e293b" stroke-width="2"/>
  <line x1="110" y1="162" x2="170" y2="162" stroke="#1e293b" stroke-width="2"/>
`);

IL.pato = () => _svgImg(`
  <rect x="0" y="148" width="200" height="52" fill="#7dd3fc"/>
  <path d="M10,148 Q50,135 90,148 Q130,161 170,148 Q185,143 200,148" fill="none" stroke="#1e293b" stroke-width="3"/>
  <ellipse cx="100" cy="138" rx="62" ry="42" fill="#facc15" stroke="#1e293b" stroke-width="4"/>
  <circle cx="100" cy="88" r="38" fill="#facc15" stroke="#1e293b" stroke-width="4"/>
  <path d="M128,85 Q148,80 152,90 Q148,100 128,95 Z" fill="#fb923c" stroke="#1e293b" stroke-width="3"/>
  <circle cx="118" cy="78" r="8" fill="#1e293b"/>
  <circle cx="116" cy="76" r="2.5" fill="#ffffff"/>
  <path d="M50,125 Q40,112 52,105 Q62,98 68,115" fill="#e6a800" stroke="#1e293b" stroke-width="2"/>
`);

IL.sapo = () => _svgImg(`
  <ellipse cx="100" cy="168" rx="68" ry="28" fill="#16a34a" stroke="#1e293b" stroke-width="3"/>
  <circle cx="68" cy="82" r="28" fill="#4ade80" stroke="#1e293b" stroke-width="4"/>
  <circle cx="68" cy="80" r="18" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
  <circle cx="70" cy="82" r="9" fill="#1e293b"/>
  <circle cx="68" cy="79" r="3" fill="#ffffff"/>
  <circle cx="132" cy="82" r="28" fill="#4ade80" stroke="#1e293b" stroke-width="4"/>
  <circle cx="132" cy="80" r="18" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
  <circle cx="130" cy="82" r="9" fill="#1e293b"/>
  <circle cx="128" cy="79" r="3" fill="#ffffff"/>
  <ellipse cx="100" cy="125" rx="62" ry="55" fill="#4ade80" stroke="#1e293b" stroke-width="4"/>
  <ellipse cx="100" cy="148" rx="42" ry="25" fill="#bbf7d0" stroke="#1e293b" stroke-width="2"/>
  <path d="M72,138 Q100,155 128,138" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
  <circle cx="55" cy="165" r="14" fill="#4ade80" stroke="#1e293b" stroke-width="3"/>
  <circle cx="145" cy="165" r="14" fill="#4ade80" stroke="#1e293b" stroke-width="3"/>
`);

IL.vaca = () => _svgImg(`
  <ellipse cx="100" cy="135" rx="78" ry="55" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
  <ellipse cx="55" cy="108" rx="22" ry="16" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
  <ellipse cx="145" cy="108" rx="22" ry="16" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
  <ellipse cx="100" cy="72" rx="42" ry="38" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
  <ellipse cx="100" cy="85" rx="26" ry="18" fill="#fda4af" stroke="#1e293b" stroke-width="2"/>
  <circle cx="93" cy="86" r="5" fill="#1e293b"/>
  <circle cx="107" cy="86" r="5" fill="#1e293b"/>
  <circle cx="80" cy="65" r="8" fill="#1e293b"/>
  <circle cx="78" cy="63" r="2.5" fill="#ffffff"/>
  <circle cx="120" cy="65" r="8" fill="#1e293b"/>
  <circle cx="118" cy="63" r="2.5" fill="#ffffff"/>
  <line x1="88" y1="38" x2="82" y2="50" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
  <line x1="112" y1="38" x2="118" y2="50" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
  <ellipse cx="62" cy="160" rx="18" ry="12" fill="#1e293b"/>
  <ellipse cx="100" cy="178" rx="22" ry="12" fill="#1e293b"/>
  <ellipse cx="138" cy="160" rx="18" ry="12" fill="#1e293b"/>
  <ellipse cx="78" cy="115" rx="16" ry="20" fill="#1e293b"/>
`);

IL.leao = () => _svgImg(`
  <circle cx="100" cy="108" r="82" fill="#fb923c" stroke="#1e293b" stroke-width="4"/>
  <circle cx="100" cy="108" r="55" fill="#fbbf24" stroke="#1e293b" stroke-width="3"/>
  <ellipse cx="100" cy="130" rx="30" ry="22" fill="#fde68a" stroke="#1e293b" stroke-width="2"/>
  <circle cx="78" cy="100" r="14" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
  <circle cx="80" cy="102" r="7" fill="#1e293b"/>
  <circle cx="77" cy="99" r="2.5" fill="#ffffff"/>
  <circle cx="122" cy="100" r="14" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
  <circle cx="120" cy="102" r="7" fill="#1e293b"/>
  <circle cx="117" cy="99" r="2.5" fill="#ffffff"/>
  <ellipse cx="100" cy="118" rx="10" ry="7" fill="#f97316" stroke="#1e293b" stroke-width="2"/>
  <path d="M78,128 Q100,142 122,128" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
  <line x1="40" y1="112" x2="74" y2="118" stroke="#1e293b" stroke-width="2"/>
  <line x1="40" y1="122" x2="74" y2="124" stroke="#1e293b" stroke-width="2"/>
  <line x1="126" y1="118" x2="160" y2="112" stroke="#1e293b" stroke-width="2"/>
  <line x1="126" y1="124" x2="160" y2="122" stroke="#1e293b" stroke-width="2"/>
  <ellipse cx="78" cy="38" rx="10" ry="14" fill="#92400e" stroke="#1e293b" stroke-width="2" transform="rotate(-15,78,38)"/>
  <ellipse cx="122" cy="38" rx="10" ry="14" fill="#92400e" stroke="#1e293b" stroke-width="2" transform="rotate(15,122,38)"/>
`);

IL.rato = () => _svgImg(`
  <path d="M160,175 Q180,160 175,140 Q165,118 148,125" fill="none" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
  <circle cx="68" cy="72" r="40" fill="#94a3b8" stroke="#1e293b" stroke-width="4"/>
  <circle cx="62" cy="68" r="28" fill="#fda4af" stroke="#1e293b" stroke-width="2"/>
  <circle cx="132" cy="72" r="40" fill="#94a3b8" stroke="#1e293b" stroke-width="4"/>
  <circle cx="126" cy="68" r="28" fill="#fda4af" stroke="#1e293b" stroke-width="2"/>
  <ellipse cx="100" cy="135" rx="65" ry="52" fill="#94a3b8" stroke="#1e293b" stroke-width="4"/>
  <circle cx="80" cy="115" r="10" fill="#1e293b"/>
  <circle cx="78" cy="113" r="3" fill="#ffffff"/>
  <circle cx="120" cy="115" r="10" fill="#1e293b"/>
  <circle cx="118" cy="113" r="3" fill="#ffffff"/>
  <circle cx="100" cy="132" r="9" fill="#fda4af" stroke="#1e293b" stroke-width="2"/>
  <circle cx="93" cy="130" r="4" fill="#1e293b"/>
  <circle cx="107" cy="130" r="4" fill="#1e293b"/>
  <line x1="48" y1="130" x2="90" y2="135" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="48" y1="140" x2="90" y2="140" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="110" y1="135" x2="152" y2="130" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="110" y1="140" x2="152" y2="140" stroke="#1e293b" stroke-width="1.5"/>
`);

IL.flor = () => _svgImg(`
  <rect x="94" y="120" width="12" height="68" fill="#16a34a" stroke="#1e293b" stroke-width="3"/>
  <path d="M100,155 Q80,145 72,128 Q88,120 100,138" fill="#22c55e" stroke="#1e293b" stroke-width="2"/>
  ${[0,60,120,180,240,300].map(a=>{
    const r=Math.PI*a/180,px=100+48*Math.cos(r),py=92+48*Math.sin(r);
    return `<ellipse cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" rx="22" ry="34" fill="#f472b6" stroke="#1e293b" stroke-width="3" transform="rotate(${a},${px.toFixed(1)},${py.toFixed(1)})"/>`;
  }).join('')}
  <circle cx="100" cy="92" r="32" fill="#facc15" stroke="#1e293b" stroke-width="4"/>
  <circle cx="88" cy="84" r="5" fill="#f97316"/>
  <circle cx="100" cy="80" r="5" fill="#f97316"/>
  <circle cx="112" cy="84" r="5" fill="#f97316"/>
  <circle cx="88" cy="100" r="5" fill="#f97316"/>
  <circle cx="100" cy="104" r="5" fill="#f97316"/>
  <circle cx="112" cy="100" r="5" fill="#f97316"/>
`);

IL.uvas = () => _svgImg(`
  <line x1="100" y1="18" x2="100" y2="42" stroke="#92400e" stroke-width="4" stroke-linecap="round"/>
  <path d="M100,28 Q130,20 145,35" fill="none" stroke="#16a34a" stroke-width="3"/>
  <ellipse cx="152" cy="28" rx="20" ry="12" fill="#16a34a" stroke="#1e293b" stroke-width="2" transform="rotate(15,152,28)"/>
  ${[[100,52],[78,64],[122,64],[60,78],[100,78],[140,78],[78,94],[122,94],[60,108],[100,108],[140,108],[78,122],[122,122],[100,136]].map(([x,y])=>
    `<circle cx="${x}" cy="${y}" r="18" fill="#7c3aed" stroke="#1e293b" stroke-width="3"/><circle cx="${x-5}" cy="${y-5}" r="5" fill="rgba(255,255,255,0.35)"/>`
  ).join('')}
`);

IL.bolo = () => _svgImg(`
  <rect x="25" y="120" width="150" height="65" rx="6" fill="#f472b6" stroke="#1e293b" stroke-width="4"/>
  <rect x="35" y="85" width="130" height="42" rx="5" fill="#fb923c" stroke="#1e293b" stroke-width="4"/>
  <rect x="50" y="58" width="100" height="32" rx="5" fill="#facc15" stroke="#1e293b" stroke-width="4"/>
  <path d="M25,120 Q55,112 85,120 Q115,128 145,120 Q165,114 175,120" fill="none" stroke="#ffffff" stroke-width="3"/>
  <path d="M35,85 Q65,78 95,85 Q125,92 165,85" fill="none" stroke="#ffffff" stroke-width="3"/>
  ${[60,85,110,135].map(x=>`<rect x="${x-3}" y="${x===85?30:38}" width="6" height="${x===85?28:20}" rx="3" fill="${['#ef4444','#3b82f6','#4ade80','#a855f7'][[60,85,110,135].indexOf(x)]}"/><circle cx="${x}" cy="${x===85?28:36}" r="5" fill="#facc15"/>`).join('')}
  <rect x="0" y="175" width="200" height="25" fill="#fef9c3" stroke="#1e293b" stroke-width="0"/>
  <path d="M25,185 Q55,178 85,185 Q115,192 145,185 Q165,180 175,185" fill="none" stroke="#f472b6" stroke-width="3"/>
`);

IL.peixe = () => _svgImg(`
  <path d="M148,100 L188,60 L192,100 L188,140 Z" fill="#fb923c" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
  <ellipse cx="95" cy="100" rx="90" ry="60" fill="#f97316" stroke="#1e293b" stroke-width="4"/>
  <ellipse cx="80" cy="115" rx="58" ry="35" fill="#fbbf24" stroke="#1e293b" stroke-width="2"/>
  <path d="M95,42 Q120,22 145,42" fill="#ef4444" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
  <path d="M95,158 Q118,175 142,158" fill="#ef4444" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="42" cy="85" r="22" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
  <circle cx="45" cy="88" r="12" fill="#1e293b"/>
  <circle cx="42" cy="83" r="4" fill="#ffffff"/>
  <path d="M22,100 Q12,98 12,106 Q12,114 22,112" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
  ${[120,140,158,120,140,158].map((x,i)=>`<path d="M${x},${80+i%2*20} Q${x+10},${70+i%2*20} ${x+20},${80+i%2*20}" fill="none" stroke="#1e293b" stroke-width="1.5" opacity="0.6"/>`).join('')}
`);

IL.mala = () => _svgImg(`
  <rect x="70" y="28" width="60" height="22" rx="8" fill="#92400e" stroke="#1e293b" stroke-width="4"/>
  <rect x="20" y="55" width="160" height="118" rx="14" fill="#dc2626" stroke="#1e293b" stroke-width="5"/>
  <rect x="20" y="108" width="160" height="12" fill="#b91c1c"/>
  <line x1="78" y1="55" x2="78" y2="173" stroke="#1e293b" stroke-width="3"/>
  <line x1="122" y1="55" x2="122" y2="173" stroke="#1e293b" stroke-width="3"/>
  <rect x="82" y="100" width="36" height="22" rx="5" fill="#facc15" stroke="#1e293b" stroke-width="3"/>
  <circle cx="38" cy="170" r="10" fill="#1e293b"/>
  <circle cx="162" cy="170" r="10" fill="#1e293b"/>
  <rect x="28" y="168" width="20" height="6" rx="3" fill="#475569"/>
  <rect x="152" y="168" width="20" height="6" rx="3" fill="#475569"/>
`);

IL.navio = () => _svgImg(`
  <rect x="0" y="148" width="200" height="52" fill="#0ea5e9"/>
  <path d="M10,148 Q50,138 100,148 Q150,158 190,148" fill="none" stroke="#1e293b" stroke-width="2"/>
  <path d="M30,148 L20,100 L180,100 L170,148 Z" fill="#e2e8f0" stroke="#1e293b" stroke-width="4"/>
  <rect x="55" y="55" width="90" height="50" rx="4" fill="#bae6fd" stroke="#1e293b" stroke-width="3"/>
  <rect x="70" y="65" width="25" height="30" fill="#7dd3fc" stroke="#1e293b" stroke-width="2"/>
  <rect x="105" y="65" width="25" height="30" fill="#7dd3fc" stroke="#1e293b" stroke-width="2"/>
  <rect x="94" y="10" width="12" height="50" fill="#1e293b" stroke="#1e293b" stroke-width="2"/>
  <polygon points="106,14 106,38 138,26" fill="#ef4444" stroke="#1e293b" stroke-width="2"/>
  <rect x="62" y="130" width="76" height="18" fill="#1d4ed8" stroke="#1e293b" stroke-width="2"/>
`);

IL.dado = () => _svgImg(`
  <rect x="38" y="55" width="115" height="115" rx="16" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
  <path d="M153,55 L175,32 L175,147 L153,170" fill="#e2e8f0" stroke="#1e293b" stroke-width="4"/>
  <path d="M38,55 L60,32 L175,32 L153,55" fill="#f1f5f9" stroke="#1e293b" stroke-width="4"/>
  ${[[62,80],[110,80],[62,127],[110,127],[62,103],[110,103]].slice(0,6).map(([x,y])=>
    `<circle cx="${x}" cy="${y}" r="10" fill="#1e293b"/>`).join('')}
  <circle cx="165" cy="58" r="8" fill="#1e293b"/>
  <circle cx="165" cy="88" r="8" fill="#1e293b"/>
  <circle cx="165" cy="118" r="8" fill="#1e293b"/>
`);

// ── 2º ANO ──────────────────────────────────────────────────────

IL.melancia = () => _svgImg(`
  <ellipse cx="100" cy="130" rx="92" ry="75" fill="#16a34a" stroke="#1e293b" stroke-width="4"/>
  <ellipse cx="100" cy="130" rx="92" ry="75" fill="none" stroke="#15803d" stroke-width="8" stroke-dasharray="18,12"/>
  <ellipse cx="100" cy="118" rx="75" ry="58" fill="#ef4444" stroke="#1e293b" stroke-width="3"/>
  <ellipse cx="100" cy="110" rx="56" ry="40" fill="#f87171"/>
  ${[[75,105],[100,95],[125,105],[65,125],[90,130],[115,128],[135,118],[80,148],[108,150]].map(([x,y])=>
    `<ellipse cx="${x}" cy="${y}" rx="5" ry="8" fill="#1e293b" transform="rotate(${Math.random()*40-20},${x},${y})"/>`).join('')}
  <line x1="100" y1="28" x2="100" y2="48" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>
  <path d="M100,38 Q115,25 122,30" fill="none" stroke="#16a34a" stroke-width="3"/>
`);

IL.galinha = () => _svgImg(`
  <ellipse cx="100" cy="138" rx="72" ry="52" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
  <circle cx="100" cy="72" r="42" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
  <path d="M78,40 Q82,18 92,25 Q86,38 94,42" fill="#ef4444" stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/>
  <path d="M92,40 Q96,20 104,26 Q100,38 108,40" fill="#ef4444" stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/>
  <path d="M108,42 Q112,22 120,28 Q115,40 120,44" fill="#ef4444" stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/>
  <path d="M118,80 Q138,85 140,95 Q130,100 118,92" fill="#fbbf24" stroke="#1e293b" stroke-width="2"/>
  <circle cx="85" cy="68" r="12" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
  <circle cx="87" cy="70" r="6" fill="#1e293b"/>
  <circle cx="84" cy="67" r="2" fill="#ffffff"/>
  <path d="M88,95 Q100,108 112,95" fill="#fda4af" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
  <rect x="78" y="182" width="20" height="18" rx="4" fill="#fbbf24" stroke="#1e293b" stroke-width="3"/>
  <rect x="102" y="182" width="20" height="18" rx="4" fill="#fbbf24" stroke="#1e293b" stroke-width="3"/>
`);

IL.dragao = () => _svgImg(`
  <path d="M155,155 Q185,145 190,165 Q185,185 162,180 L145,168 Z" fill="#4ade80" stroke="#1e293b" stroke-width="3"/>
  <ellipse cx="105" cy="145" rx="80" ry="55" fill="#4ade80" stroke="#1e293b" stroke-width="4"/>
  <ellipse cx="95" cy="155" rx="55" ry="32" fill="#bbf7d0" stroke="#1e293b" stroke-width="2"/>
  <path d="M80,95 Q90,60 115,52 Q140,48 155,72 L148,100 Q130,92 105,98 Z" fill="#22c55e" stroke="#1e293b" stroke-width="4"/>
  <path d="M148,70 Q168,40 185,50 Q178,68 165,72" fill="#f97316" stroke="#1e293b" stroke-width="2"/>
  <path d="M155,75 Q172,50 188,58 Q180,74 168,78" fill="#facc15" stroke="none"/>
  <path d="M45,72 Q30,50 48,38 Q72,30 88,58 L78,90 Z" fill="#22c55e" stroke="#1e293b" stroke-width="3"/>
  <path d="M128,42 Q130,22 142,18 Q148,30 140,42" fill="#4ade80" stroke="#1e293b" stroke-width="2"/>
  <path d="M140,38 Q142,18 154,15 Q160,26 152,38" fill="#4ade80" stroke="#1e293b" stroke-width="2"/>
  <circle cx="118" cy="68" r="14" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
  <circle cx="120" cy="70" r="7" fill="#1e293b"/>
  <circle cx="117" cy="67" r="2.5" fill="#ffffff"/>
`);

IL.floresta = () => _svgImg(`
  <rect x="0" y="140" width="200" height="60" fill="#4ade80"/>
  ${[[30,145,45,25],[75,125,55,32],[125,125,55,32],[165,145,45,25],[100,100,62,38]].map(([cx,cy,rw,rh])=>
    `<ellipse cx="${cx}" cy="${cy}" rx="${rw}" ry="${rh}" fill="#16a34a" stroke="#1e293b" stroke-width="3"/>`).join('')}
  ${[[22,142],[67,140],[118,140],[158,142],[92,138]].map(([x,y])=>
    `<rect x="${x-6}" y="${y}" width="12" height="25" rx="3" fill="#92400e" stroke="#1e293b" stroke-width="2"/>`).join('')}
  ${[[30,110],[75,88],[125,88],[165,110],[100,62]].map(([cx,cy])=>
    `<ellipse cx="${cx}" cy="${cy}" rx="30" ry="22" fill="#22c55e" stroke="#1e293b" stroke-width="2"/>`).join('')}
  <circle cx="160" cy="38" r="24" fill="#facc15" stroke="#fb923c" stroke-width="3"/>
  ${[0,45,90,135,180,225,270,315].map(a=>{const r=Math.PI*a/180;return `<line x1="${(160+26*Math.cos(r)).toFixed(0)}" y1="${(38+26*Math.sin(r)).toFixed(0)}" x2="${(160+36*Math.cos(r)).toFixed(0)}" y2="${(38+36*Math.sin(r)).toFixed(0)}" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>`;}).join('')}
`);

IL.presente = () => _svgImg(`
  <rect x="25" y="95" width="150" height="95" rx="8" fill="#ef4444" stroke="#1e293b" stroke-width="4"/>
  <rect x="25" y="75" width="150" height="28" rx="6" fill="#dc2626" stroke="#1e293b" stroke-width="4"/>
  <rect x="88" y="75" width="24" height="115" fill="#facc15" stroke="#1e293b" stroke-width="3"/>
  <line x1="25" y1="120" x2="175" y2="120" stroke="#facc15" stroke-width="3"/>
  <path d="M100,75 Q80,45 62,52 Q48,65 68,75" fill="#facc15" stroke="#1e293b" stroke-width="3"/>
  <path d="M100,75 Q120,45 138,52 Q152,65 132,75" fill="#facc15" stroke="#1e293b" stroke-width="3"/>
  ${[[48,108],[130,108],[48,150],[130,150],[89,130],[89,168]].map(([x,y])=>
    `<circle cx="${x}" cy="${y}" r="7" fill="#fde68a"/>`).join('')}
`);

IL.castelo = () => _svgImg(`
  <rect x="0" y="168" width="200" height="32" fill="#4ade80"/>
  <rect x="28" y="78" width="45" height="92" fill="#94a3b8" stroke="#1e293b" stroke-width="4"/>
  <rect x="127" y="78" width="45" height="92" fill="#94a3b8" stroke="#1e293b" stroke-width="4"/>
  <rect x="55" y="100" width="90" height="70" fill="#94a3b8" stroke="#1e293b" stroke-width="4"/>
  ${[28,42,56,127,141,155].map(x=>`<rect x="${x}" y="${x<100?62:62}" width="11" height="18" rx="2" fill="#94a3b8" stroke="#1e293b" stroke-width="3"/>`).join('')}
  ${[55,71,87,103,119].map(x=>`<rect x="${x}" y="84" width="11" height="18" rx="2" fill="#94a3b8" stroke="#1e293b" stroke-width="3"/>`).join('')}
  <rect x="82" y="135" width="36" height="35" rx="18" fill="#1e293b"/>
  <rect x="38" y="88" width="25" height="30" rx="4" fill="#bae6fd" stroke="#1e293b" stroke-width="2"/>
  <rect x="137" y="88" width="25" height="30" rx="4" fill="#bae6fd" stroke="#1e293b" stroke-width="2"/>
  <rect x="48" y="42" width="6" height="42" fill="#1e293b"/>
  <polygon points="48,8 54,8 54,42 48,42" fill="#ef4444"/>
  <rect x="146" y="42" width="6" height="42" fill="#1e293b"/>
  <polygon points="146,8 152,8 152,42 146,42" fill="#3b82f6"/>
`);

IL.foguete = () => _svgImg(`
  <path d="M82,175 Q72,195 62,200 L88,200 L88,188 Z" fill="#fb923c" stroke="#1e293b" stroke-width="3"/>
  <path d="M118,175 Q128,195 138,200 L112,200 L112,188 Z" fill="#fb923c" stroke="#1e293b" stroke-width="3"/>
  <path d="M90,185 Q100,205 110,185" fill="#facc15" stroke="#1e293b" stroke-width="2"/>
  <path d="M72,138 Q42,150 38,170 L72,165 Z" fill="#60a5fa" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
  <path d="M128,138 Q158,150 162,170 L128,165 Z" fill="#60a5fa" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
  <rect x="72" y="62" width="56" height="120" rx="10" fill="#e2e8f0" stroke="#1e293b" stroke-width="4"/>
  <path d="M72,68 Q100,12 128,68 Z" fill="#ef4444" stroke="#1e293b" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="100" cy="128" r="24" fill="#bae6fd" stroke="#1e293b" stroke-width="4"/>
  <circle cx="100" cy="128" r="16" fill="#7dd3fc" stroke="#1e293b" stroke-width="2"/>
  <circle cx="93" cy="121" r="5" fill="#ffffff" opacity=".7"/>
  <circle cx="84" cy="88" r="5" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>
  <circle cx="116" cy="88" r="5" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>
`);

IL.borboleta = () => _svgImg(`
  <path d="M98,100 Q30,40 18,72 Q8,100 50,118 Q80,130 98,112 Z" fill="#c084fc" stroke="#1e293b" stroke-width="4"/>
  <path d="M102,100 Q170,40 182,72 Q192,100 150,118 Q120,130 102,112 Z" fill="#c084fc" stroke="#1e293b" stroke-width="4"/>
  <path d="M98,104 Q35,115 28,148 Q30,178 65,170 Q95,162 98,140 Z" fill="#a855f7" stroke="#1e293b" stroke-width="4"/>
  <path d="M102,104 Q165,115 172,148 Q170,178 135,170 Q105,162 102,140 Z" fill="#a855f7" stroke="#1e293b" stroke-width="4"/>
  <circle cx="60" cy="82" r="18" fill="#e9d5ff" stroke="#1e293b" stroke-width="2"/>
  <circle cx="60" cy="82" r="8" fill="#7c3aed"/>
  <circle cx="140" cy="82" r="18" fill="#e9d5ff" stroke="#1e293b" stroke-width="2"/>
  <circle cx="140" cy="82" r="8" fill="#7c3aed"/>
  <circle cx="58" cy="148" r="12" fill="#ddd6fe" stroke="#1e293b" stroke-width="2"/>
  <circle cx="142" cy="148" r="12" fill="#ddd6fe" stroke="#1e293b" stroke-width="2"/>
  <ellipse cx="100" cy="120" rx="10" ry="42" fill="#1e293b" stroke="#1e293b" stroke-width="2"/>
  <circle cx="100" cy="72" r="14" fill="#fde68a" stroke="#1e293b" stroke-width="3"/>
  <path d="M94,59 Q86,38 78,30" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M106,59 Q114,38 122,30" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="78" cy="30" r="5" fill="#1e293b"/>
  <circle cx="122" cy="30" r="5" fill="#1e293b"/>
`);

IL.guitarra = () => _svgImg(`
  <rect x="96" y="8" width="8" height="52" fill="#92400e" stroke="#1e293b" stroke-width="2"/>
  <rect x="82" y="8" width="36" height="14" rx="4" fill="#92400e" stroke="#1e293b" stroke-width="3"/>
  ${[86,92,98,104,110,116].map((x,i)=>`<line x1="${x}" y1="22" x2="${100}" y2="60" stroke="${['#ef4444','#f97316','#facc15','#4ade80','#60a5fa','#c084fc'][i]}" stroke-width="2"/>`).join('')}
  <rect x="84" y="52" width="32" height="10" rx="3" fill="#1e293b"/>
  <path d="M70,62 Q45,72 40,100 Q38,130 55,148 Q72,165 100,168 Q128,165 148,148 Q168,128 162,100 Q158,72 132,62 Z" fill="#d97706" stroke="#1e293b" stroke-width="4"/>
  <ellipse cx="100" cy="115" rx="28" ry="28" fill="none" stroke="#1e293b" stroke-width="3"/>
  <circle cx="100" cy="115" r="18" fill="#92400e" stroke="#1e293b" stroke-width="2"/>
  ${[0,60,120,180,240,300].map(a=>{const r=Math.PI*a/180;return `<line x1="${(100+20*Math.cos(r)).toFixed(0)}" y1="${(115+20*Math.sin(r)).toFixed(0)}" x2="${(100+27*Math.cos(r)).toFixed(0)}" y2="${(115+27*Math.sin(r)).toFixed(0)}" stroke="#1e293b" stroke-width="2"/>`;}).join('')}
  <path d="M68,88 L74,95" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
  <path d="M68,100 L72,100" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
`);

// ── 3º ANO ──────────────────────────────────────────────────────

IL.elefante = () => _svgImg(`
  <ellipse cx="100" cy="140" rx="85" ry="58" fill="#94a3b8" stroke="#1e293b" stroke-width="5"/>
  <ellipse cx="45" cy="100" rx="30" ry="45" fill="#94a3b8" stroke="#1e293b" stroke-width="4"/>
  <ellipse cx="155" cy="100" rx="30" ry="45" fill="#94a3b8" stroke="#1e293b" stroke-width="4"/>
  <circle cx="100" cy="85" r="52" fill="#94a3b8" stroke="#1e293b" stroke-width="5"/>
  <path d="M80,130 Q65,145 60,165 Q62,182 75,180 Q84,172 82,158 Q90,150 95,158 Q98,170 92,180" fill="#94a3b8" stroke="#1e293b" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M80,130 Q65,145 60,165 Q62,182 75,180 Q84,172 82,158 Q90,150 95,158 Q98,168 92,178" fill="#94a3b8" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
  <circle cx="82" cy="72" r="14" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
  <circle cx="84" cy="75" r="7" fill="#1e293b"/>
  <circle cx="81" cy="71" r="2.5" fill="#ffffff"/>
  <circle cx="118" cy="72" r="14" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
  <circle cx="116" cy="75" r="7" fill="#1e293b"/>
  <circle cx="113" cy="71" r="2.5" fill="#ffffff"/>
  <path d="M84,100 Q100,108 116,100" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="58" y1="108" x2="65" y2="85" stroke="#ffffff" stroke-width="2" opacity=".5"/>
  <line x1="58" y1="122" x2="65" y2="100" stroke="#ffffff" stroke-width="2" opacity=".5"/>
`);

IL.girassol = () => _svgImg(`
  <rect x="93" y="115" width="14" height="78" fill="#16a34a" stroke="#1e293b" stroke-width="3"/>
  <path d="M100,155 Q78,148 68,132" fill="none" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/>
  <ellipse cx="58" cy="125" rx="18" ry="10" fill="#16a34a" stroke="#1e293b" stroke-width="2" transform="rotate(-30,58,125)"/>
  <path d="M100,155 Q122,148 132,132" fill="none" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/>
  <ellipse cx="142" cy="125" rx="18" ry="10" fill="#16a34a" stroke="#1e293b" stroke-width="2" transform="rotate(30,142,125)"/>
  ${[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map(a=>{
    const r=Math.PI*a/180, px=(100+62*Math.cos(r)).toFixed(1), py=(95+62*Math.sin(r)).toFixed(1);
    return `<ellipse cx="${px}" cy="${py}" rx="12" ry="26" fill="#facc15" stroke="#1e293b" stroke-width="2" transform="rotate(${a},${px},${py})"/>`;
  }).join('')}
  <circle cx="100" cy="95" r="38" fill="#92400e" stroke="#1e293b" stroke-width="5"/>
  <circle cx="100" cy="95" r="30" fill="#78350f"/>
  ${[[85,82],[95,78],[105,78],[115,82],[82,92],[100,88],[118,92],[85,102],[100,106],[115,102]].map(([x,y])=>
    `<circle cx="${x}" cy="${y}" r="4" fill="#fbbf24"/>`).join('')}
`);

IL.chocolate = () => _svgImg(`
  <path d="M25,62 L175,62 L175,55 Q100,40 25,55 Z" fill="#c0c0c0"/>
  <rect x="25" y="62" width="150" height="110" rx="5" fill="#7c3aed" stroke="#1e293b" stroke-width="3"/>
  <rect x="25" y="62" width="150" height="110" rx="5" fill="#92400e" stroke="#1e293b" stroke-width="4"/>
  ${[0,1,2,3].map(col=>[0,1,2].map(row=>
    `<rect x="${38+col*32}" y="${75+row*30}" width="26" height="22" rx="4" fill="#78350f" stroke="#1e293b" stroke-width="2"/>`
  ).join('')).join('')}
  <rect x="25" y="62" width="150" height="18" rx="5" fill="#fef3c7" stroke="#1e293b" stroke-width="2" opacity=".6"/>
  <rect x="35" y="68" width="130" height="6" rx="3" fill="#ffffff" opacity=".4"/>
  <path d="M25,80 L12,70 L12,62 L25,62" fill="#7c3aed" stroke="#1e293b" stroke-width="2"/>
  <path d="M175,80 L188,70 L188,62 L175,62" fill="#7c3aed" stroke="#1e293b" stroke-width="2"/>
`);

IL.coracao = () => _svgImg(`
  <path d="M100,168 Q35,130 18,88 Q8,52 38,38 Q62,28 80,45 Q90,54 100,68 Q110,54 120,45 Q138,28 162,38 Q192,52 182,88 Q165,130 100,168 Z" fill="#ef4444" stroke="#1e293b" stroke-width="5" stroke-linejoin="round"/>
  <path d="M55,55 Q42,68 42,88" fill="none" stroke="#fca5a5" stroke-width="6" stroke-linecap="round" opacity=".7"/>
  <circle cx="68" cy="48" r="6" fill="#fca5a5" opacity=".5"/>
`);

IL.cachoeira = () => _svgImg(`
  <rect x="0" y="0" width="200" height="200" fill="#7dd3fc"/>
  <rect x="0" y="0" width="200" height="72" fill="#4ade80"/>
  <rect x="0" y="58" width="62" height="142" fill="#4ade80" stroke="#1e293b" stroke-width="2"/>
  <rect x="138" y="58" width="62" height="142" fill="#4ade80" stroke="#1e293b" stroke-width="2"/>
  <rect x="0" y="55" width="200" height="20" fill="#94a3b8" stroke="#1e293b" stroke-width="3"/>
  ${[62,80,98,116].map(x=>
    `<rect x="${x}" y="72" width="14" height="100" rx="7" fill="#bae6fd" stroke="#93c5fd" stroke-width="1" opacity="0.85"/>`).join('')}
  <ellipse cx="100" cy="172" rx="42" ry="20" fill="#bae6fd" opacity=".7"/>
  <path d="M58,155 Q65,145 75,155 Q85,165 92,155" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity=".6"/>
  <path d="M108,158 Q115,148 125,158 Q135,168 142,158" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity=".6"/>
  <ellipse cx="30" cy="42" rx="28" ry="18" fill="#22c55e" stroke="#1e293b" stroke-width="2"/>
  <ellipse cx="170" cy="42" rx="28" ry="18" fill="#22c55e" stroke="#1e293b" stroke-width="2"/>
`);

IL.dinossauro = () => _svgImg(`
  <path d="M155,158 Q188,148 192,170 Q188,188 162,182 L148,168 Z" fill="#22c55e" stroke="#1e293b" stroke-width="3"/>
  <ellipse cx="100" cy="148" rx="78" ry="52" fill="#22c55e" stroke="#1e293b" stroke-width="4"/>
  <ellipse cx="90" cy="160" rx="52" ry="30" fill="#bbf7d0" stroke="#1e293b" stroke-width="2"/>
  <path d="M75,100 Q82,62 108,55 Q132,50 148,72 L142,100 Q122,90 100,96 Z" fill="#16a34a" stroke="#1e293b" stroke-width="4"/>
  <path d="M145,72 Q162,50 178,58 Q172,75 158,78" fill="#f97316" stroke="#1e293b" stroke-width="2"/>
  <path d="M152,78 Q168,56 184,64 Q177,80 162,82" fill="#facc15" stroke="none"/>
  <circle cx="115" cy="70" r="13" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
  <circle cx="117" cy="72" r="6.5" fill="#1e293b"/>
  <circle cx="114" cy="68" r="2.5" fill="#ffffff"/>
  <polygon points="122,50 126,36 130,50" fill="#facc15" stroke="#1e293b" stroke-width="2"/>
  <polygon points="132,46 136,30 140,46" fill="#facc15" stroke="#1e293b" stroke-width="2"/>
  <rect x="52" y="188" width="38" height="14" rx="5" fill="#16a34a" stroke="#1e293b" stroke-width="3"/>
  <rect x="108" y="188" width="38" height="14" rx="5" fill="#16a34a" stroke="#1e293b" stroke-width="3"/>
`);

IL.arcoiris = () => _svgImg(`
  <rect x="0" y="100" width="200" height="100" fill="#7dd3fc"/>
  <ellipse cx="42" cy="140" rx="38" ry="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <ellipse cx="28" cy="148" rx="30" ry="22" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <ellipse cx="55" cy="148" rx="26" ry="20" fill="#ffffff"/>
  <ellipse cx="158" cy="140" rx="38" ry="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <ellipse cx="172" cy="148" rx="30" ry="22" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <ellipse cx="145" cy="148" rx="26" ry="20" fill="#ffffff"/>
  ${[
    ['#ef4444',90],['#fb923c',80],['#facc15',70],
    ['#4ade80',60],['#60a5fa',50],['#8b5cf6',40]
  ].map(([c,r])=>
    `<path d="M${(100-r*0.95).toFixed(0)},148 A${r},${r} 0 0,1 ${(100+r*0.95).toFixed(0)},148" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/>`
  ).join('')}
`);

IL.vulcao = () => _svgImg(`
  <rect x="0" y="140" width="200" height="60" fill="#4ade80"/>
  <polygon points="100,18 172,168 28,168" fill="#4b5563" stroke="#1e293b" stroke-width="4" stroke-linejoin="round"/>
  <polygon points="100,18 130,78 70,78" fill="#374151"/>
  <ellipse cx="100" cy="18" rx="22" ry="10" fill="#1f2937" stroke="#1e293b" stroke-width="3"/>
  <path d="M88,18 Q85,8 90,2 Q95,8 92,18" fill="#ef4444"/>
  <path d="M100,18 Q100,5 104,0 Q108,6 104,18" fill="#fb923c"/>
  <path d="M112,18 Q115,8 110,3 Q105,9 108,18" fill="#facc15"/>
  ${[[75,55],[100,40],[125,55],[85,70],[115,70]].map(([x,y])=>
    `<ellipse cx="${x}" cy="${y}" rx="8" ry="12" fill="#f97316" opacity="0.8" stroke="none"/>`).join('')}
  <path d="M82,168 Q72,148 68,128 Q78,138 88,125 Q92,145 100,135 Q108,145 112,125 Q122,138 132,128 Q128,148 118,168" fill="#ef4444" stroke="#1e293b" stroke-width="2"/>
`);

IL.passarinho = () => _svgImg(`
  <ellipse cx="100" cy="130" rx="55" ry="42" fill="#60a5fa" stroke="#1e293b" stroke-width="4"/>
  <ellipse cx="100" cy="122" rx="42" ry="30" fill="#93c5fd"/>
  <circle cx="100" cy="82" r="38" fill="#60a5fa" stroke="#1e293b" stroke-width="4"/>
  <path d="M55,128 Q28,115 18,130 Q28,148 55,140 Z" fill="#3b82f6" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
  <path d="M145,128 Q172,115 182,130 Q172,148 145,140 Z" fill="#3b82f6" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
  <path d="M100,165 Q88,178 80,188" fill="none" stroke="#f97316" stroke-width="5" stroke-linecap="round"/>
  <path d="M100,165 Q112,178 120,188" fill="none" stroke="#f97316" stroke-width="5" stroke-linecap="round"/>
  <circle cx="82" cy="72" r="12" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
  <circle cx="84" cy="74" r="6" fill="#1e293b"/>
  <circle cx="81" cy="71" r="2" fill="#ffffff"/>
  <path d="M118,82 Q130,78 135,85 Q130,92 118,88" fill="#f97316" stroke="#1e293b" stroke-width="2"/>
  <path d="M80,112 Q100,124 120,112" fill="none" stroke="#1e293b" stroke-width="2"/>
  <ellipse cx="62" cy="38" rx="14" ry="8" fill="#4ade80" stroke="#1e293b" stroke-width="2"/>
  <ellipse cx="100" cy="30" rx="14" ry="8" fill="#4ade80" stroke="#1e293b" stroke-width="2"/>
  <ellipse cx="138" cy="38" rx="14" ry="8" fill="#4ade80" stroke="#1e293b" stroke-width="2"/>
  <line x1="62" y1="46" x2="62" y2="60" stroke="#92400e" stroke-width="3"/>
  <line x1="100" y1="38" x2="100" y2="60" stroke="#92400e" stroke-width="3"/>
  <line x1="138" y1="46" x2="138" y2="60" stroke="#92400e" stroke-width="3"/>
`);

// Mapa de palavras → funções
const DRAW_MAP = {
  'BOLA':IL.bola,'CASA':IL.casa,'GATO':IL.gato,'PATO':IL.pato,'SAPO':IL.sapo,
  'VACA':IL.vaca,'LEÃO':IL.leao,'RATO':IL.rato,'FLOR':IL.flor,'UVAS':IL.uvas,
  'BOLO':IL.bolo,'PEIXE':IL.peixe,'MALA':IL.mala,'NAVIO':IL.navio,'DADO':IL.dado,
  'MELANCIA':IL.melancia,'GALINHA':IL.galinha,'DRAGÃO':IL.dragao,
  'FLORESTA':IL.floresta,'PRESENTE':IL.presente,'CASTELO':IL.castelo,
  'FOGUETE':IL.foguete,'BORBOLETA':IL.borboleta,'GUITARRA':IL.guitarra,
  'ELEFANTE':IL.elefante,'GIRASSOL':IL.girassol,'CHOCOLATE':IL.chocolate,
  'CORAÇÃO':IL.coracao,'CACHOEIRA':IL.cachoeira,'DINOSSAURO':IL.dinossauro,
  'ARCO-ÍRIS':IL.arcoiris,'VULCÃO':IL.vulcao,'PASSARINHO':IL.passarinho,
};

async function getIlustracao(palavra) {
  const fn = DRAW_MAP[palavra.toUpperCase()];
  return fn ? await fn() : null;
}
