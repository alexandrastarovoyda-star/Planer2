var categories = ['Продукти та домашні покупки', 'Одяг та взуття', 'Краса та медицина', 'Квартира та комунальні', 'Розваги та подарунки', 'Транспорт', 'Освіта'];

{
    categories.forEach(Myfunction);
    LoadData();

    function Myfunction(value, id){
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `input_${id}_day_spend_table`;
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
    td1.id = `sum_day`;
    td1.textContent = 0;
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
        const sum_day =   document.getElementById('sum_day');
        sum_day.textContent = sum;
        localStorage.setItem(sum_day.id, sum_day.textContent);
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
        const sum_day =  document.getElementById('sum_day');
        const saved_sum = localStorage.getItem('sum_day');
        sum_day.textContent = saved_sum;
    };
}

{
    categories.forEach(Myfunction);

    function Myfunction(value, id){
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `input_${id}_month_spend_table`;
        input.addEventListener('input', SaveData);
        td2.textContent = value;
        td1.appendChild(input);
        tr.appendChild(td1);
        tr.appendChild(td2);
        document.getElementById('month_spend_table').appendChild(tr);
    };

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.id = `sum_month`;
    td2.textContent = 'Сума';
    tr.appendChild(td1);
    tr.appendChild(td2);
    document.getElementById('month_spend_table').appendChild(tr);
}
{
    const header = document.createElement('tr');
    let thCat = document.createElement('th');
    thCat.textContent = 'Категорія';
    header.appendChild(thCat);
    for( let day = 1; day <= 31; day++){
        let th = document.createElement('th');
        th.textContent = day;
        header.appendChild(th);
    }
    let thSum = document.createElement('th');
    thSum.textContent = 'Сума';
    header.appendChild(thSum);
    document.getElementById('month_table').appendChild(header);
}
categories.forEach(function(cat, id){
    const tr = document.createElement('tr');
    const tdCat = document.createElement('td');
    tdCat.textContent = cat;
    tr.appendChild(tdCat);
    for( let day = 1; day <= 31; day++){
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'number';
        //input.addEventListener('input', CalculeteMonthSum);
        td.appendChild(input);
        tr.appendChild(td);
        }
    const tdSum = document.createElement('td');
    tdSum.id = `sum_cat_${id}`;
    tr.appendChild(tdSum);
    document.getElementById('month_table').appendChild(tr);
})

function ClearDayTable(){
    const inputs = document.querySelectorAll('#day_spend_table input');
    inputs.forEach(function(input){
        input.value = '';
        localStorage.setItem(input.id, input.value);
    })
    let sum_day = document.getElementById('sum_day');
    sum_day.textContent = 0;
    localStorage.setItem(sum_day.id, sum_day.textContent);
}

document.getElementById('Clear_day_table').onclick = ClearDayTable;