//parents Node

// var itemsList = document.querySelector('#items');

// console.log(itemsList.parentNode);

// itemsList.parentNode.style.backgroundColor = "red";

// child Nodes
// var itemsList = document.querySelector('#items');

//  console.log(itemsList.childNodes);

// console.log(itemsList.children);

// itemsList.children[1].style.backgroundColor = 'yellow';

// itemsList.firstElementChild.style.backgroundColor = 'green';

// itemsList.lastElementChild.textContent = "Hellow 4";


// itemsList.previousElementSibling.style.color="blue";


//create the elmement 

var newDiv = document.createElement("div");

newDiv.className="Hello";

newDiv.setAttribute('title' , 'hellow div');

newDiv.id="hellow 1";

var newDivText = document.createTextNode('hellow world');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('.container h1');

container.insertBefore(newDiv , h1);


newDiv.style.fontSize = '30px';

console.log(newDiv);
