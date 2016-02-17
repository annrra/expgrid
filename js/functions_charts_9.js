$(document).ready(function () {
        $('#container03').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'chocolate'
            },
            subtitle: {
                text: 'Source: <a href="#">'+'domainname.com</a>'
            },
            xAxis: {
                labels: {
                    formatter: function() {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'chocolate - b'
                },
                labels: {
                    formatter: function() {
                        return this.value / 1000 +'k';
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} lorem ipsum <b>{point.y:,.0f}</b><br/>dolor sit amet {point.x}'
            },
            plotOptions: {
                area: {
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            colors: [
			   '#0099cc', 
			   '#58595B', 
			   '#BBBDBF', 
			   '#f6931e', 
			   '#f6931e', 
			   '#f6931e',
			   '#f6931e', 
			   '#f6931e', 
			   '#f6931e', 
			   '#f6931e'
			],
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                floating: false,
                borderColor: '#fff',
                itemMarginBottom: 15,
                itemStyle: {
                    cursor: 'pointer',
                    color: '#000'
                },
                symbolWidth: 12,
                padding: 20,
                x: 0,
                y: 30
            },
            series: [{
                name: 'sugar',
                data: [null, null, null, null, null, 6 , 11, 32, 110, 235, 369, 640,
                    1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                    27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                    26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                    24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                    22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                    10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104 ]
            }, {
                name: 'cocoa',
                data: [null, null, null, null, null, null, null , null , null ,null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000]
            }]
        });
    });
    
$(document).ready(function () {
        $('#container10').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Area chart with negative values'
            },
            xAxis: {
                categories: ['1970-1980', '1980-1990', '1990-2000', '2000-2010', '2010-2020']
            },
            credits: {
                enabled: false
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                floating: false,
                borderColor: '#fff',
                itemMarginBottom: 15,
                itemStyle: {
                    cursor: 'pointer',
                    color: '#000'
                },
                symbolWidth: 12,
                padding: 20,
                x: 0,
                y: 30
            },
            colors: [
			   '#0099cc', 
			   '#58595B', 
			   '#BBBDBF', 
			   '#f6931e', 
			   '#f6931e', 
			   '#f6931e',
			   '#f6931e', 
			   '#f6931e', 
			   '#f6931e', 
			   '#f6931e'
			],
            series: [{
                name: 'sugar',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'cocoa',
                data: [2, -2, -3, 2, 1]
            }, {
                name: 'sweet',
                data: [3, 4, 4, -2, 5]
            }]
        });
    });         