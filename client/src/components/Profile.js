import React from "react";
import { 
    Card,
    Button, 
    CardTitle, 
    CardText,
    CardImg,
    CardBody,
    CardSubtitle
} from 'reactstrap';

function Profile(props) {
  // let cardBg = <Card body inverse color="gray-dark"></Card>;
  // if (props.admin) {

  // }
    return(
        <div className="profile">
        <Card body inverse color={props.admin == 1 ? 'indigo' : 'gray-dark'}>
          {/* <CardImg top width="10%" src={props.image} alt="Card image cap" /> */}
          <CardImg className="rounded-circle" top width="10%" src={props.image_path} alt="Card image cap" />
          {/* <CardBody style={{color:"#B2BDC8"}}> */}
          <br></br>
          <div>
            <CardTitle style={{color:"#FF9988", display:"inline"}} tag="h3">{props.name}</CardTitle>
            <CardSubtitle style={{display:"inline"}} tag="h6" className="mb-2 text-muted">  c/o {props.class_year}</CardSubtitle>
          </div>
          <br></br>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Email: {props.email}</CardSubtitle>
            <CardText>{props.bio}</CardText>
            {/* <CardText> {props.description}</CardText> */}
          {/* </CardBody> */}
        </Card>
      </div>
    );
}

export default Profile;