"use strict";


// 2
var form = document.createElement('form'),
    inputCols = document.createElement('input'),
    inputRows = document.createElement('input'),
    labelCols = document.createElement('label'),
    labelRows = document.createElement('label'),
    button = document.createElement('button')
;
// объявили форму и объявили в ней элементы
// каждому элементу присвоили тип, отображение и id
inputCols.type = 'text';
inputCols.id = 'cols';
inputCols.style.display = 'block';

labelCols.innerText = 'Количество столбцов';
labelCols.htmlFor = 'cols';
labelCols.style.display = 'block';

inputRows.type = 'text';
inputRows.id = 'rows';
inputRows.style.display = 'block';

labelRows.innerText = 'Количество строк';
labelRows.htmlFor = 'rows';
labelRows.style.display = 'block';

button.type = 'button';
button.innerText = 'Задай жару';
button.style.marginTop = '5px';


// По нажатию на кнопку создается таблица (страница не перезагружается). Форму создания таблицы спрятать
button.onclick = () => {
    form.style.display = 'none';
    createTable(
        document.getElementById('cols').value,
        document.getElementById('rows').value,
    ); // таблица по входным данным (столбцы и строки)
    createFunctionPanel(); //создаем панель функций
    form.reset(); // выключаем форму
};

form.append(labelCols, inputCols,
    labelRows, inputRows, button);
document.body.append(form); // добавили в форму элементы, а форму добавили в документ

function createTable(cols, rows) { // создаем таблицу по входным данным
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = createTableCell();
            tr.append(td);
        }
        table.append(tr);
    }
    document.body.append(table);
}

function createTableCell() { // создаем ячейку
    let td = document.createElement('td');
    td.style.minWidth = '100px';
    td.style.height = '30px';
    td.style.border = '1px solid black';
    td.append(createTableCellContent(td));
    return td;
}

// 3
function createTableCellContent(td) { // как будет выглядеть ячейка, содержимое
    td.innerHTML = '';
    let form = document.createElement('form'),
        textarea = document.createElement('textarea'),
        button = document.createElement('button')
    ;
    button.innerText = 'Сохранить';
    button.type = 'button';
    button.style.display = 'block';
    textarea.cols = 20;
    textarea.rows = 1;
    // После нажатия на «сохранить», эта форма пропадает, а вместо нее появляется введенный пользователем текст.
    button.onclick = () => {
        td.innerText = button.previousSibling.value;
        form.remove();
    };
    form.append(textarea, button);
    return form;
}

// 4. Оформление блока с функцией
function createFunctionPanel() { // панель из функций
    let divWrapper = document.createElement('div');
    divWrapper.className = 'function_container';
    divWrapper.append(borderChanger(),
        captionChanger(),
        rowDeleter(),
        divRandomContentCreator(),
        tableDeleter());
    document.body.append(divWrapper);
}

function createFunction(functionName) { // создаем функцию в панели
    let div = document.createElement('div'),
        p = document.createElement('p')
    ;
    p.innerText = functionName;
    div.className = 'function';
    div.append(p);
    return div;
}

// 5. добавить элемент “Изменить границы таблицы”
function borderChanger() { // функция смены границ
    let div = createFunction('Изменить границы таблицы');

    let form = document.createElement('form'),
        select = document.createElement('select'),
        inputBorderWidth = document.createElement('input'),
        button = document.createElement('button'),
        option = document.createElement('option')
    ;

    inputBorderWidth.type = 'text';

    button.type = 'button';
    button.innerText = 'Применить';

    option.innerText = 'Выберите стиль рамки';
    option.disabled = true;
    option.selected = true;
    select.append(option);
// TO-DO: placeholder
    getBorderOptions().forEach((option) => select.append(option)); // добавляем
// виды границ, добавляем все варианты
    inputBorderWidth.oninput = () => {
        button.innerText = 'Применить' + ' ' + inputBorderWidth.value + ' px ';
        if (select.value !== '' && select.value !== 'Выберите стиль рамки') {
            button.innerText += ' и рамка ' + select.value;
        }
    };

    select.onchange = () => {
        if (inputBorderWidth.value !== '') {
            button.innerText = button.innerText = 'Применить' + ' ' + inputBorderWidth.value + ' px ' +
                'и рамка ' + select.value;
        } else {
            button.innerText = 'Применить' + ' ' + 'рамка ' + select.value;
        }
    }; // как будет кнопка отображаться

    button.onclick = () => { // при нажатии меняем границы
        let tdList = document.querySelectorAll('td');
        tdList.forEach((td) =>
            td.style.border = `${inputBorderWidth.value}px ${select.value}`
        );
    };

    form.append(select, inputBorderWidth, button);
    div.append(form);
    return div;
}

