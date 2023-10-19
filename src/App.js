import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { Banner } from "./components/Banner";
import { AlertBanner } from "./components/AlertBanner";
import { Result } from "./components/Result";

export const App = () => {
  return (
    <Container className="my-5">
      <Stack gap={3}>
        <Banner />
        <AlertBanner message="Please complete the form!" />
        <Result />
      </Stack>
    </Container>
  );
};
