import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

class ChartContainer extends Component {
    // props: cards [obj], costData (obj), classData (obj), strategyData (obj)

    constructor(props) {
        super(props);
                
        this.state = {
            graph: 'bar'
        };

        //this.drawPieChart = this.drawPieChart.bind(this);
        //this.drawBarGraph = this.drawBarGraph.bind(this);
    }

    componentDidMount() {

    }

    // TODO: create bar graph
/*     drawBarGraph(data) {
        //const ctx = document.getElementById('myChart');
        const labels = data.type;
        const count = data.count;
        console.log(labels, count);
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Count',
                    data: count,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        }); 
    }*/
    

    render() {
        const data = (object) => ({
            labels: object.type,
            datasets: [{
                label: 'count',
                data: object.count,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        });

        return (
            <section className="chart__container">
                <Bar data={data(this.props.classData)} options={{ responsive: true, legend: false }} />
                <Bar data={data(this.props.strategyData)} options={{ responsive: true, legend: false }} />
                <Pie data={data(this.props.costData)} options={{ responsive: true }} />
            </section>
        );
    }
}

export default ChartContainer;