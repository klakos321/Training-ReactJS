import "./App.css"
import Header from "./components/Header"
import About from "./components/About"
import Intrests from "./components/Intrests"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="MainContainer">
      <div className="ContentContainer">
        <Header/>
        <hr className="divider"/>
        <About/>
        <hr className="divider"/>
        <Intrests/>
        <hr className="divider"/>
        <Footer/>
      </div>
    </div>
  )
}