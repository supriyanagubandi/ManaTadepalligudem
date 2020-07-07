import  React from 'react';
import {Card} from 'antd';
import axios from 'axios';
import {Badge} from 'react-bootstrap';
import { WiDaySunny,WiHumidity, WiNightAltCloudyWindy } from 'weather-icons-react';



class Weather extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            sunny : null,
            humidity :null,
            wind: null,

        }
    }

    componentWillMount(){
        axios.post('/api/Weather/',{}).then(response=>{
            console.log(response)
            this.setState({
                sunny:response.data.main.temp,
                humidity:response.data.main.humidity,
                wind: response.data.wind.speed,
            })
        })
    }

    render(){
        return(
            <div>
            <div style={{backgroundColor:"lightblue"}}>

                        <Card
                            style={{ marginTop: 5 }}
                            type="inner"
                            headStyle = {{backgroundColor: '#2bb361'}}
                            title={ <h3>Weather Information</h3>}
                        
                        >
                        <div style={{backgroundColor:"#daf0ad",padding:"5px"}}>
                            <div style={{textAlign:"left",width:"100%"}}>
                                < WiDaySunny size={35}/> {"Sunny - "} { (this.state.sunny - 273.15)} {"°C"}
                            </div>
                            <div style={{textAlign:"left",width:"100%"}}>
                                <WiHumidity size={35}/> {" Humidity - "} {this.state.humidity} {"%"}
                            </div>
                            <div style={{textAlign:"left",width:"100%"}}>
                                <WiNightAltCloudyWindy size={35}/> {"Wind Speed - "} {this.state.wind} {"Km/s"}
                            </div>

                          </div> 

                        </Card>
           </div>
        </div>
        )
    }
}

export default Weather; 