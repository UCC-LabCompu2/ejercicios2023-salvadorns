/**
 * convierte unidades entre metros , pulgadas,pies y yardas
 * @method Nombre convertir unidades
 * @param {string} id - Id del elemento input html
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */

function convertirUnidades(id,valor) {
    let met,pul,pie,yar;
}
function convertirUnidades(id,valor){
    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = " ";/*blanque los resultados*/
        pul = " ";
        pie = " ",
        yar = " ";

    }
    
    else if(id=="metro"){
        met = valor;
        pul = valor *39.3701;
        pie = valor*3.28;
        yar = valor*1.9;
        
       
    }
    else if(id == "pulgada"){
        met = valor*12;//numeros cualquiera
        pul = valor;
        pie = valor*3.28;
        yar = valor*1.9;
        
    }else if (id == "pie"){
        met = valor*12;//numeros cualquiera
        pul = valor *39.3701;
        pie = valor;
        yar = valor*1.9;
        
    }
    else if(id="yarda"){
        met = valor *12;//numeros cualquiera 
        pul = valor *39.3701;
        pie = valor*3.28;
        yar = valor;
        
    }
    document.lasunidades.unid_metro.value=met;//asigna el nombre de la variable
    document.lasunidades.unid_pulgada.value=pul;
    document.lasunidades.unid_pie.value=pie;
    document.lasunidades.unid_yarda.value=yar;
   
}
function convertirGR(id){
    if (id == "grados"){
        let gr = document.getElementById("grados").value;
        document.getElementById("radianes").value = (gr.Math.pi)/180;
    }else if (id == "radianes"){


    }
}

let dibujarCuadriculado = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax= canvas.height;
    const paso = 20;
   


    for(let i=paso;i<anchoMax; i = i+paso){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(anchoMax,i);
        ctx.strokeStyle="#333";
        ctx.stroke();
        ctx.closePath();
   
    }
    
    
        ctx.beginPath();
        ctx.moveTo(0,alturaMax/2);
        ctx.lineTo(anchoMax,alturaMax/2);
        ctx.strokeStyle="#333";
        ctx.stroke();
        ctx.closePath();
       
        ctx.beginPath();
        ctx.moveTo(anchoMax/2,0);
        ctx.lineTo(anchoMax/2,alturaMax);
        ctx.strokeStyle="#333";
        ctx.stroke();
        ctx.closePath();
       
    
}
function convertirGR(id){
    var grad,rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
       rad = document.getElementById("radianes").value;
       grad = (rad*180)/Math.PI; 
    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;

}

function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display='block';

    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display='none';
    }

}

function calcularSuma(){
    var num1,num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value= num1 + Number(num2);


}
function calcularresta(){
var num1,num2;
num1 = document.getElementsByName("res_num1")[0].value;
num2 = document.getElementsByName("res_num2")[0].value;
document.getElementsByName("res_total")[0].value= Number(num1)-Number(num2);

}
function calcularmulti(){
var num1,num2;
num1 = document.getElementsByName("mul_num1")[0].value;
num2 = document.getElementsByName("mul_num2")[0].value;
document.getElementsByName("mul_total")[0].value= Number(num1)*Number(num2);
}
function calculardiv(){
    var num1,num2;
    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value= Number(num1)/Number(num2);
    }
function cargarweb(){
    var cant,unidad,urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#"+cant+"#"+unidad;
    window.open(urlComp);
}

function cargarResultado(){
    var urlComp,can,un;

    urlComp= window.location.href.split("/")[5];
    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " "+ un;
   
}

function dibujarcirCuad(){
    var canvas=document.getElementById("myCanvas")
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width
    var yMax=canvas.height;
    var margen = 5;
   
    ctx.fillStyle = "#333899";
    ctx.fillRect(0+margen,yMax-40-margen,40,40);

    ctx.arc(xMax/2,yMax/2,20,0,2*Math.PI)
    ctx.stroke();
    ctx.fill();

}
var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx= canvas.getContext("2d");
    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX,posY);
canvas.onmousedown = function(){
    bandera=true;
}
canvas.onmouseup= function(){
    bandera=false;
}
if (bandera){
    ctx.fillRect(posX,posY,5,5);
    ctx.fill;
}
   
}
function limpiarCanvas(){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx= canvas.getContext("2d");

    canvas.width=canvas.width;
}

function dibujarImagen(posX,posY){
    var canvas = document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");
    
  canvas.width = canvas.width;
    img = new Image();
    img.src = "images/auto.png";

    ctx.onload = function (){
        ctx.drawImage(img,posX,posY);
    }
}
x = 0
dx = 2;

function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");

    canvas.width = canvas.width;
    
    
    img = new Image();
    img.src = "images/auto.png";

    ctx.onload = function (){
        ctx.drawImage(img,x,100);
    }
    x = x + dx;
}