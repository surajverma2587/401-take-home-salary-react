import Stack from "react-bootstrap/Stack";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Result = ({ results }) => {
  console.log(results);
  return (
    <Stack gap={3} className="card p-3">
      <h3 className="text-center">Your Result</h3>
      <ListGroup>
        <ListGroup.Item>
          <Row>
            <Col>Annual Salary</Col>
            <Col className="text-end">{results.annualSalary}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Taxable Income</Col>
            <Col className="text-end">{results.taxableIncome}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Tax Percentage</Col>
            <Col className="text-end">{results.taxPercentage}%</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Tax Payable</Col>
            <Col className="text-end">{results.taxPayable}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item className="bg-light fw-semibold fs-5">
          <Row>
            <Col>Take Home Salary</Col>
            <Col className="text-end">{results.takeHomeSalary}</Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Stack>
  );
};
