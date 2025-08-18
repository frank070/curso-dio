async function permittedCharacters() {
  let permitted = [];
  if (process.env.UPPERCASE_LETTERS === "true") {
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"); // ... server para adicionar dentro e não substituir
  }
  if (process.env.LOWECASE_LETTERS === "true") {
    permitted.push(..."abcdefghijklmnopqrstuvwxyz");
  }
  if (process.env.NUMBERS === "true") {
    permitted.push(..."0123456789");
  }

  if (process.env.SPECIAL_CHARACTERS === "true") {
    permitted.push(..."!@#$%¨&*+");
  }
  return permitted;
}

async function handle() {
  let characters = []; //inicia vazio
  let password = "";
  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = await permittedCharacters(); //chamando permitted

  for (let i = 0; i < passwordLength; i++) {
    // começa de zero e vai até quando i for menor que o password
    const index = Math.floor(Math.random() * characters.length); //sortear valor aleatório de acordo com o que tem dentro do objeto
    // a mutiplicação é para pegar o limite máximo
    password += characters[index]; //pegando o caracter sorteado e adicionado na variável password
  }
  return password;
}

export default handle;
