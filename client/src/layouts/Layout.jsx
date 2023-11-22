import Navbar from "react-bootstrap/Navbar";

const Layout = () => {
  return (
    <Navbar
      className="justify-content-center"
      style={{
        background: "linear-gradient(90deg, #03a9f4, #1A2DBC)",
      }}
    >
      <Navbar.Brand href="#home">
        <img
          src="/logo.png"
          width="80"
          height="40"
          className="d-inline-block align-center"
          alt="React Bootstrap logo"
          onClick={() => window.location.replace("/")}
        />
      </Navbar.Brand>
    </Navbar>
  );
};
export default Layout;
