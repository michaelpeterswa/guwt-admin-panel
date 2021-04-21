//this component is to render new organizations
//includes the form for filling out the new organization button and an alert for successful completion

import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const TourInfo = ({setShowTourInfo, tour}) => {

    // console.log("entering")

    //displays the form for creating a new organization
    return (
        <Modal show={true} onHide={() => closeModal()} centered>
            <Modal.Header closeButton>
                <Modal.Title>{tour.name}</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <Form>
                    <Form.Label>
                        {tour.description}
                    </Form.Label>
                </Form>
            </Modal.Body>
        </Modal>
    );

    function closeModal(){
        setShowTourInfo(false);
    }
}

export default TourInfo;