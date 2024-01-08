import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Home2 from "./Home2";
import homeLogo from "./homelogo.png";
import Type from "./Type";
import "./home.css";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";


function Home() {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    
    const handleGetStarted = () => {
      // Redirect to the login page when the "Get Started" button is clicked
      {isLoggedIn ? (
        navigate("/tryit")
      ) : (
        navigate("/login")
      )}

    };
  
  return (
    <section>
      <Container className="home-section" id="home">
        <Container className="home-content">
        <Row className="a">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                {/* <span className="wave" role="img" aria-labelledby="wave"> 👋🏻
                </span> */}
              </h1>

              <h1 className="heading-name">
                Welcome
                to, <strong className="main-name"> RelX </strong> your <br/>
                'Virtual Ally'
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} className="home-type">
                <Type />
              </div>
              <div className="home-but1">
                <button className="explore" onClick={handleGetStarted}> Get Started </button>
             </div>

            </Col>


          </Row>
        </Container>
        <Col md={5} style={{ paddingBottom: 20 }} className="img-sec">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
              />
        </Col>
      </Container>
    </section>
  );
}

export default Home;