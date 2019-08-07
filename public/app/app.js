import { log } from './utils/promise_helpers.js';
import './utils/array_helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime } from './utils/operators.js'

const action = debounceTime(500,
  takeUntil(3, () =>
    service
      .sumItems('2143')
      .then(console.log)
      .catch(console.log)
  )
);

document
  .querySelector("#myButton")
  .onclick = action;
