/*
btnTraer.addEventListener('click', saludar);
btnTraer.addEventListener('click', despedir);
btnTraer.addEventListener('click', () => {
    console.log("Esto es un manejador arrow function");
    console.log(event);
    
    btnTraer.removeEventListener('click', despedir);
});
*/
//btnTraer.onclick = saludar;
/*
function saludar(){
    console.log('hola mundo');

    console.log(event);
}
*/
//btnTraer.onclick = despedir;
/*
function despedir(){
    console.log("chau mundo");
    console.log(event);
}
*/
//AJAX
let btnTraer = document.getElementById('btnTraer');
btnTraer.addEventListener('click', traerPersonas);

function traerPersonas()
{
    //ELEMENTO PARA HACER PETICIONES ASINCRONAS
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4)
        {
            if(xhr.status == 200)//status correcto
            {
                console.log(JSON.parse(xhr.responseText));
            }
            else
            {
                console.log(xhr.status + ""+ xhr.statusText);
            }
        }
    };

    xhr.open('GET', 'http://localhost:3000/traerPersonas');
    xhr.send();
}

