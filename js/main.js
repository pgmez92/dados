function satan() {
  let num_dados, num_caras;
  let arr_tirada = [];

  let tiradas = document.querySelector('[id="tiradas"]');
  let repes = document.querySelector('[id="repes"]');

  num_dados = parseInt(document.querySelector('[name="Dados"]').value);
  num_caras = parseInt(document.querySelector('[name="Caras"]').value);

  for (let i = 0; i < num_dados; ++i) {
    arr_tirada.push(Math.ceil(Math.random() * num_caras));
  }

  tiradas.textContent = arr_tirada;
  arr_tirada.sort();

  /* subdividir el arr_tirada en arrays parejos y  contar su length */
  /* for (let index = 0; index < arr_tirada.length; ++index) {
    let repatencia = arr_tirada.filter((valor) => valor == arr_tirada[index]);
    repes.textContent += repatencia;
  } */

  /* TUSMUERTOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */
  /*  let arr_repes = []; 
    for (let index = 0; index <= arr_tirada.length; ++index) {
    let count = 1;
    let num_repe = { valor: arr_tirada[index], veces: 0 };

    for (let i = index + 1; i <= arr_tirada.length; ++i) {
      if (arr_tirada[index] === arr_tirada[i]) {
        ++count;
      }
    }

    if (count > 1) {
      num_repe.veces = count;
      arr_repes.push(num_repe);
    }

    repes.textContent = JSON.stringify(arr_repes); */

  let meagotas = {};
  arr_tirada.forEach(function (x) {
    meagotas[x] = (meagotas[x] || 0) + 1;
  });
  repes.textContent = JSON.stringify(meagotas);
}
