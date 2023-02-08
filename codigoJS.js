/* En este script están las funciones que controlan la visibilidad de determinado texto, haciendo click en botones */

/*En esta primera parte están las funciones que hacen visible a un determinado bloque*/

function mostrar_estudios(){

  document.getElementById('estudios_oculto').style.display = 'block';
  document.getElementById('boton_estudios').style.display = 'none';
}

function mostrar_tareas1(){

  document.getElementById('experiencia_oculto1').style.display = 'block';
  document.getElementById('boton_tareas1').style.display = 'none';
}

function mostrar_tareas2(){

  document.getElementById('experiencia_oculto2').style.display = 'block';
  document.getElementById('boton_tareas2').style.display = 'none';
}

function mostrar_tareas3(){

  document.getElementById('experiencia_oculto3').style.display = 'block';
  document.getElementById('boton_tareas3').style.display = 'none';
}

function mostrar_tareas4(){

  document.getElementById('experiencia_oculto4').style.display = 'block';
  document.getElementById('boton_tareas4').style.display = 'none';
} 

/* Ahora vienen las funciones que ocultan el bloque desplegado*/

function ocultar_estudios(){

  document.getElementById('estudios_oculto').style.display = 'none';
  document.getElementById('boton_estudios').style.display = 'block';
}

function ocultar_tareas1(){

  document.getElementById('experiencia_oculto1').style.display = 'none';
  document.getElementById('boton_tareas1').style.display = 'block';
}

function ocultar_tareas2(){

  document.getElementById('experiencia_oculto2').style.display = 'none';
  document.getElementById('boton_tareas2').style.display = 'block';
}

function ocultar_tareas3(){

  document.getElementById('experiencia_oculto3').style.display = 'none';
  document.getElementById('boton_tareas3').style.display = 'block';
}

function ocultar_tareas4(){

  document.getElementById('experiencia_oculto4').style.display = 'none';
  document.getElementById('boton_tareas4').style.display = 'block';
} 