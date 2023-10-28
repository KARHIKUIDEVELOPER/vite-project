import React from "react";
import { Button, Container } from "react-bootstrap";
import '../styles/Home.css'
const Home = () => {
    return(
<Container>
<h1>Welcome to our website</h1>
<p>we are here to serve you better</p>
<Button variant="primary" type="submit">
          Get started
        </Button>
</Container>
    )
}
export default Home