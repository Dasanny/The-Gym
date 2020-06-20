// dummy data - some magic numbers
let dummy = [{
            label: 'Repo 1',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [2, 8, 10, 19, 12, 17, 0, 0, 0, 0, 0, 0, 0, 14, 7, 0, 0, 4, 15, 11, 5, 3, 9, 6, 18, 16, 20, 13, 1, 0]
        },
        {
            label: 'Repo 2',
            backgroundColor: 'lightgreen',
            borderColor: 'lightgreen',
            data: [2,7,11,12,16,18, 0,14,4,6,17,5,15,6,4,8,5, 0,0,13, 0,19,21,10,3,1,20,28,9, 3]
        },
        {
            label: 'Repo 3',
            backgroundColor: 'lightblue',
            borderColor: 'lightblue',
            data: [6, 14, 2, 16, 5, 17, 11, 4, 1, 19, 7, 10, 12, 18, 9, 20, 15, 13, 8, 3, 15, 12, 14, 1, 2, 20, 5, 19, 3, 13, 2]
        }]

const allLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekLabels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const monthLabels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

// graph canvas js
var area = document.getElementById('area').getContext('2d');
var bar = document.getElementById('bar').getContext('2d');

// graph labels: default by month
let labels = allLabels;

function createChart(title, canvasName, type){
    let chart = new Chart(canvasName, {
        // The type of chart we want to create
        type: type,

        // The data for our dataset
        data: {
            // 1 year
            labels,
            datasets: dummy
            },

        // Configuration options go here
        options: {
            title: {
                display: true,
                position: 'top',
                fontSize: 24,
                fontStyle: 'bold',
                text: title
            }
        }
    });

    // create stacked bar
    if(type === 'bar'){
        chart.options.scales.xAxes.stacked = true;
    }
    
    return chart;
}

// area graph
let areaChart = createChart('Comments Received Over Time', area, 'line');
// stack bar graph
let barChart = createChart('Pull Request Activity', bar, 'bar');

// reset button
const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', (e) => {
    location.reload();
})

// delete button
const deleteBtns = document.querySelectorAll('.delete-btn');
deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        switch(btn.id){
            case 'delete-area':
                document.querySelector('.graph1').remove();
                break;
            case 'delete-bar':
                document.querySelector('.graph2').remove();
                break;
            default:
                break;
            
        }
    })
})

// materialize css selectors
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

// filter data range
const selectFilter = document.querySelector('.filter');

function updateLabels(chart) {
    chart.data.labels = labels;
    chart.update();
}

function updateName(chart, name) {
    chart.options.title.text = name;
    chart.update();
}

selectFilter.addEventListener('change', (e) => {
    switch (Number(e.target.value)) {
        case 1:
            labels = allLabels;
            break;
        case 2:
            labels = monthLabels;
            break;
        case 3:
            labels = weekLabels;
            break;
        default:
            break;
    }
    updateLabels(areaChart);
    updateLabels(barChart);
});

// export
const selectFormat = document.querySelector('.export-format');
let format = 'pdf'; 

// select
selectFormat.addEventListener('change', (e) => {
    switch (e.target.value){
        case 'pdf':
            format = 'pdf';
            break;
        case 'csv':
            format = 'csv';
            break;
        default:
            break;
    }
})

// export button
const exportBtn = document.querySelector('#export-btn');
exportBtn.addEventListener('click', (e) => {
    if(format === 'pdf'){
        exportPDF();
    } else if (format === 'csv'){
        exportCSV();
    } else {
        console.error('something broke while exporting :(')
    }
})

// uses jsPDF and to export charts to pdf
function exportPDF(){
    let doc = new jsPDF();
    let areaCanvas = document.querySelector('#area');
    let barCanvas = document.querySelector('#bar');
    
    // take screenshot of 'area' and 'bar' canvas
    if(areaCanvas){
        let img1 = areaCanvas.toDataURL('image/png', 1);
        doc.addImage(img1, 'PNG', 5, 5);
    }
    
    if(barCanvas){
        let img2 = barCanvas.toDataURL('image/png', 1);
        doc.addImage(img2, 'PNG', 5, 100);
    }

    doc.save('charts.pdf');
}


function exportCSV(){
    // using the dummy data
    for(let set of dummy){
        const rows = [
            [set.label],
            [],
            [weekLabels],
            set.data.slice(0, 7),
            [],
            [allLabels],
            set.data.slice(0, 12),
            [],
            ['Day', ...monthLabels],
            [, ...set.data]
        ];

        let csvContent = "data:text/csv;charset=utf-8,";

        rows.forEach(function(rowArray) {
            let row = rowArray.join(",");
            csvContent += row + "\r\n";
        });

        // prepare csv for download
        let encodedUri = encodeURI(csvContent);

        // download 
        let link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "data.csv");
        document.body.appendChild(link); 
        link.click();
        document.body.removeChild(link);
    }  
}

// change chart name

Array.from(document.forms).forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

       if(form.id === 'area-form'){
            const areaInput = document.getElementById('area-name');
            updateName(areaChart, areaInput.value);
       } else if(form.id === 'bar-form'){
            const barInput = document.getElementById('bar-name');
            updateName(barChart, barInput.value);
       }
    })
})