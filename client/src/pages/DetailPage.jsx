import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const { url, userName, comment, createDate } = location.state;
  return (
    <Container style={{ marginTop: "50px", height: "100vh" }}>
      <Row>
        <Col md={8}>
          <Image src={url} style={{ width: "100%", height: "60vh" }} />
        </Col>
        <Col md={4}>
          <h1>{userName}</h1>
          <h2>{comment}</h2>
          <h6>{createDate}</h6>
        </Col>
      </Row>
    </Container>
  );
};
export default DetailPage;
