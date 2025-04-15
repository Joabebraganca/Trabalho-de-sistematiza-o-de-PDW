document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
    const mensagem = document.getElementById('mensagem-sucesso');
  
    form.addEventListener('submit', function (evento) {
      evento.preventDefault(); 
      mensagem.textContent = "Obrigado! Em breve entraremos em contato 😊";
      mensagem.style.display = "block";
      form.reset(); 
    });
  });
  