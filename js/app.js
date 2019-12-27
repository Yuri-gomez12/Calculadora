
document.getElementById("n1").addEventListener("click",addNumber1);
document.getElementById("n2").addEventListener("click",addNumber2);
document.getElementById("n3").addEventListener("click",addNumber3);
document.getElementById("n4").addEventListener("click",addNumber4);
document.getElementById("n5").addEventListener("click",addNumber5);
document.getElementById("n6").addEventListener("click",addNumber6);
document.getElementById("n7").addEventListener("click",addNumber7);
document.getElementById("n8").addEventListener("click",addNumber8);
document.getElementById("n9").addEventListener("click",addNumber9);
document.getElementById("cero").addEventListener("click",addNumberCero);
document.getElementById("punto").addEventListener("click",addPunto);
document.getElementById("on").addEventListener("click",limpiar);
document.getElementById("negativo").addEventListener("click",addNeg);
document.getElementById("mas").addEventListener("click",opSuma);
document.getElementById("menos").addEventListener("click",opResta);
document.getElementById("por").addEventListener("click",opMult);
document.getElementById("dividido").addEventListener("click",opDivision);
document.getElementById("ig").addEventListener("click",obtRes);
var contador=0;
var acumSuma=0;
var acumResta=0;
var acumDivision=0;
var acumMultiplicacion=1;
var res=0;
let ultimo="";
var bandera=0;
var banderas=0;
function opMult(){
    console.log('Entra a la funcion multi');
    let actual = document.getElementById('resultado').innerHTML;
    var mult = parseFloat(actual);
    acumMultiplicacion= acumMultiplicacion*mult;
    console.log(acumSuma);
    res=acumMultiplicacion;
    let limpiar='';
    ultimo="mult";
    contador=0;
    document.getElementById('resultado').innerHTML = limpiar;
}
function opDivision(){
    console.log('Entra a la funcion Division');
    let actual = document.getElementById('resultado').innerHTML;
    var division = parseFloat(actual);
    acumDivision= acumDivision+division;
    console.log(acumSuma);
    res=acumDivision;
    let limpiar='';
    ultimo="division";
    contador=0;
    document.getElementById('resultado').innerHTML = limpiar;
}
function opResta(){
    var auxR=0;
    console.log('Entra a la funcion Resta');
    let actual = document.getElementById('resultado').innerHTML;
    var resta = parseFloat(actual);
    acumResta= acumResta+resta;
    console.log(acumSuma);
    res=acumResta;
    let limpiar='';
    ultimo="resta";
    contador=0;
    document.getElementById('resultado').innerHTML = limpiar;
}

