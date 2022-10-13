"use strict"

// Hover over button removes the button text
const btn = document.getElementById('btn-join');

btn.onmouseenter = function(){
    btn.innerText = "";
}

btn.onmouseout = function(){
    btn.innerText = "JOIN THE CREW!";
}