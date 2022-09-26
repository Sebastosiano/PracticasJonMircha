
const objUsuarios = {}

console.log(objUsuarios);
const usuarios = ["Pedro", "Maria", "Juan", "Miguel", "Martin"];


usuarios.forEach((usuario,index) => objUsuarios[`id_${index}`] = usuario);
console.log(objUsuarios);
console.log

const anidadA = {
    nombre: "Nivel 0",
    imprimir: function(){
        console.log(this.nombre)}
}

const anidada = {
    nombre: "Nivel 1",
    imprimir: function() {   
        console.log (nombre),
        console.log (this.nombre);
        ()=>{
           console.log(nombre);
    }
    }

}

// scraping
var pistolas = document.getElementsByClassName('woocommerce-loop-product__title');
for (i=0;i<pistolas.length;i++)
{console.log(pistolas[i].innerText);
}

var preciosPistolas = document.getElementsByTagName('bdi')[i].innerText;
for (i=0;i<preciosPistolas.length;i++)
{console.log(preciosPistolas[i].innerText);
}

//JSON




// LECTURA DE VOZ

let texto = "Hola trolazo"
const hablar = (texto) => speechSynthesis
speak(new SpeechSynthesisUtterance(texto));


hablar(texto);

// TRABAJO CON EL DOM


console.log(document.documentElement); //OBTENER EL HTML COMPLETO (SIN DOCTYPE)
document.documentElement.lang = "en";

console.log(document.documentElement.lang); // Accede al atributo lang del HTML
console.log(document.documentElement.getAttribute); // Accede al atributo lang del HTML
document.documentElement.setAttribute("lang","es"); // Modifica el atributo
// obtener estilos
console.log(document.styleSheets);

// obtener scripts
console.log(document.scripts);

// obtener seleccionado con cursor

console.log(document.getSelection);


// insertar texto HTML

document.write(<h2>Hola loquis</h2>);


// obtener elementos - YA NO SE UTILIZAN  getElementsByTagName, getElementsByClassName ni getElementsByName

console.log(document.getElementById(""));
console.log(document.getElementById(""));
console.log(document.querySelector("a"));//SOLO TRAE EL PRIMER ELEMENTO recibe selectores validos css, a nivel rendimiento es mas lento que getElementById
console.log(document.querySelector("a").href); //Trae el atributo href de "a"
console.log(document.querySelectorAll("li")[2]);
console.log(document.querySelectorAll("#menu li")); //Trae todas las listas dentro del Id menu
document.querySelectorAll("li").forEach((el)=>console.log("el")); // Para imprimir cada elemento (el) de la Nodelist

// Modificar atributos

const link = document.querySelector(".link"); // Almacena un elemento del DOM para operar con él
link.setAttribute("target","_blank"); // Toma el atributo de un link y lo modifica para abrir el mismo en una  nueva tab del navegador.
link.setAttribute("href","www.youtube/noseque.com")//Modifica la pagina a la que te dirige.

// Remueve atributo
link.removeAttribute("rel");
// Verifica si existe un atributo
console.log(link.hasAttribute("rel"));

//Data-Attributes atributos personalizados que uno agrega escribiendo Data-descripcionPropia
console.log(link.getAttribute("data-description"));
console.log(link.dataset);
link.setAttribute("data-descripcion", "atributo cambiado");
link.removeAttribute("data-id");

// MODIFICA el TITULO dinamicamente (en Head) cada un segundo

function tituloDinamico(){
    let i = 0
    setInterval(() => {
        i++
        document.title = `DOM - Cambio nº ${i}`
    }, 1000);
}

tituloDinamico();


// CREAR ARRAY DINAMICO TOMANDO DATOS DE UN INPUT EN UNA PAGINA

function viewArrayInput() {
    let arrayInput = new  Array();
    let inputValues = document.getElementsByClassName(''),
    nameValues = [].map.call(inputValues, function(dataInput) {
        arrayInput.push(dataInput.value);
    /*recorre e inserta 
    En el HTML tengo que poner un boton con la propiedad onclick='viewArrayInput()' */    
    });

    arrayInput.forEach(function(inputValuesData){
        console.log("El dato es:" + inputValuesData);
    });
 
    
}

// FUNCIONES PARA ACORTAR OBTENCIÓN DE ELEMENTOS POR ID Y CLASE

function getId(id) {
    return getElementById(id).value
}

function getClass(clase) {
    return getElementsByClassName(clase).value;
}

function innerHTML (id,result){
    return getElementById(id).innerHTML=result;
}

//CONTADOR DE CARACTERES

