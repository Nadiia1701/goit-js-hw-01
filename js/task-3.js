"use strict"

function getElementWidth(content, padding, border) {
    const content2 = Number.parseFloat(content);
    const padding2 = Number.parseFloat(padding);
    const border2 = Number.parseFloat(border);
    return Number.parseFloat(content2 + padding2 * 2 + border2 * 2);
}

getElementWidth();

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200