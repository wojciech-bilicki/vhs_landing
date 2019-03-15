import { getTapesFromStorage, removeTapeFromStorage } from './vhs_storage.js';
let list;



const buildLibrary = () => {
  const favouriteTapes = getTapesFromStorage();
  

  const listItemElements = favouriteTapes.map(tape => {
    const listItem = document.createElement('li');
    const title = document.createElement('p');
    title.textContent = tape.title;
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove!"
    removeButton.onclick = () => {
      removeTapeFromStorage(tape.id);
      while(list.firstChild) {
        list.removeChild(list.firstChild);
      }
      buildLibrary();
    }

    listItem.appendChild(title);
    listItem.appendChild(removeButton)
    return listItem
  })

  listItemElements.forEach(item => {
    list.appendChild(item);
  })
}




list =  document.querySelector('.fav_list');
console.log(list);
buildLibrary();