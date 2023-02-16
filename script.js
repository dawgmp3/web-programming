const myFunction = () => {
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

const before_loadtime = new Date().getTime();
window.onload = Pageloadtime;
function Pageloadtime() {
    const aftr_loadtime = new Date().getTime();
    pgloadtime = (aftr_loadtime - before_loadtime) / 1000

    document.getElementById("loadtime").innerHTML = "Page load time is <font color='black'><b>" + pgloadtime + "</b></font> Seconds";
}

const func = () => {
    let num_of_days = Number(prompt('Введите количесвто дней'));
    let num_of_lessons = Number(prompt('Введите количесвто занятий'));
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('body').appendChild(table);

    for (let i = 0; i < num_of_lessons; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < num_of_days; j++) {
            const td = document.createElement("td");
            tr.append(td);
        }
    }
    // document.getElementById('container').innerHTML = table + '</table>';
}

function anotherFunc(){
    let num_of_days = Number(prompt('Введите количесвто дней'));
    let num_of_lessons = Number(prompt('Введите количесвто занятий'));
    var days_of_week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    var days = [num_of_days];
    var lessons = [num_of_lessons];
    var html = '<table border="1" cellpadding="3">';
    var x = document.createElement("TABLE");
    var table = document.getElementById("myTable");

    for(let i = 0; i < days.length; i++) {
        days[i] = days_of_week[i];
    }

    for(let i = 0; i < days.length; i++) {
        table.createCaption();
    }

    // for(let i = 0; i < days.length; i++) {
    //     html += '<tr>';
    //     html += '<td>' + days[i] + '</td>';
    //     html += '<td>' + lessons[i] + '</td>';
    //     html += '</tr>';
    // }
    // window.onload = function()
    // {
    //     document.getElementById('container').innerHTML = html + '</table>';
    // };
}
anotherFunc()