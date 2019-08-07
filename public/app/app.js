import { log, timeOutPromise } from './utils/promise_helpers.js';
import './utils/array_helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, pipe, partialize } from './utils/operators.js'

const operations = pipe(
  partialize(takeUntil, 3),
  partialize(debounceTime, 500)
);

const action = operations(() =>
  timeOutPromise(200, service.sumItems('2143'))
    .then(console.log)
    .catch(console.log)
);

document
  .querySelector("#myButton")
  .onclick = action;
