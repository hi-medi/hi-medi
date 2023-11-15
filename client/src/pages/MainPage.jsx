import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const MainPage = () => {
  const target = useRef(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const currentPage = useRef(1);
  const totalPages = useRef(100);
  const limit = 9;

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
        `http://localhost:9000/api/v1/mandara?currentPage=${currentPage.current}&limit=${limit}`
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

      // setPage(page + 1);
      getList();
      currentPage.current += 1; // 이렇게 해줘야 page 숫자가 올라간다.
    });
  });

  return (
    <>
      <Container>
        <Row>
          {list &&
            list.map((item, index) => (
              <Col xs={10} md={4} key={index} className="mx-auto mb-4">
                <Card className="card">
                  <Card.Img
                    src={item.url}
                    alt="만다라 이미지"
                    className="card-image-top"
                  />
                  <Card.Body>
                    <Card.Text>{item.createDate}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <div id="scrollEnd" ref={target}></div>
    </>
  );
};
export default MainPage;