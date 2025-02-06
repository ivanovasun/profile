import './index.css';
import {handlerChamgeTheme, initTheme} from './scripts/set-theme';
import {initialCards} from './scripts/cards';
import {openModal, closeModal, handleEventKeyUp, functionsPopup} from './scripts/modal';
import {createCard} from './scripts/card';

const themeButtons = document.querySelectorAll('.theme-menu__button');
const container = document.querySelector('.projects');
const cardContainer = container.querySelector('.projects__list');
const poupImg = document.querySelector('.popup_type_image');
const popupArray = document.querySelectorAll('.popup');
const buttonOpenPopup = poupImg.querySelector('.popup__function__button-open');
const buttonClosePopup = poupImg.querySelector('.popup__function__button-close');

handlerChamgeTheme (themeButtons);
initTheme(themeButtons);

//слушатель для закрытия по Esc
document.addEventListener('keydown', handleEventKeyUp);

//слушатель на все попапы по клику по крестику и оверлею
popupArray.forEach(function (item) {
    item.addEventListener('mousedown', handleEventKeyUp);
    item.addEventListener('click', handleEventKeyUp);
});

// Вывести карточки на страницу
initialCards.forEach(function (item) {
    const contentPopup = poupImg.querySelector('.popup__wrapper');
    const objParamet = {
        function: functionsPopup,
        popupImg: poupImg,
        btnOpen: buttonOpenPopup,
        open: openModal,
        popup: contentPopup,
        btnClose: buttonClosePopup,
        close: closeModal
    }
    const addCardElemnt = createCard(item, objParamet);
    const container = document.querySelector('.projects');
    const cardContainer = container.querySelector('.projects__list');
    cardContainer.append(addCardElemnt);
});