function opSuma(){
    bandera=0;
    console.log('Entra a la funcion suma');
    let actual = document.getElementById('resultado').innerHTML;
    var suma = parseFloat(actual);
    acumSuma= acumSuma+suma;
    console.log(acumSuma);
    res=acumSuma;
    let limpiar='';
    ultimo="suma";
    contador=0;
    document.getElementById('resultado').innerHTML = limpiar;
}
function obtRes(){
    var auxRes=0;
    var aux=0;
    let actual = document.getElementById('resultado').innerHTML;
    if(ultimo=="suma"){
        aux = parseFloat(actual);
        auxRes=res+aux;
        console.log('El ultimo fue suma');
    }else if(ultimo=="resta"){
        console.log('Anteriro: '+res);
        aux = parseFloat(actual);
        auxRes=res-aux;
        console.log('El ultimo fue resta');
    }else if(ultimo=="mult"){
        aux = parseFloat(actual);
        auxRes=res*aux;
        console.log('El ultimo fue suma');
    }else if(ultimo=="division"){
        aux = parseFloat(actual);
        auxRes=res/aux;
        console.log('El ultimo fue suma');
    }


    document.getElementById('resultado').innerHTML = auxRes;

}
function addNeg(){
    console.log('Valor de la bandera: '+banderas);
    let actual = document.getElementById('resultado').innerHTML;
     let sumado = '-';
    if(actual=="0"){

    }else{
        if(banderas==1){

        }else{
        if(contador<8){
            banderas=1;
            document.getElementById('resultado').innerHTML = sumado+actual
        }
    }
    }
}
function addPunto(){
    let actual = document.getElementById('resultado').innerHTML;
     let sumado = '.';
    if(bandera==0){
       if(contador<8){
        document.getElementById('resultado').innerHTML = actual+sumado
        bandera=1;
       }


    }else{
        if(contador<8){
            document.getElementById('resultado').innerHTML = actual

           }

    }

}
function addNumber1(){

        let actual = document.getElementById('resultado').innerHTML;
        let sumado = '1';
        if(actual=='0'){
            if(contador<8){
                document.getElementById('resultado').innerHTML =  sumado
                contador++;
            }

        }else{
            if(contador<8){
            document.getElementById('resultado').innerHTML = actual + sumado
            contador++;
            }
        }



}
function addNumber2(){
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = '2';
    if(actual=='0'){
        if(contador<8){
            document.getElementById('resultado').innerHTML =  sumado
            contador++;
        }

    }else{
        if(contador<8){
        document.getElementById('resultado').innerHTML = actual + sumado
        contador++;
        }
    }

}
function addNumber3(){
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = '3';
    if(actual=='0'){
        if(contador<8){
            document.getElementById('resultado').innerHTML =  sumado
            contador++;
        }

    }else{
        if(contador<8){
        document.getElementById('resultado').innerHTML = actual + sumado
        contador++;
        }
    }
}
function addNumber4(){
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = '4';
    if(actual=='0'){
        if(contador<8){
            document.getElementById('resultado').innerHTML =  sumado
            contador++;
        }

    }else{
        if(contador<8){
        document.getElementById('resultado').innerHTML = actual + sumado
        contador++;
        }
    }

}
function addNumber5(){
    let actual = document.getElementById('resultado').innerHTML;
        let sumado = '5';
        if(actual=='0'){
            if(contador<8){
                document.getElementById('resultado').innerHTML =  sumado
                contador++;
            }

        }else{
            if(contador<8){
            document.getElementById('resultado').innerHTML = actual + sumado
            contador++;
            }
        }

}
function addNumber6(){
    let actual = document.getElementById('resultado').innerHTML;
        let sumado = '6';
        if(actual=='0'){
            if(contador<8){
                document.getElementById('resultado').innerHTML =  sumado
                contador++;
            }

        }else{
            if(contador<8){
            document.getElementById('resultado').innerHTML = actual + sumado
            contador++;
            }
        }

}
function addNumber7(){
    let actual = document.getElementById('resultado').innerHTML;
        let sumado = '7';
        if(actual=='0'){
            if(contador<8){
                document.getElementById('resultado').innerHTML =  sumado
                contador++;
            }

        }else{
            if(contador<8){
            document.getElementById('resultado').innerHTML = actual + sumado
            contador++;
            }
        }

}
function addNumber8(){
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = '8';
    if(actual=='0'){
        if(contador<8){
            document.getElementById('resultado').innerHTML =  sumado
            contador++;
        }

    }else{
        if(contador<8){
        document.getElementById('resultado').innerHTML = actual + sumado
        contador++;
        }
    }

}
function addNumber9(){
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = '9';
    if(actual=='0'){
        if(contador<8){
            document.getElementById('resultado').innerHTML =  sumado
            contador++;
        }

    }else{
        if(contador<8){
        document.getElementById('resultado').innerHTML = actual + sumado
        contador++;
        }
    }

}
function addNumberCero(){
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = '0';
    if(actual=='0'){
        if(contador<8){
            document.getElementById('resultado').innerHTML =  sumado
            contador++;
        }

    }else{
        if(contador<8){
        document.getElementById('resultado').innerHTML = actual + sumado
        contador++;
        }
    }

}
function limpiar(){
    acumSuma=null;
    acumResta=null;
    acumMultiplicacion=1;
    acumDivision=null;
    let sumado = '0';
    document.getElementById('resultado').innerHTML =sumado

}

var uno = document.getElementById("n1");

uno.addEventListener("mousedown",function(){
  uno.setAttribute("style","transform:scale(0.85,0.85)")
})
uno.addEventListener("mouseup",function(){
  uno.setAttribute("style","transform:scale(1,1)")
})


var dos = document.getElementById("n2");

dos.addEventListener("mousedown",function(){
  dos.setAttribute("style","transform:scale(0.85,0.85)")
})
dos.addEventListener("mouseup",function(){
  dos.setAttribute("style","transform:scale(1,1)")
})


var tres = document.getElementById("n3");

