// Objeto inicial de la nave espacial
let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    disabled: false
};

// Elementos del DOM
const spaceshipInfo = document.getElementById('spaceship-info');
const consoleOutput = document.getElementById('console');
const greenEnergyBtn = document.getElementById('green-energy-btn');
const disableBtn = document.getElementById('disable-btn');
const resetBtn = document.getElementById('reset-btn');

// Función para actualizar la visualización de la nave
function updateSpaceshipDisplay() {
    spaceshipInfo.innerHTML = `
        <p><strong>Fuel Type:</strong> ${spaceship['Fuel Type']}</p>
        <p><strong>Home Planet:</strong> ${spaceship.homePlanet}</p>
        <p><strong>Disabled:</strong> ${spaceship.disabled}</p>
    `;
}

// Función para registrar en la consola
function logToConsole(message) {
    consoleOutput.innerHTML += `<p>> ${message}</p>`;
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// Paso 1: Función greenEnergy
function greenEnergy(obj) {
    obj['Fuel Type'] = 'avocado oil';
    logToConsole("Green energy applied! Fuel type changed to avocado oil.");
}

// Paso 2: Función remotelyDisable
function remotelyDisable(obj) {
    obj.disabled = true;
    logToConsole("Spaceship remotely disabled!");
}

// Paso 3: Función reset (adicional)
function resetSpaceship() {
    spaceship = {
        'Fuel Type': 'Turbo Fuel',
        homePlanet: 'Earth',
        disabled: false
    };
    logToConsole("Spaceship reset to default settings.");
}

// Event Listeners
greenEnergyBtn.addEventListener('click', () => {
    greenEnergy(spaceship);
    updateSpaceshipDisplay();
});

disableBtn.addEventListener('click', () => {
    remotelyDisable(spaceship);
    updateSpaceshipDisplay();
});

resetBtn.addEventListener('click', () => {
    resetSpaceship();
    updateSpaceshipDisplay();
});

// Inicialización
updateSpaceshipDisplay();
logToConsole("Spaceship control system initialized.");