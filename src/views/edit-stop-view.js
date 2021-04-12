//component for the edit stop view
//access through the EditTour component

import React,{ useState } from 'react'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
import { Col, Row, Container, Card } from "react-bootstrap";
import MediaView from "./media-view";
//import the css module
import Map from "../components/map";
import { Component } from "react";



const EditStop = ({setEditStopMode, stops, stopIndex, setTriggerUpdateTour, tour_id}) => {

    const [stopLatLng, setStopLatLng] = useState({lat: parseFloat(stops[stopIndex].lat), lng: parseFloat(stops[stopIndex].lng)})
    // console.log(stopLatLng.lat)

    stops[stopIndex].lat = stopLatLng.lat.toString();
    stops[stopIndex].lng = stopLatLng.lng.toString();

    return (
        <div>
            <Card style={{marginTop: '2%'}}>
            <Card.Header>Stop Information</Card.Header>
            <Container style={{margin: '1%'}}>
                <Row>
                    <Col>
                        <Map stopLatLng={stopLatLng} setStopLatLng={setStopLatLng}/>
                    </Col>

            {/* form to change the stop info */}
                    <Col>
                        <Button variant="outline-primary" style={{marginRight: '1%'}}onClick={() => updateStop()}>update stop</Button>
                        <Button variant="outline-primary" onClick={() => goBackToTourEdit()}>go back</Button>
                        <Form style={{marginTop: '1%'}}>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={4}>
                                Stop Name
                                </Form.Label>
                                <Col sm={8}>
                                <Form.Control placeholder={stops[stopIndex].stop_name} onChange={(event) => setNameFromInput(event)}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={4}>
                                Stop Description
                                </Form.Label>
                                <Col sm={8}>
                                <Form.Control placeholder={stops[stopIndex].stop_desc} onChange={(event) => setDescriptionFromInput(event)}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={4}>
                                latitude:
                                </Form.Label>
                                <Col sm={8}>
                                <Form.Control disabled={true} placeholder={stopLatLng.lat} onChange={(event) => setLatitudeFromInput(event)}/>
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={4}>
                                longitude
                                </Form.Label>
                                <Col sm={8}>
                                <Form.Control disabled={true} placeholder={stopLatLng.lng} onChange={(event) => setLongitudeFromInput(event)}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={4}>
                                Media Credits
                                </Form.Label>
                                <Col sm={8}>
                                <Form.Control placeholder={stops[stopIndex].media_desc} onChange={(event) => setMediaDescriptionFromInput(event)}/>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </Card>

            
            <Card style={{marginTop: '2%'}}>
            <Card.Header>Stop Media</Card.Header>
            <div style={{margin: '1%'}}>
            <MediaView tour_id={tour_id} stop_id={stops[stopIndex]._id} stops={stops} stopIndex={stopIndex}/>
            </div>
            </Card>
        </div>
    );

    function updateStop(){
        setTriggerUpdateTour(true);
    }

    function goBackToTourEdit(){
        setTriggerUpdateTour(true);
        setEditStopMode(false);
    }

    function setNameFromInput(event){
        stops[stopIndex].stop_name = event.target.value;
        // console.log("test 1")
    }

    function setMediaDescriptionFromInput(event){
        stops[stopIndex].media_desc = event.target.value;
        // console.log("test 2")
    }

    function setDescriptionFromInput(event){
        stops[stopIndex].stop_desc = event.target.value;
        // console.log("test 2")
    }

    function setLatitudeFromInput(event){
        stops[stopIndex].lat = event.target.value;
        stopLatLng.lat = parseFloat(event.target.value);
        // console.log("test 3")
        // setTriggerUpdateTour(true);
    }

    function setLongitudeFromInput(event){
        stops[stopIndex].lng = event.target.value;
        stopLatLng.lng = parseFloat(event.target.value);
        // console.log("test 4")
        // setTriggerUpdateTour(true);
    }
}

export default EditStop;