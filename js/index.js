
document.querySelectorAll('.digits, .operation')
    .forEach( el => el.addEventListener('click', digitOperClick));

function digitOperClick(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += target.innerText;
}

document.querySelector('.equal')
    .addEventListener('click', equal);
    
function equal() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}    





/* 
const link = document.querySelector('a');
link.textContent = 'Google';
link.href = 'https://www.google.com.ua/';

// текст появляється в 0.33% випадків
//if (Math.random() < 0.33) {

// робимо цикл повторення параграфів з нумерованим списком

const sect = document.querySelector('section');

for (let i = 0; i < 100; i++) {
    const para = document.createElement('p');
    para.textContent = i + 1 + ':u have won the prize!!!';
    sect.appendChild(para);
// підключаємо стилі прописані в css через js
    para.classList.add('highlight');
}

//}

// шукаємо картинку в js і добавляємо через js 
const img = document.querySelector('img');
sect.appendChild(img);

// через removeChild знищуємо теги в html 
const h1 = document.querySelector('h1');
h1.parentNode.removeChild(h1);

// задаємо стилі через .style
// перенесли їх в css тут закоментували
/*
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
*/

// js події, додаємо цікаві iventList
// додаємо через btn.addEventListener('ckick', action, false);
// прибираємо подію через btn.removeEventListener('ckick', action);

/*
$('.hide-pars').click(hidePars);
function hidePars() {
    $('p').toggle(1000);
}
*/