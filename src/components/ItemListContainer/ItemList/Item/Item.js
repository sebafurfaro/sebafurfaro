import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { Link } from 'react-router-dom';


const Item = ({ data }) => {
  return (
    <Card>
      <div className="categorySnap">{data.category}</div>
      <div className="cardImgContent">
        <CardImg top width="100%" src={data.img} alt={data.title}/>
      </div>
      <CardBody>
        <div className="card-top">
          <CardTitle tag="h4">
            {data.title}
          </CardTitle>
          <CardSubtitle tag="h6" className="my-2">
            <span className="price">AR$ {data.price}</span>
          </CardSubtitle>
        </div>
        <CardText>
          {data.description}
        </CardText>
        <Link className="btn-card" to={`/item/${data.id}`}>Ver mas</Link>
      </CardBody>
    </Card>
  );
};

export default Item;
