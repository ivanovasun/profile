(()=>{"use strict";var t={};function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function o(t){document.body.className="page",document.body.classList.add("theme_".concat(t)),localStorage.setItem("theme",t)}t.p="";var i=[{link_img:t.p+"f21cced81a38e6264de5.png",description_key_word:"Адаптивный лендинг",description:"Верстка адаптивного лендинга с попапом для аукциона вещей с использованием",link_gh:"https://github.com/ivanovasun/ono-tebe-nado.git",link:"https://ivanovasun.github.io/ono-tebe-nado/"},{link_img:t.p+"0b7fb1c8a8e78978771b.png",description_key_word:"Сайт для просмотра видео-роликов",description:"Верстка сайта для просмотра зацикленных видео-роликов с пейзажами из разных городов России с встроенным фильтром для выбора время суток и города",link_gh:"https://github.com/ivanovasun/posmotri_v_okno.git",link:"https://ivanovasun.github.io/posmotri_v_okno/"},{link_img:t.p+"ad53e0b93f9ee283efcb.png",description_key_word:"Адаптивный лендинг в двух темах",description:"Верстка адаптивного информативного лендинга про то, как можно сохранить фокус с возможностью переключаться между светлой, тёмной и авто темами",link_gh:"https://github.com/ivanovasun/slozhno-sosredotochitsya.git",link:"https://ivanovasun.github.io/slozhno-sosredotochitsya/"},{link_img:t.p+"7c14a8e53421d28ba803.png",description_key_word:"Адаптивный лендинг с анимацией",description:"Верстка адаптивного лендинга с попапом, анимацией, фильтрами для картинок и вариативным шрифтом для рефлексии обучения после окончания модуля, посвященному верстке",link_gh:"https://github.com/ivanovasun/zakrivayuschiy-teg-f.git",link:"https://ivanovasun.github.io/zakrivayuschiy-teg-f/"},{link_img:t.p+"b3a0f4cf4d71ffd7bfaa.jpg",description_key_word:"Web-приложение магазина",description:"Проектирование архитектуры и реализация Web-приложения онлайн магизна с использованием TS по принципам ОПП",link_gh:"https://github.com/ivanovasun/web-larek-frontend.git",link:""}],r=function(t){t.classList.add("popup_is-opened")},c=function(t){t.classList.remove("popup_is-opened")},u=function(t){var e=document.querySelectorAll(".popup_is-opened");("Escape"===t.key||t.target.classList.contains("popup"))&&e.forEach((function(t){setTimeout(s,600,t),c(t)})),t.target.classList.contains("popup__close")&&e.forEach((function(t){setTimeout(s,600,t),c(t)}))},s=function(t){t.classList.remove("popup_is-animated")},a=function(t){setTimeout(r,600,t),function(t){t.classList.add("popup_is-animated")}(t)},p=document.querySelectorAll(".theme-menu__button"),l=(document.querySelector(".projects").querySelector(".projects__list"),document.querySelector(".popup_type_image")),d=document.querySelectorAll(".popup"),_=l.querySelector(".popup__function__button-open"),m=l.querySelector(".popup__function__button-close");!function(t){t.forEach((function(n){n.addEventListener("click",(function(){t.forEach((function(t){t.classList.remove("theme-menu__button-active"),t.removeAttribute("disabled")})),e(n.classList).includes("theme-menu-button_type_light")?o("light"):e(n.classList).includes("theme-menu-button_type_dark")&&o("dark"),n.classList.add("theme-menu__button-active"),n.setAttribute("disabled",!0)}))}))}(p),function(t){var e=localStorage.getItem("theme");e&&(o(e),t.forEach((function(t){t.classList.remove("theme-menu__button-active"),t.removeAttribute("disabled")})),document.querySelector(".theme-menu-button_type_".concat(e)).classList.add("theme-menu__button-active"),document.querySelector(".theme-menu-button_type_".concat(e)).setAttribute("disabled",!0))}(p),document.addEventListener("keydown",u),d.forEach((function(t){t.addEventListener("mousedown",u),t.addEventListener("click",u)})),i.forEach((function(t){var e=l.querySelector(".popup__wrapper"),n=function(t,e){var n=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),o=n.querySelector(".card__image"),i=n.querySelector(".card__list-item_content-link-gh"),r=n.querySelector(".card__list-item_content-link-wb");return n.querySelector(".card__list-item_content-paragraph").textContent=t.description_key_word,r.setAttribute("href",t.link),o.setAttribute("src",t.link_img),i.setAttribute("href",t.link_gh),n.addEventListener("click",(function(){e.function(e.popupImg),e.popupImg.querySelector(".popup__image").setAttribute("src",o.src),e.popupImg.querySelector(".popup__caption").textContent=t.description,e.popupImg.querySelector(".popup__img-gh_link").setAttribute("href",t.link_gh),e.popupImg.querySelector(".popup__link_wb").setAttribute("href",t.link)})),e.btnOpen.addEventListener("click",(function(){e.open(e.popup)})),e.btnClose.addEventListener("click",(function(){e.close(e.popup)})),n}(t,{function:a,popupImg:l,btnOpen:_,open:r,popup:e,btnClose:m,close:c});document.querySelector(".projects").querySelector(".projects__list").append(n)}))})();