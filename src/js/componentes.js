
import '../css/componentes.css';

import webpacklogo from '../assets/img/webpack-logo.png'
// aqui tenemos un modulo y tenemos que exportar la funcion
export const saludar=(nombre)=>{

    const h1= document.createElement('h1');

    h1.innerText=`hola, ${nombre}!!!!!!`;

    document.body.append(h1);



    console.log(webpacklogo);

    const img=document.createElement('img');

    img.src=webpacklogo;

    document.body.append(img);


}