import chalk from "chalk";
// import { message } from "prompt";

//objeto de configuração
const mainPrompt = [
  {
    name: "select", // tudo que o usuário responder vai ser armazenado nesta variável
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"
    ),
    pattern: /^[1-2]+$/, //força usuário a escolher 1 ou 2
    message: chalk.red.italic("Escolha apenas 1 e 2 "),
    require: true, //obrigatório
  },
];

export default mainPrompt;
