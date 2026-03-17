import './Card.css';
import Like from '../Like/Like'

function Card({preco, onSale, imagem}) {

  return (
    <section className="autor-card">
      
      <img src={imagem} className="autor-imagem"/>
      
      <p className={preco === "R$ 00,00" ? "gratis" : ""}>
        {preco === "R$ 00,00" ? "GRÁTIS" : preco}
      </p>
      
      <p className="promo-text">{onSale ? 'Promoção!' : ""}</p>   
      
      <Like/>
    </section>    
  )
}

export default Card;