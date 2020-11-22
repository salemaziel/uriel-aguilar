import React from "react";


import Modal from "react-modal";


import { FaEnvelope } from "react-icons/fa";

import SignUpForm from "./signupForm";

import signupmodalStyles from './home.module.css'
import { Button } from "react-bootstrap";
import { Link } from "gatsby";

//import signupmodalStyles from "./home.module.css";
//import "./home.module.css";

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      className: "",
      shouldCloseOnOverlayClick: "",
      shouldCloseOnEsc: "",
      shouldReturnFocusAfterClose: "",
      contentLabel: "",
    };
  }

  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true });
  };

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        {/*<a href="#" onClick={this.handleModalOpen}>
        <FaEnvelope color="darkgray" className={signupmodalStyles.Icon} /> Sign up For Updates
    </a>*/}
       <button as={Link} onClick={this.handleModalOpen} className="profile-card__button button--blue">Send Message</button>

        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Sign Up"
          id="signup"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldReturnFocusAfterClose={true}
          
          /*className={signupmodalStyles.modalmailing}
          overlayClassName={signupmodalStyles.modalmailingOverlay}*/
        >

            <SignUpForm />
        </Modal>
      </>
    );
  }
}

export default SignUpModal
