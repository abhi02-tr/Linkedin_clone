import styled from 'styled-components';

const Leftside = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo> 
                    <CardBackground />
                    <a>
                        <Photo/>
                        <Link>
                            Welcome, there! 
                        </Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                        <span>Connections</span>
                        <span>Grow your network</span>
                        </div>
                        <img src='/images/widget-icon.svg'/>
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src='/images/item-icon.svg' />
                        My items
                    </span>
                </Item>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src='/images/plus-icon.svg'/>
                    </span>
                </a>
                <a>
                    <span>Follows Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
        </Container>
    );
}

const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 0px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    cursor: pointer;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 16px;
    word-wrap: break-word;
`;

const CardBackground = styled.div`
    background: url('/images/card-bg.svg');
    background-position: center;
    background-size: 462px;
    height: 64px;
    margin: -12px -20px 0;
`;

const AddPhotoText = styled.div`
    color: #0a66c2;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 600;
`;

const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 600;
`;

const Photo = styled.div`
    background-image: url('/images/photo.svg');
    background-position: center;
    background-repeat: no-repeat;
    width: 72px;
    height: 70px;
    background-size: 65%;
    background-color: #f5f5f5;
    border-radius: 50%;
    margin: -34px auto 10px;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 0;

    & > a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;

        &:hover {
            background-color: rgba(0,0,0,0.08);
        }

        div {
            display: flex;
            flex-direction: column;
            text-align: left;

            span {
                font-size: 14px;
                font-weight: 600;
                line-height: 1.32;
                &:first-child {
                    color: rgba(0, 0, 0, 0.5);
                }
                &:nth-child(2) {
                    color: rgba(0, 0, 0, 1);
                }
            }
        }
    }
`;

const Item = styled.a`
    border-color: rgba(0,0,0,0.8);
    padding: 12px;
    font-size: 14px;
    display: flex;
    span {
        display: flex;
        align-items: center;
        color: rgba(0,0,0,1);
    }
    &:hover {
        background-color: rgba(0,0,0,0.08);
    }
`;

const CommunityCard = styled(ArtCard)`
    background-color: #fff;
    margin: 12px auto;
    padding: 8px 8px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%); 
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    a{
        cursor: pointer;
        border-radius: 3px;
        &:hover {
            background-color: rgba(0,0,0,0.08);
        }

        span {
            display: flex;
            padding: 6px 4px;
            font-size: 14px;
            font-weight: 600;
            justify-content: space-between;
        }

        &:nth-child(3) {
            border-bottom: 1px solid rgba(0,0,0,0.3);
        }

        &:nth-child(4) {
            color: rgba(0,0,0,0.44);
        }

    }
`;

export default Leftside;