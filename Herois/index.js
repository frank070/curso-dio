class hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  ataque() {
    let golpe;

    if (this.tipo == "mago") {
     golpe = "magia"
    } else if (this.tipo == "guerreiro") {
      golpe = "espada"
    } else if (this.tipo == "monge") {
      golpe = "artes marciais"
    } else if (this.tipo == "ninja") {
      golpe = "shuriken"
    }
    return `${this.tipo} atacou usando ${golpe}`;
  }
}

let heros = new hero("gandalf", 100, "ninja");
console.log(heros.ataque());
