//this component is to render new organizations
//includes the form for filling out the new organization button and an alert for successful completion

import React, { useState, useEffect} from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

const StopInfo = ({setShowStopInfo, stop}) => {

    //displays the form for creating a new organization
    return (
        <Modal show={true} onHide={() => closeModal()} centered>
            <Modal.Header closeButton>
                <Modal.Title>{stop.stop_name}</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <Form>
                    <Form.Label>
                        {stop.stop_desc}
                    </Form.Label>
                </Form>
            </Modal.Body>
        </Modal>
    );

    function closeModal(){
        setShowStopInfo(false);
    }
}

export default StopInfo;