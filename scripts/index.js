const container = document.querySelector('.projects');
const cardContainer = container.querySelector('.projects__list');
const poupImg = document.querySelector('.popup_type_image');
const popupArray = document.querySelectorAll('.popup');
const buttonOpenPopup = poupImg.querySelector('.popup__function__button-open');
const buttonClosePopup = poupImg.querySelector('.popup__function__button-close');
const contentPopup = poupImg.querySelector('.popup__wrapper');

//открытие попапа
const openModal = (modal) => {
    modal.classList.add('popup_is-opened');
};

//закрытие попапа
const closeModal = (modal) => {
    modal.classList.remove('popup_is-opened');
};

//механика закрытия попапа разными способами
const handleEventKeyUp = (evt) => {
    const popup = document.querySelectorAll('.popup_is-opened');
    //функция закрытия попапа по клавише Esc
    if (evt.key === 'Escape') {
        popup.forEach(function (item) {
            setTimeout(animationOff, 600, item);
            closeModal(item);
        });
        //функция закрытия попапа по нажатию по оверлею
    } else if (evt.target.classList.contains('popup')) {
        popup.forEach(function (item) {
            setTimeout(animationOff, 600, item);
            closeModal(item);
        });
        // функция закрытия попапа при нажатии на крестик
    }
    if (evt.target.classList.contains('popup__close')) {
        popup.forEach(function (item) {
            setTimeout(animationOff, 600, item);
            closeModal(item);
        });
    }
};

//анимация при открывании
const animationOn = (modal) => {
    modal.classList.add('popup_is-animated');
}

//анимация при закрывании
const animationOff = (modal) => {
    modal.classList.remove('popup_is-animated');
}

//полный функционал открытия/закрытия с анимацией попапа
const functionsPopup = (modal) => {
    setTimeout(openModal, 600, modal);
    animationOn(modal);
    handleEventKeyUp;
};

//слушатель для закрытия по Esc
document.addEventListener('keydown', handleEventKeyUp);

//слушатель на все попапы по клику по крестике и оверлею
popupArray.forEach(function (item) {
    item.addEventListener('mousedown', handleEventKeyUp);
    item.addEventListener('click', handleEventKeyUp);
})

// Функция создания карточки
function createCard(item) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardImageGitHub = cardElement.querySelector('.card__list-item_content-gh');
    const cardLinkGitHub = cardElement.querySelector('.card__list-item_content-link-gh');
    const cardLinkWeb = cardElement.querySelector('.card__list-item_content-link-wb');

    // DOM узлы
    cardElement.querySelector('.card__list-item_content-paragraph').textContent = item.description_key_word;
    cardLinkWeb.setAttribute('href', item.link);
    cardImage.setAttribute('src', item.link_img);
    cardLinkGitHub.setAttribute('href', item.link_gh);

    //функционал заполнения и работы попапа с изображеним и информацией из карточки
    cardElement.addEventListener('click', function popupImgWorking() {
        functionsPopup(poupImg);
        poupImg.querySelector('.popup__image').setAttribute('src', cardImage.src);
        poupImg.querySelector('.popup__caption').textContent = item.description;
        poupImg.querySelector('.popup__img-gh_link').setAttribute('href', item.link_gh);
        poupImg.querySelector('.popup__link_wb').setAttribute('href', item.link);
    });

    //открытие попапа с дополнительной информацией
    buttonOpenPopup.addEventListener('click', () => {
        openModal(contentPopup);
    });

    //закрытие попапа с дополнительной инфомарцией
    buttonClosePopup.addEventListener('click', () => {
        closeModal(contentPopup);
    });

    // Возврат готовой к выводу карточки
    return cardElement;
}

// Вывести карточки на страницу
initialCards.forEach(function (item) {
    const addCardElemnt = createCard(item);
    cardContainer.append(addCardElemnt);
});
