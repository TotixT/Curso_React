function Concept(props){
    return (
        <li className="concept">
          <img src={props.image} alt={props.title} />
          <h2>{props.title}</h2>
          <p>${props.price}</p>
          <a>Add to Cart</a>
        </li>
    );
}

export default Concept;