import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { Banner } from "./components/Banner";
import { Result } from "./components/Result";
import { Calculator } from "./components/Calculator";
import { useState } from "react";

export const App = () => {
  const [results, setResults] = useState();

  const onSuccess = (result) => {
    setResults(result);
  };

  return (
    <Container className="my-5">
      <Stack gap={3}>
        <Banner />
        <Calculator onSuccess={onSuccess} />
        {results && <Result results={results} />}
      </Stack>
    </Container>
  );
};
