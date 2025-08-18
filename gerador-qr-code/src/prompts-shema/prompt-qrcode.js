import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para o QRCODE"),
  },
  {
    name: "tyupe",
    description: chalk.yellow("Escolha entre o tipo (1- NORMAL 2- TERMINAL)"),
    pattern: /^[1-2]+$/, //força usuário a escolher 1 ou 2
    message: chalk.red.italic("Escolha apenas entre 1 e 2"), //mensagem de erro caso não selecione a opção certa
    required:true,
  },
];

export default promptQRCode;
