import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardProduct = ({ data }) => (
  <Card>
    <Image src={data.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta style={{ display: 'flex' }}>
        <span className='date'>{data.price}</span>
        <span className="stock">Stock: {data.stock}</span>
      </Card.Meta>
      <Card.Description>
        {data.description}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardProduct;