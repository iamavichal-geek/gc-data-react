import ApexCharts from "apexcharts"

export const renderRadarChart = () => {
    var options = {
        chart: {
            height: 250,
            type: "radar"
        },

        series: [
            {
                name: "Radar Series 1",
                data: [45, 52, 38, 24, 33, 10]
            }
        ],
        labels: ['April', 'May', 'June', 'July', 'August', 'September'],
        xaxis: {
            categories: ['April', 'May', 'June', 'July', 'August', 'September'],
            labels: {
                show: true,
                style: {
                    colors: ["#a8a8a8"],
                    fontSize: "11px",
                    fontFamily: 'Arial'
                }
            }
        }
    }
    var chart = new ApexCharts(document.querySelector("#radarChart"), options);

    
    chart.render();
}