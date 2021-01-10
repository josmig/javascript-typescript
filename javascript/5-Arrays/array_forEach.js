//ForEach para iterar un array

const productos = [
    {nombre:'Celular', color:'negro',precio:123},
    {nombre:'Celular XS', color:'rojo',precio:123},
    {nombre:'Celular Iphone', color:'amarillo',precio:123},
    {nombre:'Celular HUAWEI', color:'plateado',precio:123},
    {nombre:'Celular XIOAMI', color:'negro',precio:123},
    {nombre:'Celular Samsumg', color:'negro',precio:123},
]

for(let i=0; i<productos.length;i++){    
    /* console.log(`${productos[i].nombre} ${productos[i].color} ${productos[i].precio}`); */
}

//Con el metodo forEach
productos.forEach(function(p){
    console.log(`${p.nombre} ${p.color} ${p.precio}`);
})