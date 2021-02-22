// CASO 1. LOS CUATROS ATLETAS.

// De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente dentras de B, y D ha llegado
// en medio de A y C. ¿Podria usted calcular el orden de llegada?

// B -> 1
// C -> 2
// D -> 3
// A -> 4
// ===============================================

var a = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  resultado: function () {
    if (a.C > a.B && a.D > a.B && a.D > a.C && a.D < a.A) {
      return true;
    }
    return false;
  },
  intervalo: setInterval(function () {
    //Ceil redondea numero entero decimal hacia arriba(1.3 = 2)
    // Para que sean esos numeros aleatorios del 1 al 4 se multiplica por 4

    a.A = Math.ceil(Math.random() * 4);
    a.B = Math.ceil(Math.random() * 4);
    a.C = Math.ceil(Math.random() * 4);
    a.D = Math.ceil(Math.random() * 4);

    //    Ya es true
    if (a.resultado()) {
      clearInterval(a.intervalo);
      console.log("atleta A", a.A);
      console.log("atleta B", a.B);
      console.log("atleta C", a.C);
      console.log("atleta D", a.D);
    }
  }, 10),
};
