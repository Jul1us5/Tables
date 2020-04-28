const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjutis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];

let tables = document.querySelector('.table-content');
let HTML = '';

function renderData(month, data) {

    const noun = [];
    for(let i=0; i<data.length; i++) {
        for(let x=0; x<data.length; x++) {
            if(data[x].month === i+1) {
                noun.push(data[x]);
            }
        }
    }
    data = noun;
    
    for(let i=0; i<data.length; i++) {
        if (!data[i].income) {
            data[i].income = 0;
        }
        if (!data[i].expense) {
            data[i].expense = 0;
        }
        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${month[i]}</div>
                    <div class="cell">${data[i].income} Eur</div>
                    <div class="cell">${data[i].expense} Eur</div>
                    <div class="cell">${data[i].income - data[i].expense} Eur</div>
                </div>`;
    }
        tables.innerHTML = HTML;
        
    
}

renderData(months, account);