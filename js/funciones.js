export function mostrarAlerta(msj){
  const alerta = document.querySelector(".alerta");

  if(!alerta){
    const alerta = document.createElement("div");
    alerta.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-5', 'text-center', 'alerta');
    alerta.innerHTML = `
      <strong class="font-bold">¡Error!</strong><span class="block sm:inline"> ${msj}</span>`;
    const form = document.querySelector("#formulario");

    form.appendChild(alerta);

    setTimeout(() => alerta.remove(), 3000);
  }
}

export function validar(obj){
  //Convertir los valores en un arreglo y verificamos si el valor es un valor vacio
  return !Object.values(obj).every(input => input !== '');
}
