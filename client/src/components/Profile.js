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
    return(

        <div>
        <Card body inverse color="gray-dark">
          <CardImg top width="10%" src={props.image} alt="Card image cap" />
          <CardBody style={{color:"#B2BDC8"}}>
            <CardTitle tag="h3">{props.info.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.info.year}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.info.email}</CardSubtitle>
            <CardText> {props.info.description}</CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      </div>
    );
}

export default Profile;