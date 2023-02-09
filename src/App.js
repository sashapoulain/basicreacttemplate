import Top from "./Top";
import { Container, Row, Col } from "reactstrap";
function App() {
  let topInfo = { menu: "Menüler", logo: "Logo" };
  return (
    <div>
      <Container fluid>
        <Row className="bg-dark">
          <Col xl="12">
            <Top info={topInfo}></Top>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
