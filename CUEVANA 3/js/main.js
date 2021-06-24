const fila = document.querySelector('.contenedor-carousel');
const peliculas=document.querySelectorAll('.pelicula');

const flechaIzquierda=document.getElementById('flecha-izquierda');
const flechaDerecha=document.getElementById('flecha-derecha');



//  FLECHA DERECHA
flechaDerecha.addEventListener('click',()=>{
    fila.scrollLeft +=fila.offsetWidth;

    const indicadorActivo=document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});



//  FLECHA IZQUIERDA
flechaIzquierda.addEventListener('click',()=>{
    fila.scrollLeft -=fila.offsetWidth;

    const indicadorActivo=document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});


// PAGINACION
const numeroPaginas=Math.ceil(peliculas.length/5);
for(let i=0;i<numeroPaginas;i++){
    const indicador=document.createElement('button');

    if(i==0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click',(e)=>{
        fila.scrollLeft=i*fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}


//HOVER
peliculas.forEach((pelicula)=> {
    pelicula.addEventListener('mouseenter',(e)=> {
        const elemento=e.currentTarget;
        setTimeout(()=>{
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        },300);
    });
});

fila.addEventListener('mouseleave',() =>{
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});
 
//--------------------


const fila1 = document.querySelector('.contenedor-carousel1');
const peliculas1=document.querySelectorAll('.pelicula1');

const flechaIzquierda1=document.getElementById('flecha-izquierda1');
const flechaDerecha1=document.getElementById('flecha-derecha1');


//  FLECHA DERECHA
flechaDerecha1.addEventListener('click',()=>{
    fila1.scrollLeft +=fila.offsetWidth;

    const indicadorActivo1=document.querySelector('.indicadores1 .activo');
    if(indicadorActivo1.nextSibling){
        indicadorActivo1.nextSibling.classList.add('activo');
        indicadorActivo1.classList.remove('activo');
    }
});



//  FLECHA IZQUIERDA
flechaIzquierda1.addEventListener('click',()=>{
    fila1.scrollLeft -=fila.offsetWidth;

    const indicadorActivo1=document.querySelector('.indicadores1 .activo');
    if(indicadorActivo1.previousSibling){
        indicadorActivo1.previousSibling.classList.add('activo');
        indicadorActivo1.classList.remove('activo');
    }
});


// PAGINACION
const numeroPaginas1=Math.ceil(peliculas1.length/5);
for(let i=0;i<numeroPaginas1;i++){
    const indicador1=document.createElement('button');

    if(i==0){
        indicador1.classList.add('activo');
    }

    document.querySelector('.indicadores1').appendChild(indicador1);
    indicador1.addEventListener('click',(a)=>{
        fila1.scrollLeft=i*fila.offsetWidth;

        document.querySelector('.indicadores1 .activo').classList.remove('activo');
        a.target.classList.add('activo');
    });
}


//HOVER
peliculas1.forEach((pelicula1)=> {
    pelicula1.addEventListener('mouseenter',(a)=> {
        const elemento1=a.currentTarget;
        setTimeout(()=>{
            peliculas1.forEach(pelicula1 => pelicula1.classList.remove('hover'));
            elemento1.classList.add('hover');
        },300);
    });
});

fila1.addEventListener('mouseleave',() =>{
    peliculas1.forEach(pelicula1 => pelicula1.classList.remove('hover'));
});
 


















