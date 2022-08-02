
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// import Carousel from "./components/Carousel/index"
import Footer from "./components/Footer/index"
// import Jumbotron from "./components/Jumbotron"
import Nav from "./components/Nav"
import ProductList from "./components/ProductList"
import Detail from "./pages/Detail"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NoMatch from "./pages/NoMatch"
import OrderHistory from "./pages/OrderHistory"
import Signup from "./pages/Signup"
import Success from "./pages/Success"


const client = new ApolloClient({
    request: operation => {
        const token = localStorage.getItem("id_token")
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : "",
            },
        })
    },
    uri: "/graphql",
})

function App() {

    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/orderHistory" component={OrderHistory} />
                        <Route exact path="/products" component={ProductList} />
                        <Route exact path="/products/:id" component={Detail} />
                        <Route exact path="/success" component={Success} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
                {/* <Jumbotron /> */}
                <Footer />
            </Router>
        </ApolloProvider>
    )

}

export default App
