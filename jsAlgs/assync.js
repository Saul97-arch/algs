/* The Promise constructor takes a function as an argument and that function internally receives resolve and reject as parameters.

The resolve and reject parameters are actually functions that we can call depending on the outcome of the asynchronous operation.

Promise goes through three states.

Pending
Fulfilled
Rejected */

const promisse = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sum = 4 + 5;
    //Aqui acontece o tratamento dos erros, a função reject pra erro e resolve pra processo certo
    if (isNaN(sum)) {
      reject("Error calculatig the sum!");
    } else {
      resolve(sum);
    }
  }, 2000);
});

//Caso caiu no resolve temos que usar o then na promisse a la bellow
//Se deu erro é o catch que vai lidar com a bagaça, mostrando a mensagem de erro que
//você passou como parâmetro no reject

/* 
When we have multiple .then handlers added, the return value of the previous .then handler is automatically passed to the next .then handler.
*/

promisse
  .then((res) => {
    console.log("First .then handler");
    return res;
  })
  .then((res) => {
    console.log("Sencond .then handler");
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/* 
Delaying a promise execution
Many times we don't want to create promise immediately. We want to create a promise after some operation is completed.

To achieve this, we can wrap the promise in a function and return that promise from that function like this:
This way, we can use the function parameters inside the promise, making the function truly dynamic.
*/

const createPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sum = a + b;
      if (isNaN(sum)) {
        reject("Error handling the sum");
      } else {
        resolve(sum);
      }
    }, 2000);
  });
};

//DYNAMICAL BEATCH
createPromise(10, 24).then((output) => {
  console.log(output);
});

createPromise(3, 33).then((out) => {
  console.log(out);
})