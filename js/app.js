let nombre = "Edgar"
let apellido = "Pirachican"
console.log(nombre + "-" + apellido)
console.log("Desafio array y objectos")

const regex = /^[0-9]*$/;
// const onlyNumbers = regex.test(`34563`);
// // prompt,alert,console

// console.log("Pasar valor pesos a dolareas")
// const dolar = 3973.23
// let pesos =prompt("Cantidad en pesos para convertir en dolares" )
// if (regex.test(pesos)){
// console.log("Pesos : "+pesos);
// console.log("Valor dolar: "+dolar);
// console.log("Conversion:"+(pesos/dolar));}
// else{
//  console.log("Digitar solo números...!")
// }

// console.log("Presentar el dia del dia a string.")
// const numeroDia = new Date().getDay();
// let dia =".."
// switch(numeroDia){
//     case 1:
//      dia="Lunes"
//     break
//     case 2:
//         dia="Martes"
//        break
//        case 3:
//         dia="Miercoles"
//        break
//        case 4:
//         dia="Jueves"
//        break
//        case 5:
//         dia="Viernes"
//        break
//        case 6:
//         dia="Sabado"
//        break
//        case 7:
//         dia="Domingo"
//        break
// }
// console.log("Hoy es *"+dia+"* un dia mas para cumplir nuestros sueños");


// console.log("Imprimir las vocales de una cadena.");
// console.log("Cadena.");

// let cadena=prompt("Digite cadena para extraer las vocales:");
// console.log(cadena)
// let vocales="";
// for( letra=0;letra<cadena.length;letra++){
//     let char=cadena.charAt(letra);
//     if (char.toLowerCase()=="o"){
//       vocales=vocales+char;
//     }else
//      if (char.toLowerCase()=="i"){
//         vocales=vocales+char;
//      }else
//      if (char.toLowerCase()=="e"){
//         vocales=vocales+char;
//      }else
//      if (char.toLowerCase()=="a"){
//         vocales=vocales+char;
//      }else
//      if (char.toLowerCase()=="u"){
//         vocales=vocales+char;
//      }
// }
// console.log("Vocales: "+vocales);
// class camisa{
//     constructor(codigo,talla,precio,moneda,stock){
//         this.codigo=codigo;
//         this.talla= talla;
//         this.precio=precio;
//         this.moneda=moneda;
//         this.stock=stock;
//     }
//     stocactual(){
//         console.log("Stock:"+camisa.stock)
//     }
// }

// const addcamisaC0001 = new camisa("C0001","34",18,"USD",10)
// const addcamisaC0002 = new camisa("C0002","38",20,"USD",18)

// console.log("Listado de camisas codigo C001");
// for (const c001 in addcamisaC0001){
//     console.log(c001);
//     console.log(addcamisaC0001[c001]);
// }

// let voc=(cadena) =>{
//     let vocales="";
//     for( letra=0;letra<cadena.length;letra++){
//         console.log("nada")
//         let char=cadena.charAt(letra);
//         if (char=="o"){
//           vocales=vocales+char;
//         }else
//          if ("i" == char.toLowerCase()){
//             vocales=vocales+char;
//          }else
//          if (char.toLowerCase()=="e"){
//             vocales=vocales+char;
//          }else
//          if (char.toLowerCase()=="a"){
//             vocales=vocales+char;
//          }else
//          if (char.toLowerCase()=="u"){
//             vocales=vocales+char;
//          }
//         }
//         console.log(vocales);
// }

// voc(cadena)

//***************************************************/
//**************** Array y Objectos desafio******** */
//+++++++++++++++++++++++++++++++++++++++++++++++++++/

//definir array
// const tallas =[ 32,34,40]
// let coleccionTallas = ''
// console.log("tallas Iniciales:"+tallas);

// let ti =prompt("Agregar tallas:");
// tallas.unshift(ti);

// for (let i=3; i<5; i++){
//  let t =prompt("Agregar tallas:");
//  tallas.push(t);
// }

