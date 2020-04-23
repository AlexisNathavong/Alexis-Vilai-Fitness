import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { CardOne, CardTwo } from './StyledWidgets';


const AboutPage = () => {

    return (
        <div>
            <CardDeck width='100%'>
                <CardOne>
                    
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="/workout">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    
                </CardOne>

                <CardTwo>
                  
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <p>My name is Alexis Panyathong and I am an inspired fitness motivator in Texas.</p>
                        <p>Originally from Milwaukee, WI, I earned my Bachelor's of Sciene degree and wanted to pursue a career as a Pediatrician. Endless hours spent studying and working in medical facilities made me realize that I wasn't going to be able to achieve my goal at the moment.</p>
                        <p>So I thought about another passion that I could pursue and that was web design and that's when I enrolled in Lambda School for the Full Stack Web Development program. I fell in love with it because I get to use my creativity to build Apps and websites with my own little twist. As I am pursuing this career, I realized that I still wanted to help people related to the health field.</p>
                        <p>As I was spending some time on trying to figure out how I can help people in a health related field, I began to workout for my own health issues. I started to keep track on my workout routines and fitness journey. This led me to an idea of sharing my fitness journey with people through social media. So now my goal is to inspire people to better themselves by getting fit and healthy with me! It isn't about who's the strongest or healthiest, it isn't about competition against one another, it's all about making that decision to start. Make that decision today!</p>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </CardTwo>
                
            </CardDeck>
        </div>
    )
}


export default AboutPage;