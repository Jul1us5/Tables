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
    let after = '';


    function getData(month, data) {
        // console.log(months, account);
        for(let i=0; i<month.length; i++) {
            if(!data[i].income ) {
                data[i].income = 0;
            } else if (!data[i].expense ) {
                data[i].expense = 0;
            } 
                
            if(data[i].month = i +1) {
                // console.log(data[i].month);
                // after = data[i].month;
                // data[after].income;
                // data[i].income
                // break;
            }
                // console.log(after);

            
            
            
            HTML += `<div class="table-row">
                        <div class="cell">${i}</div>
                        <div class="cell">${month[i]}</div>
                        <div class="cell">${data[3].income}</div>
                        <div class="cell">${data[i].expense}</div>
                        <div class="cell">150.00 Eur</div>
                    </div>`;
        }
        tables.innerHTML = HTML;
    }

    getData(months, account)