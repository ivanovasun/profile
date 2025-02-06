// Функция создания карточки
export function createCard(item, callback) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardLinkGitHub = cardElement.querySelector('.card__list-item_content-link-gh');
    const cardLinkWeb = cardElement.querySelector('.card__list-item_content-link-wb');

    // DOM узлы
    cardElement.querySelector('.card__list-item_content-paragraph').textContent = item.description_key_word;
    cardLinkWeb.setAttribute('href', item.link);
    cardImage.setAttribute('src', item.link_img);
    cardLinkGitHub.setAttribute('href', item.link_gh);

    //функционал заполнения и работы попапа с изображеним и информацией из карточки
    cardElement.addEventListener('click', function popupImgWorking() {
        callback.function(callback.popupImg);
        callback.popupImg.querySelector('.popup__image').setAttribute('src', cardImage.src);
        callback.popupImg.querySelector('.popup__caption').textContent = item.description;
        callback.popupImg.querySelector('.popup__img-gh_link').setAttribute('href', item.link_gh);
        callback.popupImg.querySelector('.popup__link_wb').setAttribute('href', item.link);
    });

    //открытие попапа с дополнительной информацией
    callback.btnOpen.addEventListener('click', () => {
        callback.open(callback.popup);
    });

    //закрытие попапа с дополнительной инфомарцией
    callback.btnClose.addEventListener('click', () => {
        callback.close(callback.popup);
    });

    // Возврат готовой к выводу карточки
    return cardElement;
};