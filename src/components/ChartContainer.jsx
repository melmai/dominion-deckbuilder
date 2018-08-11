import React, { Component } from 'react';
import { Chart, Bar, Pie } from 'react-chartjs-2';
import Button from './basic/Button';

class ChartContainer extends Component {
    // props: cards [obj], costData (obj), classData (obj), strategyData (obj)

    constructor(props) {
        super(props);
                
        this.state = {
            graph: 'class'
        };

        this.showGraph = this.showGraph.bind(this);
    }

    componentDidMount() {
        Chart.defaults.global.defaultFontColor = '#ffffff';
        Chart.defaults.global.defaultFontFamily = 'Times New Roman';
        Chart.defaults.global.defaultFontSize = 9;
    }
    

    showGraph(graph, e) {
        e.preventDefault();
        switch (graph) {
            case 'class':
                this.setState({ graph: 'class' });
                break;
            case 'cost':
                this.setState({ graph: 'cost' });
                break;
            case 'strategy':
                this.setState({ graph: 'strategy' });
                break;
            default:
                console.log(`Error in showGraph`);
                break;
        }
    }

    render() {
        const data = (object) => ({
            labels: object.type,
            datasets: [{
                label: 'count',
                data: object.count,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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

        const Graph = () => {
            switch (this.state.graph) {
                case 'class':
                     return <Bar data={data(this.props.classData)} options={{ responsive: true, legend: false }} />
                case 'strategy':
                    return <Bar data={data(this.props.strategyData)} options={{ responsive: true, legend: false }} />
                case 'cost':
                    return <Pie data={data(this.props.costData)} options={{ responsive: true }} />
                default:
                    console.log(`Error in Graph`);
                    break;
            }
        }

        return (
            <section className="chart__container">
                <Graph />
                <Button onClick={(e) => this.showGraph('class', e)}>Class</Button>
                <Button onClick={(e) => this.showGraph('cost', e)}>Cost</Button>
                <Button onClick={(e) => this.showGraph('strategy', e)}>Strategy</Button>
                <h3># cards: {this.props.cards.length}</h3>
            </section>
        );
    }
}

export default ChartContainer;