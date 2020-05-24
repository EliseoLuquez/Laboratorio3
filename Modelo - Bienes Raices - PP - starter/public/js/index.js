var frm;
var botonAlta;
var botonModificar;
var botonEliminar;
var botonCancelar;
var divTabla;

window.addEventListener('load', () => {
    frm = document.forms[0];
    botonAlta = document.getElementById('btnAlta');
    botonAlta = document.getElementById('btnBaja');
    botonAlta = document.getElementById('btnModificar');
    botonAlta = document.getElementById('btnCancelar');
    botonAlta = document.getElementById('divTabla');
    
    TraerDatos();

    frm.addEventListener('submit', function(e)
    {
        e.preventDefault();
    });

    botonAlta.addEventListener('click', function(e){
        let nuevoDato = obtenerDato(frm);
        Alta(nuevoDato);
    });

    botonAlta.addEventListener('click', function(e){
        let nuevoDato = obtenerDato(frm);
        Baja(nuevoDato);
        Cancelar(frm);
    });

    botonAlta.addEventListener('click', function(e){
        let nuevoDato = obtenerDato(frm);
        Modificar(nuevoDato);
        Cancelar(frm);
    });

    botonAlta.addEventListener('click', function(e){
        Cancelar(frm);
    });
});

function obtenerDato(frm)
{
    let id;
    let titulo;
    let transaccion;
    let descripcion;
    let precio;
    let autos;
    let banios;
    let dormitorios;
    let active = 'active';

    for(elemento of frm.elements)
    {
        switch(elemento.name)
        {
            case 'id':
                id = elemeto.value;
                break;
            case 'titulo':
                titulo = elemeto.value;
                break;
            case 'transaccion':
                transaccion = elemeto.value;
                break;  
            case 'descripcion':
                descripcion = elemeto.value;
                break;
            case 'precio':
                precio = elemeto.value;
                break;
            case 'autos':
                autos = parseInt(elemeto.value);
                break;
            case 'banios':
                baños = parseInt(elemeto.value);
                break;
            case 'dormitorios':
                dormitorios = parseInt(elemeto.value);
                break;
        }
        return new Dato(id, titulo, transaccion, descripcion, precio, autos, banios, dormitorios);
    }
}


function CargarForm(frm, dato)
{
    for(elemento of frm.elements)
    {
        switch(elemento.name)
        {
            case 'id':
                elemeto.value = dato.id;
                break;
            case 'titulo':
                elemeto.value = dato.id;
                break;
            case 'transaccion':
                elemeto.value = dato.transaccion;
                break;  
            case 'descripcion':
                elemeto.value = dato.descripcion;
                break;
            case 'precio':
                elemeto.value = dato.precio;
                break;
            case 'autos':
                elemeto.value = parseInt(dato.autos);
                break;
            case 'banios':
                elemeto.value = parseInt(dato.banios);
                break;
            case 'dormitorios':
                elemeto.value = parseInt(dato.dormitorios);
                break;
        }
    }
}


function Cancelar(frm)
{
    for(elemento of frm.elements)
    {
        elemento.value = '';
    }
}

function Spinner()
{
    var spinner = document.createElement('img');
    spinner.setAttribute('src', './img/2.gif');
    spinner.setAttribute('alt', 'spinner');
    return spinner;
}