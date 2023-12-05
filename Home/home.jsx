import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./home.css"
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function CompHome() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Verdulería Tutti-Frutti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ver todos los productos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Verduras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Frutas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Sobre nosotros</Nav.Link>
            <Nav.Link href="/admin">Admin Productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <div>
        <div>
            <h1>Bienvenidos a Verdulería Tutti-Frutti</h1>
            <h5>Pedí desde la comodidad de tu casa</h5>
            <p>Conocé todas nuestras ofertas!</p>
        </div>
    </div>

    <div className='borderCarousel'>
        <Carousel className="carrousel">
            <Carousel.Item className="carrousel-img">
            <img src="img/carrousel/banner.png" alt="Imagen1" />
            </Carousel.Item>
            <Carousel.Item className="carrousel-img">
            <img src="img/carrousel/banner2.png" alt="Imagen2" />
            </Carousel.Item>
            <Carousel.Item className="carrousel-img">
            <img src="img/carrousel/banner3.png" alt="Imagen3" />
            </Carousel.Item>
        </Carousel>
    </div>


        <div>
            <h2 className='productos'>Nuestros productos más vendidos</h2>
        </div>


    <CardGroup className="cards">
      <Card>
        <Card.Img className="card-img" variant="top" src="img/carrousel/tomate.png" alt="imagen"/>
        <Card.Body>
          <Card.Title>Tomate</Card.Title>
          <Card.Text>
          Encontrá este producto en VERDURAS
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img className="card-img" variant="top" src="img/carrousel/lechuga.png" alt="imagen" />
        <Card.Body>
          <Card.Title>Lechuga</Card.Title>
          <Card.Text>
          Encontrá este producto en VERDURAS
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img className="card-img" variant="top" src="img/carrousel/cebolla.png" alt="imagen" />
        <Card.Body>
          <Card.Title>Cebolla</Card.Title>
          <Card.Text>
          Encontrá este producto en VERDURAS
          </Card.Text>
        </Card.Body>
        
        </Card>
      <Card>
        <Card.Img className="card-img" variant="top" src="img/carrousel/banana.png" alt="imagen" />
        <Card.Body>
          <Card.Title>Banana</Card.Title>
          <Card.Text>
            Encontrá este producto en FRUTAS
          </Card.Text>
        </Card.Body>
        </Card>   
    </CardGroup>

    <div>
        <h3 className="comprar">¿Cómo comprar?</h3>
    </div>

    <Container>
    <Row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded />
        </Col>
    </Row>
    </Container>
      
    <div>
      <h3 categoria>
        Productos por categoría
      </h3>
    </div>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src="img/carrousel/verduras.png" alt="imagen" />
        <Card.Body>
          <Card.Title>Verduras</Card.Title>
          <Card.Text>
            Ver todas las VERDURAS
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="img/carrousel/frutas.png" alt="imagen" />
        <Card.Body>
          <Card.Title>Frutas</Card.Title>
          <Card.Text>
            Ver todas las FRUTAS
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );

    <footer>
      <div>
        <h3 className='title-footer'>
          Verdulería Tutti-Frutti
        </h3>
      </div>

      <div className="footer">
        <p>Productos</p>
        <p>Home</p>
        <p>Contacto</p>
      </div>
    </footer>

    </>


  )
}

export default CompHome;
