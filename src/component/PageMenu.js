import React, { useState } from 'react'
import {
    Menu,
    Segment,
    Grid,
    Header,
    Container
} from 'semantic-ui-react'

const PageMenu = props => {

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <div>
            <Segment inverted>
                <Grid>
                    <Grid.Column floated='left' width={5}>
                        <Segment inverted>
                            <Menu inverted secondary>
                                <Menu.Item
                                    name='home'
                                    active={activeItem === 'home'}
                                    onClick={handleItemClick}>
                                    Enat Care
                                </Menu.Item>
                            </Menu>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column floated='right' width={5}>
                        <Segment inverted>
                            <Menu inverted secondary>
                                <Menu.Item
                                    name='home'
                                    active={activeItem === 'home'}
                                    color='brown'
                                    onClick={handleItemClick}>
                                    Home
                                </Menu.Item>
                                <Menu.Item
                                    name='reviews'
                                    active={activeItem === 'reviews'}
                                    color='brown'
                                    onClick={handleItemClick}>
                                    Reviews
                                </Menu.Item>
                                <Menu.Item
                                    name='upcomingEvents'
                                    active={activeItem === 'upcomingEvents'}
                                    color='brown'
                                    onClick={handleItemClick}>
                                    Upcoming Events
                            </Menu.Item>
                            </Menu>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Container text inverted>
                    
                    <Header as='h3' textAlign='center'>
                        Centered
                </Header>
                </Container>
            </Segment>
        </div>
    );
}

export default PageMenu;