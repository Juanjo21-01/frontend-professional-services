// Funcion para el header y footer a todas las paginas
const includeComponents = async (el, url) => {
  try {
    let res = await fetch(url),
      html = await res.text();

    //   Manipular el Error
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    // Mostrar en la pagina
    el.outerHTML = html;
  } catch (err) {
    err.response.statusText +
      ' -- ERROR al cargar el archivo, verifica que la peticion sea http o https';
    el.outerHTML = `<h2>Error ${err.response.status}: ${message}</h2>`;
  }
};

document.addEventListener('DOMContentLoaded', (e) => {
  // Seleccionar los data attributes
  document
    .querySelectorAll('[data-include]')
    .forEach((el) => includeComponents(el, el.getAttribute('data-include')));
});
