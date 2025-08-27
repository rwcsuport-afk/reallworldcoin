import { doSomething } from './module.js';

console.log("Cursor.js loaded!");
doSomething();

export function moveCursor() {
    console.log("Moving cursor...");
}