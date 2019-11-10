import React from "react";
import "./App.css";
import Graph from './components/Graph/Graph'
import Carouselslider from "./components/Carousel/Carouselslider";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';




const API_KEY = "cd18be29c90c66cec7e4bf4c742be766";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            unit:'metric',
            days:{},
            selectedDayState:[]
        }
    }
    componentDidMount(){
        this.getWeather();
    }
    getWeather = () => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&appid=${API_KEY}&cnt=40&units=${this.state.unit}`)
        .then(Response=>{ return Response.json()})
        .then(Response=>{
            this.setState({
                days: this.devidByDates(Response)
            },)
        })
    }
    setUnit = e =>{        
        this.setState({
            days:[],
            unit : e.target.value
        },this.getWeather)
    }
    async devidByDates  (weather)  {
        let {days} = this.state;
        days={}
        await weather.list.forEach(el => {
            let date = el.dt_txt.split(' ')[0];
            if(!days.hasOwnProperty(date)){days[date]=[]}
                days[date].push(el)
            
        });
        this.setState({days:days,selectedDayState:[]})
    } 
    click=(event)=>{
        this.setState({
            selectedDayState: event
        })
    }
    render(){
        const { days, selectedDayState,unit } = this.state;
        return(
            <div className="container">
                { Object.keys( days ).length === 0 &&
                    <div className=" Loading d-flex justify-content-center align-items-center">
                        Loading...
                    </div>
                }
                { Object.keys(days).length > 0 &&
                    <div className="m-5">
                        <RadioGroup defaultValue="metric" aria-label="gender" style={{ display: 'flex',flexDirection:"row",justifyContent:"center" }} name="customized-radios">
                            <FormControlLabel style={{width: "-moz-fit-content"}} value="metric" checked={unit==='metric'}  control={<Radio   style={{width:"35px"}}   onClick={this.setUnit}/>} label="Metric" />
                            <FormControlLabel style={{width: "-moz-fit-content"}} value="imperial" checked={unit==='imperial'} control={<Radio  style={{width:"35px"}}  onClick={this.setUnit}/>} label="Imperial" />
                        </RadioGroup>
                        <div>
                            <Carouselslider data={days} unit={unit} onClick={this.click}/>
                        </div>
                        <div>
                            <Graph data={selectedDayState}/>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default App;
