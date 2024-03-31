document.addEventListener('DOMContentLoaded', function () {
  const validator = new JustValidate('#main-form')
  const validator2 = new JustValidate('#formContact')
  const validatorSofas = new JustValidate('#sofasOrder')
  const validatorBedroom = new JustValidate('#form-bedroom')
  const validatorDresser = new JustValidate('#form-dresser')
  const validatorCategory = new JustValidate('#form-category')

  Inputmask('+7 (999) 999-99-99').mask(document.getElementById('tel1'));
  Inputmask('+7 (999) 999-99-99').mask(document.getElementById('tel2'));
  Inputmask('+7 (999) 999-99-99').mask(document.getElementById('tel3'));
  Inputmask('+7 (999) 999-99-99').mask(document.getElementById('tel4'));
  Inputmask('+7 (999) 999-99-99').mask(document.getElementById('tel4'));

  validator
    .addField('#square', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
      {
        rule: 'minNumber',
        value: 10,
        errorMessage: "Минимальное 10",
      },
      {
        rule: 'maxNumber',
        value: 100,
        errorMessage: "Максимальное 100",
      },
    ])
    .addField('#form-room', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
      {
        rule: 'minNumber',
        value: 1,
        errorMessage: "Минимальное 1",
      },
      {
        rule: 'maxNumber',
        value: 15,
        errorMessage: "Максимальное 15",
      },
    ])
    .addField('#form-types-repair', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
    ])
    .addField('#form-rate-repair', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
    ])
    .addField('#form-when-repair', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
    ])
    .addField('#form-city', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
    ])
    .addField('#name1', [
      {
        rule: 'required',
        errorMessage: "Обязательно"
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "Напишите правильно имя"
      },
      {
        rule: 'maxLength',
        value: 25,
        errorMessage: "Напишите правильно имя"
      },
    ])
    .addField('#tel1', [
      {
        validator: (value) => {
          const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length > 0);
        },
        errorMessage: 'Обязательно'
      },
      {
        validator: (value) => {
          const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length === 10);
        },
        errorMessage: 'Введите телефон полностью'
      },
    ])
    .onSuccess(function () {
      let data = {
        square: document.getElementById("square").value,
        formRoom: document.getElementById("form-room").value,
        formTypesRepair: document.getElementById("form-types-repair").value,
        formRateRepair: document.getElementById("form-rate-repair").value,
        formWhenRepair: document.getElementById("form-when-repair").value,
        formCity: document.getElementById("form-city").value,
        name1: document.getElementById("name1").value,
        tel1: document.getElementById("tel1").value
      }
      console.log(data)
    });

  validator2
    .addField('#name2', [
      {
        rule: 'required',
        errorMessage: "Обязательно"
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "Напишите правильно имя"
      },
      {
        rule: 'maxLength',
        value: 25,
        errorMessage: "Напишите правильно имя"
      },
    ])

    .addField('#tel2', [
      {
        validator: (value) => {
          const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length > 0);
        },
        errorMessage: 'Обязательно'
      },
      {
        validator: (value) => {
          const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length === 10);
        },
        errorMessage: 'Введите телефон полностью'
      },
    ]);

  validatorSofas
    .addField('#what-sofas', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
    ])
    .addField('#name3', [
      {
        rule: 'required',
        errorMessage: "Обязательно"
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "Напишите правильно имя"
      },
      {
        rule: 'maxLength',
        value: 25,
        errorMessage: "Напишите правильно имя"
      },
    ])
    .addField('#tel3', [
      {
        validator: (value) => {
          const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length > 0);
        },
        errorMessage: 'Обязательно'
      },
      {
        validator: (value) => {
          const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length === 10);
        },
        errorMessage: 'Введите телефон полностью'
      },
    ]);

  validatorBedroom
  .addField('#types-bedroom', [
    {
      rule: 'required',
      errorMessage: "Обязательно",
    },
  ])
  .addField('#name-bedroom', [
    {
      rule: 'required',
      errorMessage: "Обязательно"
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Напишите правильно имя"
    },
    {
      rule: 'maxLength',
      value: 25,
      errorMessage: "Напишите правильно имя"
    },
  ])
  .addField('#tel4', [
    {
      validator: (value) => {
        const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 0);
      },
      errorMessage: 'Обязательно'
    },
    {
      validator: (value) => {
        const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 10);
      },
      errorMessage: 'Введите телефон полностью'
    },
  ]);

  validatorDresser
  .addField('#types-dresser', [
    {
      rule: 'required',
      errorMessage: "Обязательно",
    },
  ])
  .addField('#name-dresser', [
    {
      rule: 'required',
      errorMessage: "Обязательно"
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Напишите правильно имя"
    },
    {
      rule: 'maxLength',
      value: 25,
      errorMessage: "Напишите правильно имя"
    },
  ])
  .addField('#tel5', [
    {
      validator: (value) => {
        const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 0);
      },
      errorMessage: 'Обязательно'
    },
    {
      validator: (value) => {
        const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 10);
      },
      errorMessage: 'Введите телефон полностью'
    },
  ]);
  
  validatorCategory
  .addField('#types-category', [
    {
      rule: 'required',
      errorMessage: "Обязательно",
    },
  ])
  .addField('#name-category', [
    {
      rule: 'required',
      errorMessage: "Обязательно"
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Напишите правильно имя"
    },
    {
      rule: 'maxLength',
      value: 25,
      errorMessage: "Напишите правильно имя"
    },
  ])
  .addField('#tel6', [
    {
      validator: (value) => {
        const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 0);
      },
      errorMessage: 'Обязательно'
    },
    {
      validator: (value) => {
        const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 10);
      },
      errorMessage: 'Введите телефон полностью'
    },
  ]);
});

// -------- -------- SWIPER -------- -------- //

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});



// -------- ------ TABS TRAFIC ------ -------- //

// Нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
  item.addEventListener('click', function () {

    // 1. Скрыть все content box
    contentBoxes.forEach(function (item) {
      item.classList.add('hidden');
    });

    // 2. Выбрать нужный content box и показать его
    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove('hidden');

  })
})



// -------- -- QUESTION ACCARDION -- -------- //    

const accordion_item = document.querySelectorAll(".accordion_item");
accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");

  accordion_header_item.addEventListener("click", () => {
    const accordion_content_item = item.querySelector(".accordion_content");

    const item_actived = document.querySelector(".activeA");

    VerifyActive(item, accordion_content_item, item_actived);
  });
});
function VerifyActive(item, content, content_actived) {
  const icon_item = item.querySelector(".icon");
  const icon_item_active = document.querySelectorAll(".icon");

  icon_item_active.forEach((item) => (item.innerHTML = "+"));

  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("activeA");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = "-";
    content.classList.add("activeA");
    content.style.height = content.scrollHeight + 10 + "px";
  }
};


const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  })
})



