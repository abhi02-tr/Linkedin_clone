import styled from 'styled-components';

const Rightside = (props) => {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your feed</h2>
                    <img src='/images/feed-icon.svg'/>
                </Title>
                <FeedList>
                    <li>
                        <a>
                            <Avatar/>
                        </a>
                        <div>
                            <span>#Linkedin</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar/>
                        </a>
                        <div>
                            <span>#Videos</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </FeedList>
            </FollowCard>
        </Container>
    );
}

const Container = styled.div`
    grid-area: rightside;
`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    padding: 12px;
`;

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0,0,0,0.6);
`;

const FeedList = styled.ul`
    margin-top: 15px;
    li {
        display: flex;
        align-items: center;
        margin: 12px 0;
        /* position: relative; */
        font-size: 16px;
        & > div {
            display: flex;
            flex-direction: column;
        }

        button {
            background-color: transparent;
            color: rgba(0,0,0,0.6);
            box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6);
            padding: 7px;
            border-radius: 15px;
            box-sizing: border-box;
            font-weight: 600;
            display: inline-flex;
            max-width: 150px;
            max-height: 32px;
            /* text-align: center; */
            justify-content: center;

            &:hover {
                background-color: #066cc2;
                color: black;
            }
        }
    }
`;

const Avatar = styled.div`
    background-image: url('https://staticexp1:licdn.com/sc/h/');
`;

export default Rightside;