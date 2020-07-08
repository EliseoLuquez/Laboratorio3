let datos;
let divTabla = document.getElementById('divTabla');
let btnSexo = document.querySelector('#btnSexo');
let btnMap = document.querySelector('#btnMap');

btnSexo.addEventListener('click', ()=>{
    RefrescarDiv(divTabla, CrearTabla(FiltrarSexo(datos, 'Male')));
});

btnMap.addEventListener('click', ()=>{
    RefrescarDiv(divTabla, CrearTabla(MapearMails(datos)));
});

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status ==200)
    {
        datos = JSON.parse(this.responseText);
        RefrescarDiv(divTabla, CrearTabla(datos));
    }
};
xhr.open('get', './Js/data.json');
xhr.send();


function CrearTabla(arr)
{
    let tabla = document.createElement('table');

    tabla.appendChild(CrearCabeceraTabla(arr[0]));
    tabla.appendChild(CrearCuerpoTabla(arr));
    tabla.classList.add('table');
    tabla.classList.add('table-striped');
    tabla.classList.add('table-hover');
    tabla.classList.add('table');
    return tabla;
}


function CrearCabeceraTabla(objeto)
{
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    for (const key in objeto)
    {
        let th = document.createElement('th');
        let texto = document.createTextNode(key);
        th.appendChild(texto);
        tr.appendChild(th);
    }
   
    thead.appendChild(tr);
    thead.classList.add('thead-dark');
    thead.classList.add('text-capitalize');
    thead.classList.add('text-center');
    return thead;
}


function RefrescarDiv(div, tabla)
{
    while(div.hasChildNodes())
    {
        div.removeChild(div.firstElementChild);
    }
    div.appendChild(tabla);
}


function CrearCuerpoTabla(arr)
{
    let tbody = document.createElement('tbody');
    
    arr.forEach(element => {
        let tr = document.createElement('tr');

        for (const key in element) 
        {
            let td = document.createElement('td');
            let texto = document.createTextNode(element[key]);
            td.appendChild(texto);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        
    });
   
    return tbody;
}


function FiltrarSexo(arr, sexo)
{
    return arr.filter(p=>(p.genero == sexo));
}

function MapearMails(arr)
{
    return arr.map(e=>({email:e.email, sueldo:e.sueldo}));
}