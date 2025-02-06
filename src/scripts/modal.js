//открытие попапа
export const openModal = (modal) => {
    modal.classList.add('popup_is-opened');
};

//закрытие попапа
export const closeModal = (modal) => {
    modal.classList.remove('popup_is-opened');
};

//механика закрытия попапа разными способами
export const handleEventKeyUp = (evt) => {
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
};

//анимация при закрывании
const animationOff = (modal) => {
    modal.classList.remove('popup_is-animated');
};

//полный функционал открытия/закрытия с анимацией попапа
export const functionsPopup = (modal) => {
    setTimeout(openModal, 600, modal);
    animationOn(modal);
    handleEventKeyUp;
};