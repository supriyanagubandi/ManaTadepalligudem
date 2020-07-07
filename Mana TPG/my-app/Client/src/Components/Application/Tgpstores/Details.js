import React from 'react';
import { Descriptions } from 'antd';
import { Carousel, Row,Col} from 'antd';
import './Details.css';



class Details extends React.Component{
    

    onChange=(a, b, c)=> {
        console.log(a, b, c);
      }

    render(){
        
        return(
            <div style={{width:"700px", margin:"20px", border:"1px solid black"}}>
                    
                            <Carousel afterChange={this.onChange}>
                                <div>
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                            </Carousel>
                            <div className="head">
                                <div    className="head-left">
                                    <Descriptions layout="vertical" bordered>
                                        <Descriptions.Item label="Address">
                                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                                        <Descriptions.Item label="Hours of Operation">
                                         10 AM - 11 AM
                                        </Descriptions.Item>
                                        <Descriptions.Item label="About">
                                          Good feedback
                                        </Descriptions.Item>
                                        
                                    </Descriptions>
                                </div>
                                <div className="head-right">
                                </div>
                            </div>
                       
            </div>
        )
    }
}

export default Details;