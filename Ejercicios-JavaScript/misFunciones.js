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

    }else if (id == "pie"){

    }
    else if(id="yarda"){

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
    num1 = number(document.getElementsByName("sum_num1")[0].value);
    num2 = document.getElementsByName("sum_numw")[0].value;
    document.getElementsByName("sum_total")[0].value= num1 + num2


}
function cargarweb(){
    var camt,unidad,urlComp;

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
}