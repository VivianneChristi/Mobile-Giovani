import "./card.css";

const Card = () => {
  const cardData = [
    {
      titulo: "Card 1",
      descripcion: "Este é o primeiro card",
      link: "#",
    },
    {
      titulo: "Card 2",
      descripcion: "Este é o segundo card",
      link: "#",
    },
    {
        titulo: "Card 3",
        descripcion: "Este é o terceiro card",
        link: "#",
      },
    {
        titulo: "Card 4",
        descripcion: "Este é o quarto card",
        link: "#",
    },
  ];
  console.log(cardData)
 
    return (
        <div className="card-container">
            {cardData.map((card, index) => (
                <div className="card" key={index}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <a href={card.link}>Veja mais</a>
                </div>
 
            ))}
 
 
        </div>
    )
};

export default Card;
