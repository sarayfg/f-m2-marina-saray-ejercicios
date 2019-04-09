'use strict';

const faceEl =document.querySelector('.face');
const headEl= document.querySelector('.head');

function handlerButtonClick() {
    faceEl.innerHTML= ';)';

}

function handlerMouseout() {
    faceEl.innerHTML= ':)';
}

headEl.addEventListener('click', handlerButtonClick);

headEl.addEventListener('mouseout', handlerMouseout);