// // let tf =prompt("Agregar tallas:");
// // tallas.unshift(tf);

// // console.log("tallas Finales:"+tallas);
// // console.log(tallas);




// // Objeto//
// console.log("Crear objetos camisa")
// const camisa = {
//     codigo:"C0001",
//     talla: 32,
//     precio:18,
//     modeda:"USD",
//     imagen: "",
//     promocion:"N"

// }
// console.log(camisa)

// const camisa02 = {
//     codigo:"C0002",
//     talla: 32,
//     precio:19,
//     modeda:"USD",
//     imagen: "",
//     promocion:"N"

// }

// console.log("Referencia:"+camisa02.codigo+" Precio:"+camisa02.precio+" Stock:13")

// console.log("Actualizar precios")
// camisa02.precioenvio=1;
// camisa02.precio=20;
// console.log(camisa02)

// //lista de objectos
// console.log("Crear una lista de objectos camisas")
// const cami =[camisa,camisa02]

// //recorrer la lista de objetos
// console.log("Recorrer una lista de objectos")
// cami.forEach(x=>{
//     console.log("Codigo: "+x.codigo);
//     console.log("talla: "+x.talla);
//     console.log("precio: "+x.precio);
// })

// for(i=0 ; i<tallas.length; i++{
//    for(j=1; j<tallas.length-1;j++){
//       if (tallas)
//    }
// }
//acceder y recorrer
//Propiedades  y metos

//combinacion array objectos
//const jsonData= require('./camisa.json');

class camisa {
    constructor(codigo, talla, precio, moneda, stock, imagen, promocion) {
        this.codigo = codigo;
        this.talla = talla;
        this.precio = precio;
        this.moneda = moneda;
        this.stock = stock;
        this.imagen = imagen;
        this.promocion = promocion
    }
    stocactual() {
        console.log("Stock:" + camisa.stock)
    }
}

const camisa01 = new camisa("C0001", 32, 18, "USD", 10, "./imagen/camisa01.png", "N")
const camisa02 = new camisa("C0002", 34, 20, "USD", 28, "./imagen/camisa02.png", "N")
const camisa03 = new camisa("C0003", 36, 22, "USD", 5, "./imagen/camisa03.png", "N")
const camisa04 = new camisa("C0004", 32, 18, "USD", 3, "./imagen/camisa04.png", "S")
const camisa05 = new camisa("C0005", 34, 20, "USD", 23, "./imagen/camisa05.png", "S")
const camisa06 = new camisa("C0006", 36, 22, "USD", 31, "./imagen/camisa06.png", "S")

const coleccion = [camisa01, camisa02, camisa03, camisa04, camisa05, camisa06]

const cardContainer = document.getElementById('cardContainer')

console.log(coleccion)

 function funcionAsincrona(){
    fetch('./productos.json').then(response => {
        return response.json();
      }).then(data => {
        // Work with JSON data here
        console.log(data);
      }).catch(err => {
        // Do something for an error here
      });

 
    
}

// fetch('../data/productos.json')
// .then((response) => response.json())
// .then((data) => console.log(data))


// const  respuesta = await fetch('productos.json')
//  .then (response => response.json())
//  .then (json => console.log("Fetch: "+json))

