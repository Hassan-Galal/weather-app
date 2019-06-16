import React , {Component}from 'react';
//import { async } from 'q';
import Form from './components/form';
import Displayw from './components/displayw'


const API_KEY="aee9602e8f20635b2cf8d0940e9dd957";


class App extends Component {
  state={
    temp : undefined,
    city :undefined,
    country :undefined,
    hum :undefined,
    error :undefined,
    check :undefined
  }
  getWeather = async(e) =>{
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const api_call =await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid='+API_KEY);
    const data =await api_call.json();
    console.log(data);
    if(city&&country){
      this.setState({
        temp:data.main.temp,
        city:data.name,
        country:data.sys.country,
        hum:data.main.humidity,
        check:true
      });
    }else
    {
      this.setState({
        error:"enter country and city name"
      });
    }
  }

  render (){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <h1 className="title_container__title">Find Weather</h1>
                  <h1 className="title_container__subtitle">Find your city weather </h1>
                </div>
                <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather} />
                    <Displayw state={this.state}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
