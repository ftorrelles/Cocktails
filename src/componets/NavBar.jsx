import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            className="img_logo"
                            src="/betho´s.png"
                            alt="Logo"
                        ></img>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
