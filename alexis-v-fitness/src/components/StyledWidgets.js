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
export const WelcomeHeader = styled.div`
    color: #0A235C;
    font-family: gautreaux, sans-serif;
    margin-top: 50px;
    margin-bottom: 80px;
    font-size: 50px;
    text-align: center;
`;

export const Welcome = styled.div`
    width: 100%;
    p {
       text-align: center; 
    }
   
    
`;

export const IMG = styled.div`
.img-container {
    width: 98%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

img {
    display: flex;
    justify-content: center;
}
`;

// AboutPage
export const AboutIMG = styled.div`
.img-container {
    width: 45%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

img {
    display: flex;
    justify-content: center;
}
`;

export const CardOne = styled.div`
    margin: 0 auto;
    width: 90%;
`;

export const CardTwo = styled.div`
    margin-top: 30px;
    margin: 0 auto;
    width: 65%;
    height: 800px;
    box-shadow: 5px 5px 5px 5px #dfdfdf;

`;

export const AboutContext = styled.div`
    font-weight: bold;
    
    margin-top: 70px;
    p {
        height: 200px;
        width: 60%;
        margin: 0 auto;
        
    }
`;

export const Body = styled.div`
    background-color: red;
    body {
        background-color: red;
    }
`;


//Footer
export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
    }
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
        
    }
`;