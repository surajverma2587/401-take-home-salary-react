import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { calculateResults } from "../utils/calculator";

export const Calculator = ({ onSuccess }) => {
  const [taxYear, setTaxYear] = useState("2021-2022");
  const [annualSalary, setAnnualSalary] = useState("");
  const [error, setError] = useState(false);

  const handleTaxYearChange = ({ target }) => {
    setTaxYear(target.value);
  };

  const handleAnnualSalaryChange = ({ target }) => {
    setAnnualSalary(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!annualSalary) {
      // set error
      setError(true);
    } else {
      // unset error
      setError(false);

      // calculate for tax year and annual salary
      const result = calculateResults(taxYear, annualSalary);

      onSuccess(result);
    }
  };

  return (
    <Stack className="card p-3" gap={3}>
      <h3 className="text-center">Calculator</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="taxYear">Select Tax Year</Form.Label>
          <Form.Select
            id="taxYear"
            onChange={handleTaxYearChange}
            value={taxYear}
          >
            <option value="2021-2022">2021-2022</option>
            <option value="2022-2023">2022-2023</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="annualSalary">Gross Annual Salary</Form.Label>
          <Form.Control
            type="number"
            id="annualSalary"
            onChange={handleAnnualSalaryChange}
            value={annualSalary}
          />
          {error && (
            <Form.Text className="text-danger">
              Please enter a valid annual salary.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="text-center mb-3">
          <Button variant="success" type="submit">
            Calculate
          </Button>
        </Form.Group>
      </Form>
    </Stack>
  );
};
