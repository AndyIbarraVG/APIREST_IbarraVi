// Función para capitalizar la primera letra de una cadena
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=900'; // Se ha reducido el límite para evitar problemas de rendimiento

function loadImage(pokemonName, imageUrlSwordShield, imageUrlScarletViolet) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        let swordShieldLoaded = false;

        // Función para verificar la imagen de Sword Shield
        function checkSwordShield() {
            if (swordShieldLoaded) {
                resolve(image.src);
            } else {
                // Si la imagen de Sword Shield no se carga, intentar nuevamente después de 5 segundos
                setTimeout(checkSwordShield, 5000);
            }
        }

        // Establecer la lógica para la imagen de Sword Shield
        image.onload = () => {
            swordShieldLoaded = true;
            checkSwordShield(); // Comienza a verificar la imagen de Sword Shield
        };

        // Si la imagen de Sword Shield no se carga en el tiempo especificado, cargar la de Scarlet Violet
        setTimeout(() => {
            checkSwordShield();
        }, 2000); // Esperar 2 segundos antes de iniciar la verificación de Sword Shield

        image.onerror = () => {
            // Si la imagen de Sword Shield no se carga, intentar cargar la de Scarlet Violet cada 5 segundos
            function checkScarletViolet() {
                const scarletVioletImage = new Image();
                scarletVioletImage.onload = () => {
                    resolve(imageUrlScarletViolet);
                };
                scarletVioletImage.onerror = () => {
                    // Si la imagen de Scarlet Violet no se carga, intentar nuevamente después de 5 segundos
                    setTimeout(checkScarletViolet, 5000);
                };
                scarletVioletImage.src = imageUrlScarletViolet;
            }

            checkScarletViolet();
        };

        image.src = imageUrlSwordShield;
    });
}

// Obtener la lista de Pokémon
document.getElementById('btnFetchData').addEventListener('click', function() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Obtener la matriz de resultados de Pokémon y ordenar alfabéticamente
            const pokemonArray = data.results.sort((a, b) => a.name.localeCompare(b.name));

            // Obtener la tabla HTML y agregar encabezados
            const pokemonTable = document.getElementById('pokemon-table');
            const pokemonTableBody = document.getElementById('pokemon-list');

            pokemonArray.forEach((pokemon, index) => {
                // Crear una nueva fila para cada Pokémon
                const row = document.createElement('tr');

                // Crear celdas para cada punto de datos
                const imageCell = document.createElement('td');
                const nameCell = document.createElement('td');
                const typesCell = document.createElement('td');
                const abilitiesCell = document.createElement('td');
                const hiddenAbilityCell = document.createElement('td');

                // Obtener el sprite frontal y el tipo del Pokémon
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    .then(response => response.json())
                    .then(pokemonData => {
                        // Construir la URL de la imagen basada en el nombre del Pokémon
                        const imageUrlScarletViolet = `https://img.pokemondb.net/sprites/scarlet-violet/icon/${pokemon.name}.png`;
                        const imageUrlSwordShield = `https://img.pokemondb.net/sprites/sword-shield/icon/${pokemon.name}.png`;

                        // Cargar la imagen basada en la disponibilidad
                        loadImage(pokemon.name, imageUrlSwordShield, imageUrlScarletViolet)
                            .then(chosenImageUrl => {
                                // Establecer la URL de la imagen seleccionada
                                imageCell.innerHTML = `<img src="${chosenImageUrl}" alt="${pokemon.name} sprite">`;
                            });

                        // Obtener el tipo del Pokémon
                        const types = pokemonData.types.map(typeInfo => typeInfo.type.name);

                        // Crear elementos para mostrar los tipos
                        types.forEach((type, index) => {
                            const typeElement = document.createElement('span');

                            typeElement.textContent = capitalizeFirstLetter(type);
                            typeElement.classList.add(`type-${type}`); // Agregar una clase con el nombre del tipo

                            // Agregar un espacio después de cada tipo, excepto para el último tipo
                            if (index < types.length - 1) {
                                typeElement.textContent += ' '; // Puedes cambiar esto por el carácter que desees, como ',' o '/'
                            }
                            typesCell.appendChild(typeElement);
                        });

                        const abilities = pokemonData.abilities.map(abilityInfo => ({
                            name: abilityInfo.ability.name,
                            isHidden: abilityInfo.is_hidden
                        }));

                        // Filtrar habilidades normales y habilidad oculta
                        const normalAbilities = abilities.filter(ability => !ability.isHidden);
                        const hiddenAbility = abilities.find(ability => ability.isHidden);

                        // Mostrar habilidades normales en una lista
                        if (normalAbilities.length > 0) {
                            const normalAbilitiesList = document.createElement('ul');
                            normalAbilities.forEach(ability => {
                                const abilityElement = document.createElement('li');
                                abilityElement.textContent = capitalizeFirstLetter(ability.name);
                                normalAbilitiesList.appendChild(abilityElement);
                            });
                            abilitiesCell.appendChild(normalAbilitiesList);
                        }

                        // Mostrar habilidad oculta
                        if (hiddenAbility) {
                            hiddenAbilityCell.textContent = `${capitalizeFirstLetter(hiddenAbility.name)}`;
                        }

                        // Establecer el contenido del nombre del Pokémon en la celda correspondiente
                        nameCell.textContent = capitalizeFirstLetter(pokemon.name);
                    })
                    .catch(error => console.error('Error al obtener datos del Pokémon', error));

                // Agregar celdas a la fila
                row.appendChild(imageCell);
                row.appendChild(nameCell);
                row.appendChild(typesCell);
                row.appendChild(abilitiesCell);
                row.appendChild(hiddenAbilityCell);

                // Agregar la fila al cuerpo de la tabla
                pokemonTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener la lista de Pokémon', error));
});
    