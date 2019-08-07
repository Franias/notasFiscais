import { handleStatus } from '../utils/promise_helpers.js';

const API = 'http://localhost:3000/notas';

export const notasService = {

    listAll(){

        return fetch(API).then(handleStatus);
    }
};