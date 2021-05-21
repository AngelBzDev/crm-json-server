import {obtenerCliente, editarCliente} from './API.js';
import {validar, mostrarAlerta} from './funciones.js';

(function(){

  const inpNombre = document.querySelector("#nombre");
  const inpEmail = document.querySelector("#email");
  const inpTel = document.querySelector("#telefono");
  const inpEmpresa = document.querySelector("#empresa");
  const inpId = document.querySelector("#id");

  document.addEventListener('DOMContentLoaded', async () => {
    const paramURL = new URLSearchParams(window.location.search);
    const idCliente = parseInt(paramURL.get('id'));
    
    const cliente = await obtenerCliente(idCliente);

    mostrarCliente(cliente);

    //Boton submit del formulario
    const form = document.querySelector("#formulario");
    form.addEventListener('submit', validarCliente);
  });

  function mostrarCliente(cliente){
    const {nombre, email, telefono, empresa, id} = cliente;
    inpNombre.value = nombre;
    inpEmail.value = email;
    inpTel.value = telefono;
    inpEmpresa.value = empresa;
    inpId.value = id;
  }

  function validarCliente(e){
    e.preventDefault();
    
    const cliente = {
      nombre: inpNombre.value,
      email: inpEmail.value,
      telefono: inpTel.value,
      empresa: inpEmpresa.value,
      id: inpId.value
    }

    if(validar(cliente)){
      mostrarAlerta('Todos los campos son obligatorios');
      return;
    }
    
    editarCliente(cliente);

  }

}());
