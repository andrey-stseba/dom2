'use strict';
// 1.Сделать два инпута: в один вводить параметр(число), во втором показывать объем шара при заданном параметре. Навесить валидацию на 1-й инпут.

const ballVolume = document.getElementById('ballVolume');
const [firstInput, secondInput] = ballVolume.querySelectorAll('input');

const regExpRad = /^[1-9][0-9]{0,3}$/g;

firstInput.addEventListener('input', isBallVolume);

firstInput.addEventListener('focus', function( {target: {value} } ) {

    if ( value.match(regExpRad) ) {
        this.classList.add('valid');
        this.classList.remove('invalid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    };
});

firstInput.addEventListener('blur', function(e) {
    this.className = '';
});



function getBallVolume(value) {
    return (4 / 3) * Math.PI * Math.pow(value, 3); 
};


function isBallVolume( {target: {value} } ) {

    if ( value.match(regExpRad) ) {
        this.classList.add('valid');
        this.classList.remove('invalid');

        const result = getBallVolume(value);
        secondInput.value = Math.floor(result);
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');

        secondInput.value = 'Error: Very Big Ball';
    };
};





// 2.Дан элемент #elem. Реализуйте 4 функции:
const element = document.getElementById('elem');

// - Добавьте ему класс www.
element.classList.add('www')

// - Удалите у него класс www.
element.classList.remove('www')

// - Проверьте наличие у него класса www.
console.log('Проверьте наличие класса www у element) :>> ', element.classList.contains("www"));

// - Добавьте ему класс www, если его нет и удалите - если есть.
elem.classList.toggle('www');
console.log('Проверьте наличие класса www у element) :>> ', element.classList.contains("www"));


// 3. Вставьте элементы массива объектов (id, title, description) в конец ul так, чтобы каждый на каждый объект был свой li.



const stones = [
    {
        id: 1,
        title:'Опал',
        description:'Является минералоидом, который очень близок к кварцу. Однако в отличие от кварца, опал имеет переменное содержание воды.',
    },
    {
        id: 2,
        title:'Топаз',
        description:'Полудрагоценный прозрачный камень, минерал, относящийся к классу силикатов.',  
    },
    {
        id: 3,
        title:'Горный хрусталь',
        description:'Удивительно красивый минерал кварцевой группы, символизирующий чистоту, честность и прочность отношений.',  
    },

];

const stonesList = document.getElementById('stonesList');

stones.forEach(stone => stonesList.append(generateStoneListItem(stone)));

function generateStoneListItem({ title, description }){
    const stoneListItem = document.createElement('li');
     stoneListItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <button class="deleteLi">Close</button>
    `;
    stonesList.append(stoneListItem);

// Сделайте так, чтобы по нажатию на кнопку внутри li эта li удалялась из разметки.

    const delLi = stoneListItem.querySelector('.deleteLi');
    delLi.addEventListener('click',function(e){
        delLi.parentElement.remove();
    });

    return stoneListItem;
}

// Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.

const clickLi = stonesList.querySelectorAll("li").forEach(elem => clickElementLi(elem));

function clickElementLi (elem){
       elem.addEventListener('click', function(e) {
        this.classList.toggle('clickLi'); 
    });

}



