import Card from "react-bootstrap/Card";

export const Banner = () => {
  return (
    <Card className="text-center py-4">
      <Card.Title className="mb-4 fs-2">Take Home Salary Calculator</Card.Title>
      <Card.Subtitle className="text-muted">
        Use this tool to calculate your take home salary for the tax year
        2021-2022 and 2022-2023
      </Card.Subtitle>
    </Card>
  );
};
