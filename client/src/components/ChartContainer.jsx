import React, { Component } from 'react';
import { Chart, Bar, Pie, HorizontalBar } from 'react-chartjs-2';
import Button from './basic/Button';

class ChartContainer extends Component {
    // props: cards [obj], costData (obj), classData (obj), strategyData (obj)

    constructor(props) {
        super(props);
                
        this.state = {
            graph: 'class' // show class graph by default
        };

        this.showGraph = this.showGraph.bind(this);
    }

    componentDidMount() { // set font preferences
        Chart.defaults.global.defaultFontColor = '#ffffff';
        Chart.defaults.global.defaultFontFamily = 'Times New Roman';
        Chart.defaults.global.defaultFontSize = 9;
        Chart.scaleService.updateScaleDefaults('linear', {
            ticks: {
                min: 0,
                stepSize: 1
            }
        });
    }
    

    showGraph(graph, e) {
        e.preventDefault();
        switch (graph) {
            case 'class': // show class graph
                this.setState({ graph: 'class' });
                break;
            case 'cost': // show cost graph
                this.setState({ graph: 'cost' });
                break;
            case 'strategy': // show strategy graph
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
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
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
                <section className="chart__buttons">
                    <Button className="btn btn__select_chart" onClick={(e) => this.showGraph('class', e)}>Class</Button>
                    <Button className="btn btn__select_chart" onClick={(e) => this.showGraph('cost', e)}>Cost</Button>
                    <Button className="btn btn__select_chart" onClick={(e) => this.showGraph('strategy', e)}>Strategy</Button>
                </section>
            </section>
        );
    }
}

export default ChartContainer;