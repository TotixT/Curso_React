import keyConceptsImage from '../../assets/images/key-concepts.png';

function Header(){
    return(
        <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>E-Commerce in React and SnipCard</h1>
        <p>React de Artemis / Santiago Lopez</p>
      </header>
    );
    
}

export default Header;