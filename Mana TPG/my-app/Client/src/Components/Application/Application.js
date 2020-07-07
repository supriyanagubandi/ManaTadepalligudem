import React from 'react';
import {Switch, Route} from 'react-router';
import Home from './Home/Home';
import Contactus from './Contactus/Contactus';
import Entertainment from './Entertainment/Entertainment';
import Deals from './Deals/Deals';
import Tpgstores from './Tgpstores/Tpgstores';
import Header from '../Header/index';
import Navigationbar from '../Navigationbar/index';



class Application extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const extraProps = { color: 'red' }
        let {match, location} = {...this.props};
        return(
            <div>
                <Header/>
                <Navigationbar match={match} location={location} />
                <Switch>
                        
                        
                        <Route path='/Tpgstores' render={(props) => (
                            <Tpgstores  data={extraProps}/>
                          )}/>
                        <Route path='/Entertainmnet' component={ Entertainment} />
                        <Route path='/Contactus' component={ Contactus} />
                        <Route path='/Deals' component={Deals }/>
                        <Route path="/" component={Home}/>
                </Switch>
            </div>
        )
    }



}

export default Application;