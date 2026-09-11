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
