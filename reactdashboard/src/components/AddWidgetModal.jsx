import React, { useState } from 'react';
import { Modal, Button, Tabs, Tab, Form } from 'react-bootstrap';
import useWidgetStore from '../store/widgetStore';
import { widgetOptions } from '../data/widgetData';

const AddWidgetModal = ({ show, handleClose }) => {
  const addWidget = useWidgetStore((state) => state.addWidget);
  const [activeTab, setActiveTab] = useState('CSPM');
  const [selectedWidgets, setSelectedWidgets] = useState({});

  const toggleWidget = (category, widget) => {
    const key = `${category}-${widget.id}`;
    setSelectedWidgets((prev) => ({
      ...prev,
      [key]: prev[key] ? null : { ...widget, category }
    }));
  };

  const handleConfirm = () => {
    Object.values(selectedWidgets).forEach((widget) => {
      if (widget) {
        addWidget(widget.category, {
          ...widget,
          id: `${widget.category}-${widget.id}-${Date.now()}`
        });
      }
    });
    setSelectedWidgets({});
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} fullscreen className="p-2">
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>Add Widget</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="fw-bold mb-3">Personalise your dashboard by adding the following widget</p>
        <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          {Object.keys(widgetOptions).map((category) => (
            <Tab eventKey={category} title={category} key={category} className="pt-3">
              {widgetOptions[category].map((widget) => {
                const key = `${category}-${widget.id}`;
                return (
                  <Form.Check
                    type="checkbox"
                    key={key}
                    label={widget.title}
                    checked={!!selectedWidgets[key]}
                    onChange={() => toggleWidget(category, widget)}
                    className="mb-2"
                  />
                );
              })}
            </Tab>
          ))}
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddWidgetModal;
