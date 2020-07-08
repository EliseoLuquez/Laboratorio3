var frm;
var botonAlta;
var botonModificar;
var botonBaja;
var botonCancelar;
var divTabla;

window.addEventListener('load', () => {
    frm = document.forms[0];
    botonAlta = document.getElementById('btnAlta');
    botonBaja = document.getElementById('btnBaja');
    botonModificar = document.getElementById('btnModificar');
    botonCancelar = document.getElementById('btnCancelar');
    divTabla = document.getElementById('divTabla');
    
    TraerDatos();
    botonBaja.hidden = true;
    botonCancelar.hidden = true;
    botonModificar.hidden = true;

    frm.addEventListener('submit', function(e)
    {
        e.preventDefault();
    });

    botonAlta.addEventListener('click', function(e){
        let nuevoDato = obtenerDato(frm);
        Alta(nuevoDato);
    });

    botonBaja.addEventListener('click', function(e){
        let nuevoDato = obtenerDato(frm);
        Baja(nuevoDato);
        Cancelar(frm);
    });

    botonModificar.addEventListener('click', function(e){
        let nuevoDato = obtenerDato(frm);
        Modificar(nuevoDato);
        Cancelar(frm);
    });

    botonCancelar.addEventListener('click', function(e){
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
    let baños;
    let dormitorios;
    let active = 'active';

    for(elements of frm.elements)
    {
        switch(elements.name)
        {
            case 'id':
                id = elements.value;
                break;
            case 'titulo':
                titulo = elements.value;
                break;
            case 'transaccion':
                if(document.getElementById('alquiler').checked == true)
                {
                    transaccion = 'alquiler';
                }
                else if(document.getElementById('venta').checked == true)
                {
                    transaccion = 'venta';
                }
                break;  
            case 'descripcion':
                descripcion = elements.value;
                break;
            case 'precio':
                precio = elements.value;
                break;
            case 'autos':
                autos = elements.value;
                break;
            case 'baños':
                baños = elements.value;
                break;
            case 'dormitorios':
                dormitorios = elements.value;
                break;
        }
    }
    return new Dato(id, titulo, transaccion, descripcion, precio, autos, baños, dormitorios, active);
}


function CargarForm(frm, Dato)
{
    for(elements of frm.elements)
    {
        switch(elements.name)
        {
            case 'id':
                elements.value = Dato.id;
                break;
            case 'titulo':
                elements.value = Dato.titulo;
                break;
            case 'transaccion':
                if(Dato.transaccion == 'alquiler')
                {
                    document.getElementById('alquiler').checked = true;
                    document.getElementById('venta').checked = false;
                }
                else if(Dato.transaccion == 'venta')
                {
                    document.getElementById('alquiler').checked = false;
                    document.getElementById('venta').checked = true;
                }
                break;  
            case 'descripcion':
                elements.value = Dato.descripcion;
                break;
            case 'precio':
                elements.value = Dato.precio;
                break;
            case 'autos':
                elements.value = Dato.autos;
                break;
            case 'baños':
                elements.value = Dato.baños;
                break;
            case 'dormitorios':
                elements.value = Dato.dormitorios;
                break;
        }
    }
}


function Cancelar(frm)
{
    for(elements of frm.elements)
    {
        switch(elements.name)
        {
            case 'id':
                elements.value = '';
                break;
            case 'titulo':
                elements.value = '';
                break;
            case 'transaccion':
                if(document.getElementById('alquiler').checked == true || document.getElementById('venta').checked == true)
                {
                    document.getElementById('alquiler').checked = false;
                    document.getElementById('venta').checked = false;
                }
                break;  
            case 'descripcion':
                elements.value = '';
                break;
            case 'precio':
                elements.value = '';
                break;
            case 'autos':
                elements.value = '';
                break;
            case 'baños':
                elements.value = '';
                break;
            case 'dormitorios':
                elements.value = '';
                break;
        }
    }
}

function Spinner()
{
    var spinner = document.createElement('img');
    spinner.setAttribute('src', './img/2.gif');
    spinner.setAttribute('alt', 'spinner');
    return spinner;
}