//Instruções: Crie um arquivo chamado teste-array.js. Nele, crie um array de objetos chamado usuarios (com id e nome).
const usuarios = [
  { id: 1, nome: "Niko" },
  { id: 2, nome: "Isagi" },
  { id: 3, nome: "Nagi"},
]; 
//Use o método .push() para adicionar um novo usuário ao array.
usuarios.push ({id: 4, nome: "Shidou"})
//Use o método .find() para buscar um usuário específico pelo ID e mostre o nome dele no console.log.
const buscarid = usuarios.find(id => usuarios.id === 4)
//Use o console.log para imprimir o array completo e ver a alteração.
for (usuario of usuarios){
   console.log(`ID: ${usuario.id} - Nome: ${usuario.nome}`);
}