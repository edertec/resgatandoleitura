const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const genero = document.getElementById('genero').value;
  const estado = document.getElementById('estado').value;
  const nomeDoador = document.getElementById('nomeDoador').value;
  const contatoDoador = document.getElementById('contatoDoador').value;

  // Salvar cada campo individualmente no armazenamento local
  localStorage.setItem('titulo', titulo);
  localStorage.setItem('autor', autor);
  localStorage.setItem('genero', genero);
  localStorage.setItem('estado', estado);
  localStorage.setItem('nomeDoador', nomeDoador);
  localStorage.setItem('contatoDoador', contatoDoador);

  alert('Livro cadastrado com sucesso!');
});
