import { handleStatus } from '../utils/promise_helpers.js';
import { partialize, pipe } from '../utils/operators.js';
import { Maybe } from './utils/maybe.js'

const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notas =>
  notas.$flatMap(nota => nota.items);
const filteritemsByCode = (code, items) =>
  items.filter(item => item.codigo == code);
const sumItemsValue = items =>
  items.reduce((total, item) => total + item.valor, 0);


export const notasService = {

  listAll() {

    return fetch(API)
      .then(handleStatus)
      .then(notas => Maybe.of(notas))
      .catch(err => {
        console.log(err);
        return Promise.reject('Não foi possível obter as notas fiscais');
      });
  },
  sumItems(code) {
    const filterItems = partialize(filteritemsByCode, code);
    const sumItems = pipe(
      getItemsFromNotas,
      filterItems,
      sumItemsValue);
    return this.listAll()
      .then(sumItems
      );
  }
};