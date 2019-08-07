import { handleStatus, log } from './utils/promise_helpers.js';
import './utils/array_helpers.js';

const sumItens = notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == '2143')
    .reduce((total, item) => total + item.valor, 0);
document
    .querySelector("#myButton")
    .onclick = () =>
        fetch('http://localhost:3000/notas')
            .then(handleStatus)
            .then(sumItens)
            .then(console.log)
            .catch(console.log);