function contadorCaracteres(){
    setInterval(function(){
        var c = getId ("txt");
        if (c.length>50) {
            innerHTML("txtVista", "SOLO PERMITE 50 CARACTERES");
            } else {innerHTML("txtVista", c.length);
        }
    },0000);
}


// DOM Traversing: está enfocado a los Elementos, es decir a las etiquetas HTML

const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children); // los hijos de "cards" "elementos"
console.log($cards.children[2]); // hijo 3
console.log($cards.parentElement); // retorna el elemento "body"
console.log($cards.firstChild); // hace referencia al espacio "enter", por lo tanto no es muy útil.
console.log($cards.firstElementChild); // obtiene el primer elemento de "cards"
console.log($cards.lastElementChild); // obtiene el último "Elemento" hijo
console.log($cards.previousElementSibling); // el "Elemento" hermano antes del "card"
console.log($cards.nextElementSibling); // el siguiente "Elemento" hermano de "card"
console.log($cards.closest("div")); // es un método que busca el ancestro, el padre más cercano
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); // el padre mas cercano del elemento n°3



// Crear elementos (etiquetas HTML) dinámica a través de JS



const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"), 
  $figcaptionText = document.createTextNode("Animals"), // nodo de texto dentro del nodo "figcaption"
  $cartas = document.querySelector(".cartas");

const $figure2 = document.createElement("figure");


$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");


// agregarlas al árbol
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption)
$cards.appendChild($figure); // <figure></figure>


// otra forma de agregar un elemento hijo (no recomendada porque no esta creando un NODO html)
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

// CREACION DE ELEMENTOS DINAMICA VIDEO 68 JONMIRCHA MINUTO 14

// otra forma
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");


// no es una buena practica "write"
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});



// otra forma
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));




//REALIZAR INSERCIONES PERMANENTES AL DOM 
//DEMANDA MUCHOS RECURSOS POR LO TANTO:

// otra forma (ESTA ES LA MEJOR FORMA) MINUTO 25 VIDEO 68 JONMIRCHA

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

// Etiqueta TEMPLATE (no se visualiza en el renderizado del HTML)
// se utiliza javascript para mostrarla

//<button onclick="showContent()">Show hidden content</button>

/*    <template>
    <h2>Flower</h2>
    <img src="img_white_flower.jpg" width="214" height="204">
    </template>

    <script>
    function showContent() {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
    }
    </script> 
*/
{/* The cloneNode() method creates a copy of a node, and returns the clone.

The cloneNode() method clones all attributes and their values.

Set the deep parameter to true if you also want to clone descendants (children). */}

/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/





//----------------------------------------------------------------------




/**
 * 📝 Los Eventos

    👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se cumplan algunas condiciones.

    👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.
    
    👉 Hay 3 maneras de definir los Eventos en JS : 
 */
    
/* ************************************************************************************************************************************** */
     
   //1️⃣ COMO ATRIBUTO DEL HTML
    
   //👀 Muy importante: 
   /*👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
    *👉 Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'
   */
    function holaMundo(){
       alert('Holaaa Mundo')
       console.log(event)  //👈 con esto en la consola, se desencadena un tipo de Objeto MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy importantes: type y target.
       
      //👉 type.- es el tipo de evento q se desencadeno
      //👉 target.- es el elemento que origino el evento
      
      //👉 Dentro de target estan todos los eventos y propiedades q se pueden usar por dicho elemento y los q estan en null son eventos q no tienen definida dicha función en dichos eventos. En cambio vemos el evento onclick q si tiene definida la funcion holaMundo
    }


    
/* *************************************************************************************************************************************** */
    
   //2️⃣ COMO MANEJADOR SEMÁNTICO
    
   //👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo
   //👉 cuando definamos un evento como semántico igualamos el evento semántico al nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar
    const $eventoSemantico = document.getElementById('evento-semantico')
    $eventoSemantico.onclick = holaMundo //👈 no le ponemos () a la función xq sino al momento q se recarga el Navegador, se estará ejecutando el evento, y luego la consola nos dará undefined, xq el objeto event q mandamos a la consola no estará definido, xq la función se ejecutó asi como va, osea a la hora de cargar como tiene los parentesis se ejecuta.
    
   //👇 esta es otra manera de definir un Evento de tipo semántico, puede ser una función anónima o una arrow function
     $eventoSemantico.onclick = function(e){  //👈 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
        alert(`Hola Manejador de Evento Semántico`)
        console.log(e)
        console.log(event)
     }
    
