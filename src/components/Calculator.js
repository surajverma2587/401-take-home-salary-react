import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

export const Calculator = () => {
  return (
    <Stack className="card p-3" gap={3}>
      <h3 className="text-center">Calculator</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="taxYear">Select Tax Year</Form.Label>
          <Form.Select id="taxYear">
            <option value="2021-2022">2021-2022</option>
            <option value="2022-2023">2022-2023</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="annualSalary">Gross Annual Salary</Form.Label>
          <Form.Control type="number" id="annualSalary" />
          <Form.Text className="text-danger">
            Please enter a valid annual salary.
          </Form.Text>
        </Form.Group>
      </Form>
    </Stack>
  );
};
