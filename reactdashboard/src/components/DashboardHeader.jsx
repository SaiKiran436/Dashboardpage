import React from 'react';
import { Row, Col, InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import useWidgetStore from '../store/widgetStore';

const DashboardHeader = ({ onAddClick }) => {
  const setSearchTerm = useWidgetStore((state) => state.setSearchTerm);
  const selectedRange = useWidgetStore((state) => state.selectedRange);
  const setSelectedRange = useWidgetStore((state) => state.setSelectedRange);

  return (
    <Row className="align-items-center mb-1 mt-1 w-100">
      <Col xs={12} md={3}>
        <h6 className="text-black px-2">Dashboard V2</h6>
      </Col>

      <Col xs={1} md={5} className="d-flex justify-content-right gap-2 ">
        <InputGroup>
          <FormControl
            placeholder="Search anything..."
            className="gap-2"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </Col>

      <Col xs={3} md={4} className="d-flex justify-content-md-end gap-2">
      <Form.Select className="w-50" value={selectedRange}onChange={(e) => setSelectedRange(e.target.value)}>
        <option>Last 2 days</option>
        <option>Last 7 days</option>
        <option>Last 30 days</option>
      </Form.Select>
        <small><Button onClick={onAddClick}>Add Widget</Button></small>
      </Col>
    </Row>
  );
};

export default DashboardHeader;
