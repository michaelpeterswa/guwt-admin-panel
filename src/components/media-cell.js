//this is a cell for displaying a piece of media within a list of media

import React, { useState} from "react";
import axios from "axios";

//import all the bootsrap stuff
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

//Media cell component
//parameters:
//  mediaIndex: index of the media we are showing
//  setMediaIndex: sets the index of the piece of media
//  media: the list of media
//  setDeleteMedia: setter for deleting media
const MediaCell = ({mediaIndex, media, setDeleteMedia}) => {

    return (
        //display the stop names, and delete, info, and edit buttons
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm={4}>
                    <img src={URL.createObjectURL(media[mediaIndex])} height="40" alt="Cannot Display"></img>
                </Form.Label>
                <Button column sm={4} onClick={() => deleteMediaButton()}>
                    Delete Stop
                </Button>
            </Form.Group>
        </Form>
    );

    function deleteMediaButton(){
        setDeleteMedia(true);
    }

}

export default MediaCell;