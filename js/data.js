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

    console.log(account);
    function getData(month, data) {
        for(let i=0; i<month.length; i++) {
            
            if(!data[i].income ) {
                data[i].income = 0;
            } else if (!data[i].expense ) {
                data[i].expense = 0;
            } 

            const replace = [];

            for(let i=0; i<data.length; i++) {
                let look = i+1;
                for(let x=0; x<data.length; x++) {
                    if(data[x].month === look) {
                        replace.push(data[x]);
                        break;
                    }
                }
            }
            data = replace;
            // if (data[i].month = i+1 ) {
            // }  
            
            HTML += `<div class="table-row">
                        <div class="cell">${data[i].month}</div>
                        <div class="cell">${months[ data[i].month-1 ]}</div>
                        <div class="cell">${data[i].income}</div>
                        <div class="cell">${data[i].expense}</div>
                        <div class="cell">${data[i].income - data[i].expense}</div>
                    </div>`;
        }
        tables.innerHTML = HTML;
    }

    getData(months, account)