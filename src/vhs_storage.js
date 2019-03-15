import vhsTapes from '../assets/vhs.js';

const STORAGE_KEY = 'tapes';
export const addVhsToStorage = id => {
  const vhsToAdd = vhsTapes.find(tape => tape.id === id);

  const tapesInStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (tapesInStorage) {
    tapesInStorage.push(vhsToAdd);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tapesInStorage));
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([vhsToAdd]));
  }
};
