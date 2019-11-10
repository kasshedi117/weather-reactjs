import React, { Component } from 'react'
import "./Graph.css";
import CanvasJSReact from "../canvasjs.react" 
import { stat } from 'fs';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Graph extends Component {
    constructor(props){
        super(props);
        this.state = {
            options : {
                title: {
                    text: "Basic Column Chart"
                },
                data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: []
                }
                ]
            }
        }
    }
     async componentWillReceiveProps(nextProps){
        let bars=[]; 
            const {options} = this.state
            await this.setState({chart:""})
                nextProps.data.forEach(el => {
                bars.push({
                    label: el.dt_txt.split(' ')[1],
                    y:el.main.temp
                })
                console.log("current bars state: ",bars);
                
                })
                console.log("bars",bars);
                options.data[0].dataPoints=bars;
                options.title={text: nextProps.data[0].dt_txt.split(' ')[0]};
                console.log(options);
                
                this.setState({
                    options:options,
                    chart: <CanvasJSChart options = {options}/>
                })
    }
    
    render() {
        const {data} = this.props;
        const {chart} = this.state;
        return (
            <div>
                {chart}
            </div>
        )
    }
}
