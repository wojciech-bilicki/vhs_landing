import vhsTapes from '../assets/vhs.js';
import { addVhsToStorage } from './vhs_storage.js';

const createTitleElement = (title, year) => {
  const cardTitleElement = document.createElement('h1');
  cardTitleElement.textContent = `${title} (${year})`;
  return cardTitleElement;
};

const createPoster = posterUrl => {
  const image = document.createElement('img');
  image.setAttribute('src', `./assets/${posterUrl}`);
  image.setAttribute('class', 'vhs_poster');
  return image;
};

const createVHSEntry = ({ label, value }) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('vhs_entry_wrapper');
  const labelElement = document.createElement('label');
  labelElement.classList.add('vhs_label');
  const content = document.createElement('p');

  const textValue = Array.isArray(value) ? value.join(',') : value;
  content.textContent = textValue;
  labelElement.textContent = label + ':';
  wrapper.appendChild(labelElement);
  wrapper.appendChild(content);
  return wrapper;
};

const createCardFooter = (linkToImdb, onClickFn) => {
  const footer = document.createElement('footer');
  footer.classList.add('vhs_footer');

  const linkEl = document.createElement('a');
  linkEl.textContent = 'IMDB LINK';
  linkEl.href = linkToImdb;

  const button = document.createElement('button');
  button.onclick = onClickFn;
  button.textContent = 'Like!';
  footer.appendChild(linkEl);
  footer.appendChild(button);

  return footer;
};

const vhsCardElements = vhsTapes.map(tape => {
  const vhsWrapper = document.createElement('div');
  vhsWrapper.setAttribute('class', 'vhs_wrapper');

  vhsWrapper.appendChild(createTitleElement(tape.title, tape.year));

  //add image

  vhsWrapper.appendChild(createPoster(tape.cover));

  vhsWrapper.appendChild(
    createVHSEntry({
      label: 'director',
      value: tape.director
    })
  );

  vhsWrapper.appendChild(
    createVHSEntry({
      label: 'cast',
      value: tape.cast
    })
  );

  const description = createVHSEntry({
    label: 'description',
    value: tape.description
  });

  description.classList.add('vhs_description');
  vhsWrapper.appendChild(description);

  vhsWrapper.appendChild(
    createCardFooter(tape.imdb_link, () => {
      addVhsToStorage(tape.id);
    })
  );

  return vhsWrapper;
});

//find vhs_store element

const section = document.querySelector('.vhs_store');

vhsCardElements.forEach(element => section.appendChild(element));

console.log(vhsTapes);