tres.addEventListener("mousedown",function(){
  tres.setAttribute("style","transform:scale(0.85,0.85)")
})
tres.addEventListener("mouseup",function(){
  tres.setAttribute("style","transform:scale(1,1)")
})


var cuatro = document.getElementById("n4");

cuatro.addEventListener("mousedown",function(){
  cuatro.setAttribute("style","transform:scale(0.85,0.85)")
})
cuatro.addEventListener("mouseup",function(){
  cuatro.setAttribute("style","transform:scale(1,1)")
})


var cinco = document.getElementById("n5");

cinco.addEventListener("mousedown",function(){
  cinco.setAttribute("style","transform:scale(0.85,0.85)")
})
cinco.addEventListener("mouseup",function(){
  cinco.setAttribute("style","transform:scale(1,1)")
})


var seis = document.getElementById("n6");

seis.addEventListener("mousedown",function(){
  seis.setAttribute("style","transform:scale(0.85,0.85)")
})
seis.addEventListener("mouseup",function(){
  seis.setAttribute("style","transform:scale(1,1)")
})


var siete = document.getElementById("n7");

siete.addEventListener("mousedown",function(){
siete.setAttribute("style","transform:scale(0.85,0.85)")
})
siete.addEventListener("mouseup",function(){
  siete.setAttribute("style","transform:scale(1,1)")
})


var ocho = document.getElementById("n8");

ocho.addEventListener("mousedown",function(){
ocho.setAttribute("style","transform:scale(0.85,0.85)")
})
ocho.addEventListener("mouseup",function(){
  ocho.setAttribute("style","transform:scale(1,1)")
})


var nueve = document.getElementById("n9");

nueve.addEventListener("mousedown",function(){
  nueve.setAttribute("style","transform:scale(0.85,0.85)")
})
nueve.addEventListener("mouseup",function(){
  nueve.setAttribute("style","transform:scale(1,1)")
})


var cero = document.getElementById("cero");

cero.addEventListener("mousedown",function(){
  cero.setAttribute("style","transform:scale(0.85,0.85)")
})
cero.addEventListener("mouseup",function(){
  cero.setAttribute("style","transform:scale(1,1)")
})


var on = document.getElementById("on");

on.addEventListener("mousedown",function(){
  on.setAttribute("style","transform:scale(0.85,0.85)")
})
on.addEventListener("mouseup",function(){
  on.setAttribute("style","transform:scale(1,1)")
})


var igual = document.getElementById("ig");
igual.addEventListener("mousedown",function(){
  igual.setAttribute("style","transform:scale(0.85,0.85)")
})
igual.addEventListener("mouseup",function(){
  igual.setAttribute("style","transform:scale(1,1)")
})


var punto = document.getElementById("punto");

punto.addEventListener("mousedown",function(){
  punto.setAttribute("style","transform:scale(0.85,0.85)")
})
punto.addEventListener("mouseup",function(){
  punto.setAttribute("style","transform:scale(1,1)")
})


var signo = document.getElementById("negativo");

signo.addEventListener("mousedown",function(){
  signo.setAttribute("style","transform:scale(0.85,0.85)")
})
signo.addEventListener("mouseup",function(){
  signo.setAttribute("style","transform:scale(1,1)")
})


var dividido = document.getElementById("dividido");

dividido.addEventListener("mousedown",function(){
  dividido.setAttribute("style","transform:scale(0.85,0.85)")
})
dividido.addEventListener("mouseup",function(){
  dividido.setAttribute("style","transform:scale(1,1)")
})


var por = document.getElementById("por");

por.addEventListener("mousedown",function(){
  por.setAttribute("style","transform:scale(0.85,0.85)")
})
por.addEventListener("mouseup",function(){
  por.setAttribute("style","transform:scale(1,1)")
})


var mas = document.getElementById("mas");

mas.addEventListener("mousedown",function(){
  mas.setAttribute("style","transform:scale(0.85,0.85)")
})
mas.addEventListener("mouseup",function(){
  mas.setAttribute("style","transform:scale(1,1)")
})


var menos = document.getElementById("menos");

menos.addEventListener("mousedown",function(){
  menos.setAttribute("style","transform:scale(0.85,0.85)")
})
menos.addEventListener("mouseup",function(){
  menos.setAttribute("style","transform:scale(1,1)")
})
