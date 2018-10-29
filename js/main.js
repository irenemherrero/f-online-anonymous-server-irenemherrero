'use strict';

const buttonOpenMenu = document.querySelector('.nav-trigger');
const buttonCloseMenu = document.querySelector('.nav-close');
const navigation = document.querySelector('.nav');

buttonOpenMenu.innerHTML="";
buttonCloseMenu.innerHTML="";

navigation.classList.add('initial-hidden');


function handleShowMenu(){
    navigation.classList.remove('initial-hidden');
    navigation.classList.remove('hidden');
}

function handleHiddeMenu(){
    navigation.classList.add('hidden');
}

buttonOpenMenu.addEventListener('click', handleShowMenu);
buttonCloseMenu.addEventListener('click', handleHiddeMenu);