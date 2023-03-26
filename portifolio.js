/* Projects*/

/*section*/

document.querySelectorAll('.carousel').forEach(carousel =>{
   const items = carousel.querySelectorAll("carousel-front,.carousel-back,.carousel-full")
   const buttonsHtml = Array.from(items, () => {
     return `<button class="carousel__button"></button>`;
    });
    console.log(buttonsHtml);
    console.log(items)

    carousel.insertAdjacentHTML(
      "beforeend",
      `
      <div class="carousel__nav">
        ${buttonsHtml.join("")}
      </div>
    `)
})


//about me:
//selection Loop Name
/* Para realizar essa animação, a função usa um conjunto de variáveis e lógica condicional para manipular o conteúdo do elemento HTML que exibe o texto */
const textDisplay = document.getElementById("initial-text");
const phrases = ["FrontEnd","BackEnd","FullStack"];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;

  /* O próximo passo é atualizar o conteúdo do elemento HTML que exibe o texto. Para isso, a função usa o método join do array currentPhrase para transformar as letras atuais em uma string REMOVER AS VIRGULAS e, em seguida, atribui essa string ao elemento HTML usando a propriedade innerHTML */

  textDisplay.innerHTML = currentPhrase.join("");
      //Aceessando Array
     /*  O bloco condicional principal da função verifica se ainda há palavras a serem exibidas em phrases. Se não houver, a animação termina e a função não faz nada. */
    if (i < phrases.length) {
    /*  console.log(phrases[i]) */
    if (!isDeleting && j <= phrases[i].length) {
      /* console.log(phrases[i][j]) */
      currentPhrase.push(phrases[i][j]);
      j++;
      console.log("add");
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      console.log("remove");
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
    }
    if (i == phrases.length) {
      i = 0;
    }
  }

  const speedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;

  setTimeout(loop, time);
}

loop();