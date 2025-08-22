// 1. parent node
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);


//2. create child
const placeSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I Want to Visit';
placeSection.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Paris';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'London';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'New York';
ul.appendChild(li3);

placeSection.appendChild(ul);

//3. append places section to the main container

mainContainer.appendChild(placeSection);


// easy to create html

const bookSection = document.createElement('section');
bookSection.innerHTML = `
  <h1>Books I Want to Read</h1>
  <ul>
    <li>The Great Gatsby</li>
    <li>To Kill a Mockingbird</li>
    <li>1984</li>
  </ul>
`;
mainContainer.appendChild(bookSection);