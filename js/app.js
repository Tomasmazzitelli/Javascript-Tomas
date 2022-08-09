


let nombre = "Edgar"
let apellido = "Pirachican"
console.log(nombre + "-" + apellido)
console.log("Desafio array y objectos")

const regex = /^[0-9]*$/;


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




