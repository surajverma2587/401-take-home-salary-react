import Alert from "react-bootstrap/Alert";

export const AlertBanner = ({ variant = "danger", message }) => {
  return (
    <Alert variant={variant} className="text-center">
      {message}
    </Alert>
  );
};
