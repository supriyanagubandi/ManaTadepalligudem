import React from 'react';
import {Badge} from 'react-bootstrap';
import './Header.css';



class Header extends React.Component {
	
	render(){
		return(
				<div className="header">
					<h1> <Badge variant="secondary">Mana Tadepalligudem</Badge></h1>
					<a href="/Adminlogin"> Login </a>
					
				</div>
			)
	}


}

export default Header;