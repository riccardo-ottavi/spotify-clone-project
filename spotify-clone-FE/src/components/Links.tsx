import { Link } from "react-router-dom"

export default function Links(){
    return(
        <div className="links">

            <nav>
              <h4>Azienda</h4>
              <Link to={"/about"}>Chi siamo</Link>
              <Link to={"/about"}><a href="">Opportunità di lavoro</a></Link>
              <Link to={"/about"}><a href="">For the Record</a></Link>
            </nav>
            <nav>
              <h4>Community</h4>
              <Link to={"/about"}><a href="">Per artisti</a></Link>
              <Link to={"/about"}><a href="">Sviluppatori</a></Link>
              <Link to={"/about"}><a href="">Pubblicità</a></Link>
              <Link to={"/about"}><a href="">Chi siamo</a></Link>
              <Link to={"/about"}><a href="">Venditori</a></Link>
            </nav>
            <nav>
              <h4>Link utili</h4>
              <Link to={"/about"}><a href="">Assistenza</a></Link>
              <Link to={"/about"}><a href="">App per cellulare gratuita</a></Link>
              <Link to={"/about"}><a href="">Diritti del consumatore</a></Link>
              <Link to={"/about"}><a href="">Popolare per Paese</a></Link>
              <Link to={"/about"}><a href="">Importa la tua musica</a></Link>
            </nav>
            <nav>
              <h4>Piani Spotify</h4>
              <Link to={"/about"}><a href="">Premium Individual</a></Link>
              <Link to={"/about"}><a href="">Premium Duo</a></Link>
              <Link to={"/about"}><a href="">Premium Family</a></Link>
              <Link to={"/about"}><a href="">Premium Student</a></Link>
              <Link to={"/about"}><a href="">Spotify Free</a></Link>
            </nav>
            <nav style={{ display: "flex", flexDirection: "row" }}>
              <Link to={"/about"}><img src="../instagram-white.svg" alt="" /></Link>
              <Link to={"/about"}><img src="../twitter-white.svg" alt="" /></Link>
              <Link to={"/about"}><img src="../facebook-white.svg" alt="" /></Link>
            </nav>
          </div>
    )
}