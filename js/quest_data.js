// AlfaQuest — Banco de questões BNCC 5º ao 9º ano
// d:1 = fácil | d:2 = médio | d:3 = difícil (só chefão)
const QUEST_DATA = {
  5: {
    nome:'5º ANO', mundo:'Floresta do Saber', emoji:'🌲', cor:'#4ade80',
    fases:[
      { id:1, nome:'Frações Selvagens', boss:false,
        inimigo:{ nome:'Lobo Fração', emoji:'🐺', hp:5, xp:30 },
        materia:'📐 Matemática',
        perguntas:[
          { d:1, q:'Qual é o resultado de 1/2 + 1/4?', ops:['2/6','1/4','3/4','1/3'], r:2 },
          { d:1, q:'0,5 é igual a qual fração?', ops:['1/4','1/3','2/3','1/2'], r:3 },
          { d:1, q:'Uma pizza foi dividida em 8 partes. João comeu 3. Que fração comeu?', ops:['3/5','1/3','3/8','5/8'], r:2 },
          { d:1, q:'Qual fração equivale a 0,25?', ops:['2/5','1/3','1/4','4/10'], r:2 },
          { d:2, q:'3/5 de 20 é igual a?', ops:['10','12','15','8'], r:1 },
          { d:2, q:'Qual é o resultado de 2/3 − 1/6?', ops:['1/3','1/2','1/6','2/6'], r:1 },
          { d:2, q:'0,75 em fração é?', ops:['7/5','3/4','7/10','3/5'], r:1 },
          { d:2, q:'Qual é maior: 2/3 ou 3/4?', ops:['2/3','São iguais','Impossível saber','3/4'], r:3 },
        ]
      },
      { id:2, nome:'O Reino das Palavras', boss:false,
        inimigo:{ nome:'Guardião Gramatical', emoji:'🦊', hp:5, xp:30 },
        materia:'📝 Português',
        perguntas:[
          { d:1, q:'"O gato dormia tranquilo." Qual palavra é adjetivo?', ops:['gato','dormia','tranquilo','O'], r:2 },
          { d:1, q:'Qual destas é um substantivo?', ops:['correr','bonito','casa','rapidamente'], r:2 },
          { d:1, q:'"Ela correu rapidamente." Qual é o advérbio?', ops:['Ela','correu','rapidamente','rápido'], r:2 },
          { d:1, q:'Qual é o antônimo de "alegria"?', ops:['felicidade','prazer','tristeza','animação'], r:2 },
          { d:2, q:'Qual é o plural correto de "cidadão"?', ops:['cidadões','cidadãos','cidadão','cidadãoes'], r:1 },
          { d:2, q:'"Ele chegou cedo." O sujeito da frase é?', ops:['chegou','cedo','Ele chegou','Ele'], r:3 },
          { d:2, q:'Qual frase está na voz passiva?', ops:['Ela leu o livro','O livro foi lido por ela','Lendo o livro','Ler é bom'], r:1 },
          { d:2, q:'"Lendo muito, aprendemos." O verbo "Lendo" está no?', ops:['Infinitivo','Gerúndio','Particípio','Imperativo'], r:1 },
        ]
      },
      { id:3, nome:'Segredos do Cosmos', boss:false,
        inimigo:{ nome:'Corvo Estelar', emoji:'🦅', hp:5, xp:30 },
        materia:'🔭 Ciências',
        perguntas:[
          { d:1, q:'Qual é o maior planeta do Sistema Solar?', ops:['Saturno','Terra','Júpiter','Netuno'], r:2 },
          { d:1, q:'Qual planeta é chamado de "planeta vermelho"?', ops:['Júpiter','Vênus','Marte','Mercúrio'], r:2 },
          { d:1, q:'Quantos planetas tem o Sistema Solar?', ops:['7','8','9','10'], r:1 },
          { d:1, q:'Qual é o planeta mais próximo do Sol?', ops:['Vênus','Terra','Mercúrio','Marte'], r:2 },
          { d:2, q:'O que provoca as estações do ano?', ops:['Rotação da Terra','Inclinação do eixo terrestre','Distância do Sol','Fase da Lua'], r:1 },
          { d:2, q:'O Sol é classificado como?', ops:['Planeta','Satélite','Estrela','Asteroide'], r:2 },
          { d:2, q:'Em quanto tempo a Terra completa uma volta ao redor do Sol?', ops:['24 horas','30 dias','365 dias','7 dias'], r:2 },
          { d:2, q:'O que é uma galáxia?', ops:['Um planeta grande','Conjunto de estrelas, gás e poeira','Um tipo de estrela','A Lua ampliada'], r:1 },
        ]
      },
      { id:4, nome:'⚡ CHEFE: O Grande Sábio', boss:true,
        inimigo:{ nome:'Grande Sábio', emoji:'🧙', hp:8, xp:100 },
        materia:'⚡ Desafio Final 5º ANO',
        perguntas:[
          { d:3, q:'Qual é o resultado de 3/4 + 1/4?', ops:['4/8','1','3/8','1/2'], r:1 },
          { d:3, q:'Qual é o sujeito de "Os meninos jogaram bola"?', ops:['jogaram','bola','Os meninos','meninos'], r:2 },
          { d:3, q:'Qual planeta tem os anéis mais visíveis?', ops:['Júpiter','Saturno','Marte','Netuno'], r:1 },
          { d:3, q:'0,5 + 0,25 = ?', ops:['0,70','0,75','0,80','1,0'], r:1 },
          { d:3, q:'Qual é o antônimo de "alto"?', ops:['largo','baixo','grande','fino'], r:1 },
          { d:3, q:'A Via Láctea é?', ops:['Um planeta','Uma estrela','Nossa galáxia','Uma nebulosa'], r:2 },
          { d:3, q:'2/5 de 30 é?', ops:['10','12','6','15'], r:1 },
          { d:3, q:'Qual é o plural de "mão"?', ops:['mãos','mãoes','mões','mão'], r:0 },
        ]
      },
    ]
  },

  6: {
    nome:'6º ANO', mundo:'Cavernas de Cristal', emoji:'💎', cor:'#60a5fa',
    fases:[
      { id:1, nome:'Labirinto dos Números', boss:false,
        inimigo:{ nome:'Dragão Calculista', emoji:'🐉', hp:5, xp:40 },
        materia:'📐 Matemática',
        perguntas:[
          { d:1, q:'Qual é o MMC de 4 e 6?', ops:['8','10','12','24'], r:2 },
          { d:1, q:'Qual é o MDC de 12 e 18?', ops:['3','6','9','12'], r:1 },
          { d:1, q:'Resolva: x + 5 = 12. x = ?', ops:['5','6','7','8'], r:2 },
          { d:1, q:'Resolva: 2x = 14. x = ?', ops:['5','6','7','8'], r:2 },
          { d:2, q:'Qual é o MMC de 3 e 5?', ops:['8','10','15','20'], r:2 },
          { d:2, q:'Resolva: x − 3 = 8. x = ?', ops:['5','8','11','14'], r:2 },
          { d:2, q:'Qual é o MDC de 8 e 12?', ops:['2','4','6','8'], r:1 },
          { d:2, q:'Resolva: 3x + 1 = 10. x = ?', ops:['2','3','4','5'], r:1 },
        ]
      },
      { id:2, nome:'Ruínas Antigas', boss:false,
        inimigo:{ nome:'Faraó Implacável', emoji:'🗿', hp:5, xp:40 },
        materia:'🏛️ História',
        perguntas:[
          { d:1, q:'Qual civilização construiu as pirâmides do Egito?', ops:['Romana','Grega','Egípcia','Mesopotâmica'], r:2 },
          { d:1, q:'Como eram chamados os reis do Egito Antigo?', ops:['Imperadores','Faraós','Reis','Sultões'], r:1 },
          { d:1, q:'Qual civilização antiga desenvolveu a democracia?', ops:['Egípcia','Romana','Grega','Persa'], r:2 },
          { d:1, q:'Em que continente fica o Egito?', ops:['Ásia','Europa','África','América'], r:2 },
          { d:2, q:'Qual povo é creditado pela criação do alfabeto?', ops:['Gregos','Romanos','Fenícios','Egípcios'], r:2 },
          { d:2, q:'O Código de Hamurábi foi um importante?', ops:['Templo','Código de leis','Mapa','Livro sagrado'], r:1 },
          { d:2, q:'A Mesopotâmia ficava entre quais rios?', ops:['Nilo e Eufrates','Tigre e Nilo','Tigre e Eufrates','Tigre e Amazonas'], r:2 },
          { d:2, q:'Qual civilização criou a escrita cuneiforme?', ops:['Egípcia','Mesopotâmica','Grega','Fenícia'], r:1 },
        ]
      },
      { id:3, nome:'Laboratório Proibido', boss:false,
        inimigo:{ nome:'Monstro Celular', emoji:'🦠', hp:5, xp:40 },
        materia:'🔬 Ciências',
        perguntas:[
          { d:1, q:'Qual é a unidade básica dos seres vivos?', ops:['Átomo','Célula','Tecido','Órgão'], r:1 },
          { d:1, q:'Como chamamos seres formados por apenas uma célula?', ops:['Pluricelulares','Unicelulares','Acelulares','Bicelulares'], r:1 },
          { d:1, q:'O que controla as atividades da célula?', ops:['Membrana','Citoplasma','Núcleo','Vacúolo'], r:2 },
          { d:1, q:'Vírus são formados por células?', ops:['Sim, células animais','Sim, células especiais','Não têm células','Sim, unicelulares'], r:2 },
          { d:2, q:'O que diferencia a célula vegetal da animal?', ops:['Núcleo','Membrana','Parede celular','Ribossomo'], r:2 },
          { d:2, q:'Qual organela é responsável pela fotossíntese?', ops:['Mitocôndria','Vacúolo','Ribossomo','Cloroplasto'], r:3 },
          { d:2, q:'Qual organela gera energia para a célula?', ops:['Núcleo','Ribossomo','Mitocôndria','Cloroplasto'], r:2 },
          { d:2, q:'O DNA está localizado principalmente?', ops:['Na membrana','No citoplasma','No núcleo','Na parede celular'], r:2 },
        ]
      },
      { id:4, nome:'⚡ CHEFE: Guardião das Cavernas', boss:true,
        inimigo:{ nome:'Guardião Antigo', emoji:'👁️', hp:9, xp:120 },
        materia:'⚡ Desafio Final 6º ANO',
        perguntas:[
          { d:3, q:'Qual é o MMC de 6 e 9?', ops:['12','18','24','36'], r:1 },
          { d:3, q:'Resolva: 4x = 20. x = ?', ops:['4','5','6','8'], r:1 },
          { d:3, q:'Quem construiu as pirâmides de Gizé?', ops:['Romanos','Gregos','Egípcios','Persas'], r:2 },
          { d:3, q:'Qual organela realiza a fotossíntese?', ops:['Mitocôndria','Vacúolo','Cloroplasto','Núcleo'], r:2 },
          { d:3, q:'O MDC de 10 e 15 é?', ops:['3','5','10','15'], r:1 },
          { d:3, q:'Qual civilização criou a democracia?', ops:['Romana','Grega','Egípcia','Fenícia'], r:1 },
          { d:3, q:'A mitocôndria é responsável por?', ops:['Fotossíntese','Produção de energia','Reprodução','Digestão'], r:1 },
          { d:3, q:'Resolva: x/2 = 5. x = ?', ops:['5','8','10','12'], r:2 },
        ]
      },
    ]
  },

  7: {
    nome:'7º ANO', mundo:'Deserto do Tempo', emoji:'🏜️', cor:'#facc15',
    fases:[
      { id:1, nome:'Tempestade de Números', boss:false,
        inimigo:{ nome:'Escorpião Matemático', emoji:'🦂', hp:6, xp:50 },
        materia:'📐 Matemática',
        perguntas:[
          { d:1, q:'20% de 50 é?', ops:['5','8','10','15'], r:2 },
          { d:1, q:'50% de 80 é?', ops:['30','40','50','60'], r:1 },
          { d:1, q:'Qual é a razão entre 6 e 8 simplificada?', ops:['6/8','3/4','2/3','1/2'], r:1 },
          { d:1, q:'25% de 80 é?', ops:['15','18','20','25'], r:2 },
          { d:2, q:'Produto de R$100 com 30% de desconto. Você paga?', ops:['R$60','R$70','R$75','R$80'], r:1 },
          { d:2, q:'Se 3 livros custam R$45, quanto custam 5 livros?', ops:['R$60','R$70','R$75','R$80'], r:2 },
          { d:2, q:'150% de 20 é?', ops:['25','28','30','35'], r:2 },
          { d:2, q:'Se x/4 = 3/6, então x = ?', ops:['1','2','3','4'], r:1 },
        ]
      },
      { id:2, nome:'A Floresta Viva', boss:false,
        inimigo:{ nome:'Espírito da Natureza', emoji:'🌿', hp:6, xp:50 },
        materia:'🌱 Ciências',
        perguntas:[
          { d:1, q:'Qual é o maior bioma do Brasil?', ops:['Cerrado','Mata Atlântica','Amazônia','Caatinga'], r:2 },
          { d:1, q:'Quem são os produtores na cadeia alimentar?', ops:['Herbívoros','Fungos','Plantas (fotossíntese)','Bactérias'], r:2 },
          { d:1, q:'O que fazem os decompositores?', ops:['Produzem alimento','Decompõem matéria orgânica','Consomem plantas','Realizam fotossíntese'], r:1 },
          { d:1, q:'Principal fator abiótico para a fotossíntese?', ops:['Solo','Vento','Luz solar','Temperatura'], r:2 },
          { d:2, q:'O que é um ecossistema?', ops:['Só os animais de uma área','Conjunto de seres vivos e o ambiente','Apenas a flora local','Um tipo de bioma'], r:1 },
          { d:2, q:'Qual bioma tem vegetação típica de savana no Brasil?', ops:['Amazônia','Mata Atlântica','Cerrado','Pampa'], r:2 },
          { d:2, q:'O que é biodiversidade?', ops:['Tipo de planta','Variedade de seres vivos num local','Área de proteção','Estudo da natureza'], r:1 },
          { d:2, q:'A Mata Atlântica restou aproximadamente?', ops:['80% original','50% original','12% original','1% original'], r:2 },
        ]
      },
      { id:3, nome:'Portal do Passado', boss:false,
        inimigo:{ nome:'Cavaleiro Medieval', emoji:'⚔️', hp:6, xp:50 },
        materia:'📜 História',
        perguntas:[
          { d:1, q:'Quem pintou a Mona Lisa?', ops:['Michelangelo','Rafael','Leonardo da Vinci','Botticelli'], r:2 },
          { d:1, q:'O Renascimento teve origem em qual país?', ops:['França','Espanha','Portugal','Itália'], r:3 },
          { d:1, q:'Os iluministas valorizavam principalmente?', ops:['A fé religiosa','A monarquia absoluta','A razão','A tradição'], r:2 },
          { d:1, q:'O que os iluministas criticavam?', ops:['A ciência','O absolutismo e a Igreja','A democracia','O comércio'], r:1 },
          { d:2, q:'Qual invenção ajudou a difundir o Renascimento?', ops:['Telégrafo','Rádio','Imprensa de Gutenberg','Televisão'], r:2 },
          { d:2, q:'Quem escreveu "O Príncipe"?', ops:['Voltaire','Rousseau','Maquiavel','Locke'], r:2 },
          { d:2, q:'O Iluminismo defendia governo baseado em?', ops:['Fé e tradição','Razão e lei','Poder absoluto','Religião'], r:1 },
          { d:2, q:'O Renascimento ocorreu nos séculos?', ops:['XIII e XIV','XIV e XV','XV e XVI','XVI e XVII'], r:2 },
        ]
      },
      { id:4, nome:'⚡ CHEFE: Senhor do Tempo', boss:true,
        inimigo:{ nome:'Senhor do Tempo', emoji:'⏳', hp:10, xp:150 },
        materia:'⚡ Desafio Final 7º ANO',
        perguntas:[
          { d:3, q:'30% de 60 é?', ops:['15','18','20','25'], r:1 },
          { d:3, q:'O maior bioma do Brasil é?', ops:['Cerrado','Amazônia','Caatinga','Pampa'], r:1 },
          { d:3, q:'O Renascimento surgiu na?', ops:['França','Itália','Espanha','Inglaterra'], r:1 },
          { d:3, q:'Se 2 caixas custam R$30, 6 caixas custam?', ops:['R$60','R$70','R$80','R$90'], r:3 },
          { d:3, q:'Os decompositores são exemplos de?', ops:['Plantas','Animais carnívoros','Fungos e bactérias','Algas'], r:2 },
          { d:3, q:'O Iluminismo ocorreu principalmente no século?', ops:['XV','XVI','XVII','XVIII'], r:3 },
          { d:3, q:'75% de 100 é?', ops:['50','65','70','75'], r:3 },
          { d:3, q:'A Mona Lisa foi pintada por?', ops:['Michelangelo','Leonardo da Vinci','Rafael','Van Gogh'], r:1 },
        ]
      },
    ]
  },

  8: {
    nome:'8º ANO', mundo:'Oceano Profundo', emoji:'🌊', cor:'#818cf8',
    fases:[
      { id:1, nome:'Abismo Geométrico', boss:false,
        inimigo:{ nome:'Kraken Geômetra', emoji:'🦑', hp:6, xp:60 },
        materia:'📐 Matemática',
        perguntas:[
          { d:1, q:'Qual é a média de: 4, 6, 8, 10?', ops:['6','7','8','9'], r:1 },
          { d:1, q:'Triângulo com catetos 3 e 4: a hipotenusa é?', ops:['5','6','7','8'], r:0 },
          { d:1, q:'A média de: 10, 20, 30 é?', ops:['15','20','25','30'], r:1 },
          { d:1, q:'A moda de: 2, 3, 3, 5, 5, 5 é?', ops:['3','5','2','3 e 5'], r:1 },
          { d:2, q:'No triângulo retângulo, a² = b² + c² é o?', ops:['Teorema de Tales','Teorema de Pitágoras','Lei dos Senos','Lei dos Cossenos'], r:1 },
          { d:2, q:'O que é mediana em estatística?', ops:['Valor mais frequente','Valor central do conjunto ordenado','Soma ÷ quantidade','Diferença entre extremos'], r:1 },
          { d:2, q:'Triângulo com catetos 5 e 12: a hipotenusa é?', ops:['13','14','15','17'], r:0 },
          { d:2, q:'Amplitude de um conjunto de dados é?', ops:['Soma dos valores','Valor central','Diferença entre maior e menor','Média dos valores'], r:2 },
        ]
      },
      { id:2, nome:'Ecos da Revolução', boss:false,
        inimigo:{ nome:'Operário Rebelde', emoji:'⚙️', hp:6, xp:60 },
        materia:'📜 História',
        perguntas:[
          { d:1, q:'A Revolução Industrial começou em qual país?', ops:['França','Alemanha','EUA','Inglaterra'], r:3 },
          { d:1, q:'Em que ano foi a Revolução Francesa?', ops:['1776','1789','1800','1815'], r:1 },
          { d:1, q:'Qual foi o lema da Revolução Francesa?', ops:['Deus, Rei e Nação','Liberdade, Igualdade, Fraternidade','Pão, Terra e Liberdade','Progresso e Ordem'], r:1 },
          { d:1, q:'Qual máquina foi símbolo da Rev. Industrial?', ops:['Motor elétrico','Máquina a vapor','Computador','Telégrafo'], r:1 },
          { d:2, q:'A Bastilha era?', ops:['Um palácio real','Uma catedral','Uma prisão símbolo do absolutismo','Um quartel'], r:2 },
          { d:2, q:'Quem escreveu o "Manifesto Comunista"?', ops:['Rousseau e Voltaire','Napoleon e Wellington','Marx e Engels','Locke e Montesquieu'], r:2 },
          { d:2, q:'A Revolução Francesa derrubou o?', ops:['República','Socialismo','Absolutismo','Feudalismo'], r:2 },
          { d:2, q:'O proletariado é a classe?', ops:['Dos nobres','Dos burgueses','Operária e trabalhadora','Dos camponeses medievais'], r:2 },
        ]
      },
      { id:3, nome:'Código Genético', boss:false,
        inimigo:{ nome:'Serpente do DNA', emoji:'🧬', hp:6, xp:60 },
        materia:'🔬 Ciências',
        perguntas:[
          { d:1, q:'Quem propôs a Teoria da Evolução?', ops:['Mendel','Newton','Darwin','Einstein'], r:2 },
          { d:1, q:'O que são fósseis?', ops:['Pedras coloridas','Restos preservados de seres vivos antigos','Animais extintos vivos','Só plantas petrificadas'], r:1 },
          { d:1, q:'Unidade básica da hereditariedade?', ops:['Cromossomo','Gene','DNA completo','Proteína'], r:1 },
          { d:1, q:'Mendel estudou a hereditariedade usando?', ops:['Moscas','Ervilhas','Ratos','Polvos'], r:1 },
          { d:2, q:'O que é seleção natural?', ops:['Escolha artificial de animais','Sobrevivência dos mais adaptados','Reprodução controlada','Mutação aleatória'], r:1 },
          { d:2, q:'O livro de Darwin sobre evolução chama-se?', ops:['A Origem do Homem','A Seleção Natural','A Origem das Espécies','Evolução e Vida'], r:2 },
          { d:2, q:'O ser humano e o chimpanzé?', ops:['Têm genomas idênticos','Têm um ancestral em comum','Têm DNA completamente diferente','Não têm relação'], r:1 },
          { d:2, q:'O que é mutação genética?', ops:['Reprodução normal','Evolução planejada','Alteração no DNA de um organismo','Troca de genes entre espécies'], r:2 },
        ]
      },
      { id:4, nome:'⚡ CHEFE: Leviatã do Saber', boss:true,
        inimigo:{ nome:'Leviatã', emoji:'🐋', hp:11, xp:180 },
        materia:'⚡ Desafio Final 8º ANO',
        perguntas:[
          { d:3, q:'Catetos 6 e 8: hipotenusa = ?', ops:['8','10','12','14'], r:1 },
          { d:3, q:'A Revolução Francesa aconteceu em?', ops:['1776','1789','1800','1848'], r:1 },
          { d:3, q:'Quem propôs a teoria da evolução?', ops:['Mendel','Newton','Darwin','Pasteur'], r:2 },
          { d:3, q:'A média de 5, 10, 15 é?', ops:['8','10','12','15'], r:1 },
          { d:3, q:'O lema da Revolução Francesa era?', ops:['Fé, Lei, Ordem','Liberdade, Igualdade, Fraternidade','Deus, Pátria, Família','Trabalho, Força, União'], r:1 },
          { d:3, q:'A moda de: 1,1,2,3,3,3,4 é?', ops:['1','2','3','4'], r:2 },
          { d:3, q:'Seleção natural significa?', ops:['Cruzamento controlado','Sobrevivência dos mais adaptados','Mutação genética','Herança de genes'], r:1 },
          { d:3, q:'Catetos 9 e 12: hipotenusa = ?', ops:['13','14','15','16'], r:2 },
        ]
      },
    ]
  },

  9: {
    nome:'9º ANO', mundo:'Castelo das Estrelas', emoji:'🌌', cor:'#f472b6',
    fases:[
      { id:1, nome:'Cálculos do Infinito', boss:false,
        inimigo:{ nome:'Dragão Parabólico', emoji:'🐲', hp:7, xp:70 },
        materia:'📐 Matemática',
        perguntas:[
          { d:1, q:'Probabilidade de sair cara numa moeda?', ops:['1/3','1/2','1/4','1/6'], r:1 },
          { d:1, q:'Ao jogar um dado, probabilidade de sair 3?', ops:['1/3','1/4','1/5','1/6'], r:3 },
          { d:1, q:'A PA: 2, 5, 8, 11... tem razão?', ops:['2','3','4','5'], r:1 },
          { d:1, q:'O 5º termo da PA 1, 3, 5, 7... é?', ops:['8','9','10','11'], r:1 },
          { d:2, q:'f(x) = ax² + bx + c é chamada de?', ops:['Função linear','Função quadrática','Função exponencial','Função logarítmica'], r:1 },
          { d:2, q:'O gráfico de uma função quadrática é?', ops:['Reta','Hipérbole','Parábola','Circunferência'], r:2 },
          { d:2, q:'O discriminante Δ de ax²+bx+c = 0 é?', ops:['b²+4ac','b²−4ac','2b−4ac','a²−bc'], r:1 },
          { d:2, q:'Se Δ > 0, a equação tem quantas raízes reais?', ops:['Zero','Uma','Duas distintas','Infinitas'], r:2 },
        ]
      },
      { id:2, nome:'Laboratório das Leis', boss:false,
        inimigo:{ nome:'Guardião Atômico', emoji:'⚛️', hp:7, xp:70 },
        materia:'🔬 Física e Química',
        perguntas:[
          { d:1, q:'Símbolo do Oxigênio na tabela periódica?', ops:['Ox','O²','O','Og'], r:2 },
          { d:1, q:'Fórmula da velocidade média?', ops:['v = m×a','v = d/t','v = F/m','v = P×t'], r:1 },
          { d:1, q:'Símbolo do Ferro na tabela periódica?', ops:['Fr','Fi','Fe','Fo'], r:2 },
          { d:1, q:'Água em estado gasoso é?', ops:['Gelo','Geada','Vapor d\'água','Neblina'], r:2 },
          { d:2, q:'O que é inércia?', ops:['Força gravitacional','Tendência de manter o estado de movimento','Aceleração negativa','Resistência ao calor'], r:1 },
          { d:2, q:'Unidade de medida de força no SI?', ops:['Joule','Watt','Newton','Pascal'], r:2 },
          { d:2, q:'A 1ª Lei de Newton trata da?', ops:['Ação e reação','Aceleração','Inércia','Gravitação'], r:2 },
          { d:2, q:'Símbolo do Carbono na tabela periódica?', ops:['Ca','Co','Cr','C'], r:3 },
        ]
      },
      { id:3, nome:'Batalha das Nações', boss:false,
        inimigo:{ nome:'General do Caos', emoji:'💣', hp:7, xp:70 },
        materia:'📜 História',
        perguntas:[
          { d:1, q:'Em que ano começou a 1ª Guerra Mundial?', ops:['1910','1912','1914','1918'], r:2 },
          { d:1, q:'Quem liderou a Alemanha nazista?', ops:['Mussolini','Stalin','Hitler','Franco'], r:2 },
          { d:1, q:'O ataque a Pearl Harbor foi feito por?', ops:['Alemanha','Itália','Japão','URSS'], r:2 },
          { d:1, q:'Em que ano terminou a 2ª Guerra Mundial?', ops:['1943','1944','1945','1946'], r:2 },
          { d:2, q:'O que desencadeou a 1ª Guerra Mundial?', ops:['Queda da Bastilha','Assassinato do Arquiduque Francisco Ferdinando','Ataque a Pearl Harbor','Invasão da Polônia'], r:1 },
          { d:2, q:'Em que ano começou a 2ª Guerra Mundial?', ops:['1933','1937','1939','1941'], r:2 },
          { d:2, q:'O que foi o Holocausto?', ops:['Uma batalha naval','Genocídio de judeus e outros grupos pelos nazistas','Um tratado de paz','Uma crise econômica'], r:1 },
          { d:2, q:'Qual organização foi criada após a 2ª Guerra para a paz?', ops:['Liga das Nações','NATO','ONU','G20'], r:2 },
        ]
      },
      { id:4, nome:'⚡ CHEFE FINAL: Guardião do Conhecimento', boss:true,
        inimigo:{ nome:'Guardião Supremo', emoji:'🏆', hp:12, xp:300 },
        materia:'⚡ Desafio Supremo',
        perguntas:[
          { d:3, q:'O gráfico da função quadrática é uma?', ops:['Reta','Hipérbole','Parábola','Espiral'], r:2 },
          { d:3, q:'A 1ª Guerra Mundial começou em?', ops:['1912','1914','1916','1918'], r:1 },
          { d:3, q:'Fórmula da velocidade é?', ops:['v = F/m','v = d/t','v = m×a','v = P/t'], r:1 },
          { d:3, q:'Δ = b² − 4ac é o?', ops:['Discriminante','Vértice','Coeficiente angular','Raiz'], r:0 },
          { d:3, q:'Hitler liderou qual país na 2ª Guerra?', ops:['Itália','Japão','Alemanha','Rússia'], r:2 },
          { d:3, q:'Símbolo do Ferro na tabela periódica?', ops:['Fr','Fi','Fo','Fe'], r:3 },
          { d:3, q:'A ONU foi criada após?', ops:['1ª Guerra Mundial','Revolução Francesa','2ª Guerra Mundial','Guerra Fria'], r:2 },
          { d:3, q:'Se Δ < 0, a equação quadrática tem?', ops:['Duas raízes reais','Uma raiz real','Nenhuma raiz real','Infinitas raízes'], r:2 },
        ]
      },
    ]
  }
};
