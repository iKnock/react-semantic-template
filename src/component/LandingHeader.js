import React from 'react'
import {
    Container,
    Header,
    Button,
    Icon
} from 'semantic-ui-react'

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */

const LandingHeader = props => {
    return (
        <Container text inverted>
            <Header
                as='h1'
                content='Imagine-a-Company'
                inverted
                style={{
                    fontSize: false ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: false ? '1.5em' : '3em',
                }}
            />
            <Header
                as='h2'
                content='Do whatever you want when you want to.'
                inverted
                style={{
                    fontSize: false ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: false ? '0.5em' : '1.5em',
                }}
            />
            <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
            </Button>
        </Container>
    )
}
export default LandingHeader