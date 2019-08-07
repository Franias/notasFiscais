import { log } from './utils/promise_helpers.js';
import './utils/array_helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize } from './utils/operators.js'

const doTake = takeUntil(2, ()=> {
  console.log("oioio");
  
});
doTake();
doTake();
doTake();  


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
