import styled from 'styled-components';
import Leftside from './Leftside';
import Rightside from './Rightside';
import Main from './Main'
// import Header from './Header';

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5>
                    <a>Hiring in a hurry ? - </a>
                </h5>
                <p>Find talented pros in record time with upworks and keep business moving</p>
            </Section>
            <Layout>
                <Leftside/>
                <Main/>
                <Rightside/>
            </Layout>
        </Container>
    );
}

const Container = styled.div`
    /* padding: 84px; */
    max-width: 100%;
`;

const Content = styled.div`
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
`;

const Section = styled.div`
    min-height: 30px;
    /* padding: 16px 0; */
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5 {
        color: #0a66c2;
        margin: 16px 8px 0 0;
        a {
            font-weight: 700;
        }
    }
    p {
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        /* word-wrap: break-word; */
        padding: 0 5px;
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(90px,250px) minmax(350px,700px) minmax(300px,7px);
    column-gap: 25px;
    row-gap: 25px;
    margin: 20px 5px;

    @media (max-width:768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
        margin: auto;
    }
`;

export default Home;