
const postres = [
    {
        Nombre: "Mousse de Chocolate",
        Imagen: "imag/mousse.jpg",
        Ingredientes: [
            "200g de chocolate negro",
            "4 huevos separados",
            "100ml de crema de leche",
            "2 cucharadas de azúcar",
            "1 cucharadita de esencia de vainilla"
        ],
        Instrucciones: "Derrite el chocolate en el microondas. Deja enfriar un poco. Bate las yemas con el azúcar hasta que estén cremosas. Agrega el chocolate derretido y la esencia de vainilla. Bate la crema de leche hasta que forme picos suaves. Incorpora la crema batida a la mezcla de chocolate y yemas. Bate las claras a punto de nieve y mezcla con cuidado. Refrigera por 4 horas antes de servir.",
        Estado: "Por hacer"
    },
    {
        Nombre: "Cheesecake",
        Imagen: "imag/chees.jpg",
        Ingredientes: [
            " Queso crema",
            "galletas tipo digestive", 
            "mantequilla", 
            "azúcar", 
            "huevos", 
            "extracto de vainilla"
        ],
        Instrucciones: "Triturar las galletas y mezclar con mantequilla derretida para la base. Batir el queso crema con azúcar, huevos y vainilla. Verter sobre la base de galleta y hornear. Enfriar antes de servir."
    },
    
    {
        Nombre: "Flan de Caramelo",
        Imagen: "imag/flan.jpg",
        Ingredientes: [
            "Leche",
            "huevos",
            "azúcar", 
            "esencia de vainilla", 
            "caramelo líquido"
        ],
        Instrucciones: "Batir huevos con azúcar y vainilla. Calentar leche y añadir a la mezcla de huevos. Verter caramelo en moldes, añadir la mezcla y hornear a baño María."
    },
    
    {
        Nombre: "Fresas con Crema",
        Imagen: "imag/crema.jpg",
        Ingredientes: [
            "Fresas frescas, lavadas y cortadas en rodajas", 
            "Crema batida",
           "Azúcar al gusto",
            "Esencia de vainilla",
            "Hojas de menta fresca para decorar"
        ],
        Instrucciones: "Corta las fresas y espolvorea azúcar al gusto. Deja reposar las fresas unos minutos para que suelten jugo. Bate crema hasta formar picos suaves. Coloca las fresas en copas y cubre con crema batida. Opcional: decora con hojas de menta fresca. Sirve inmediatamente y disfruta."
    },
];

function cambiarEstado(postre, nuevoEstado) {
    postre.Estado = nuevoEstado;
    cargarPostres(); // Recargar la lista de postres para reflejar el nuevo estado
}

function cargarPostres() {
    const container = document.getElementById('postres-container');
    container.innerHTML = ''; // Limpiar el contenido existente

    postres.forEach(postre => {
        const postreDiv = document.createElement('div');
        postreDiv.className = 'postre';

        const imagen = document.createElement('img');
        imagen.src = postre.Imagen;
        postreDiv.appendChild(imagen);

        const nombre = document.createElement('h2');
        nombre.textContent = postre.Nombre;
        postreDiv.appendChild(nombre);

        const ingredientesTitulo = document.createElement('h3');
        ingredientesTitulo.textContent = 'Ingredientes:';
        postreDiv.appendChild(ingredientesTitulo);

        const ingredientesLista = document.createElement('ul');
        postre.Ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = ingrediente;
            ingredientesLista.appendChild(li);
        });
        postreDiv.appendChild(ingredientesLista);

        const instruccionesTitulo = document.createElement('h3');
        instruccionesTitulo.textContent = 'Instrucciones:';
        postreDiv.appendChild(instruccionesTitulo);

        const instruccionesLista = document.createElement('ul');
        postre.Instrucciones.split('. ').forEach(instruccion => {
            const li = document.createElement('li');
            li.textContent = instruccion;
            instruccionesLista.appendChild(li);
        });
        postreDiv.appendChild(instruccionesLista);

        const estadoTitulo = document.createElement('h3');
        estadoTitulo.textContent = 'Estado:';
        postreDiv.appendChild(estadoTitulo);

        const estado = document.createElement('p');
        estado.textContent = postre.Estado;
        postreDiv.appendChild(estado);

        const botonesDiv = document.createElement('div');
        botonesDiv.className = 'botones';

        const btnYaLoHice = document.createElement('button');
        btnYaLoHice.textContent = 'Ya lo hice';
        btnYaLoHice.onclick = () => cambiarEstado(postre, 'Ya lo hice');
        botonesDiv.appendChild(btnYaLoHice);

        const btnPendiente = document.createElement('button');
        btnPendiente.textContent = 'Pendiente';
        btnPendiente.onclick = () => cambiarEstado(postre, 'Pendiente');
        botonesDiv.appendChild(btnPendiente);

        const btnPorHacer = document.createElement('button');
        btnPorHacer.textContent = 'Por hacer';
        btnPorHacer.onclick = () => cambiarEstado(postre, 'Por hacer');
        botonesDiv.appendChild(btnPorHacer);

        postreDiv.appendChild(botonesDiv);

        container.appendChild(postreDiv);
    });
}

document.addEventListener('DOMContentLoaded', cargarPostres);