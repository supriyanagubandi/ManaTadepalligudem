import React from 'react';
import {Row, Col} from 'antd';
import Movies from './Movies';
import Slideshow from './Slideshow';
import Weather from './Weather';
import './Home.css';
import Tpgstores from './Tpgstores';

class Home extends React.Component {
	
	render(){
		return(
				<div className="home">

				<Row className='outline'>
					<Col xs={24} sm={24} md={24} lg={24} xl={24}> 
							<Slideshow/>
					</Col>
				</Row>
				<Row className='outline'>
					<Col xs={24} sm={24} md={8} lg={8} xl={8} >
						<Movies/>
					</Col>
					<Col xs={24} sm={24} md={16} lg={16} xl={16}> 
						<Row>
							<Weather/>
						</Row>
						<Row>
							<Tpgstores/>
						</Row>
						
					</Col>
					
				</Row>

				</div>
			)
	}


}

export default Home;