import { log } from './utils/promise_helpers.js';
import './utils/array_helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil } from './utils/operators.js'

const showMessage = () => console.log("oi");
const operation = takeUntil(3, showMessage);

let counter =10;
while(counter--) operation();

document
  .querySelector("#myButton")
  .onclick = () =>
    service
      .sumItems('2143')
      .then(console.log)
      .catch(console.log);