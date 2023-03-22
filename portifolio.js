/* Home Page*/

/*Aboute-me*/

/*Contacte-me*/ 

/*Projects*/
document.querySelectorAll(".projects").forEach(projects=>{
    const items= projects.querySelectorAll(".image-projects")
    /* console.log(items) */
    //vamos criar uma matrix de 3 items
   /*  Cria um array com a mesma quantidade de itens da constante "items", cada um contendo um span com a classe "carousel-button". Essa constante será usada para criar os botões de navegação. */
    const buttonHtml = Array.from(items,()=>{
        return `<span class="carousel-button"></span>`
    })
    
   /*  console.log(buttonHtml) */
    
   
   //Insere no final do elemento "projects" um novo elemento com a classe "carousel-nav" e os botões de navegação criados anteriormente.
    projects.insertAdjacentHTML("beforeend",`
    <div class="carousel-nav">
    ${buttonHtml.join("")}
    `)
    
   /*  console.log(buttonHtml) */

   const buttons = projects.querySelectorAll(".carousel-button");

   buttons.forEach((button ,i)=>{
    button.addEventListener("click",()=>{
        //selecionando todos os items
        items.forEach(item => item.classList.remove("carousel-selected"));
        buttons.forEach(button=>button.classList.remove("carousel-button-selected"))

        items[i].classList.add("carousel-selected");
        button.classList.add("carousel-button-selected")
    })

        items[0].classList.add("carousel-selected");
        button.classList.add("carousel-button-selected")
   })

   


})

