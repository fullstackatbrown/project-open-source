import React , { useState, useEffect } from 'react'; 
import { 
    Card,
    Button, 
    CardTitle, 
    CardText,
    CardImg,
    CardBody,
    CardSubtitle
} from 'reactstrap';
import Collaborator from "./Collaborator";
import axios from 'axios';

function Project(props) {
    var collaborators = []
    props.members.map(member => {
        if (member.project_id == props.data.id) {
          collaborators.push(member)
        }
      })
      
    return(

        <div className="project">
        <Card body inverse color="gray-dark">
        {/* <CardTitle style={{color:"#FF9988"}} tag="h3">{props.name}</CardTitle> */}
        <CardTitle style={{color:"#FF9988"}} tag="h3">{props.data.name}</CardTitle>
          {/* <CardImg top width="10%" src={props.image} alt="Card image cap" /> */}

          <div>
            <CardImg id="proj-img"
            top src="https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg"
            alt="Card image cap" />
            {/* <CardBody style={{color:"#B2BDC8"}}> */}
            {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{props.year}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.email}</CardSubtitle> */}
            <br></br>
            <br></br>
            <CardText>{props.data.description}</CardText>
          </div>
          <br></br>

          <div className="collaborators">
            {collaborators.map(data => Collaborator(data))}
          </div>
          <br></br>
        </Card>
      </div>
    );
}

export default Project;