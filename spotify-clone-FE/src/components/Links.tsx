import { Link } from "react-router-dom"

export default function Links(){
    return(
        <div className="links">

            <nav>
              <h4>Azienda</h4>
              <Link to={"/about"}>Chi siamo</Link>
              <a href="">Opportunità di lavoro</a>
              <a href="">For the Record</a>
            </nav>
            <nav>
              <h4>Community</h4>
              <a href="">Per artisti</a>
              <a href="">Sviluppatori</a>
              <a href="">Pubblicità</a>
              <a href="">Chi siamo</a>
              <a href="">Venditori</a>
            </nav>
            <nav>
              <h4>Link utili</h4>
              <a href="">Assistenza</a>
              <a href="">App per cellulare gratuita</a>
              <a href="">Diritti del consumatore</a>
              <a href="">Popolare per Paese</a>
              <a href="">Importa la tua musica</a>
            </nav>
            <nav>
              <h4>Piani Spotify</h4>
              <a href="">Premium Individual</a>
              <a href="">Premium Duo</a>
              <a href="">Premium Family</a>
              <a href="">Premium Student</a>
              <a href="">Spotify Free</a>
            </nav>
            <nav style={{ display: "flex", flexDirection: "row" }}>
              <img src="../instagram-white.svg" alt="" />
              <img src="../twitter-white.svg" alt="" />
              <img src="../facebook-white.svg" alt="" />
            </nav>
          </div>
    )
}