coleccion.forEach((coleccion) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
            <h3 class="cardTitle"> REF.: ${coleccion.codigo} </h3>
            <img src="${coleccion.imagen}" class="cardImg">
            <p class="cardDesc"> ${coleccion.talla} Talla</p>
            <span class="cardPrice">${coleccion.moneda} ${coleccion.precio} </span>
            <button id="${coleccion.codigo}" class="button">Agregar al Carrito</button>
        `
    cardContainer.append(card)
})

const collection = document.getElementsByClassName("cardPrice");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "gray";
    collection[i].style.color = "white";
}

const miCarrito = [];

const totalCarrito = (Arr) => {
    let total = 0;
    Arr.forEach((articulo) => {
        total += articulo.precio
    })
    let html = document.querySelector('#totalCarrito');
    html.innerHTML = total.toLocaleString() + " USD" ;

    let numero = 0;

    let htmlItem = document.querySelector('#itemCarrito');
    htmlItem.innerHTML = Arr.length;
    console.log("Articulos del Carrito: " + Arr.length)
}


const compra = (totalCarrito) => {
    console.log("Pintar")
}

// se ejecuta una vez click botom
const codigoCamisa = (e) => {
    console.log("Detalle del carrito");
    console.log(e.target.getAttribute("id"))
    const camisaElegida = e.target.getAttribute("id")
    const buscarElegida = coleccion.find((colecionCamisa) => colecionCamisa.codigo == camisaElegida)
    miCarrito.push(buscarElegida)
    totalCarrito(miCarrito)

    localStorage.getItem("Carrito", miCarrito)
    sessionStorage.getItem("ariculos", coleccion)
    console.log(miCarrito)

    const jsonlocal = JSON.stringify(miCarrito);
    localStorage.setItem('registroVenta', jsonlocal);

    const getlocalStorage = localStorage.getItem('registroVenta')
    console.log(getlocalStorage);
}

//Click sobre el botom
const botonAgregar = document.querySelectorAll('.button')
botonAgregar.forEach((agregarCompra) => {
    agregarCompra.addEventListener('click', codigoCamisa)
})

const removelocalStorage = (e) => {
    localStorage.removeItem('registroVenta');
}
const botonClear = document.querySelectorAll('#BtoClear')
botonClear.forEach((clearlocalStorage) => {
    clearlocalStorage.addEventListener('click', removelocalStorage)
})



//LocalStorage SessionStorage
localStorage.setItem("Token", "abc123");
sessionStorage.setItem("isDarkMode", true);

const lstorage = localStorage.getItem("Token");
const sStorage = sessionStorage.getItem("isDarkMode");


console.log(sStorage);


//REcorrer todas la variables del localStorage
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log("Variable:" + key + " valor:" + localStorage.getItem(key))
}

let Local = localStorage.getItem('registroVenta')
if (Local != null){
   
    var array = []
    array = JSON.parse(localStorage.getItem('registroVenta'));
    let total = 0;
    array.forEach((articulo) => {
        total += articulo.precio
    })
    let html = document.querySelector('#totalCarrito');
    html.innerHTML = total.toLocaleString() + " USD" ;

    let numero = 0;

    let htmlItem = document.querySelector('#itemCarrito');
    htmlItem.innerHTML = array.length;
}

//Detalle carrito
//const HtmlDetCar = document.getElementById('HtmldetalleCarrito')

const consultaDetalle = (e) => {
    var array = JSON.parse(localStorage.getItem('registroVenta'));
    array.forEach((array) => {
        innerHTML =   `
            <div class="modal">
             <P> sxfklajfka jsklsdajfkasñ aslkdfask
             </p>
             <button class="Btopopup" id="close">Cerrar</button>
             </div>
          
         `
    })
    // console.log(e.target.getAttribute("id"))
console.log("Consultar detalle carrito....")
}

// const botonDetalleCarrito = document.querySelector('.BtoDetcar')
// botonDetalleCarrito.addEventListener('click', consultaDetalle )

const cerrar = (e) => {
    console.log(e.target)
} 

// const btocerrar = document.querySelector('.Btopopup')
// console.log("##### :"+btocerrar)

// btocerrar.addEventListener('click', cerrar)
//botonDetalleCarrito.addEventListener('click', consultaDetalle)

//Incluir libreria sweetalert2

document.querySelector('#BtoDetalleCarrito').addEventListener('click',() =>{
   consultaDetalle()
} )

document.querySelector('#BtoPop').addEventListener('click',() =>{
    Swal.fire(
        'Enhorabuena!',
        'Su pedido quedo grabado con éxito!',
        'success'
      )
} )




