/* =========================================================
       BANCO DE FRASES
    ========================================================= */

const quotes = [
  /* =====================================================
         BERSERK
      ===================================================== */

  {
    quote: "Há caminhos que só existem depois que alguém decide atravessá-los.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    quote: "Sobreviver também pode ser uma forma silenciosa de resistência.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    quote:
      "Mesmo cercado pela noite, um homem ainda pode escolher continuar andando.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    quote:
      "Algumas cicatrizes não desaparecem; apenas deixam de comandar os passos.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    quote:
      "A escuridão não torna alguém fraco. Às vezes, ela apenas revela aquilo que já existia.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    quote: "Há batalhas que não são vencidas; são atravessadas.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    quote:
      "Continuar respirando pode ser o primeiro ato de rebeldia contra o destino.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    quote:
      "Nem toda força nasce da esperança. Algumas nascem simplesmente da recusa em cair.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  /* =====================================================
         VAGABOND
      ===================================================== */

  {
    quote:
      "O homem que procura vencer todos os outros ainda não descobriu contra quem realmente luta.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    quote:
      "Quanto mais se conhece a própria fraqueza, menos necessário se torna escondê-la.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    quote:
      "A espada pode cortar um corpo; compreender a si mesmo exige outro tipo de lâmina.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    quote:
      "Existe força naquele que aprende a permanecer de pé sem precisar parecer invencível.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    quote:
      "O caminho não se revela para quem permanece olhando para o horizonte.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    quote:
      "Um homem pode passar a vida procurando adversários e ainda assim nunca encontrar seu verdadeiro inimigo.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    quote:
      "A solidão também ensina aquilo que nenhum mestre consegue explicar.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    quote: "Tornar-se forte não significa deixar de sentir medo.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  /* =====================================================
         DIÁRIO DE UMA APOTECÁRIA
      ===================================================== */

  {
    quote: "Conhecimento também é uma forma de sobrevivência.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    quote:
      "Às vezes, a resposta mais importante está justamente naquilo que todos ignoraram.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    quote:
      "Um detalhe pequeno pode esconder uma verdade grande demais para ser ignorada.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    quote:
      "A curiosidade pode ser perigosa quando encontra pessoas que preferem permanecer ignorantes.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    quote: "Nem todo veneno mata imediatamente; alguns apenas esperam.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    quote: "Observar antes de agir é uma vantagem que poucos percebem.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    quote: "A verdade raramente chega fazendo barulho.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    quote:
      "Conhecer a causa de um problema muda completamente a forma de enfrentá-lo.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  /* =====================================================
         SHE IS BEAUTIFUL
      ===================================================== */

  {
    quote:
      "Algumas pessoas passam a vida tentando lembrar quem eram antes de alguém lhes dizer quem deveriam ser.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    quote:
      "A memória pode esconder uma verdade, mas não consegue apagar completamente aquilo que sentimos.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    quote: "Nem tudo aquilo que esquecemos deixa de fazer parte de nós.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    quote: "Às vezes, lembrar é mais assustador do que esquecer.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    quote:
      "Uma identidade também pode ser construída a partir dos pedaços que restaram.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    quote:
      "Aquilo que parece familiar pode ser justamente o que mais precisa ser questionado.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  /* =====================================================
         SAMURAI X
      ===================================================== */

  {
    quote:
      "Uma espada pode destruir uma vida, mas não pode decidir o que fazemos depois disso.",
    work: "Rurouni Kenshin",
    author: "Nobuhiro Watsuki",
  },

  {
    quote:
      "O passado não desaparece apenas porque decidimos caminhar para longe dele.",
    work: "Rurouni Kenshin",
    author: "Nobuhiro Watsuki",
  },

  {
    quote:
      "Redenção não está em esquecer o que fizemos, mas em escolher o que faremos depois.",
    work: "Rurouni Kenshin",
    author: "Nobuhiro Watsuki",
  },

  {
    quote:
      "Aquele que conhece a violência também precisa aprender quando não usá-la.",
    work: "Rurouni Kenshin",
    author: "Nobuhiro Watsuki",
  },

  {
    quote: "Carregar uma espada não significa necessariamente querer usá-la.",
    work: "Rurouni Kenshin",
    author: "Nobuhiro Watsuki",
  },

  {
    quote:
      "Algumas promessas são feitas justamente para impedir que o passado se repita.",
    work: "Rurouni Kenshin",
    author: "Nobuhiro Watsuki",
  },

  /* =====================================================
         MISTURADAS
      ===================================================== */

  {
    quote:
      "Há momentos em que sobreviver é simplesmente não permitir que o mundo escolha por você.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    quote:
      "O verdadeiro adversário pode permanecer invisível até o instante em que olhamos para dentro.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    quote:
      "Toda investigação começa quando alguém decide que uma pequena anomalia merece atenção.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    quote:
      "Existem lembranças que não voltam como imagens, mas como sensações.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    quote:
      "O homem que abandona a violência ainda precisa aprender a conviver com aquilo que foi.",
    work: "Rurouni Kenshin",
    author: "Nobuhiro Watsuki",
  },

  {
    quote:
      "A força que não pode ser controlada acaba pertencendo ao próprio caos.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    quote: "Há mais de uma maneira de perder uma batalha.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    quote:
      "A aparência de normalidade costuma esconder as histórias mais estranhas.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    quote:
      "Uma pessoa pode desaparecer da própria memória e ainda permanecer na memória de outra.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    quote:
      "O futuro não apaga o passado; apenas oferece uma nova escolha diante dele.",
    work: "Rurouni Kenshin",
    author: "Nobuhiro Watsuki",
  },

  /* =========================================================
     O HOMEM DE GELO E SUA FRIA COLEGA DE TRABALHO
  ========================================================= */

  {
    quote: "Até o coração mais frio pode guardar um lugar onde a primavera ainda chega.",
    work: "O Homem de Gelo e Sua Fria Colega de Trabalho",
    author: "Kōcha Agasawa"
  },

  {
    quote: "Há pessoas que tornam um dia comum um pouco mais quente simplesmente por estarem perto.",
    work: "O Homem de Gelo e Sua Fria Colega de Trabalho",
    author: "Kōcha Agasawa"
  },

  {
    quote: "Nem todo silêncio significa distância; às vezes, ele é apenas uma forma tímida de permanecer junto.",
    work: "O Homem de Gelo e Sua Fria Colega de Trabalho",
    author: "Kōcha Agasawa"
  },

  {
    quote: "Algumas emoções aparecem devagar, como neve que se acumula sem que percebamos.",
    work: "O Homem de Gelo e Sua Fria Colega de Trabalho",
    author: "Kōcha Agasawa"
  },

  {
    quote: "O cotidiano parece diferente quando existe alguém que esperamos encontrar todos os dias.",
    work: "O Homem de Gelo e Sua Fria Colega de Trabalho",
    author: "Kōcha Agasawa"
  },

  {
    quote: "Talvez gostar de alguém seja perceber que até os pequenos acontecimentos passaram a importar.",
    work: "O Homem de Gelo e Sua Fria Colega de Trabalho",
    author: "Kōcha Agasawa"
  },

  {
    quote: "Há uma delicadeza estranha em duas pessoas que ainda não sabem dizer o que sentem.",
    work: "O Homem de Gelo e Sua Fria Colega de Trabalho",
    author: "Kōcha Agasawa"
  },

  {
    quote: "Nem sempre precisamos de grandes acontecimentos. Às vezes, basta dividir uma tarde.",
    work: "O Homem de Gelo e Sua Fria Colega de Trabalho",
    author: "Kōcha Agasawa"
  },

  {
    quote: "O frio pode permanecer do lado de fora quando alguém encontra um pouco de calor para compartilhar.",
    work: "O Homem de Gelo e Sua Fria Colega de Trabalho",
    author: "Kōcha Agasawa"
  },

  {
    quote: "Existem sentimentos que começam pequenos demais para receber um nome e importantes demais para serem ignorados.",
    work: "O Homem de Gelo e Sua Fria Colega de Trabalho",
    author: "Kōcha Agasawa"
  },


  /* =========================================================
     HIRAYASUMI
  ========================================================= */

  {
    quote: "Nem toda vida precisa correr para algum lugar.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },

  {
    quote: "Talvez viver bem seja aprender a enxergar aquilo que acontece enquanto esperamos o futuro.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },

  {
    quote: "Há dias que não parecem importantes até percebermos que foram exatamente os dias de que precisávamos.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },

  {
    quote: "Uma casa também pode ser feita de pessoas, silêncios, comida e pequenas rotinas.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },

  {
    quote: "Não saber exatamente para onde ir não significa que estamos perdidos.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },

  {
    quote: "Às vezes, descansar é uma maneira de continuar.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },

  {
    quote: "A vida cotidiana esconde pequenas coisas que só percebemos quando finalmente diminuímos o passo.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },

  {
    quote: "Talvez felicidade não seja chegar a algum lugar, mas conseguir gostar de estar onde estamos.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },

  {
    quote: "Existem encontros que não mudam o mundo, mas mudam a maneira como atravessamos o dia.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },

  {
    quote: "A vida também acontece nas pausas entre uma coisa e outra.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },


  /* =========================================================
     SAINT SEIYA
  ========================================================= */

  {
    quote: "Mesmo diante de um destino escrito, ainda existe um coração capaz de escolher.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "O Cosmo não é apenas aquilo que existe dentro de nós, mas aquilo que decidimos proteger.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "Uma chama pequena ainda pode desafiar uma noite inteira.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "Os verdadeiros guerreiros não lutam porque desconhecem o medo, mas porque encontram algo que vale mais do que ele.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "O impossível começa a perder força quando alguém se recusa a aceitá-lo.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "Uma constelação distante ainda pode servir de guia para quem atravessa a escuridão.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "A força de um Cavaleiro não está somente em sua armadura, mas naquilo que permanece de pé quando ela se quebra.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "Há batalhas que parecem perdidas até que alguém encontre forças para dar mais um passo.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "O Cosmo pode nascer no silêncio de alguém que decidiu não abandonar seus companheiros.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "Entre as estrelas e a terra existe apenas uma distância; entre desistir e continuar, existe uma escolha.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "Mesmo uma existência pequena pode fazer o universo ao redor vibrar.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "O valor de uma promessa aparece quando cumpri-la exige enfrentar aquilo que mais tememos.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },


  /* =========================================================
     YOUR NAME
  ========================================================= */

  {
    quote: "Algumas pessoas chegam até nós antes mesmo de sabermos que estávamos procurando por elas.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  },

  {
    quote: "Talvez existam encontros que o tempo tenta desfazer e o coração insiste em lembrar.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  },

  {
    quote: "Mesmo quando a memória desaparece, certas ausências continuam parecendo familiares.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  },

  {
    quote: "Há pessoas que reconhecemos antes de conseguirmos explicar de onde vem essa sensação.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  },

  {
    quote: "O tempo pode separar duas pessoas, mas não consegue impedir que uma procure pela outra.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  },

  {
    quote: "Algumas lembranças parecem sonhos porque foram grandes demais para caber em palavras.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  },

  {
    quote: "Talvez procurar alguém seja também uma maneira de descobrir quem somos.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  },

  {
    quote: "Existem distâncias que nenhum mapa consegue medir.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  },

  {
    quote: "Quando duas vidas se cruzam, até aquilo que parecia acaso pode adquirir significado.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  },

  {
    quote: "Alguns nomes permanecem dentro de nós mesmo quando já não conseguimos lembrar por quê.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  },


  /* =========================================================
     ATELIER OF WITCH HAT
  ========================================================= */

  {
    quote: "A magia começa quando alguém decide olhar para aquilo que todos disseram ser impossível.",
    work: "Atelier of Witch Hat",
    author: "Kamome Shirahama"
  },

  {
    quote: "Conhecimento pode ser uma porta, mas também pode ser uma responsabilidade.",
    work: "Atelier of Witch Hat",
    author: "Kamome Shirahama"
  },

  {
    quote: "Nem toda pessoa que deseja criar algo entende imediatamente o peso de suas próprias mãos.",
    work: "Atelier of Witch Hat",
    author: "Kamome Shirahama"
  },

  {
    quote: "A beleza de uma criação não elimina os perigos de não compreender como ela funciona.",
    work: "Atelier of Witch Hat",
    author: "Kamome Shirahama"
  },

  {
    quote: "Aprender é aceitar que aquilo que parecia simples pode esconder um mundo inteiro.",
    work: "Atelier of Witch Hat",
    author: "Kamome Shirahama"
  },

  {
    quote: "Uma regra pode proteger alguém, mas também pode impedir que outra pessoa descubra seu próprio caminho.",
    work: "Atelier of Witch Hat",
    author: "Kamome Shirahama"
  },

  {
    quote: "O talento pode abrir uma porta; é o cuidado que determina o que fazemos depois de atravessá-la.",
    work: "Atelier of Witch Hat",
    author: "Kamome Shirahama"
  },

  {
    quote: "Criar algo novo exige mais do que habilidade: exige compreender aquilo que nossas escolhas podem transformar.",
    work: "Atelier of Witch Hat",
    author: "Kamome Shirahama"
  },

  {
    quote: "Às vezes, o maior obstáculo para aprender é acreditar que já sabemos o suficiente.",
    work: "Atelier of Witch Hat",
    author: "Kamome Shirahama"
  },

  {
    quote: "A magia pode parecer impossível até o instante em que alguém aprende a enxergar seus princípios.",
    work: "Atelier of Witch Hat",
    author: "Kamome Shirahama"
  },


  /* =========================================================
     MISTURADAS — BABY BAT ARCHIVE
  ========================================================= */

  {
    quote: "Há mundos inteiros escondidos nas coisas que aprendemos a observar.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },

  {
    quote: "O universo parece enorme até descobrirmos que carregamos uma pequena parte dele dentro do peito.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "Talvez algumas pessoas sejam estrelas que só conseguimos enxergar depois que a noite chega.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  },

  {
    quote: "Toda criação começa como uma possibilidade que alguém teve coragem de levar a sério.",
    work: "Atelier of Witch Hat",
    author: "Kamome Shirahama"
  },

  {
    quote: "O cotidiano pode ser silencioso sem ser vazio.",
    work: "Hirayasumi",
    author: "Keigo Shinzo"
  },

  {
    quote: "Há calor em lugares inesperados, até mesmo onde todos esperavam encontrar apenas gelo.",
    work: "O Homem de Gelo e Sua Fria Colega de Trabalho",
    author: "Kōcha Agasawa"
  },

  {
    quote: "Uma pessoa pode parecer pequena diante das estrelas e ainda assim carregar um universo inteiro.",
    work: "Saint Seiya",
    author: "Masami Kurumada"
  },

  {
    quote: "Talvez o destino seja apenas o nome que damos às coisas que ainda não conseguimos compreender.",
    work: "Your Name.",
    author: "Makoto Shinkai"
  }
];

/* =========================================================
       ELEMENTOS
    ========================================================= */

const quoteElement = document.getElementById("quote");

const sourceElement = document.getElementById("source");

const workElement = document.getElementById("work");

const authorElement = document.getElementById("author");

const generateButton = document.getElementById("generate");

const copyButton = document.getElementById("copy");

const counterElement = document.getElementById("counter");

/* =========================================================
       ESTADO
    ========================================================= */

let currentIndex = -1;

let generatedCount = 0;

/* =========================================================
       GERAR FRASE
    ========================================================= */

function generateQuote() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === currentIndex && quotes.length > 1);

  currentIndex = randomIndex;

  const selected = quotes[currentIndex];

  /* animação de saída */

  quoteElement.classList.remove("visible");

  sourceElement.classList.remove("visible");

  setTimeout(() => {
    quoteElement.innerHTML = `
          <span class="quote-mark">“</span>
          ${selected.quote}
        `;

    workElement.textContent = selected.work;

    authorElement.textContent = selected.author;

    quoteElement.classList.remove("empty");

    quoteElement.classList.add("visible");

    sourceElement.classList.add("visible");

    generatedCount++;

    counterElement.textContent = String(generatedCount).padStart(3, "0");
  }, 250);
}

/* =========================================================
       COPIAR
    ========================================================= */

async function copyQuote() {
  if (currentIndex === -1) {
    return;
  }

  const selected = quotes[currentIndex];

  const text = `"${selected.quote}" — ${selected.work}, ${selected.author}`;

  try {
    await navigator.clipboard.writeText(text);

    const originalText = copyButton.textContent;

    copyButton.textContent = "Copiado";

    setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1200);
  } catch (error) {
    console.error("Não foi possível copiar:", error);
  }
}

/* =========================================================
       EVENTOS
    ========================================================= */

generateButton.addEventListener("click", generateQuote);

copyButton.addEventListener("click", copyQuote);

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && event.target.tagName !== "BUTTON") {
    event.preventDefault();

    generateQuote();
  }

  if (
    event.key.toLowerCase() === "c" &&
    event.target.tagName !== "INPUT" &&
    event.target.tagName !== "TEXTAREA"
  ) {
    copyQuote();
  }
});
