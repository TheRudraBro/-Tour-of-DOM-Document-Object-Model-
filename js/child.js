// create element and set innerText or innerHTML
const newChild = document.createElement('li');
newChild.innerText = 'New Player';

//find the parent  where you will add the child
const playersList = document.getElementById('players-list');
playersList.appendChild(newChild);
