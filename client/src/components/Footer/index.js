import React from "react"
import { Link } from "react-router-dom"
import { Container, Grid, Header, List, Segment } from "semantic-ui-react"

const Footer = () => {
    return (
        <Segment inverted vertical>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Header inverted as="h4" content="Dimos Pagkas" />
                            <List link inverted>
                                <a target={"_blank"} href="https://github.com/djpdim">
                                    GitHub
                                </a>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as="h4" content="Priyam" />
                            <List link inverted>
                                <a target={"_blank"} href="https://github.com/djpdim">
                                    GitHub
                                </a>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as="h4" inverted>
                                Join the Paw Community: Be the First to Know!
                            </Header>
                            <List link inverted>
                                <List.Item>
                                    Never miss a service <Link to="/products">Find out more</Link> about our exclusive
                                    subscription.{" "}
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default Footer
