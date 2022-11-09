const { welcome, goodbye, tell } = require("../utils/fortune-teller");

// //original code
// const promise = welcome();
// console.log(promise);


const welcomePromise = welcome();
welcomePromise
    .then((result) => {
        console.log("The result is:", result);
    });


const goodbyePromise = goodbye()
    goodbyePromise.then((result) =>{
    console.log("Here is your fortune:", result);
    })
    .catch((error) => {
    console.log("You have no forturne:",error); 
    });

const question = "Is this real?"
const tellPromise = tell(question)
  tellPromise
    .then((answer) => {
        console.log(question)
        console.log("Success:", answer);
    })
    .catch((error) => {
        console.log("Failure:", error);
    });

setTimeout(() => console.log(tellPromise), 500);

