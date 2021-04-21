//this is a cell for displaying a piece of media within a list of media

import React from "react";
// import axios from "axios";

//import all the bootsrap stuff
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";

//Media cell component
//parameters:
//  mediaIndex: index of the media we are showing
//  setMediaIndex: sets the index of the piece of media
//  media: the list of media
//  setDeleteMedia: setter for deleting media
const MediaCell = ({mediaIndex, media, setDeleteMedia, setMediaIndex, setSelectedIndex}) => {

    return (
        //display the stop names, and delete, info, and edit buttons
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm={7}>
                    <img src={"https://guwt-media.s3-us-west-2.amazonaws.com/" + media[mediaIndex].s3_id + ".jpg"} height="40" alt="Cannot Display"></img>
                </Form.Label>
                <Button variant="outline-danger" style={{marginRight: '1%'}} column sm={4} onClick={() => deleteMediaButton()}>
                    Delete Media
                </Button>
                <Button variant="outline-info" onClick={() => viewMedia()}>
                    view
                </Button>
            </Form.Group>
        </Form>
    );

    function viewMedia(){
        // console.log("going in")
        setSelectedIndex(mediaIndex)
    }

    function deleteMediaButton(){
        setMediaIndex(mediaIndex);
        setDeleteMedia(true);
    }

}

export default MediaCell;