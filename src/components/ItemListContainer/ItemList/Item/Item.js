import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({data}) => {
  return (
    <Card>
      <img src={data.pictureUrl} alt={data.title} className="img-fluid" />
      <Card.Content>
        <Card.Header>
          <Link to={`/item/${data.id}`}>
            {data.title}
          </Link>
        </Card.Header>
        <Card.Meta>
          <span className="date">{data.category}</span>
          <span className="price">{data.price}</span>
        </Card.Meta>
        <Card.Description>
          {data.description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Item;
