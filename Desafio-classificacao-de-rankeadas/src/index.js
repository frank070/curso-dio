let mayName = "Play-1";

let vitoria = 10;
let derrota = 10;


function victory(vitoria, derrota) {
  let saldoVitoria = vitoria - derrota;

  switch (true) {
    case saldoVitoria <= 10:
      console.log(
        `O Herói tem de saldo de ${saldoVitoria} está no nível de Ferro`
      );
      break;

    case saldoVitoria >= 11 && saldoVitoria <= 20:
      console.log(
        `O Herói tem de saldo de ${saldoVitoria} está no nível de Bronze`
      );
      break;

    case saldoVitoria >= 21 && saldoVitoria <= 50:
      console.log(
        `O Herói tem de saldo de ${saldoVitoria} está no nível de Ouro`
      );
      break;

    case saldoVitoria >= 51 && saldoVitoria <= 80:
      console.log(
        `O Herói tem de saldo de ${saldoVitoria} está no nível de Platina`
      );
      break;
    case saldoVitoria >= 81 && saldoVitoria <= 90:
      console.log(
        `O Herói tem de saldo de ${saldoVitoria} está no nível de Acendente`
      );
      break;
    case saldoVitoria >= 91 && saldoVitoria <= 100:
      console.log(
        `O Herói tem de saldo de ${saldoVitoria} está no nível de Imortal`
      );
      break;
    case saldoVitoria >= 101:
      console.log(
        `O Herói tem de saldo de ${saldoVitoria} está no nível de Radiante`
      );
      break;
  }
}
victory(vitoria, derrota);