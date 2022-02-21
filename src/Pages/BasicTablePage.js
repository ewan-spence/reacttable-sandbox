import { useMemo } from "react";
import { Container } from "react-bootstrap";
import BasicTable from "../Components/Tables/BasicTable";
import Title from "../Components/Title";

export default function BasicTablePage(props) {
  const data = useMemo(() => [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ], []);

  const PriceCellRenderer = ({ value }) => `£${value}`;

  const columns = useMemo(() => [
    { Header: "Make", accessor: 'make' },
    { Header: "Model", accessor: "model" },
    {
      Header: "Car Price",
      Cell: PriceCellRenderer,
      accessor: "price"
    }
  ], []);

  return <Container style={{ height: "40vh" }}>
    <Title>Basic Table</Title>
    The following is a simple React Table rendered using React-Bootstrap's Table component.
    <br />
    <br />
    <BasicTable data={data} columns={columns} striped bordered hover size="sm" />
  </Container>
}