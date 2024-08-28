
const bebidas = [
    {
        nombre: "Agua de Mazapan",
        imagen: "imag/MAZAPAN_CON_FRESA.jpg",
        ingredientes: [
            "4 mazapanes",
            "500 ml de agua",
            "500 ml de leche",
            "250 ml de leche evaporada",
            "150 ml de leche condensada",
            "Hielo"
        ],
        instrucciones: "Desenvuelve los mazapanes y colócalos en la licuadora.  Agrega el agua y procesa hasta formar un batido uniforme.  Añade la leche entera y la leche evaporada, procesando nuevamenteRectifica el dulzor y, si es necesario, agrega leche condensada al gusto.  Sirve muy fría en vasos con hielo y, opcionalmente, una pizca de canela en polvo."
    },
    {
        nombre: "Piña Colada",
        imagen: "imag/pina-colada-sin-alcohol.jpg",
        ingredientes: [
            "2 onzas de ron blanco",
            "1 onza de jugo de lima fresco",
            "3/4 onza de jarabe de azúcar",
            "Rodaja de lima para decorar"
        ],
        instrucciones: "Llena una coctelera con hielo, añade ron, jugo de lima y jarabe de azúcar. Agita bien y cuela en una copa de cóctel. Decora con una rodaja de lima."
    },
    {
        nombre: "Smoothie de Mango",
        imagen: "imag/bloody-mary.jpg",
        ingredientes: [
            "1 taza de mango congelado",
            "1 plátano maduro",
            "1/2 taza de yogur natural",
            "1/2 taza de jugo de naranja",
            "1/2 taza de hielo"
        ],
        instrucciones: "Coloca todos los ingredientes en una licuadora y mezcla hasta que quede suave. Sirve inmediatamente."
    },
    {
        nombre: "Limonada de Fresa",
        imagen: "imag/fresa.jpg",
        ingredientes: [
            "1 taza de fresas frescas, picadas",
            "1 taza de jugo de limón",
            "4 tazas de agua fría",
            "1/2 taza de azúcar",
            "Hielo",
            "Rodajas de limón para decorar"
        ],
        instrucciones: "En una licuadora, mezcla las fresas y el jugo de limón hasta que esté suave. En una jarra grande, combina la mezcla de fresas, agua y azúcar. Revuelve bien hasta que el azúcar se disuelva. Sirve con hielo y decora con rodajas de limón."
    },
];

function cargarBebidas() {
    const container = document.getElementById('bebidas-container');
    bebidas.forEach(bebida => {
        const bebidaDiv = document.createElement('div');
        bebidaDiv.className = 'bebida';

        const imagen = document.createElement('img');
        imagen.src = bebida.imagen;
        bebidaDiv.appendChild(imagen);

        const nombre = document.createElement('h2');
        nombre.textContent = bebida.nombre;
        bebidaDiv.appendChild(nombre);

        const ingredientesTitulo = document.createElement('h3');
        ingredientesTitulo.textContent = 'Ingredientes:';
        bebidaDiv.appendChild(ingredientesTitulo);

        const ingredientesLista = document.createElement('ul');
        bebida.ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = ingrediente;
            ingredientesLista.appendChild(li);
        });
        bebidaDiv.appendChild(ingredientesLista);

        const instruccionesTitulo = document.createElement('h3');
        instruccionesTitulo.textContent = 'Instrucciones:';
        bebidaDiv.appendChild(instruccionesTitulo);

        const instruccionesLista = document.createElement('ul');
        bebida.instrucciones.split('. ').forEach(instruccion => {
            const li = document.createElement('li');
            li.textContent = instruccion;
            instruccionesLista.appendChild(li);
        });
        bebidaDiv.appendChild(instruccionesLista);

        container.appendChild(bebidaDiv);
    });
}

document.addEventListener('DOMContentLoaded', cargarBebidas);