import React from 'react';
import { WelcomeHeader, Icons } from './StyledWidgets';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { SocialIcon } from 'react-social-icons';


const WelcomePage = () => {

    return (
        <div>
            <WelcomeHeader>
                Alexis Vilai Fitness
            </WelcomeHeader>

            <CardDeck margin-top='60px'>
                <Card marginTop='60px'>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Welcome!!</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="/workout">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>

            <footer className="social-icons">
                    <Icons>   
                        <SocialIcon url="mailto:alexisvilaifitness@gmail.com?subject=here" style={{ height: 40, width: 70 }} fgColor="#FF0505" bgColor="#4E4E4E" target="_blank"/>   
                        <SocialIcon url="https://www.instagram.com/alexisvilaifitness" style={{ height: 40, width: 70 }} fgColor="#FFFFFF" bgColor="#000000" target="_blank"/>    
                    </Icons>
                    
                </footer>

        </div>
    )
}

export default WelcomePage;