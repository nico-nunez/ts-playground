"use strict";
const btn = document.querySelector("#my-button");
const values = Array(100).fill(0).map((_, index) => `item - ${index}`);
let currentIndex = 0;
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    const list = document.querySelector("#my-list");
    if (!list)
        return;
    for (let i = 0; i < 10; i++) {
        list.appendChild(value[currentIndex + i]);
        currentIndex++;
    }
});
