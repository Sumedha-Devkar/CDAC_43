import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function Dashboard(){
    return(
        //hello this is my new comment i have added
        <Container>
            {/* <Header text="Welcome to Student CRUD APP"></Header> */}
            <style>
        {`
          body {
            background-color:#ffffff; 
          }
        `}
      </style>
            <p>Step into seamless transactions and effortless payments! </p>
            <Container className="middlebody">     
          <Row>

    {/* <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={visa}
          alt="Canada"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-50"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 */}

          </Row>

            <Row className="justify-content-md-center mt-5">
                    <Col lg={3}>
                        <Card >
                           
                        {/* <Card.Img variant="top" src={australiavisa} className="" style={{ height: '226px',width:'300px' }} font-style="Rust"/> */}
                            <Card.Body>
                                <Card.Title>ELECTRICITY BILL</Card.Title>
                               
                                <LinkContainer to="/Electricity">
                                <Button variant="primary"className='mt-3'>Pay Now</Button>
                              </LinkContainer>
                              </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card>
                           {/* <Card.Img variant="top" src= style={{ height: '226px',width:'300px' }} />   */}
                           {/* <hr typeof="rectangle" color="black"></hr> */}
                            <Card.Body>
                                <Card.Title>MOBILE BILL</Card.Title>
                                
                                <LinkContainer to="/visa-registration">
                                <Button variant="primary"className='mt-3'>Pay Now</Button>
                              </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                </Row>
           </Container> 
        </Container>
    );
}