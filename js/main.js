// there is string and quantity of words and letters
var str = `I am interested in web-technologies) Hello world!`;
document.write(str + '<br \/>');
document.writeln(str.split(/\s|-/).length + ' - quantity of words. ' + str.replace( /.\s\d/, '').length +
    ' - quantity of letters.');

console.log('The 1st task');
console.log('-----------------------');

// there is page address
var address = document.location.href;
var href = 'https://google.com/im.php';
var href1 = 'https://google.com/im.php?lr=2&offline_search=1&text=dfvdfv';
document.write('<br \/>' + 'Below u can see 1st anchor content' + '<br \/>');
console.log(address);
console.log(address.substr(0, address.indexOf(':')) + ' - local protocol');
console.log(href.substr(0, href.indexOf(':')) + ' - href protocol');
address.substring(address.lastIndexOf('/') + 1, address.indexOf('?')).split('.').forEach((element) => console.log(element));

var queryParams = {};
href1.substring(href1.indexOf('?')+1, href1.length)
    .split('&')
    .forEach((param) => {
        const query = param.split('=');
        queryParams[query[0]] = query[1];
    })

console.log(
    queryParams
    );

console.log('-----------------------');
console.log('The 2nd task');
console.log('-----------------------');

// anchors
let button1 = document.getElementById("1img_div");
let anchor1 = document.createElement('a');
anchor1.href = 'https://itmo.ru/ru/schedule/0/N3456/2/raspisanie_zanyatiy_N3456.htm';
anchor1.innerHTML = "Odd week N3456";
button1.appendChild(anchor1);

let button2 = document.getElementById("2img_div");
let anchor2 = document.createElement('a');
anchor2.href = 'https://itmo.ru/ru/schedule/0/N3456/1/raspisanie_zanyatiy_N3456.htm';
anchor2.innerHTML = "Even week N3456";
button2.appendChild(anchor2);

//links
let div1 = document.getElementById('the1st_link');
let link1 = document.createElement('a');
link1.href = 'https://yandex.ru/';
link1.title = 'The 1st link here - ';
link1.appendChild(document.createTextNode('yandex'));
div1.appendChild(link1);

let div2 = document.getElementById('the2nd_link');
let link2 = document.createElement('a');
link2.href = 'https://www.google.ru/';
link2.title = 'The 2nd link here - ';
link2.appendChild(document.createTextNode('google'));
div2.appendChild(link2);

//quantity of links and anchors
let num_links = document.getElementsByTagName('a').length;
console.log(num_links + ' - quantity of links+anchors');

document.write(anchor1.innerHTML);

//quantity of images and work on them
let num_img = document.getElementsByTagName('img').length;
console.log(num_img + ' - quantity of images');
let img1 = document.getElementById('the1st_img');
let width1img = img1.clientWidth;
console.log(width1img + ' - the 1st image width');
let width_arr = [];
for (let i=0; i<num_img; i++){
    width_arr.push(document.getElementsByTagName('img')[i].clientWidth)
}
let width_arr_max = width_arr[0];
for (let i=0; i<width_arr.length; i++){
    if (width_arr[i]>=width_arr_max){
        width_arr_max = width_arr[i];
    }
}
console.log(width_arr + ' - array of width');
console.log(width_arr_max + ' - max width of width array');

let height_arr = [];
for (let i=0; i<num_img; i++){
    height_arr.push(document.getElementsByTagName('img')[i].clientHeight);
}
let height_arr_sum = 0;
for (let i=0; i<height_arr.length; i++){
    height_arr_sum += height_arr[i];
}
console.log(height_arr + ' - array of height');
console.log(height_arr_sum + ' - sum of heights');

console.log('-----------------------');
console.log('The 3rd task');
console.log('-----------------------');

let form_array = [];
for (let i = 0; i < 10; i++) {
    let form = document.createElement('form');
    form.name = `formName${i+1}`;
    form.id = `formId${i+1}`;
    form_array.push(form);
    document.body.append(form);
}

document.write('Below u can see the all even forms' + '<br \/>');

let j = 0;
for (let i = 0; i < form_array.length; i++){
    if (i % 2 == 1){
        j++;
        document.write(form_array[i].name);
        if (j == form_array.length/2){
            break;
        } else {
            document.write(', ');
        }
    }
}

