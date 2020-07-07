import React from 'react';
import {Link} from 'react-router-dom';
import './Navigationbar.css';



class Navigationbar extends React.Component {
	
	render(){
			console.log(this.props)
			let path = this.props.location.pathname;
		return(
				<div className="navigationbar">

				<ul>
						
					<li className={ path === '/' ? "selected":null}><Link to='/'> HOME </Link></li>
					<li className={ path === '/Tpgstores' ? "selected":null}><Link to="/Tpgstores"> TPG STORES </Link></li>	
					<li className={ path === '/Entertainmnet' ? "selected":null}><Link to='/Entertainmnet'> ENTERTAINMENT </Link></li>
					<li className={ path === '/Deals' ? "selected":null}><Link to='/Deals'> DEALS </Link></li>
					<li className={ path === '/Contactus' ? "selected":null}><Link to='/Contactus'> CONTACT US </Link></li>
						
				</ul>

				</div>
			)
	}


}

export default Navigationbar;