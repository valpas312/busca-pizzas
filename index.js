let pizzas = [
  {
    id: 1,
    nombre: "Pizza de muzzarela",
    ingredientes: ["queso", "salsa", "masa", "oregano"],
    precio: 600,
    img: "assets/img/oregano.png"
  },
  {
    id: 2,
    nombre: "Pizza con jamon",
    ingredientes: ["queso", "salsa", "masa", "jamon"],
    precio: 700,
    img: "assets/img/pizzaJamon.png"
  },
  {
    id: 3,
    nombre: "Pizza con huevo frito",
    ingredientes: ["queso", "salsa", "masa", "huevo frito"],
    precio: 750,
    img: "assets/img/pizzaHuevo.png"
  },
  {
    id: 4,
    nombre: "Pizza de queso",
    ingredientes: ["queso", "masa"],
    precio: 400,
    img: "assets/img/pizzaQueso.png"
  },
  {
    id: 5,
    nombre: "Pizzanesa",
    ingredientes: ["queso", "masa", "salsa", "milanesa"],
    precio: 800,
    img: "assets/img/milanesa.png"
  },
  {
    id: 6,
    nombre: "Pizzanesa a caballo",
    ingredientes: ["queso", "masa", "salsa", "milanesa", "huevo frito"],
    precio: 1000,
    img: "assets/img/milanesaYHuevo.png"
  },
  {
    id: 7,
    nombre: "Pizza con rucula",
    ingredientes: ["queso", "masa", "salsa", "rucula"],
    precio: 550,
    img: "assets/img/rucula.png"
  },
];

localStorage.setItem("pizzas", JSON.stringify(pizzas))

const h4 = document.getElementById("h4");
const h2 = document.getElementById("h2");
const img = document.getElementById("img")
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

img.style.display = "none"
const mensajes = (p) => {
    let pizzaId = buscarPizza(p)
  if (pizzaId == "error") {
    errorMsj.style.display = 'block'
    h2.textContent = "";
    h4.textContent = "";
    img.src=""
    img.style.display = "none"
  } else {
    img.style.display = 'block'
    errorMsj.style.display = 'none'
    h2.textContent = `${pizzaId.nombre}`;
    h4.textContent = `Precio $ ${pizzaId.precio}`;
    img.src = `${pizzaId.img}`
  }
};

btn.addEventListener('click', e => {
    e.preventDefault();
    mensajes(input.value);
    input.value='';
});