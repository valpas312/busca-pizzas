let pizzas = [
    {
    id:1,
    nombre:"Pizza 1",
    ingredientes:["queso", "salsa", "masa", "oregano"],
    precio:600
}
    ,{
    id:2,
    nombre:"Pizza 2",
    ingredientes:["queso", "salsa", "masa", "jamon"],
    precio:700
}
    ,{
    id:3,
    nombre:"Pizza 3",
    ingredientes:["queso", "salsa", "masa", "huevo frito"],
    precio:750
}
    ,{
    id:4,
    nombre:"Pizza 4",
    ingredientes:["queso","masa"],
    precio:400
}
    ,{
    id:5,
    nombre:"Pizza 5",
    ingredientes:["queso", "masa", "salsa", "milanesa"],
    precio:800
}
    ,{
    id:6,
    nombre:"Pizza 6",
    ingredientes:["queso", "masa", "salsa", "milanesa", "huevo frito"],
    precio:1000
}
    ,{
    id:7,
    nombre:"Pizza 7",
    ingredientes:["queso", "masa", "salsa", "rucula"],
    precio:550
}]


//Iteraciones
const idImpar = (e)=>{
    if (e.id%2) {
        return e
    }
} 

const pizza600 = (e)=>{
    if (e.precio < 600) {
        return e
    }
}

//A

console.log("Las siguientes pizzas tienen un id impar",pizzas.filter(idImpar))

//B

if (pizzas.some(pizza600)) {
    console.log("Hay 2 pizzas que valen menos de $600") 
}

//C

pizzas.map(e =>{
    return console.log(`Nombre de la pizza ${e.id}:`,e.nombre)
})

//D

pizzas.map(e =>{
    return console.log(`El precio de la pizza id:${e.id} es:`,e.precio)
})

//E

pizzas.map(e =>{
    return console.log(`El precio de la ${e.nombre} es de`,e.precio)
})
