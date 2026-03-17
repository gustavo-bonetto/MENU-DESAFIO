import { useState } from 'react'
import './Aba.css'

function Aba() {
  // Estado para controlar qual pergunta está aberta (0 = todas fechadas)
  const [aberto, setAberto] = useState(0)

  return (
    <div className="aba">
      <h2 className="aba-title">Perguntas Frequentes</h2>

      <div className="aba-item">
        <button 
          className="aba-btn" 
          onClick={function() { setAberto(aberto === 1 ? 0 : 1) }}
        >
          O que é React?
        </button>
        <div className={'aba-content ' + (aberto === 1 ? 'show' : '')}>
          <p className="aba-text">
            O React é uma biblioteca JavaScript para construir interfaces de usuário baseadas em componentes reutilizáveis.
          </p>
        </div>
      </div>

     
      <div className="aba-item">
        <button 
          className="aba-btn" 
          onClick={function() { setAberto(aberto === 2 ? 0 : 2) }}
        >
          Para que serve o useState?
        </button>
        <div className={'aba-content ' + (aberto === 2 ? 'show' : '')}>
          <p className="aba-text">
            O useState é um Hook que permite adicionar um estado ao componente, fazendo com que a tela atualize sempre que os dados mudam.
          </p>
        </div>
      </div>

  
      <div className="aba-item">
        <button 
          className="aba-btn" 
          onClick={function() { setAberto(aberto === 3 ? 0 : 3) }}
        >
          O que são eventos?
        </button>
        <div className={'aba-content ' + (aberto === 3 ? 'show' : '')}>
          <p className="aba-text">
            Eventos são ações como o clique do mouse (onClick) ou digitação que disparam funções específicas no seu código.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aba