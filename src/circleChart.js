import ApexCharts from 'apexcharts'

export const renderCircleChart = () => {
    let options = {
        chart: {
            height: 250,
            type: "radialBar",
        },

        series: [67],
        colors: ["red"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#293450"
                },
                track: {
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    }
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#fff",
                        fontSize: "13px"
                    },
                    value: {
                        color: "#fff",
                        fontSize: "30px",
                        show: true
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "radial",
                gradientToColors: ["red"],
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Progress"]
    };

    let chart = new ApexCharts(document.querySelector("#circleChart"), options);

    chart.render();
}