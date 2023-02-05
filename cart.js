import generateElement from "./generateElement.js";

const container = generateElement('div', {class: 'container'});

function generateCart(name, age) {

    const cart = generateElement('div', {class: 'cart'},
    generateElement('span', null, `name: ${name}`),
    generateElement('span', null, `name: ${age}`),
    )
    return cart;
}
const userData = [
    {name: 'ahmad', age: 27},
    {name: 'mehdi', age: 32},
    {name: 'ali', age: 30}
]

userData.forEach(data => {
    container.appendChild(generateCart(data.name, data.age));
})

export default container;