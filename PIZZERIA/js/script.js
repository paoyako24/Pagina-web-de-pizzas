function mostrarInfo(pizza) {
  // Ocultar todas las secciones
  const detalles = document.querySelectorAll('.detalles');
  detalles.forEach(d => d.style.display = 'none');

  // Mostrar solo la que corresponde
  const seleccion = document.getElementById(pizza);
  if (seleccion) {
    seleccion.style.display = 'block';
  }
}
