// Archivo: script.js

// Función para hacer fetch de la API y procesar la respuesta
function fetchData() {
    // URL de la API seleccionada
    const apiUrl = 'https://cat-fact.herokuapp.com';

    // Hacer fetch de la API
    fetch(apiUrl)
        .then(response => {
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error al obtener los datos de la API');
            }
            // Parsear la respuesta a JSON
            return response.json();
        })
        .then(data => {
            // Llamar a la función para rellenar la estructura HTML con los datos obtenidos
            fillHTML(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Función para rellenar la estructura HTML con los datos obtenidos de la API
function fillHTML(data) {
    // Supongamos que la estructura HTML tiene un elemento con el id "cat-facts"
    const catFactsElement = document.getElementById('');
    
    // Limpiar el contenido previo
    catFactsElement.innerHTML = '';

    // Iterar sobre los datos obtenidos y agregarlos a la estructura HTML
    data.forEach(fact => {
        const factElement = document.createElement('p');
        factElement.textContent = fact.text;
        catFactsElement.appendChild(factElement);
    });
}

// Llamar a la función fetchData() cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', fetchData);
