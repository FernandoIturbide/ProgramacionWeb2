function Enviar() {
    var telefono = document.getElementById('input1').value.trim();
    var mensaje = document.getElementById('input2').value.trim();
    if (telefono === '' || mensaje === '') {
      alert('Por favor completa ambos campos.');
      return;
    }
    var codigoPais = "52"; 
    var enlace = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  
    // Abrir WhatsApp en una nueva pestaña
    window.open(enlace, '_blank');
  }
   