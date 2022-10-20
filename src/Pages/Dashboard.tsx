import {Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideMenu from "../Components/side-menu/SideMenu";

const Dashboard = () => {
  return (
    <Container>
        <Row>
          <Col xs={2} id="sidebar-wrapper">  
              <SideMenu/>
          </Col>
          <Col  xs={12} md={10} id="page-content-wrapper">
            <Outlet /> 
          </Col>   
        </Row>
    </Container>
  )
}

export default Dashboard