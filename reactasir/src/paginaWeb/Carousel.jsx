import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"25%"}}>
      <Carousel.Item>
        <img width="600px" src="alcazaba_almeria.png" alt="Alcazaba de Almería"/>
        <Carousel.Caption>
          <h3>Alcazaba de Almeria</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Alcazaba_de_M%C3%A1laga_desde_el_puerto_edited.JPG/426px-Alcazaba_de_M%C3%A1laga_desde_el_puerto_edited.JPG" alt="Alcaza de Malaga"/>
        <Carousel.Caption>
          <h3>Alcazaba de Malaga</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="/alhambra.jpg" alt="Alhambra" />
        <Carousel.Caption>
          <h3>Alhambra de Granada</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;