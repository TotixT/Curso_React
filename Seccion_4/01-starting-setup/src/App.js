import Camisa from './assets/images/Camisa.png';
import Pantalon from './assets/images/Pantalon.png';
import Zapatos from './assets/images/Zapatos.png';
import Medias from './assets/images/Medias.png';
import Corbata from './assets/images/Corbata.png';
import Gojo from './assets/images/Gojo.jpg';
import Header from './components/Header/header';
import Concept from './components/Concept/productData';

const concepts = [
  {
    title: 'Camisa',
    image: Camisa,
    price:
      25,
  },
  {
    title: 'Pantalon',
    image: Pantalon,
    price:
      30,
  },
  {
    title: 'Zapatos',
    image: Zapatos,
    price:
      15,
  }, 
  {
    title: 'Medias',
    image: Medias,
    price:
      7,
  },
  {
    title: 'Corbata',
    image: Corbata,
    price:
      9,
  },
  {
    title: 'Gojo Satoru',
    image: Gojo,
    price:
      999999,
  },
];

function App() {
  return (
    <div>
      <Header />
      <ul id="concepts">
        {concepts.map((dato) => (
          <Concept image={dato.image} title={dato.title} price={dato.price} />
          // Dinamico aca mismo
          // <li className="concept">
          //   <img src={dato.image} alt={dato.title} />
          //   <h2>{dato.title}</h2>
          //   <p>{dato.price}</p>
          // </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
