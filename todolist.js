/**
 * @param {String} tableId ID элемента tbody таблицы
 * @param {String} selectId ID элемента select для установки кол-ва строк
 * @param {Object} fields Конфигурация строки таблицы: {1:"field_name1", 2:"field_name2", ... и т.д. }
 * @param {Function} creatorCallback - ф-ция обратного вызова принимающая два параметра:
 *      {Number} - номер строки таблицы,
 *      {String} - имя поля из объекта fields
 */
function setupTable(tableId, selectId, fields, creatorCallback) {
    var htmlTBody   = document.getElementById(tableId),
        htmlSelect  = document.getElementById(selectId),
        rowTpl      = document.createElement("TR"),
        rowNum      = 0,
        ELEMENT, TD;

    for(var field in fields) {
        if (false === fields.hasOwnProperty(field)) { continue; }
        TD = document.createElement("TD");

        if (creatorCallback) {
            ELEMENT = creatorCallback(rowNum, fields[field])
        } else {
            ELEMENT = document.createElement("INPUT");
            ELEMENT.name = fields[field] + "[]";
        }

        TD.appendChild(ELEMENT);
        rowTpl.appendChild(TD);

        rowNum += 1;
    }
    htmlSelect.onchange = function (e) {
        var numRows = htmlSelect.options[htmlSelect.selectedIndex].value;
        numRows = numRows < 0 ? 0 : numRows;
        while(htmlTBody.firstChild) {
            htmlTBody.removeChild(htmlTBody.firstChild);
        }
        for (var i = 0; i < numRows; i++) {
            htmlTBody.appendChild(rowTpl.cloneNode(true));
        }
    };
}

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {

    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');


    /* Перебираем массив кнопок */
    modalButtons.forEach(function(item){

        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener('click', function(e) {

            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
               люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
               Нужно подстраховаться. */
            e.preventDefault();

            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
               и будем искать модальное окно с таким же атрибутом. */
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach


    closeButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready