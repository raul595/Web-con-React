import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/alcazaba_almeria.png" />
        <Card.Body>
          <Card.Title>Alcazaba de Almería</Card.Title>
          <Card.Text>
            Un monumento histórico en Almería, famoso por su arquitectura.
          </Card.Text>
          <Button variant="primary">Visitar</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/catedral_almeria.png" />
        <Card.Body>
          <Card.Title>Catedral de Almería</Card.Title>
          <Card.Text>
            Catedral renacentista con fortaleza, ubicada en el corazón de Almería.
          </Card.Text>
          <Button variant="primary">Conocer más</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/cabo_gata.jpg" />
        <Card.Body>
          <Card.Title>Parque Natural Cabo de Gata</Card.Title>
          <Card.Text>
            Un parque natural con playas y paisajes únicos en Almería.
          </Card.Text>
          <Button variant="primary">Explorar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Tarjeta;

