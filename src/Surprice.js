import React from 'react';
import {
  Card, Col, CardText,
  CardTitle, Row, Button
} from 'reactstrap';

class Surprice extends React.Component {
  render() {
    return (
      <div>
        <Row style={{ 'width': `100%` }} >
          <Col sm="6" style={{ 'maxWidth': `32%` }} variant="outlined">
            <Card body style={{ 'display': `inherit`, 'margin': `15px`, 'background': `antiquewhite` }}>
              <CardTitle style={{ 'color': `red` }}>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button className="btn btn-success">Go</Button>
            </Card>
          </Col>
          <Col sm="6" style={{ 'maxWidth': `32%` }}>
            <Card body style={{ 'display': `inherit`, 'margin': `15px`, 'background': `aquamarine` }}>
              <CardTitle style={{ 'color': `red` }}>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button color="info">Go</Button>
            </Card>
          </Col>
          <Col sm="6" style={{ 'maxWidth': `32%` }}>
            <Card body style={{ 'display': `inherit`, 'margin': `15px`, 'background': `aquamarine` }}>
              <CardTitle style={{ 'color': `red` }}>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button color="danger">Go</Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Surprice;