let formsHTML = document.body.getElementsByTagName('form');
console.log(formsHTML);
for (let i = 0; i < formsHTML.length ; i++) {
    let inputText = document.createElement('input');
    let inputPass = document.createElement('input');
    inputText.type = "text";
    inputText.style.margin = "5px";
    inputPass.type = "password";
    inputPass.style.margin = "5px";
    formsHTML[i].appendChild(inputText);
    formsHTML[i].appendChild(inputPass);
}

// 3.4
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Показать имя формы";
    button.style.margin = "5px";
    button.onclick = () => alert(button.innerText);
    formsHTML[i].appendChild(button);
}

// 3.5
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Принадлежность";
    button.style.margin = "5px";
    button.onclick = () => alert(button.parentNode.id);
    formsHTML[i].appendChild(button);
}

// 3.6
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'reset';
    button.innerText = "Сбросить";
    button.style.margin = "5px";
    formsHTML[i].appendChild(button);
}

// 3.7
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Показать количество полей";
    button.style.margin = "5px";
    button.onclick = () => {
        alert(`Количество полей равно ${button.parentNode.childNodes.length}`);
    };
    formsHTML[i].appendChild(button);
}

// 3.8
document.body.querySelectorAll('button').forEach((button)=> {
    button.style.padding = '15px';
    button.style.borderRadius = '10px';
    button.style.border = '1px solid rgba(121, 121, 119, 4)';
    button.style.cursor = 'pointer';
    button.onmouseover = () => {
        button.style.backgroundColor = '#b895fb';
        button.style.color = "white";
    };
    button.onmouseout = () => {
        button.style.color = 'black';
        button.style.backgroundColor = '#f0f0f0';
    };
    let image = document.createElement('img');
    image.style.width = '20px';
    image.style.height = '20px';
    image.style.verticalAlign = 'bottom';
    switch (button.innerText) {
        case "Показать имя формы": image.src = 'images/icon.png';
            break;
        case "Принадлежность":image.src = 'images/icon2.png';
            break;
        case "Сбросить": image.src = 'images/icon3.png';
            break;
        case "Показать количество полей": image.src = 'images/icon4.png';
            break;
        default:
            image.src = 'images/icon4.png';
    }
    button.prepend(image);
});

console.log('-----------------------');
console.log('The 4th task');
console.log('-----------------------');

let sectionFour = document.createElement("h1");
sectionFour.innerText = "4. Доп. задание";
document.body.append(sectionFour);

// 4.1
let anchors = [];
for (let i = 0; i < 16; i++) {
    let anchor = document.createElement('a');
    anchor.style.marginRight = '5px';
    switch (true) {
        case (i % 5 === 0):
            anchor.href = 'https://isu.ifmo.ru';
            anchor.innerText = 'ИСУ ИТМО';
            break;
        case (i % 6 === 0):
            anchor.href = 'https://www.facebook.com/';
            anchor.innerText = 'Facebook';
            break;
        case (i % 4 === 0):
            anchor.href = 'https://itmo.ru/';
            anchor.innerText = 'ИТМО';
            break;
        case (i % 3 === 0):
            anchor.href = 'https://iml.ru/';
            anchor.innerText = 'IML';
            break;
        default:
            anchor.href = 'https://www.google.com/';
            anchor.innerText = 'Google';
    }

    document.body.append(anchor);
    anchors.push(anchor);
}

// 4.2
let table = document.createElement('table');
table.border = '1';
table.style.borderCollapse = 'collapse';
table.cellPadding = '5';
anchors.forEach((anchor, index) => {
    if (!anchors.slice(0, index).some((nextAnchor) => anchor.innerText === nextAnchor.innerText)) {
        let row = document.createElement('tr');
        let text = document.createElement('td');
        let count = document.createElement('td');
        let href = document.createElement('td');
        text.innerText = anchor.innerText;
        count.innerText = anchors.filter((anchorInner) => anchor.innerText == anchorInner.innerText).length;
        href.innerText = anchor.href;
        row.appendChild(text);
        row.appendChild(count);
        row.appendChild(href);
        table.appendChild(row);
    }
});
document.body.append(table);