import React  from 'react';
import {Carousel} from 'react-bootstrap';
import {Card, Badge} from 'react-bootstrap';
import './Movies.css';

export default class Movies extends React.Component{

    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }

    render(){
        const { index, direction } = this.state;
        return(
            <div className="border">
    
               <p style={{fontSize:"30px"}}> <Badge variant="secondary">Movies</Badge></p>
            <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                    >
            <Carousel.Item >
                <Card style={{ width: '100%' }}>
                <Card.Body>
                <Card.Title>Bahubali-2</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">PVR - Tadepalli gudem</Card.Subtitle>
                <Card.Text >
                <img
                className="d-block w-100"
                src="https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg"
                alt="Bhahubali"
                
              />
                </Card.Text>
               
                </Card.Body>
            </Card>
              
            </Carousel.Item>
            <Carousel.Item>
            <Card style={{ width: '100%' }}>
            <Card.Body>
            <Card.Title>Saaho</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Gopalan Cinemas</Card.Subtitle>
            <Card.Text>
            <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/MwvePhWTejM/maxresdefault.jpg"
            alt="Saaho"
          />
            </Card.Text>
           
            </Card.Body>
        </Card>
          
        </Carousel.Item>
        <Carousel.Item>
        <Card style={{ width: '100%' }}>
        <Card.Body>
        <Card.Title>Star is Born</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">PVR</Card.Subtitle>
        <Card.Text>
        <img
                className="d-block w-100"
                src="https://static.boredpanda.com/blog/wp-content/uploads/2019/02/corgi-movie-posters-photoshop-fb__700-png.jpg"
                alt="Third slide"
              />
        </Card.Text>
      
        </Card.Body>
    </Card>
      
    </Carousel.Item>


            
          </Carousel>
            
            
            </div>
        )
    }

}