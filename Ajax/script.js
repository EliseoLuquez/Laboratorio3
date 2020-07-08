









let plantilla = document.getElementsByTagName('tempalte')[0].textContent;
let fragmento = document.createDocumentFragment();
let div = document.getElementsById('divImagenes');

imagenes.forEach(element => {
    plantilla.querySelector('img').setAttribute('src', elemento.origen);
    plantilla.querySelector('img').setAttribute('alt', elemento.tittle);
    plantilla.querySelector('figcaption').textContent = elemento.tittle;

    plantilla.querySelector('figure').setAttribute('style', 'display:inline-block');

    //Me trae el nodo plantilla, entero con true
    let copia = document.importNode(plantilla, true);
    
    //Carga el template y trae una copia de c/figure
    fragmento.appendChild(copia);    
});

div.appendChild(fragmento);