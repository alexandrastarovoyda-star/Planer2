const list1 = ['Продукти та домашні покупки', 'Одяг та взуття', 'Краса та медицина', 'Квартира та комунальні', 'Розваги та подарунки', 'Транспорт', 'Освіта'];

list1.forEach(Myfunction);

function Myfunction(value, id){
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const input = document.createElement('input');

    input.type = 'number';
    input.id = `input_${id}`;
    td2.textContent = value;

    td1.appendChild(input);
    tr.appendChild(td1);
    tr.appendChild(td2);
    document.getElementById('day_spend_table').appendChild(tr);
}