/* ************************************************************************************************************************************** */
     
   //3️⃣ COMO MANEJADOR MÚLTIPLE
   
   //👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos perimite levantar un Escuchador de Eventos
   const $eventoMultiple = document.getElementById('evento-multiple')
   //👇 este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
   // 1° Nombre de evento
   // 2° Función q se va a ejecutar, pero sin parentesis
   $eventoMultiple.addEventListener('click', holaMundo)
   
   //👇 tmb podemos trabajar con una arrow function
   $eventoMultiple.addEventListener('click', (e) => { //👈 este addEventListener nos dará 2 alerts y 4 console.log, nos da 2 alerts xq en vez de reemplazar como pasa más arriba con el evento de tipo semántico, esta es la ventaja de maneja evento múltiple con addEventListener xq puede ejecutar más funciones
      alert(`Hola Manejador de Evento Múltiple`)
      console.log(e)
      console.log(e.type)
      console.log(e.target)
      console.log(event)
   } )
     
     
     
   //📝NOTA:
   //👉 Cuando escuchemos de Event Handler hacemos referencia a la función q se ejecuta en dicho Evento   
   //👉 Una misma función nos puede servir para desencadenar eventos en diferentes elementos
   //👉 Los eventos semánticos tienen un pequeño inconveniente, si nos damos cuenta, cuando hablabamos de los Prototipos y hablamos de la funcion constructora, y si queriamos agregarle más métodos teniamos q agregarle a su Prototipo, aqui pasa algo similar, el onclick es como agregarle un método al Prototipo del Modelo de eventos del elemento del DOM q se estamos manejando
   //👉 Habrá veces q a lo mejor a un mismo elemento Html le asignemos diferentes Manejadores de Eventos, es decir diferentes funciones q hagan diferentes cosas, bueno la limitante q tienen los eventos de tipo semántico, es q una vez q esta definido el evento semántico sólo va poder ejecutar una función.
   //👉 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algún momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'





   // 76. DOM: Delegación de Eventos

function flujoEventos(e) {
    console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
    e.stopPropagation();
  }
  
  // En lugar de haber tenido 4 listeners, solamente tengo la asignación de un "listener" al evento click del nodo principal "document". Con esta técnica a parte de mejorar el rendimiento solamente estamos teniendo una sola asignación al evento "click". A través del condicional "if" evaluamos los eventos.
  
  document.addEventListener("click", (e) => {
    console.log("Click en", e.target);
  
    if (e.target.matches(".eventos-flujo div")) {
      flujoEventos(e);
    }  
  
    if (e.target.matches(".eventos-flujo a")) {
      alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
      e.preventDefault();
    }
  });




//  EL BOM ------------------------------------------------------------------- browser object model--------------------------------------

//Mis anotaciones de la clase:

//*💻 El evento resize se activa cuando redimensionemos el tamaño de nuestra ventana, o el del viewport

window.addEventListener("resize", e => {

  console.clear()

  console.log("******* Evento Resize *********")

  //👉Hace referencia al ancho del viewport
  console.log("Ancho del viewport:",window.innerWidth,"px")
  
  //👉Hace referencia al alto del viewport
  console.log("Alto del viewport:",window.innerHeight,"px")
  
  //👉Hace referencia al ancho de la ventana del navegador
  console.log("Ancho de la ventana:",window.outerWidth,"px")
  
  //👉Hace referencia al alto de la ventana del navegador
  console.log("Alto de la ventana:",window.outerHeight,"px")

  console.log(e)
  
})


//*🔃 El evento scroll se activa cuando usamos la barra de desplazamiento o nos movemos con la rueda del mouse

window.addEventListener("scroll", e => {
  
  console.clear()

  console.log("******* Evento Scroll *********")
  
  //👉Hace referencia a la barra de desplazamiento X, mientras mas se aleja de la izquierda mas va a aumentar
  console.log("Scroll X:",window.scrollX, "px")
  
  //👉Hace referencia a la barra de desplazamiento Y, mientras mas se aleje del top mas va a aumentar
  console.log("Scroll Y:",  window.scrollY, "px")

  console.log(e)

})


//*buffering El evento load se activa cuando la ventana del navegador haya terminado de cargar

window.addEventListener("load", e => {

  console.log("******* Evento Load *********")
  
  //👉Hace referencia a la coordernada en la que se emepezo a dibujar la ventana del navegador en vertical
  console.log("Screen X:",window.screenX, "px")
  
  //👉Hace referencia a la coordernada en la que se emepezo a dibujar la ventana del navegador en horizontal
  console.log("Screen Y:",  window.screenY, "px")

  console.log(e)

})


