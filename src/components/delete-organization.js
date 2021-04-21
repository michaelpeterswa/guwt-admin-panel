//this component is to delete an organization

import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


//Delete Organization Component
//parameters: the organization data, and a setter on whether to show the organization or not
const DeleteOrganization = ({organizationData, setOrgChosen}) => {

    const [deleteOrgAlert, setDeleteOrgAlert] = useState(false);
    
    return (
        <>
            <Button variant="secondary" onClick={() => setDeleteOrgAlert(true)}>Delete Organization</Button>
            <Modal show={deleteOrgAlert} animation={true}>
                <Modal.Body>
                    <p>Are you really, really, sure you want to delete this organization??</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setDeleteOrgAlert(false)} variant="secondary">Cancel</Button>
                    <Button type="button" variant="danger" onClick={() => deleteTheOrganization()} >
                            Yes, Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

    function deleteTheOrganization(){
        let url = "https://backend.gonzagatours.app/api/organization/"
        url = url + organizationData._id
        // console.log("getting tour data to delete")

        //get all the tours for an organization so that we can delete them
        axios.get('https://backend.gonzagatours.app/tour/tours/', {
            'headers': {
              'Authentication': process.env.REACT_APP_API_KEY
            },
            responseType: 'json',
          })
          .then(response => {
            var data = []
            var group
            for(group in response.data.data){
              var orgName = response.data.data[group].organization;
              if(orgName === organizationData.name){
                data.push(response.data.data[group])
              }
            }
            deleteTours(data);
        })

        //delete the organization
        // console.log("deleting organization")
        axios.delete(
            url,
            {
                'headers': {
                    'Authentication': process.env.REACT_APP_API_KEY
                }
            }).then(
                setOrgChosen(false) //set the organization chosen to be false since we have deleted the chosen org
            ).catch(function (error) {
                // console.log(error);
            });
    }

    //delete the tours
    function deleteTours(tourData){
        tourData.map((tour, i) => (
            
            deleteMedia(tour)
        ))

        tourData.map((tour, i) => (
            
            deleteTour(tour)
        ))
            
    }

    function deleteTour(tour){
        // console.log("deleting tour")
        try{
            axios.delete(
                "https://backend.gonzagatours.app/tour/t/" + tour._id,
            {
                'headers': {
                    'Authentication': process.env.REACT_APP_API_KEY
                }
            }
            )
        }catch{
            // console.log("failed deleting tour")
        }
    }

    function deleteMedia(tour){
        // console.log("deleting media")
        //get all the media for a tour so that we can delete them
        var data = []
        axios.get('https://backend.gonzagatours.app/media/ms/', {
            'headers': {
            'Authentication': process.env.REACT_APP_API_KEY
            },
            responseType: 'json',
        })
        .then(response => {
            var group
            for(group in response.data.data){
                var tourID = response.data.data[group].tour_id;
                if(tourID === tour._id){
                    data.push(response.data.data[group])
                }
            }
        })

        // console.log(data.length)

        data.map((media, i) => (
            axios.delete(
                "https://backend.gonzagatours.app/media/m/" + media._id,
            {
                'headers': {
                    'Authentication': process.env.REACT_APP_API_KEY
                }
            }
            )
        ))
    }
}

export default DeleteOrganization;