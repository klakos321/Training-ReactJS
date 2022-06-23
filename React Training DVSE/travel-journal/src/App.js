import './App.css';
import data from './components/data';
import NavBar from './components/Navbar.js'
import Card from './components/Card';

export default function App() {
    const LocationCards = data.map(item => {
      return (
        <Card {...item}/>
      )
    })

    return (
      <div className='container'>
        <NavBar />
        <section className='cards-list'>
          {LocationCards}
        </section>
      </div>
    )
}