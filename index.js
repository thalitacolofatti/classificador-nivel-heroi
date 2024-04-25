let herois = [["Maria", 900], ["Gabi", 10500], ["Ana", 7200], ["Tael", 9354]];

let nome = "";
let experiencia;
let nivel = ""
let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

var i = 0;
var j = 0;

while (i < herois.length) {
  nome = herois[i][0];
  experiencia = herois[i][1];

  if (experiencia <= 1000) {
    nivel = niveis[0];
  } else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = niveis[1];
  } else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = niveis[2];
  } else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = niveis[3];
  } else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = niveis[4];
  } else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = niveis[5];
  } else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = niveis[6];
  } else if (experiencia >= 10001) {
    nivel = niveis[7];
  } 

  i++;

  console.log("O(A) Herói(na) de nome " + nome + " está no nível de " + nivel);

}
