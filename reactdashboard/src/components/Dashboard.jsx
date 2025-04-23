import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AddWidgetModal from './AddWidgetModal';
import DashboardHeader from './DashboardHeader';
import SectionGrid from './SectionGrid';


const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container fluid className=" bg-light min-vh-100">
      <DashboardHeader onAddClick={() => setShowModal(true)} />
      <SectionGrid title="CSPM Executive Dashboard" category="CSPM" onAddClick={() => setShowModal(true)} />
      <SectionGrid title="CWPP Dashboard" category="CWPP" onAddClick={() => setShowModal(true)} />
      <SectionGrid title="Registry Scan" category="Registry" onAddClick={() => setShowModal(true)}/>
      <AddWidgetModal show={showModal} handleClose={() => setShowModal(false)} />
    </Container>
  );
};

export default Dashboard;
