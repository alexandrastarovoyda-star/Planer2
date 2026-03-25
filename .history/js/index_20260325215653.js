const list1 = ['Продукти та домашні покупки', 'Одяг та взуття', 'Краса та медицина', 'Квартира та комунальні', 'Розваги та подарунки', 'Транспорт', 'Освіта'];

list1.forEach(Myfunction);
LoadData();

function Myfunction(value, id){
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'number';
    input.id = `input_${id}`;
    input.addEventListener('input', SaveData);
    td2.textContent = value;
    td1.appendChild(input);
    tr.appendChild(td1);
    tr.appendChild(td2);
    document.getElementById('day_spend_table').appendChild(tr);
};

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
td1.id = `sum1`;
td2.textContent = 'Сума';
tr.appendChild(td1);
tr.appendChild(td2);
document.getElementById('day_spend_table').appendChild(tr);

function CalculeteSum(){
    let sum = 0;
    const inputs = document.querySelectorAll('#day_spend_table input');

    inputs.forEach(function(input){
        const value = Number(input.value);
        if(!isNaN(value)){
            sum += value;
        };
    });
    document.getElementById('sum1').textContent = sum;
};

document.getElementById('Calculate_sum').onclick = CalculeteSum;

function SaveData(){
    const inputs = document.querySelectorAll('#day_spend_table input');
    inputs.forEach(function (input){
        localStorage.setItem(input.id, input.value);
    });
};

function LoadData (){
    const inputs = document.querySelectorAll('#day_spend_table input');
    inputs.forEach(function(input){
        const saved = localStorage.getItem(input.id);
        if(saved !== null)
            input.value = saved;
    });
};



