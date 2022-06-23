import Picture from "../portrait.JPG"
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <img src={Picture} alt="Portrait" width={300} className="picture"/>
            <h1 id="full-name">Kacsó-Létai Ákos</h1>
            <h3 id="occupation">Frontend developer</h3>
            <p id="email">kacso.letai.akos@gmail.com</p>
            <button id="email-link" onClick={() => window.location.href = 'mailto:kacso.letai.akos@gmail.com' }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <p>Email</p>
            </button>
        </div>
    )
}