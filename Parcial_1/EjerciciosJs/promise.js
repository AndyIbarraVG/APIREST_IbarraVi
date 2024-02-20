function Promesa1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Andy');
        }, 2000);
    });
}
function Promesa2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ibarra');
        }, 2000);
    });
}
function Promesa3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Villanueva');
        }, 2000);
    });
}

Promise.all([Promesa1(), Promesa2(), Promesa3()])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

Promise.allSettled([Promesa1(), Promesa2(), Promesa3()])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

Promise.any([Promesa1(), Promesa2(), Promesa3()])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

Promise.race([Promesa1(), Promesa2(), Promesa3()])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });