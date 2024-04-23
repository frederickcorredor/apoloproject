function saludar(){
    let nombre=document.getElementById("nombre").value;
    let texto1=document.getElementById("texto1");
    let texto2=document.getElementById("texto2");
    let parrafo2=document.getElementById("parrafo2");

    if(nombre!==""){
        texto1.style.display="none";
        texto2.style.display="block";
        parrafo2.innerHTML =nombre +"," +" Te invito a explorarme. Aquí encontrarás variedad de temas relacionados con animales, plantas y la belleza natural de nuestro planeta, así como retos intelectuales de ciencia. "
    }else{
        alert("Vamos, dime tu nombre")
    };

}


function verManual(){
    let manual=document.getElementById("manualVerde"),
        ppl=document.getElementById("ppl"),
        h1=document.getElementById("historia1");

        manual.style.display="flex";
        ppl.style.display="none";
        h1.style.display="flex";
}

function nextPage(n, m){
    let pagina1=document.getElementById(n),
        pagina2=document.getElementById(m);

        pagina1.style.display="none";
        pagina2.style.display="flex";
}

function antPage(n, m){
    let pagina1=document.getElementById(n),
        pagina2=document.getElementById(m);

        pagina2.style.display="none";
        pagina1.style.display="flex";
}

function enviarR(n, m){

    let pagina1=document.getElementById(n),
        pagina2=document.getElementById(m);

        pagina1.style.display="none";
        pagina2.style.display="flex";
}
