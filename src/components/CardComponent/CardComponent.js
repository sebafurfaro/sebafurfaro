import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardComponent = ({copyright, date, title, img, sintesis}) => {
  return (
    <div>
      <Card style={{marginTop: "2rem"}}>
        <Image src={img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className="date">{date}</span>
            <span className="copyright">{copyright}</span>
          </Card.Meta>
          <Card.Description>
            {sintesis}
          </Card.Description>
        </Card.Content>
    </Card>
    </div>
  );
};


export default CardComponent;
