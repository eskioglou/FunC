//Library Imports
import React from "react";
import {useSelector} from "react-redux";


//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

//CSS Imports
//import "./LanguageCourseBox.css";
//import "./Home.css"
//import LanguageCourseBox from "./LanguageCourseBox";
//import {Row} from "react-bootstrap";
import {Container} from "reactstrap";
import SignInPage from "./SignInPage";

function SignIn() {
    return (
        <div>
            <Header/>
            <br></br>
            <br></br>
            <br></br>

            <Container>
                <SignInPage/>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Footer/>
        </div>
    )
}
export default SignIn;