var res = 0;
var numeros=[];
var operadores=[];


function operacion(op){
numeros.push(Number(document.getElementsByClassName("inputNumber")[0].value));
operadores.push(op);
console.log(Number(document.getElementsByClassName("inputNumber")[0].value));
console.log(op);
document.getElementsByClassName("inputNumber")[0].value = " ";
}


function reset(){
	document.getElementsByClassName("inputNumber")[0].value = " ";
	document.getElementById("resultValue").value = " ";
	numeros = [];
	operadores = [];
}

function logOperacion(){
	document.getElementById("logInformation").innerHTML += numeros[0];
	for(let x=0;x<operadores.length;x++){
		document.getElementById("logInformation").innerHTML +=
		(operadores[x] + numeros[x+1]);
	}
	document.getElementById("logInformation").innerHTML += ("=" + res +"\n");
}

function result(){
	
	numeros.push(Number(document.getElementsByClassName("inputNumber")[0].value));
	console.log(numeros);
	console.log(operadores);
	res = numeros[0];
	for (let i =0;i<operadores.length;i++){
		switch (operadores[i]){
			case "+":
			res+= numeros[i+1];
			break;

			case "-":
			res-= numeros[i+1];
			break;

			case "*":
			res*= numeros[i+1];
			break;

			case "/":
			res/= numeros[i+1];
			break;
		}
	document.getElementById("resultValue").value = res;
	
	}
	logOperacion();
	numeros = [];
	operadores = [];
}




/*
function result(){
switch (operator){
	case "suma":
	res+= Number((document.getElementsByClassName("inputNumber")[0].value));
	break;

	case "resta":
	res-= Number((document.getElementsByClassName("inputNumber")[0].value));
	break;

	case "multiplicacion":
	res*= Number((document.getElementsByClassName("inputNumber")[0].value));
	break;

	case "division":
	res/= Number((document.getElementsByClassName("inputNumber")[0].value));
	break;
}
document.getElementById("resultValue").value = res;

}
*/