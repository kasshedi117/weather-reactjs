import React from "react";

const API_KEY = "cd18be29c90c66cec7e4bf4c742be766";

class App extends React.Component {

    getWeather = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&appid=${API_KEY}&cnt=40&units=metric`);
        const data = await api_call.json();

        console.log(data);
        let all = [];
        for (let a of data.list){
            console.log(a);
            let b = {
                "temp" : a.main.temp,
                "date" : a.dt_txt
            };
            all.push(b);
        }
        console.log(all);
    }


    render(){

        return(
            <div>
                <button onClick={this.getWeather}>Click me</button>
                Weather App
            </div>
        );
    }
}

export default App;
