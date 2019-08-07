import { handleStatus, log } from './utils/promise_helpers.js';
import './utils/array_helpers.js';
document
    .querySelector("#myButton")
    .onclick = () =>
        fetch('http://localhost:3000/notas')
            .then(handleStatus)
            .then(notas => notas.$flatMap(nota => nota.itens))
            .then(itens => itens.filter(item => item.codigo == '2143'))
            .then(itens => itens.reduce((total, item) => total + item.valor, 0))
            .then(console.log)
            .catch(console.log);