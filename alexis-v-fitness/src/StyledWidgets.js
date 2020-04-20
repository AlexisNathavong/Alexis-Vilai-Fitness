import styled from 'styled-components';

//AppRouter
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-shadow: 5px 5px 8px #dddddd;
    height: 100px;
    text-align: center;

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