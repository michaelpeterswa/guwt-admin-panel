//Component for the member view 
//accessed trhough the OrganizationMainPage component

import React, { useState } from "react";

// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProspectiveMemberCell from "../components/prospective-moderator-cell";
import ModeratorCell from "../components/moderator-cell"

//import the css module
// import styles from "../css_modules/generalStyles.module.css";

const MemberView = ({organizationData}) => {

    const [setRefresh] = useState(false); //call this when you want to rerender. kinda hacky but it works

    return (
        <>
        
        <Card style={{ width: '48rem', marginTop: '1%' }}>
            <Card.Header>Admin: {" " + organizationData.admin}</Card.Header>
        </Card>
        <Card style={{ width: '48rem', marginTop: '1%' }}>
            <Card.Header>Current Moderators</Card.Header>
            <Card.Body>
                {organizationData.moderators.map((member, i) => (
                    <ModeratorCell moderatorIndex={i} organizationData={organizationData} setRefresh={setRefresh}/>
                ))}
            </Card.Body>
        </Card>
        <Card style={{ width: '48rem', marginTop: '1%' }}>
            <Card.Header>Prospective Moderators</Card.Header>
            <Card.Body>
                {organizationData.prospectives.map((member, i) => (
                    <ProspectiveMemberCell prospectiveIndex={i} organizationData={organizationData} setRefresh={setRefresh}/>
                ))}
            </Card.Body>
        </Card>
    </>
    );
}

export default MemberView;