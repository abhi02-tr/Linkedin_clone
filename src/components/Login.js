import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href='/'>
                    <img src='/images/login-logo.svg' alt='Logo'/>
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community.</h1>
                    <img src='/images/login-hero.svg' alt='Something'/>
                </Hero>
                <Form>
                    <Google>
                        <img src='/images/google.svg' alt='google logo'/>
                        Sign in with google
                    </Google>
                </Form>
            </Section>
        </Container>
    );
}

const Container = styled.div`
    padding: 0;
`;
const Nav = styled.nav`
    max-width: 1120px;
    margin: auto;
    padding: 12px 0px 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    
    a {
        width: 135px;
        height: 40px;
        @media (max-width: 760px) {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 20px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 5px;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    cursor: pointer;
    padding: 10px 22px;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    background-color: rgba(0,0,0,0);
    &:hover {
        background-color: rgba(117, 181, 249, 0.15);
    }
`;

const Section = styled.div`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding: 40px 0 138px 0;
    /* border: 2px solid red; */
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1120px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        min-height: 0px;
    }
`;

const Hero = styled.div`
    width: 100%;
    h1 {
        padding: 0;
        width: 45%;
        font-size: 56px;
        position: relative;
        color: #2977c9;
        font-weight: 300;
        line-height: 70px;

        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2px;
        }
    }
    img {
        /* z-index: -1; */
        width: 670px;
        height: 678px;
        position: absolute;
        bottom: 180px;
        right: -50px;
        @media (max-width: 760px) {
            top: 230px;
            padding: 20px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`;

const Form = styled.div`
    margin: 100px 0 0 0;
    width: 408px;
    @media (max-width: 768px) {
        margin: 24px 0 0 0;
    }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    /* padding: 5px; */
    height: 56px;
    width: 100%;
    border-radius: 24px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%);
    vertical-align: middle;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0,0,0,0.6);

    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0,0,0,0.85);
    }
`;

export default Login;