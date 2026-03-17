import { useState } from 'react'
import './Tabs.css'

function Tabs() {

  const [abaAtiva, setAbaAtiva] = useState("games")

  return (
    <div className="tabs">
      <div className="tabs-menu">
        <button 
          className={'tab-btn ' + (abaAtiva === "games" ? 'active' : '')} 
          onClick={function() { setAbaAtiva("games") }}>
          Games
        </button>
        
        <button 
          className={'tab-btn ' + (abaAtiva === "requisitos" ? 'active' : '')} 
          onClick={function() { setAbaAtiva("requisitos") }}>
          Requisitos
        </button>

        <button 
          className={'tab-btn ' + (abaAtiva === "ajuda" ? 'active' : '')} 
          onClick={function() { setAbaAtiva("ajuda") }}>
          Ajuda
        </button>
      </div>

      <div className="tab-body">
        {abaAtiva === "games" && <p>Destaques: Os jogos mais populares da Steam Playbox hoje.</p>}
        {abaAtiva === "requisitos" && <p>Requisitos: Processador i5, 8GB de RAM e Windows 10.</p>}
        {abaAtiva === "ajuda" && <p>Suporte: Entre em contato para ajuda com sua conta.</p>}
      </div>
    </div>
  )
}

export default Tabs