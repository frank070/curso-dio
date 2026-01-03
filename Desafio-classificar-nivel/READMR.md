# 1️⃣ Desafio Classificador de Nível de Herói

Projeto desenvolvido como desafio prático para consolidar conceitos fundamentais de lógica de programação.

## 📝 Descrição
O objetivo deste projeto é aplicar o uso de variáveis, operadores, estruturas de decisão e laços de repetição. O programa recebe o nome e a experiência (XP) de um herói e retorna sua classificação de acordo com as regras de negócio estabelecidas.

---

## 🚀 Tecnologias Utilizadas
* **Linguagem:** JavaScript
* **Conceitos:**
    * Manipulação de Variáveis
    * Operadores Relacionais e Lógicos
    * Estruturas de Decisão ( `switch`)
    * Laços de Repetição (Opcional para múltiplos heróis)

---

## 🎯 Regras de Classificação

O nível do herói é determinado pelas seguintes faixas de XP:

| Se XP for... | O nível será: |
| :--- | :--- |
| Menor do que 1.000 | **Ferro** |
| Entre 1.001 e 2.000 | **Bronze** |
| Entre 2.001 e 5.000 | **Prata** |
| Entre 5.001 e 7.000 | **Ouro** |
| Entre 7.001 e 8.000 | **Platina** |
| Entre 8.001 e 9.000 | **Ascendente** |
| Entre 9.001 e 10.000 | **Imortal** |
| Maior ou igual a 10.001 | **Radiante** |

---

## 📢 Saída do Projeto

Ao final da execução, o programa deve exibir a seguinte mensagem:

> "O Herói de nome **{nome}** está no nível de **{nivel}**"

---

## 🛠️ Como executar
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório.
3. No terminal digite `node src/index.js`