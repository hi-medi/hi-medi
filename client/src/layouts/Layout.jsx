import Navbar from "react-bootstrap/Navbar";

const Layout = () => {
  return (
    <Navbar
      className="bg-body-tertiary justify-content-center"
      style={{ backgroundColor: "blue" }}
    >
      <Navbar.Brand href="#home">
        <img
          src="/logo512.png"
          width="30"
          height="30"
          className="d-inline-block align-center"
          alt="React Bootstrap logo"
          onClick={() => window.location.reload()}
        />
      </Navbar.Brand>
    </Navbar>
  );
};
export default Layout;
