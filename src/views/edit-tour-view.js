//Component for the edit tour view

import React, {useState} from "react";
import axios from "axios";

//import the css module
// import styles from "../css_modules/generalStyles.module.css";

//import the edit stop component
import EditStop from "./edit-stop-view";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

import StopCell from "../components/stop-cell";

//edit tour component
//parameters:
//  setTourEditMode: takes in a bool and determines whether to stay in this mode
//  tours: the list of tours in the organization
//  setTours: updates the tours
//  tourIndex: the index of the tour that we are currently editing
const EditTour = ({setTourEditMode, tours, tourIndex, loadTours}) => {

    const [editStopMode, setEditStopMode] = useState(false);
    // const [stops, setStops] = useState(tours[tourIndex].stops);
    const [stopIndex, setStopIndex] = useState(0);
    const [deleteStop, setDeleteStop] = useState(false); //determines whether to delete a stop or not
    const [triggerUpdateTour, setTriggerUpdateTour] = useState(false);
    const [refresh, setRefresh] = useState(false);

    if(deleteStop){
        tours[tourIndex].stops.splice(stopIndex, 1);
        updateTour()
        setDeleteStop(false);
    }

    if(triggerUpdateTour){
        // tours[tourIndex].stops[stopIndex] = stops[stopIndex];
        updateTour()
        setTriggerUpdateTour(false);
    }

    if(editStopMode){
        return (
            <EditStop setEditStopMode={setEditStopMode} stops={tours[tourIndex].stops} stopIndex={stopIndex} setTriggerUpdateTour={setTriggerUpdateTour} tour_id={tours[tourIndex]._id}/>
        );
    }

    return (
        <div >
            {/* display the form to edit the tour name */}
            <Card style={{marginTop: '2%'}}>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={4}>
                        Tour Name
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control placeholder={tours[tourIndex].name} onChange={(event) => setNameFromInput(event)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={4}>
                        Tour Description
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control placeholder={tours[tourIndex].description} onChange={(event) => setDescriptionFromInput(event)}/>
                        </Col>
                    </Form.Group>
                </Form>
            </Card>
            {/* display the list of stops */}
            <Card style={{ width: '48rem', marginTop: '2%' }}>
                <Card.Body>
                {tours[tourIndex].stops.map((stop, i) => (
                        <StopCell setStopEditMode={setEditStopMode} stopIndex={i} setStopIndex={setStopIndex} stops={tours[tourIndex].stops} setDeleteStop={setDeleteStop} updateTour={updateTour}/>
                ))}
                </Card.Body>
            </Card>
            {/* go back home button */}
            <Button style={{ marginTop: '2%' }} onClick={() => goBackToHome()}>go back</Button>
            <Button style={{ marginTop: '2%', marginLeft: '1%' }} onClick={() => goToAddStop()}>add stop</Button>
        </div>
    );

    function goBackToHome(){
        setTourEditMode(false);
    }

    function goToAddStop(){
        // console.log("creating stop")
        const stop = {
            // stop_id: "0", 
            stop_name: "New Stop",
            stop_desc: "description",
            stop_number: tours[tourIndex].stops.length,
            lat: "47.668679",
            lng: "-117.411120",
            media: [],
            media_desc: ""
        }
        tours[tourIndex].stops.push(stop);
        // setTourData(tours)
        // setStops(tours[tourIndex].stops)
        updateTour();
        // setRefresh(!refresh);
        // stops.push(stop);
        // setStopIndex(stops.length - 1); //this line doesn't do anything, but the page does not rerender without it for some reason...
    }

    function setNameFromInput(event){
        tours[tourIndex].name = event.target.value;
        updateTour();
    }

    function setDescriptionFromInput(event){
        tours[tourIndex].description = event.target.value;
        updateTour();
    }

    function updateTour(){
        // console.log("updating the tour")
        axios
        .put(
          'https://backend.gonzagatours.app/tour/t/' + tours[tourIndex]._id, 
          tours[tourIndex],
          {
              'headers': {
                  'Authentication': process.env.REACT_APP_API_KEY
              }
        })
        .then((response) => {
            // console.log("finished updating the tour")
            loadTours()
            setRefresh(!refresh)
        }
        )
        // setRefresh(true);
    }
}

export default EditTour;