function getBorderOptions() { // добавляем все варианты в селект
    let borderOptions = [];
    ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'].forEach(
        (borderStyle) => {
            let option = document.createElement('option');
            option.innerText = borderStyle;
            borderOptions.push(option);
        }
    );
    return borderOptions;
}

// 6. добавить элемент “Добавить заголовок”.
function captionChanger() { // добавляем заголовок к таблице
    let div = createFunction('Добавить заголовок');
    let form = document.createElement('form'),
        inputElement = document.createElement('input'),
        button = document.createElement('button')
    ;

    inputElement.type = 'text';
    button.type = 'button';
    button.innerText = 'Добавить';

    // После нажатия у таблицы появляется заголовок.
    button.onclick = () => {
        document.querySelector('table').deleteCaption();
        let caption = document.createElement('caption');
        caption.innerText = inputElement.value;
        document.querySelector('table').append(caption);
    };

    form.append(inputElement, button);
    div.append(form);
    return div;
}

// 7. добавить элемент “Удалить строку”
function rowDeleter() {
    let div = createFunction('Удалить строку');
    let form = document.createElement('form'),
        inputElement = document.createElement('input'),
        button = document.createElement('button')
    ;

    inputElement.type = 'text';
    button.type = 'button';
    button.innerText = 'Удалить';

    button.onclick = () => {
        let tableRows = document.querySelectorAll('tr');
        if (inputElement.value < 1 || inputElement.value > tableRows.length
            || inputElement.value.match(/([^0-9])/g)) {
            alert('Некорректное число! Попробуйте еще раз.');
        } else {
            tableRows[inputElement.value - 1].remove();
        }
    };

    form.append(inputElement, button);
    div.append(form);
    return div;
}

// 8. добавить элемент “Случайный выбор”
function divRandomContentCreator() {
    let div = createFunction('Случайный выбор');
    let button = document.createElement('button')
    ;

    button.type = 'button';
    button.innerText = 'Рандомайзер';

    button.onclick = () => {
        let td = chooseRandomTableDataCell(); // выбираем рандомную ячейку
        magic(td);
    };
    div.append(button);
    return div;
}

function chooseRandomTableDataCell() {
    let tableRowList = document.querySelectorAll('tr');
    let tableRowIndex = randomInteger(0, tableRowList.length - 1);
    let tableDataCellIndex = randomInteger(0, tableRowList[tableRowIndex].cells.length - 1);
    return tableRowList[tableRowIndex].cells[tableDataCellIndex];
}

function magic(td) {
    if (randomInteger(1, 15) === 7) {
        td.append(createTableCellContent(td)); // заново создаем поле
    } else {
        chooseRandomBgColor(td); // рандомный цвет
        chooseRandomFontStyle(td); // рандомный цвет шрифта и размер шрифта
    }
}

function setRandomColor() { // создаем рандомный цвет
    let hexTable = "0123456789ABCDEF";
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
        newColor += hexTable[randomInteger(0, hexTable.length - 1)];
    }
    console.log(newColor);
    return newColor;
}

function chooseRandomBgColor(td) { // выбираем рандомный цвет ячейки
    td.style.backgroundColor = setRandomColor();
}

function chooseRandomFontStyle(td) { // размер шрифта и цвет шрифта
    let newColor = setRandomColor();
    let newFontSize = randomInteger(15, 25) + 'pt';
    td.style.color = newColor;
    td.style.fontSize = newFontSize;
    /* если форма есть, то для каждого её внутреннего
    тега задаем стиль
    */
    if (typeof td.childNodes[0] !== 'undefined') {
        td.childNodes[0].childNodes.forEach((elem) => {
            elem.style.color = newColor;
            elem.style.fontSize = newFontSize;
        });
    }
}

function randomInteger(min, max) { // функция рандомного числа
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// 9. добавить элемент “Удалить”
function tableDeleter() { //выпиливаем таблицу и панель функций из этой жизни
    let div = createFunction('Удалить');
    let button = document.createElement('button')
    ;

    button.type = 'button';
    button.innerText = 'Удалить таблицу';

    button.onclick = () => {
        form.style.display = 'block';
        document.querySelector('table').remove();
        document.querySelector('div.function_container').remove();

    };
    div.append(button);
    return div;
}