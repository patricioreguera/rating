// STEP 1
const step1 = document.querySelector (".step1");

// STEP 2
const step2 = document.querySelector (".step2");
const msj = document.getElementById("msj");
//Boton Submit

const submit = document.querySelector (".btns");

// Caputra de Botones Rating //
const btn1 = document.getElementById ("btn1");
const btn2 = document.getElementById ("btn2");
const btn3 = document.getElementById ("btn3");
const btn4 = document.getElementById ("btn4");
const btn5 = document.getElementById ("btn5");


var ranting = 0;



// funciones de botones Rating //

btn1.addEventListener ("click" , ()=> {
    btn1.classList.toggle("btnselect");
    if (classList = "btnselect") {
        ranting = 1;
        btn2.classList.remove ("btnselect");
        btn3.classList.remove ("btnselect");
        btn4.classList.remove ("btnselect");
        btn5.classList.remove ("btnselect");
    }
});

btn2.addEventListener ("click" , ()=> {
    ranting = 2;
    btn2.classList.toggle("btnselect");
    //quitar
    btn1.classList.remove ("btnselect");
    btn3.classList.remove ("btnselect");
    btn4.classList.remove ("btnselect");
    btn5.classList.remove ("btnselect");
});

btn3.addEventListener ("click" , ()=> {
    ranting = 3;
    btn3.classList.toggle("btnselect");

    btn1.classList.remove ("btnselect");
    btn2.classList.remove ("btnselect");
    btn4.classList.remove ("btnselect");
    btn5.classList.remove ("btnselect");
});

btn4.addEventListener ("click" , ()=> {
    ranting = 4;
    btn4.classList.toggle("btnselect");

    btn1.classList.remove ("btnselect");
    btn2.classList.remove ("btnselect");
    btn3.classList.remove ("btnselect");
    btn5.classList.remove ("btnselect");

    console.log(ranting);
});
btn5.addEventListener ("click" , ()=> {
    ranting = 5;
    btn5.classList.toggle("btnselect");

    btn1.classList.remove ("btnselect");
    btn2.classList.remove ("btnselect");
    btn3.classList.remove ("btnselect");
    btn4.classList.remove ("btnselect");
});



submit.addEventListener ("click" , ()=> {

    if (ranting >0) {

        step1.style.display = "none";
        step2.style.display = "flex";
        msj.textContent = `You selected ${ranting} out of 5`;
    } 
});


console.log(ranting);