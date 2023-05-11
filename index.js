/*Header*/
const toogle = document.querySelector(".material-symbols-outlined");
const menu = document.querySelector(".navBar");

/*Acrescentando classe para navBar*/
const show = () => {
  if (menu.classList.contains("show-right")) {
    menu.classList.remove("show-right");
    menu.classList.add("hide-left");
  } else {
    menu.classList.remove("hide-left");
    menu.classList.add("show-right");
  }

};

/* translate site */

/* let allWords = document.querySelectorAll('h4,h3,p') */

const translateBr = ()=>{
  const textTags = document.querySelectorAll('p, h, h3,h4,nav a'); // seleciona apenas as tags de texto
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'a_VZvjlXK4moD77HW9dgOz1nrHqo8VaaMYfAQ6ChkBOLT74z0k3ktckcaZ2RgIyMNQJC6R4xR59NEBu1Sz'
    }
  };
  
  const loading = document.getElementById('loading');
  loading.style.display = 'block'; // exibe o loading na página

  const promises = [];

  textTags.forEach(tag => {
    const text = tag.textContent; // obtém o texto da tag
    options.body = JSON.stringify({target: 'pt_br', q: text}); // define o texto para tradução na requisição
    const promise = fetch('https://api-gl.lingvanex.com/language/translate/v2', options)
      .then(response => response.json())
      .then(response=> {
        /* console.log(response) */
        tag.textContent = response.data.translations[0].translatedText;
       
      })
      .catch(err =>  console.log(err));
      promises.push(promise)
  });
      Promise.all(promises)
      .then(() => {
        loading.style.display ='none'; // remove o loading da página
       /*  alert('Requisição executada com sucesso'); */
        const botao = document.querySelector('.btn-cv');
        botao.innerHTML ='<img src="Assets/Imagens/icons8-brazil-48.png" alt="portuguese"><strong>Currículo BR</strong>';
        const cvLink = document.getElementById('cv-link');
        cvLink.href = 'Assets/files/EwertonCvBr-Dark.pdf';
        const selectEn =document.getElementById('english');
        selectEn.classList.remove('selectedLanguage')
        const select = document.getElementById('portuguese');
        select.classList.add('selectedLanguage'); 
      })
      .catch(err => console.log(err));
  }

  const translateEn = ()=>{
    const textTags = document.querySelectorAll('p, h, h3,h4,nav a'); // seleciona apenas as tags de texto
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'a_VZvjlXK4moD77HW9dgOz1nrHqo8VaaMYfAQ6ChkBOLT74z0k3ktckcaZ2RgIyMNQJC6R4xR59NEBu1Sz'
      }
    };
    const loading = document.getElementById('loading');
    loading.style.display = 'block'; // exibe o loading na página
  
    const promises = [];
    
    textTags.forEach(tag => {
      const text = tag.textContent; // obtém o texto da tag
      options.body = JSON.stringify({target: 'en', q: text}); // define o texto para tradução na requisição
     const promise= fetch('https://api-gl.lingvanex.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response=> {
          /* console.log(response) */
          tag.textContent = response.data.translations[0].translatedText;
          
        })
        .catch(err =>  console.log(err));

        promises.push(promise)
    });
        Promise.all(promises)
        .then(()=>{
          loading.style.display ='none';
          const botao = document.querySelector('.btn-cv');
          botao.innerHTML ='<img src="Assets/Imagens/icons8-great-britain-48.png" alt="english"><strong>Currículo EN</strong>';
          const cvLink = document.getElementById('cv-link');
          cvLink.href = 'Assets/files/EwertonCvEn- Dark.pdf';
          const select = document.getElementById('portuguese');
          select.classList.remove('selectedLanguage'); 
          const selectEn =document.getElementById('english');
          selectEn.classList.add('selectedLanguage')
          
        })
  }
      
      



/* Projects*/

function navUser(event) {
  // verifica se o elemento clicado é um link (<a>)
  if (event.target.tagName === "A") {
    // remove a classe "selected" de todos os links
    var links = document.querySelectorAll(".navBar a");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("selected");
    }

    // adiciona a classe "selected" ao link clicado
    event.target.classList.add("selected");
  }
}

/*section*/
const nodeLinks = document.querySelector(".find-classification").children;
/* console.log(Array.isArray(nodeLinks));
console.log(nodeLinks) */

const links = Array.from(nodeLinks);
console.log(links);
/*console.log(Array.isArray(links)) */

/* let busca = links.indexOf(document.getElementById('all'))
console.log(busca)  */

const nodeListProjects = document.querySelectorAll(".carousel-item");
/* console.log(nodeListProjects);
console.log(Array.isArray(nodeListProjects));  */

const listProjects = Array.from(nodeListProjects);
console.log(listProjects);


function classification(event, category) {
  // previne o comportamento padrão de seguir o link
  event.preventDefault();

  // obtém todos os elementos com a classe "carousel-item"
  var items = document.querySelectorAll(".carousel-item");

  // itera sobre cada elemento do carrossel
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    // verifica se a categoria atual é "all" ou se a categoria do item corresponde à categoria atual
    if (category === "all" || item.id === category) {
      // exibe o elemento
      item.style.display = "grid";
    } else {
      // oculta o elemento
      item.style.display = "none";
    }
  }

  var links = document.querySelectorAll(".find-classification");

  // remove a classe "selected" do link anterior
  if (classification.selectedLink) {
    classification.selectedLink.classList.remove("selected");
  }

  // adiciona a classe "selected" ao link clicado
  event.target.classList.add("selected");

  // armazena a referência do link atual na variável selectedLink
  classification.selectedLink = event.target;
}

/* function classification(event) {
  let clickedId = event.target.id;

  for (let i = 0; i < links.length; i++) {
    if (i === links.indexOf(0) ){
      links[i].classList.add("active");
    } else {
      links[i].classList.remove("active");
    }
  }

  event.target.classList.add("active");

  for (let i = 0; i < listProjects.length; i++) {
    if (clickedId === "all") {
      listProjects[i].style.display = "block";
    } else if (clickedId === "frontend") {
      document.querySelectorAll("#back, #full").forEach(elem => elem.style.display = "none");
    } else if (clickedId === "backend") {
      document.querySelectorAll("#front, #full").forEach(elem => elem.style.display = "none");
    } else if (clickedId === "fullstack") {
      document.querySelectorAll("#back, #front").forEach(elem => elem.style.display = "none");
    }
  }
}  */

//about me:
//selection Loop Name
/* Para realizar essa animação, a função usa um conjunto de variáveis e lógica condicional para manipular o conteúdo do elemento HTML que exibe o texto */
const textDisplay = document.getElementById("initial-text");
const phrases = ["FrontEnd", "BackEnd", "FullStack"];

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

  const speedUp = Math.random() * (6 - 5) + 5;
  const normalSpeed = Math.random() * (6 - 5) + 5;

  const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;

  setTimeout(loop, time);
}

loop();
