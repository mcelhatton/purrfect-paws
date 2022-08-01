import React from "react"
import { Grid, List } from "semantic-ui-react"

const Footer = () => (
    <div className="footer">
        <Grid divided inverted stackable>
            <div id="footext2">Developers</div>
            <List link inverted className="githubnames">
                <List.Item
                    href="https://github.com/djpdim"
                    target="_blank"
                    rel="noopener noreferrer"
                    // style={{ color: "red" }}
                >
                    djpdim
                </List.Item>
                <List.Item href="https://github.com/rpliszka1987" target="_blank" rel="noopener noreferrer">
                    rpliszka1987
                </List.Item>
                <List.Item href="https://github.com/vmedina927" target="_blank" rel="noopener noreferrer">
                    vmedina927
                </List.Item>
                <List.Item href="https://github.com/mcelhatton" target="_blank" rel="noopener noreferrer">
                    mcelhatton
                </List.Item>
                <List.Item href="https://github.com/cpriyam90" target="_blank" rel="noopener noreferrer">
                    cpriyam90
                </List.Item>
                <List.Item href="https://github.com/MaameSekyere" target="_blank" rel="noopener noreferrer">
                    MaameSekyere
                </List.Item>
            </List>

            <span id="footext">
                &copy; 2022 <a> </a>
            </span>

            <a id="footext2">Developers</a>
            <List link inverted className="githubnames">
                <List.Item
                    href="https://github.com/djpdim"
                    target="_blank"
                    rel="noopener noreferrer"
                    // style={{ color: "red" }}
                >
                    djpdim
                </List.Item>
                <List.Item href="https://github.com/rpliszka1987" target="_blank" rel="noopener noreferrer">
                    rpliszka1987
                </List.Item>
                <List.Item href="https://github.com/vmedina927" target="_blank" rel="noopener noreferrer">
                    vmedina927
                </List.Item>
                <List.Item href="https://github.com/mcelhatton" target="_blank" rel="noopener noreferrer">
                    mcelhatton
                </List.Item>
                <List.Item href="https://github.com/cpriyam90" target="_blank" rel="noopener noreferrer">
                    cpriyam90
                </List.Item>
                <List.Item href="https://github.com/MaameSekyere" target="_blank" rel="noopener noreferrer">
                    MaameSekyere
                </List.Item>
            </List>

            <p id="footext">
                &copy; 2022 <a> </a>
            </p>
        </Grid>
    </div>
)

export default Footer