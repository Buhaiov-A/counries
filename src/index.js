import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetch_countries';

const DEBOUNCE_DELAY = 1000;

const refs = {
  input: document.querySelector('input'),
};

function searchCountries() {
  const value = refs.input.value;
  fetchCountries(value.trim()).then(response => {
    if (response.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
      }
  }).catch(error => console.log("ERROR"));
}

refs.input.addEventListener('input',  debounce(searchCountries, DEBOUNCE_DELAY));
