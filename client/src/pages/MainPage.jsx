import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import CardModal from "../components/CardModal";

const MainPage = () => {
  const target = useRef(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const currentPage = useRef(1);
  const totalPages = useRef(100);
  const limit = 9;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  const getList = () => {
    if (currentPage.current > totalPages.current) {
      console.log("끝트트트트트");
      return;
    }
    setLoading(true);
    console.log("page: ", currentPage.current);
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/v1/mandara?currentPage=${currentPage.current}&limit=${limit}`
      )
      .then((resp) => {
        console.log(resp);
        setList((prevList) => [...prevList, ...resp.data.data.result]);
        totalPages.current = resp.data.data.totalPages;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (loading) return;

      if (currentPage.current === 1) {
        getList();
      } else {
        setTimeout(() => {
          console.log("Wait a minute");
          getList();
        }, 500);
      }
      currentPage.current += 1; // 이렇게 해줘야 page 숫자가 올라간다.
    });
  });

  const handleClose = () => setShowModal(false);
  const gotoDetail = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  // const gotoDetail = ({ item }) => {
  //   navigate("/detail", {
  //     state: {
  //       url: `${item.url}`,
  //       userName: `${item.userName}`,
  //       comment: `${item.comment}`,
  //       createDate: `${item.createDate}`,
  //     },
  //   });
  // };

  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          {list &&
            list.map((item, index) => (
              <Col xs={10} md={4} key={index} className="mx-auto mb-4">
                <Card className="card" onClick={() => gotoDetail(item)}>
                  <Card.Img
                    src={item.url}
                    alt="만다라 이미지"
                    className="card-image-top"
                  />
                  <Card.Body>
                    <Card.Title>{item.userName}</Card.Title>
                    <Card.Text>{item.comment}</Card.Text>
                    <Card.Text>{item.createDate}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <div id="scrollEnd" ref={target}></div>
      {selectedItem && (
        <CardModal
          show={showModal}
          handleClose={handleClose}
          item={selectedItem}
        />
      )}
    </>
  );
};
export default MainPage;
