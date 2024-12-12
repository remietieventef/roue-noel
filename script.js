document.getElementById('editButton').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const wheelId = document.getElementById('wheelSelect').value;
    const gifts = document.getElementById('gifts').value.split(',');
    updateWheel(wheelId, gifts);
    document.getElementById('popup').style.display = 'none';
});

function spinWheel(wheelId) {
    // Ici, ajoutez votre logique pour faire tourner la roue et sélectionner un cadeau
    console.log('Roue ' + wheelId + ' lancée!');
}

function updateWheel(wheelId, gifts) {
    // Ici, ajoutez votre logique pour mettre à jour les segments de la roue
    console.log('Mise à jour de la Roue ' + wheelId + ' avec les cadeaux:', gifts);
}
