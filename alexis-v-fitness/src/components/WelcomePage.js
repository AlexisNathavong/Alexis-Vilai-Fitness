import React from 'react';
import { WelcomeHeader, Icons, IMG } from './StyledWidgets';
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
                    
                    <Card.Body>
                        <Card.Title>Welcome!!</Card.Title>
                        <IMG>
                            <img className="img-container" src={require('../imgs/Squats.png')} alt="img of Alexis." />
                        </IMG>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="/workout">Workout</Card.Link>
                        <Card.Link href="https://youtu.be/kKT2RVW6RJU" target="_blank">Workout Demo</Card.Link>
                    </Card.Body>
                    
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <IMG>
                            <img className="img-container" src={require('../imgs/Lunge Twists.png')} alt="img of Alexis." />
                        </IMG>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <IMG>
                            <img className="img-container" src={require('../imgs/Criss-Cross Crunches.png')} alt="img of Alexis." />

                            
                        </IMG>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
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