import styled from 'styled-components';

//AppRouter
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-shadow: 5px 5px 8px #dddddd;
    height: 100px;
    text-align: center;
    margin-bottom: 80px;
    color: red;

    a {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        margin-left: 70px;
        color: black;
        font-size: 18px;
        cursor: pointer;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
    }

    .app-router {
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        justify-content: space-evenly;
        
    }
`;

//WelcomePage
export const WelcomeHeader = styled.h1`
    color: #0A235C;
    font-family: gautreaux, sans-serif;
    margin-top: 50px;
    margin-bottom: 80px;
`;

// AboutPage
export const CardOne = styled.div`
    margin: 0 auto;
    width: 90%;
`;

export const CardTwo = styled.div`
    margin-top: 30px;
    margin: 0 auto;
    width: 90%;
    height: 600px;
    box-shadow: 5px 5px 5px 5px #dfdfdf;

`;

export const AboutContext = styled.div`
    font-weight: bold;
    margin-top: 70px;
    p {
        height: 90px;
        width: 90%;
        margin: 0 auto;
        
    }
`;