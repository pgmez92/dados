function satan() {
  let num_dados, num_caras;
  let arr_tirada = [];
  let num_repes = {};

  let tiradas = document.querySelector('[id="tiradas"]');
  let repes = document.querySelector('[id="repes"]');

  num_dados = parseInt(document.querySelector('[name="Dados"]').value);
  num_caras = parseInt(document.querySelector('[name="Caras"]').value);

  for (let i = 0; i < num_dados; ++i) {
    arr_tirada.push(Math.ceil(Math.random() * num_caras));
  }

  arr_tirada.forEach(function (x) {
    num_repes[x] = (num_repes[x] || 0) + 1;
  });

  tiradas.textContent = arr_tirada;
  repes.textContent = JSON.stringify(num_repes);
}
