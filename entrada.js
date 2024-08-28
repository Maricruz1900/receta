const entrada = [
    {
        Nombre: "Bruschettas de Tomate y Albahaca",
        Imagen: "imag/tomarte.png",
        Ingredientes: [
            "Pan baguette",
            "Tomates maduros",
            "Ajo",
            "Albahaca fresca",
            "Aceite de oliva virgen extra",
            "Sal y pimienta"
        ],
        Instrucciones: "Corta el pan en rebanadas y tuesta ligeramente. Mezcla tomates picados con ajo, albahaca, aceite de oliva, sal y pimienta. Coloca la mezcla sobre las rebanadas de pan y sirve."
    },

    {
        Nombre: "Croquetas de Jamón",
        Imagen: "imag/jamon.jpg",
        Ingredientes: [
            "Jamón serrano",
            "Leche",
            "Harina",
            "Mantequilla",
            "Huevo",
            "Pan rallado"
        ],
        Instrucciones: "Prepara una bechamel con leche, harina y mantequilla. Añade jamón picado. Deja enfriar, forma las croquetas, pásalas por huevo y pan rallado. Fríelas en aceite caliente hasta que estén doradas."
    },

    {
        Nombre: "Ensalada Caprese",
        Imagen: "imag/ensalada-.jpg",
        Ingredientes: [
            "Tomates cherry",
            "Queso mozzarella fresco",
            "Albahaca fresca",
            "Aceite de oliva virgen extra",
            "Vinagre balsámico",
            "Sal y pimienta"
        ],
        Instrucciones: "Corta los tomates y la mozzarella en rodajas. Alterna las rodajas de tomate y mozzarella en un plato. Espolvorea con hojas de albahaca fresca. Aliña con aceite de oliva, vinagre balsámico, sal y pimienta al gusto."
    },

    {
        Nombre: "Guacamole con Totopos",
        Imagen: "imag/totopo.jpg",
        Ingredientes: [
            "2 aguacates maduros",
            "1 tomate mediano",
            "1/4 de cebolla blanca o roja",
            "1 limón (el jugo)",
            "Cilantro fresco (al gusto)",
            "Sal y pimienta al gusto",
            "Totopos",
        ],
        Instrucciones: "Corta los aguacates por la mitad, retira el hueso y saca la pulpa con una cuchara. Colócala en un tazón. Pica finamente el tomate, la cebolla y el cilantro. Agrégalos al tazón con el aguacate. Exprime el jugo de limón sobre los ingredientes en el tazón. Esto ayudará a mantener el color verde brillante del guacamole y añadirá sabor. Agrega sal y pimienta al gusto. Con un tenedor, machaca los ingredientes en el tazón hasta obtener la consistencia deseada. Puedes dejarlo más o menos troceado según tu preferencia. Prueba y ajusta el sazón si es necesario. Sirve el guacamole en un plato acompañado de totopos (chips de maíz) para disfrutar."
    },
];

function cargarEntrada() {
    const container = document.getElementById('entrada-container');
    entrada.forEach(entrada => {
        const entradaDiv = document.createElement('div');
        entradaDiv.className = 'entrada';

        const imagen = document.createElement('img');
        imagen.src = entrada.Imagen;
        entradaDiv.appendChild(imagen);

        const nombre = document.createElement('h2');
        nombre.textContent = entrada.Nombre;
        entradaDiv.appendChild(nombre);

        const ingredientesTitulo = document.createElement('h3');
        ingredientesTitulo.textContent = 'Ingredientes:';
        entradaDiv.appendChild(ingredientesTitulo);

        const ingredientesLista = document.createElement('ul');
        entrada.Ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = ingrediente;
            ingredientesLista.appendChild(li);
        });
        entradaDiv.appendChild(ingredientesLista);

        const instruccionesTitulo = document.createElement('h3');
        instruccionesTitulo.textContent = 'Instrucciones:';
        entradaDiv.appendChild(instruccionesTitulo);

        const instruccionesLista = document.createElement('ul');
        entrada.Instrucciones.split('. ').forEach(instruccion => {
            const li = document.createElement('li');
            li.textContent = instruccion;
            instruccionesLista.appendChild(li);
        });
        entradaDiv.appendChild(instruccionesLista);

        container.appendChild(entradaDiv);
    });
}

document.addEventListener('DOMContentLoaded', cargarEntrada);