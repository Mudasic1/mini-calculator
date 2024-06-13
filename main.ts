import PromptSync from "prompt-sync";

var prompt = PromptSync();

let n1 = parseInt(prompt(`Enter your first number: `));
let n2 = parseInt(prompt(`Enter your second number: `));
let operator = prompt(`Please select the operator +,-,*,/: `);
if(operator == "+"){
    console.log(`The answar of the ${n1} + ${n2} = `,n1+n2);
}else if(operator == "-"){
    console.log(`The answar of the ${n1} - ${n2} = `,n1-n2);
}else if(operator == "*"){
    console.log(`The answar of the ${n1} * ${n2} = `,n1*n2);
}else if(operator == "/"){
    console.log(`The answar of the ${n1} / ${n2} = `,n1/n2);
}else{
    console.log(`Please enter the valid operator!`);
};