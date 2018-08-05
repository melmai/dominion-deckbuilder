import React, { Component } from 'react';
import Chart from 'chart.js';

class ChartContainer extends Component {
    // props: cards, filteredCards

    constructor(props) {
        super(props);
                
        this.state = {
            cards: []
        };

        //this.drawPieChart = this.drawPieChart.bind(this);
        this.drawBarGraph = this.drawBarGraph.bind(this);
    }

    componentDidMount() {
        this.drawBarGraph();
    }

    // TODO: create bar graph
    drawBarGraph(type) {
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Action", "Reaction", "Attack", "Treasure", "Victory"],
                datasets: [{
                    label: 'Quantity',
                    data: [12, 19, 3, 5, 2],
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
    }

    render() {
        return (
            <section className="chart__container">
                <canvas id="myChart"></canvas>
            </section>
        );
    }
}

export default ChartContainer;