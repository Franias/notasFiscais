import { log } from './utils/promise_helpers.js';
import './utils/array_helpers.js';
import { notasService as service } from './nota/service.js';
const sumItens = code => notas => notas
  .$flatMap(nota => nota.itens)
  .filter(item => item.codigo == code)
  .reduce((total, item) => total + item.valor, 0);
document
  .querySelector("#myButton")
  .onclick = () =>
    service
      .listAll()
      .then(sumItens('2143'))
      .then(console.log)
      .catch(console.log);