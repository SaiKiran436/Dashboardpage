import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Widget from './Widget';
import useWidgetStore from '../store/widgetStore';

const WidgetGrid = () => {
  const { widgets, searchTerm } = useWidgetStore();

  const filteredWidgets = widgets.filter((widget) =>
    widget.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Row xs={1} sm={2} md={2} lg={2} className="g-3">
      {filteredWidgets.map((widget) => (
        <Col key={widget.id}>
          <Widget widget={widget} />
        </Col>
      ))}
    </Row>
  );
};

export default WidgetGrid;
