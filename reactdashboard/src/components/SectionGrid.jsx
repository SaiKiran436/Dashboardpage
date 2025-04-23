import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import useWidgetStore from '../store/widgetStore';
import Widget from './Widget';

const SectionGrid = ({ title, category, onAddClick }) => {
  const { sections, searchTerm } = useWidgetStore();

  const widgets = (sections[category] || []).filter(w =>
    w.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="mb-2 shadow-lg rounded-4 border border-5 w-100 h-50 bg-white">
      <Card.Header className="d-flex justify-content-between align-items-center bg-white rounded-top-4 ">
        <h5 className="mb-0 fw-semibold">{title}</h5>
      </Card.Header>
      <Card.Body>
        <Row xs={1} sm={2} md={3} className="">
          
          {widgets.map(widget => (
            <Col key={widget.id}>
              <Widget widget={widget} category={category} />
            </Col>
          ))}

          
          <Col>
          <div className="h-100 d-flex justify-content-center align-items-center border rounded-4 bg-light py-4">
           <Button variant="outline-primary" onClick={onAddClick}>
            + Add Widget
           </Button>
          </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SectionGrid;
