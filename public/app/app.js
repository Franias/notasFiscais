import { log, timeOutPromise, retry } from './utils/promise_helpers.js';
import './utils/array_helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, pipe, partialize } from './utils/operators.js'
import { EventEmitter } from './utils/event-emitter.js'
import { Maybe } from './utils/maybe.js';

const value = Maybe.of(null)
.map(value => value +10)
.map(value=> value +30)
.get();
alert(value);

// const maybe2 = new Maybe(null);

const operations = pipe(
  partialize(takeUntil, 3),
  partialize(debounceTime, 500)
);

const action = operations(() =>
  retry(3, 3000, () => timeOutPromise(200, service.sumItems('2143')))
    .then(total => EventEmitter.emit('itensTotalizados', total))
    .catch(console.log)
);

document
  .querySelector("#myButton")
  .onclick = action;

