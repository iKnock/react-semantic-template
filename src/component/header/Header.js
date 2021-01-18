import React, { useEffect, useState } from 'react';
import { Button, Container, Menu, Segment, Image } from "semantic-ui-react";

const Header = () => {
    return (
        <div>
            <Menu inverted>
                <Container>
                    <Menu.Item as="a" header>
                        Enat Care
                    </Menu.Item>

                    <Menu.Menu position="right">
                        <Menu.Item as="a" name="login">
                            Login
                    </Menu.Item>

                        <Menu.Item as="a" name="register">
                            Register
                     </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
}

export default Header;
