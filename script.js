const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const genero = document.getElementById('genero').value;
  const estado = document.getElementById('estado').value;
  const nomeDoador = document.getElementById('nomeDoador').value;
  const contatoDoador = document.getElementById('contatoDoador').value;

  // Validação opcional (evita envio de dados incompletos)
  if (titulo === '' || autor === '' || genero === '' || estado === '') {
    alert('Preencha todos os campos obrigatórios!');
    return; // Interrompe a execução do código caso a validação falhe
  }

  // Exibir dados no console para fins de demonstração
  console.log('Livro cadastrado:');
  console.log('Título:', titulo);
  console.log('Autor:', autor);
  console.log('Gênero:', genero);
  console.log('Estado:', estado);
  console.log('Nome do Doador:', nomeDoador);
  console.log('Contato do Doador:', contatoDoador);

  // Implemente aqui a lógica para salvar os dados do formulário
  // Exemplos: salvar em banco de dados local, enviar para um servidor, etc.
  // ...

  alert('Livro cadastrado com sucesso!');
});