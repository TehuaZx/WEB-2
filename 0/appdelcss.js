//buscamos los elementos por emdio del ID
const titulo= document.getElementById("titulo");
const mensaje= document.getElementById("mensaje");
const nombre= document.getElementById("nombre");
const lista= document.getElementById("lista");


//cambiar el contenido del elemento
document.getElementById("btnTitulo").addEventListener("click", function(){
    titulo.textContent= "El titulo lo modifcamos con javascript saludos";
});

//cambiar estilos desde JS
document.getElementById("btnColor").addEventListener("click", function(){
   //modificvaciones de propiedades de estilos
   mensaje.style.color= "blue";
   mensaje.style.fontSize= "45px";
   mensaje.style.fontWeight= "bold";
});

//leer datos del input
document.getElementById("btnMostrar").addEventListener("click", function(){
    const textNombre= nombre.value;
    //modificamos el parrafo
    mensaje.textContent= "Hola " + textNombre;
});

//crear un nuevo elemnto
document.getElementById("btnAgregar").addEventListener("click", function(){
    const nuevoElemento= document.createElement("li");
    //agregar contenido al nuevo elemnto
    nuevoElemento.textContent= "Nuevo elemento de JS";
    //agregar el nuevo elemento a la lista apendChild
    //agregamos el nuevo elemento a la lista
    lista.appendChild(nuevoElemento);
});

//eliminar elementos
document.getElementById("btnEliminar").addEventListener("click", function(){
    const ultimo= lista.lastElementChild;
    if(ultimo){
        //remover el ultimo elemnto
        ultimo.remove();
    }else{
        alert("Sin registros");
    }
});
