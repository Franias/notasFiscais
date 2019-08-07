export const handleStatus = res => 
    res.ok ? res.json() : Promise.reject(res.statusText);
export const log = param => {
    console.log(param);
    return param;
};

export const timeOutPromise = (milliseconds, promise) =>{
    const timeout = new Promise((promise, reject)=>
    setTimeout(() => reject('Limite da promise excedido.'),
    milliseconds));

    return Promise.race([
        timeout, promise
    ]);
};