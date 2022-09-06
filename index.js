let pizzas = [
  {
    id: 1,
    nombre: "Pizza 1",
    ingredientes: ["queso", "salsa", "masa", "oregano"],
    precio: 600,
  },
  {
    id: 2,
    nombre: "Pizza 2",
    ingredientes: ["queso", "salsa", "masa", "jamon"],
    precio: 700,
  },
  {
    id: 3,
    nombre: "Pizza 3",
    ingredientes: ["queso", "salsa", "masa", "huevo frito"],
    precio: 750,
  },
  {
    id: 4,
    nombre: "Pizza 4",
    ingredientes: ["queso", "masa"],
    precio: 400,
  },
  {
    id: 5,
    nombre: "Pizza 5",
    ingredientes: ["queso", "masa", "salsa", "milanesa"],
    precio: 800,
  },
  {
    id: 6,
    nombre: "Pizza 6",
    ingredientes: ["queso", "masa", "salsa", "milanesa", "huevo frito"],
    precio: 1000,
  },
  {
    id: 7,
    nombre: "Pizza 7",
    ingredientes: ["queso", "masa", "salsa", "rucula"],
    precio: 550,
  },
];

const h4 = document.getElementById("h4");
const h2 = document.getElementById("h2");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const errorMsj = document.querySelector(".error");

const buscarPizza = () => {
  let pizza = pizzas.find((e) => e.id == input.value);

  console.log(pizza)

  if (pizza == null) {
    return "error";
  }
  return pizza;
};

const mensajes = (p) => {
    let pizzaId = buscarPizza(p)
  if (pizzaId == "error") {
    errorMsj.style.display = 'block'
    h2.textContent = "";
    h4.textContent = "";
  } else {
    errorMsj.style.display = 'none'
    h2.textContent = `la pizza es : ${pizzaId.nombre}`;
    h4.textContent = `Precio $ ${pizzaId.precio}`;
  }
};

btn.addEventListener('click', e => {
    e.preventDefault();
    mensajes(input.value);
    input.value='';
});