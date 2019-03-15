import vhsTapes from '../assets/vhs.js';

const STORAGE_KEY = 'tapes';
export const addVhsToStorage = id => {
  const vhsToAdd = vhsTapes.find(tape => tape.id === id);

  const tapesInStorage = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  if (tapesInStorage) {
    tapesInStorage.push(vhsToAdd);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tapesInStorage));
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([vhsToAdd]));
  }
};

export const getTapesFromStorage = () => {
  console.log(localStorage.getItem(STORAGE_KEY))
  const tapesInStorage = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  return tapesInStorage;
}

export const removeTapeFromStorage = (id) =>  {
  const tapesInStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const tapesLeftInStorage = tapesInStorage.filter(tape => tape.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tapesLeftInStorage));
}