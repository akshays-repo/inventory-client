import { NextPage } from "next"
import { Col, Row } from "react-bootstrap"
import SummaryStats from "./summaryStats"

const HomePage: NextPage = () => {
  return <div>


   <Row>
    <Col>
    <SummaryStats/>
    </Col>
    </Row> 
  </div>
}
export default HomePage
