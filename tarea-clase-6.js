/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de 
cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso 
nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
let edades = [];
let cantidadIntegrantes;
let edadMenor;
let edadMayor;
let edadPromedio;


document.querySelector('#enviar').onclick = function(){
	const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
	cantidadIntegrantes = Number($cantidadIntegrantes.value);
	//return cantidadIntegrantes;

	crearIntegrantes(cantidadIntegrantes);
}

document.querySelector('#calcular').onclick = function(){
	for (i=0; i<cantidadIntegrantes; i++){
		nodeListEdades = document.querySelectorAll('.edad-integrante');
		edades[i] = Number(nodeListEdades[i].value);
	}
	//return edades;

	edadMayor = calcularNumeroMayor(edades);
	edadMenor = calcularNumeroMenor(edades);
	edadPromedio = calcularNumeroPromedio(edades);

	
	const $resultadoEdadMenor = document.createElement('em');
	$resultadoEdadMenor.textContent = `La edad menor es ${edadMenor}`;
	document.querySelector('#edad-menor').appendChild($resultadoEdadMenor);

	const $resultadoEdadMayor = document.createElement('em');
	$resultadoEdadMayor.textContent = `La edad mayor es ${edadMayor}`;
	document.querySelector('#edad-mayor').appendChild($resultadoEdadMayor);

	const $resultadoEdadPromedio = document.createElement('em');
	$resultadoEdadPromedio.textContent = `La edad promedio es ${edadPromedio}`;
	document.querySelector('#edad-promedio').appendChild($resultadoEdadPromedio);

}	

document.querySelector('#borrar').onclick = function(){
	let $nodoPadre = document.querySelector('#integrantes');
	while ($nodoPadre.firstChild){
		$nodoPadre.removeChild($nodoPadre.firstChild);
	}

	$nodoPadre = document.querySelector('#edad-menor');
	$nodoPadre.removeChild($nodoPadre.firstChild);
	$nodoPadre = document.querySelector('#edad-mayor');
	$nodoPadre.removeChild($nodoPadre.firstChild);
	$nodoPadre = document.querySelector('#edad-promedio');
	$nodoPadre.removeChild($nodoPadre.firstChild);

	document.querySelector('#cantidad-integrantes').value = null;
}


function crearIntegrantes(cantidadIntegrantes){
	for (i=0; i<cantidadIntegrantes; i++){
		crearIntegrante(i)
	}
}

function crearIntegrante(i){
	const $div = document.createElement('div');
	$div.className = 'integrante';
	const $label = document.createElement('label');
	$label.textContent = `Ingresar la edad del integrante N° ${i + 1}`;
	const $input = document.createElement('input');
	$input.type = 'number';
	$input.className = 'edad-integrante';
	
	$div.appendChild($label);
	$div.appendChild($input);

	const $integrantes = document.querySelector('#integrantes');
	$integrantes.appendChild($div);
}


function calcularNumeroMayor(array){
	let numeroMayor = array[0];
	for (i=0; i<cantidadIntegrantes; i++){
		if (array[i] > numeroMayor){
			numeroMayor = array[i];
		}
	}
	return numeroMayor;
}

function calcularNumeroMenor(array){
	let numeroMenor = array[0];
	for (i=0; i<cantidadIntegrantes; i++){
		if (array[i] < numeroMenor){
			numeroMenor = array[i];
		}
	}
	return numeroMenor;
}

function calcularNumeroPromedio(array){
	let numeroPromedio;
	let sumaNumeros = 0;
	for (i=0; i < cantidadIntegrantes; i++){
		sumaNumeros += array[i];
	}
	numeroPromedio = sumaNumeros / cantidadIntegrantes;
	return numeroPromedio;
}

document.querySelector('#boton-agregar-salarios').onclick = function(){
	agregarSalarios(cantidadIntegrantes);
	
	$botonCalcularSalarios = document.createElement('input');
	$botonCalcularSalarios.type = 'button';
	$botonCalcularSalarios.value = 'Calcular';
	document.querySelector('#salarios').appendChild($botonCalcularSalarios);

	$botonBorrarTodo = document.createElement('input');
	$botonBorrarTodo.type = 'button';
	$botonBorrarTodo.value = 'Borrar';
	document.querySelector('#salarios').appendChild($botonBorrarTodo);
}

function agregarSalarios(cantidadIntegrantes){
	for (let i=0; i<cantidadIntegrantes; i++){
		$divSalario = document.createElement('div');
		document.querySelector('#salarios').appendChild($divSalario);
		$labelSalario = document.createElement('label');
		$labelSalario.textContent = `Salario del integrante N° ${i+1}`;
		$inputSalario = document.createElement('input');
		$inputSalario.type = 'number';
		$inputSalario.placeholder = 'Ingresar salario';
		$divSalario.appendChild($labelSalario);
		$divSalario.appendChild($inputSalario);
	}
}




/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) 
inputs+labels para completar el salario anual de cada integrante de la familia 
que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor 
salario anual, menor salario anual, salario anual promedio y salario mensual 
promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