//*🔁 El evento DOMContentLoaded se activa cuando la ventana del navegador haya terminado de cargar

window.addEventListener("DOMContentLoaded", e => {
  
  console.log("******* Evento DOMContentLoaded *********")
  
  //👉Hace referencia a la coordernada en la que se emepezo a dibujar la ventana del navegador en vertical
  console.log("Screen X:",window.screenX, "px")
  
  //👉Hace referencia a la coordernada en la que se emepezo a dibujar la ventana del navegador en horizontal
  console.log("Screen Y:",  window.screenY, "px")
  
  console.log(e)

})

//! 🥊DOMContentLoaded VS 🥊load

//* ✅✅ Cuando tengamos que hacer que algo se cargue al momento de que el DOM este listo, es mucho mas eficiente trabajar con con el evento 'DOMContentLoaded' que con el 'load', sobre todo cuando estemos haciendo peticiones asincronas. Porque el evento DOMContentLoaded es disparado cuando el HTML se cargo por completo, en cambio el evento load se dispara hasta que haya cargado todo el documento HTML, las hojas de estilos, los scripts, imagenes, etc...









// 78. BOM: Métodos

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://jonmircha.com")
});

$btnCerrar.addEventListener("click", (e) => {
  ventana.close();
});

$btnImprimir.addEventListener("click", (e) => {
  window.print();
});


let prueba = getElementById("primary");

prueba.print();

//+++++++++++++++++++++++++++++++++++++++++++++++++
// METODOS DE ARRAY (FUNCIONES SUPERIORES)

let employees = [
  {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
  {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
  {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];

// BUCLE FOR

for (let i = 0; i < employees.length; i++) {
  console.log(employees[1])
};


// ARRAY FOR EACH

employees.forEach(function(employee/*identificador de elección libre, suele usarse el singular*/, index ){
    console.log(employee.name, index)
});

//FOR EACH  como flecha
employees.forEach((employee, index) =>  console.log(employee.name, index))

// FILTER

const highTier = employees.filter(function(employee) {
  if (employee.salary > 75000) {
  return true
  }
})

//FILTER  como flecha

const highTierS = employees.filter(employee => employee.salary > 75000)

console.log(highTierS);


// ARRAY MAP

const uppercase = employees.map(function(employee) {
return employee.name.toLocaleUpperCase()

});
console.log(uppercase);

//-------------------------------

const employeesTier = employees.map(function (){
  return {
    name: employee.name,
    tier: employee.salary > 75000 ? 'high' : 'mid'
  }
});

console.log(employee);

// ARRAY SORT

[1,2,3,4,5,6,7,8,9,10].sort(function(num1,num2){
  return num2 - num1 
});

// para no modificar el array original (sort lo hace)
// se hace una copia superficial con destructuracion

const sortedEmployees = [...employees].sort(function(a,b){
  return a.salary - b.salary
});



// ARRAY REDUCE

[1,2,3,4,5,6].reduce(function(total, current){
  return total + current
})



// ENCADENADO DE METODOS

const totalHightier = employees
  .map(employee => employee.salary)
  .filter(salary => salary > 75000 )
  .reduce((total, current) => total + current);



//******************************************************* */
  // JavaScript: Understanding the Weird Parts - The First 3.5 Hours
/*********************************************************** */


/***** Syntax parser is part of Javascript engine. It reads your code character by character, tells what your code does, and check if the grammar is correct or not. */
/***** Lexical Enviroment: Lugar FISICO donde se asienta el codigo que escribo. Ese  lugar donde se escribe es importante.
The Execution Context: contains the code that's currently running, and everything that aids in its execution. Hay muchos ambientes lexicos, el que está corriendo en este momento es administrado por el contexto de ejecución. Podria contener cosas adicionales a las que escribí en mi codigo * 

DOS FASES:

1) CREATION PHASE:

Cada vez que se abre el TAB del navegador se crea un

OBJETO GLOBAL (Window) y un This (equivale a Window)

Outer  Enviroment (Every execution context has a reference to its outer environment, and that outer environment is called Lexical Environment.)

Parser => Separa Memory Space para Variables (inicializadas por defecto con el VALOR "undefined") y Funciones
"HOISTING" 

2) EXECUTION PHASE:

Corre el código.

//RETOMAR  VIDEO DESDE 1:00:00 hs//

Global => QUE NO ESTÁ DENTRO DE UNA FUNCION

 

* 
OBJETO: Una colección de pares Nombre: Valor




 * 
 * 
 * 
 * 
 * 
 */



























