// js/cursor.js
import { doSomething } from './module.js';

console.log("Cursor.js loaded!");

doSomething();

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    const myButton = document.getElementById("myButton");
    if (myButton) {
        myButton.addEventListener("click", () => {
            console.log("Button clicked!");
            doSomething();
        });
    }
});