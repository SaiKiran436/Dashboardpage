import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { X } from 'lucide-react';
import useWidgetStore from '../store/widgetStore';
// Import chart components
import CloudAccountChart from './charts/CloudAccountChart';
import CloudRiskChart from './charts/CloudRiskChart';
import ImageRiskChart from './charts/ImageRiskChart';
import ImageSecurityChart from './charts/ImageSecurityChart';

const Widget = ({ widget, category }) => {
  const removeWidget = useWidgetStore((state) => state.removeWidget);

  // Dynamically return the correct chart or fallback text
  const renderWidgetContent = (title) => {
    switch (title) {
      case 'Cloud Accounts':
        return <CloudAccountChart />;
      case 'Cloud Account Risk Assessment':
        return <CloudRiskChart />;
      case 'Image Risk Assessment':
        return <ImageRiskChart />;
      case 'Image Security Issues':
        return <ImageSecurityChart />;
      default:
        return (
          <div className="text-muted text-center">
            <p className="mb-0">No graph data available</p>
            <strong>{title}</strong>
          </div>
        );
    }
  };

  return (
    <Card className="h-100">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <strong>{widget.title}</strong>
        <Button
          size="sm"
          variant="light"
          onClick={() => removeWidget(category, widget.id)}
        >
          <X size={18} />
        </Button>
      </Card.Header>
      <Card.Body>
        {renderWidgetContent(widget.title)}
      </Card.Body>
    </Card>
  );
};

export default Widget;
