import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Subheader from './components/Subheader/Subheader'
import Introducao from './components/Introducao/Introducao'
import Card from './components/Card/Card'
import Tabs from './components/Tabs/Tabs'
import Aba from './components/Aba/Aba'
import Footer from './components/Footer/Footer'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Nav isOpen={isOpen} />
      <Subheader/>
      <Introducao/>
      <section className="cards">
        <Card
          titulo="EA FC 26"
          onSale={true}
          preco="R$ 129,99"
          imagem="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/07/Capa-completa-EA-Sports-FC-26.jpg?w=849&h=477&crop=0"
        />
        <Card
          titulo="Halo Infinite"
          onSale={false}
          preco="R$ 199,99"
          imagem="https://upload.wikimedia.org/wikipedia/pt/d/d1/Halo_Infinite_capa.png"
        />
        <Card
          titulo="Hogwarts Legacy"
          onSale={false}
          preco="R$ 199,99"
          imagem="https://upload.wikimedia.org/wikipedia/pt/thumb/5/5a/Hogwarts_Legacy_capa.jpeg/330px-Hogwarts_Legacy_capa.jpeg"
        />
        <Card
          titulo="Forza Horizon"
          onSale={false}
          preco="R$ 199,99"
          imagem="https://upload.wikimedia.org/wikipedia/pt/thumb/d/dc/Capa_de_Forza_Horizon_5.jpg/330px-Capa_de_Forza_Horizon_5.jpg"
        />
        <Card
          titulo="Gang Beasts"
          onSale={true}
          preco="R$ 36,99"
          imagem="https://img.tapimg.net/market/images/8b53093264fb9a7834be9118d7126393.jpg"
        />
        <Card
          titulo="Minecraft PC"
          onSale={false}
          preco="R$ 00,00"
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DKnP8m8EHbfT7f5L6ixqAvHiHQxxhFtkZg&s"
        />
      </section>       
        <Tabs />
        <Aba /> 
        <Footer/>
    </>
  )
}

export default App