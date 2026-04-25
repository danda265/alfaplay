// AlfaPlay — Dados pedagógicos por ano escolar
// Anderson Rodrigo Costa © 2026

const DATA = {
  1: {
    label: '1º Ano', color: '#4ade80',
    silabas: ['MA','ME','MI','MO','MU','BA','BE','BI','BO','BU','PA','PE','PI','PO','PU',
              'CA','CO','CU','DA','DE','DI','DO','DU','FA','FE','FI','FO','FU','GA','GE',
              'GI','GO','GU','LA','LE','LI','LO','LU','NA','NE','NI','NO','NU','RA','RE',
              'RI','RO','RU','SA','SE','SI','SO','SU','TA','TE','TI','TO','TU','VA','VE','VI','VO','VU'],
    palavras: [
      { palavra:'BOLA',  emoji:'⚽', silabas:['BO','LA']     },
      { palavra:'CASA',  emoji:'🏠', silabas:['CA','SA']     },
      { palavra:'GATO',  emoji:'🐱', silabas:['GA','TO']     },
      { palavra:'PATO',  emoji:'🦆', silabas:['PA','TO']     },
      { palavra:'SAPO',  emoji:'🐸', silabas:['SA','PO']     },
      { palavra:'VACA',  emoji:'🐄', silabas:['VA','CA']     },
      { palavra:'LEÃO',  emoji:'🦁', silabas:['LE','ÃO']    },
      { palavra:'RATO',  emoji:'🐭', silabas:['RA','TO']     },
      { palavra:'FLOR',  emoji:'🌸', silabas:['FLOR']        },
      { palavra:'UVAS',  emoji:'🍇', silabas:['U','VAS']     },
      { palavra:'BOLO',  emoji:'🎂', silabas:['BO','LO']     },
      { palavra:'PEIXE', emoji:'🐟', silabas:['PEI','XE']    },
      { palavra:'MALA',  emoji:'🧳', silabas:['MA','LA']     },
      { palavra:'NAVIO', emoji:'🚢', silabas:['NA','VI','O'] },
      { palavra:'DADO',  emoji:'🎲', silabas:['DA','DO']     },
    ],
    letras: 'ABCDEFGHIJLMNOPQRSTUVXYZ'.split(''),
    cores: ['vermelho','azul','verde','amarelo','laranja','roxo','rosa'],
    numeros: [1,2,3,4,5,6,7,8,9,10],
  },
  2: {
    label: '2º Ano', color: '#60a5fa',
    silabas: ['BRA','BRE','BRI','BRO','BRU','CRA','CRE','CRI','CRO','CRU',
              'DRA','DRE','DRI','DRO','FRA','FRE','FRI','FRO','GRA','GRE',
              'GRI','GRO','PRA','PRE','PRI','PRO','TRA','TRE','TRI','TRO',
              'LHA','LHE','LHI','LHO','NHA','NHE','NHI','NHO'],
    palavras: [
      { palavra:'MELANCIA',  emoji:'🍉', silabas:['ME','LAN','CI','A']       },
      { palavra:'GALINHA',   emoji:'🐔', silabas:['GA','LI','NHA']           },
      { palavra:'DRAGÃO',    emoji:'🐉', silabas:['DRA','GÃO']               },
      { palavra:'FLORESTA',  emoji:'🌲', silabas:['FLO','RES','TA']          },
      { palavra:'PRESENTE',  emoji:'🎁', silabas:['PRE','SEN','TE']          },
      { palavra:'CASTELO',   emoji:'🏰', silabas:['CAS','TE','LO']           },
      { palavra:'BORBOLETA', emoji:'🦋', silabas:['BOR','BO','LE','TA']      },
      { palavra:'FOGUETE',   emoji:'🚀', silabas:['FO','GUE','TE']           },
      { palavra:'GUITARRA',  emoji:'🎸', silabas:['GUI','TAR','RA']          },
      { palavra:'PALHAÇO',   emoji:'🤡', silabas:['PA','LHA','ÇO']           },
      { palavra:'TARTARUGA', emoji:'🐢', silabas:['TAR','TA','RU','GA']      },
      { palavra:'CRIANÇA',   emoji:'👧', silabas:['CRI','AN','ÇA']           },
      { palavra:'PRINCESA',  emoji:'👸', silabas:['PRIN','CE','SA']          },
      { palavra:'TRABALHO',  emoji:'🔨', silabas:['TRA','BA','LHO']          },
      { palavra:'PRATO',     emoji:'🍽️', silabas:['PRA','TO']                },
    ],
    letras: 'ABCDEFGHIJLMNOPQRSTUVXYZ'.split(''),
    cores: ['vermelho','azul','verde','amarelo','laranja','roxo','rosa','marrom','cinza'],
    numeros: Array.from({length:20},(_,i)=>i+1),
  },
  3: {
    label: '3º Ano', color: '#f472b6',
    silabas: ['ÇÃO','GEM','QUE','QUI','GUE','GUI','CHA','CHE','CHI','CHO','CHU',
              'XA','XE','XI','XO','XU','ZA','ZE','ZI','ZO','ZU','CE','CI'],
    palavras: [
      { palavra:'ELEFANTE',   emoji:'🐘', silabas:['E','LE','FAN','TE']        },
      { palavra:'GIRASSOL',   emoji:'🌻', silabas:['GI','RAS','SOL']           },
      { palavra:'CHOCOLATE',  emoji:'🍫', silabas:['CHO','CO','LA','TE']       },
      { palavra:'CORAÇÃO',    emoji:'❤️', silabas:['CO','RA','ÇÃO']            },
      { palavra:'CACHOEIRA',  emoji:'💧', silabas:['CA','CHO','EI','RA']       },
      { palavra:'PASSARINHO', emoji:'🐦', silabas:['PAS','SA','RI','NHO']      },
      { palavra:'DINOSSAURO', emoji:'🦕', silabas:['DI','NOS','SAU','RO']      },
      { palavra:'ARCO-ÍRIS',  emoji:'🌈', silabas:['AR','CO','Í','RIS']        },
      { palavra:'VULCÃO',     emoji:'🌋', silabas:['VUL','CÃO']               },
      { palavra:'BORBOLETA',  emoji:'🦋', silabas:['BOR','BO','LE','TA']       },
      { palavra:'GUITARRA',   emoji:'🎸', silabas:['GUI','TAR','RA']           },
      { palavra:'ESQUELETO',  emoji:'💀', silabas:['ES','QUE','LE','TO']       },
      { palavra:'TROVÃO',     emoji:'⛈️', silabas:['TRO','VÃO']               },
      { palavra:'FLORESTA',   emoji:'🌲', silabas:['FLO','RES','TA']           },
      { palavra:'ASTRONAUTA', emoji:'👨‍🚀', silabas:['AS','TRO','NAU','TA']      },
    ],
    letras: 'ABCDEFGHIJLMNOPQRSTUVXYZ'.split(''),
    cores: ['vermelho','azul','verde','amarelo','laranja','roxo','rosa','marrom','cinza','turquesa'],
    numeros: Array.from({length:30},(_,i)=>i+1),
  }
};

function gerarPares(ano, qtd = 6) {
  const pool = DATA[ano].palavras.slice();
  const sel = pool.sort(() => Math.random() - 0.5).slice(0, qtd);
  const pares = [...sel, ...sel].map((p, i) => ({ ...p, id: i, virado: false, encontrado: false }));
  return pares.sort(() => Math.random() - 0.5);
}

function palavraAleatoria(ano) {
  const pool = DATA[ano].palavras;
  return pool[Math.floor(Math.random() * pool.length)];
}

function silabsEmbaralhadas(palavra) {
  return [...palavra.silabas].sort(() => Math.random() - 0.5);
}
