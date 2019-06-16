import React , {Component} from 'react';

class Display extends Component {
    
    render(){
        
            return(
                
                <div className="weather__info">
                    <ul>city :{this.props.state.city}</ul> 
                    <ul>country:{this.props.state.country}</ul> 
                    <ul>tempreture:{this.props.state.temp}</ul> 
                    <ul>humality{this.props.state.hum}</ul> 
                    <ul>{this.props.state.error}</ul> 
                </div>
            );
        
    }
    
} 
export default Display;