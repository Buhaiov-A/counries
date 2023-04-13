const SEARCH_URL = 'https://restcountries.com/v3.1/name/';

const searchParams = new URLSearchParams({
  fields: ['name', 'capital', 'population', 'flag', 'languages'],
});

export const fetchCountries = name => {
  return fetch(`${SEARCH_URL}${name}?${searchParams}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.status);
  });
};

// HTTP-запросы
// Используй публичный API Rest Countries, а именно ресурс name, возвращающий массив объектов стран
// удовлетворивших критерий поиска. Добавь минимальное оформление элементов интерфейса.

// Напиши функцию fetchCountries(name) которая делает HTTP-запрос на ресурс name и возвращает промис с
// массивом стран - результатом запроса. Вынеси её в отдельный файл fetchCountries.js и сделай именованный
// экспорт.
// Фильтрация полей
// В ответе от бэкенда возвращаются объекты, большая часть свойств которых тебе не пригодится. Чтобы сократить объем передаваемых
// данных добавь строку параметров запроса - так этот бэкенд реализует фильтрацию полей. Ознакомься с документацией синтаксиса фильтров.

// Тебе нужны только следующие свойства:
// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
