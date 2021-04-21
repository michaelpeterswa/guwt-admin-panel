//component for the media views
//accessed through the OrganizationMainPage component
import React, { useState, useEffect } from "react";
import axios from "axios";
// import pic from '../images/college-hall.jpg'
import Button from "react-bootstrap/Button";
// import ImageUploader from 'react-images-upload';
import Card from "react-bootstrap/Card";

import MediaCell from '../components/media-cell'
import {Row, Col, Container } from "react-bootstrap";


//import the css module
// import styles from "../css_modules/generalStyles.module.css";

const MediaView = ({tour_id, stop_id, stops, stopIndex}) => {
    // const randomTestText = "Images Available";
    // const [isClicked, setisClicked] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [deleteMedia, setDeleteMedia] = useState(false);
    // const [open, setOpen] = React.useState(false);
    const [image, setImage] = useState({ preview: "", raw: "" })
    // const [refresh, setRefresh] = useState(false);
    const [mediaIndex, setMediaIndex] = useState(0);
    // const [test, setTest] = useState("0")
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        getMedia();
      });

    if(deleteMedia === true){
        deleteMediaFunc();
        setDeleteMedia(false);
    }

    const onFileChange = event => {

        if (event.target.files.length) {
            setImage({
                preview: URL.createObjectURL(event.target.files[0]),
                raw: event.target.files[0]
            });   
        }
            

    };

    const handleUpload = async e => {        
        // e.preventDefault();
        // console.log("uploading");

        var data = new FormData();
        data.append('media', image.raw); //the FormData is not getting the appropriate image in time for the post to fire
        data.append('tour_id', tour_id);
        data.append('stop_id', stop_id);
        // console.log(data.keys())
        axios
            .post(
            'https://backend.gonzagatours.app/media', 
            data,
            {
                'headers': {
                    'Authentication': process.env.REACT_APP_API_KEY,
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
            .then((response) => {
                if (response.status === 201){
                    // console.log("passed")
                    getMedia()
                }
                else{
                    // console.log("failed")
                }
            }
            )
            .catch((error) =>{
                // console.log(error.message)
            }) 
    };

    return (
        <Container>
            <Row>
                <Col>
                    <input type="file" onChange={onFileChange}/>
                    <img src={image.preview} height="40" alt=""></img>
                    <Button variant="outline-primary" onClick={()=>handleUpload()}>upload</Button>
                </Col>
            </Row>
            <Row style={{marginTop: '1%'}}>
                <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            {selectedFiles.map((tour, i) => (
                                    <MediaCell mediaIndex={i} media={selectedFiles} setDeleteMedia={setDeleteMedia} setMediaIndex={setMediaIndex} setSelectedIndex={setSelectedIndex}/>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    {selectedIndex < selectedFiles.length && 
                        <img src={"https://guwt-media.s3-us-west-2.amazonaws.com/" + selectedFiles[selectedIndex].s3_id + ".jpg"} height="300" alt=""></img>
                    }
                </Col>
            </Row>
        </Container>
    );

    function deleteMediaFunc(){
        let url = "https://backend.gonzagatours.app/media/m/"
        url = url + selectedFiles[mediaIndex]._id
        axios.delete(
          url,
          {
              'headers': {
                  'Authentication': process.env.REACT_APP_API_KEY
              }
          }
        )
        getMedia()
    }

    function getMedia(){
        axios.get('https://backend.gonzagatours.app/media/ms/', {
            'headers': {
            'Authentication': process.env.REACT_APP_API_KEY
            },
            responseType: 'json',
        })
        .then(response => {
            var data = []
            var group
            for(group in response.data.data){
                var tourID = response.data.data[group].tour_id;
                var stopID = response.data.data[group].stop_id;
                if(stopID === stop_id && tourID === tour_id){
                    data.push(response.data.data[group])
                }
            }
            stops[stopIndex].media = []
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                // console.log("test7", element)
                var temp = {
                    id: element.s3_id,
                    s3_loc: element.s3_loc
                }
                stops[stopIndex].media.push(temp);
                
            }
            setSelectedFiles(data)
        })
    }


    // function displayMedia(){
    //     setisClicked(!isClicked);
    // }
}

export default MediaView;