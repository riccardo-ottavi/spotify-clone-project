import { Link } from "react-router-dom";


export default function AboutPage() {
    return (
        <div className="about-page">
            <header id="about-header">

                <Link to={"/"}><img src="\spotyfy-icon-black.png" id="about-spoty-logo"/></Link>
                <nav>
                    <ul id="about-nav">
                        <li><a href="">Piani Premium</a></li>
                        <li><a href="">Assistenza</a></li>
                        <li><a href="">Scarica</a></li>
                        <li><img src="\circle-user-regular-full.svg" alt="" /> </li>
                    </ul>

                </nav>



            </header>
            <div className="about-content">
                <div className="content-introduction">
                    <h3>Chi Sono</h3>
                    <p>Ciao! Mi chiamo Riccardo e questo è il mio progetto di sviluppo web, in cui unisco la passione per la programmazione e quella per la musica. Qua dentro troverai le mie produzioni musicali, in un'interfaccia che emula quella di Spotify. Avrai quindi la possibilità di creare e modificare le tue playlist, utilizzare i controlli come play, pausa, shuffle ecc. e navigare tra le raccolte che ho preparato per te.</p>
                    <p>Se sei un rapper/musicista e vuoi cucinare insieme non esitare a contattarmi a riccardoottavidev@gmail.com</p>
                    <p>NOTA: non rivendico alcun diritto sulle grafiche di Spotify e il progetto ha scopi puramente didattici/educativi, l'ho realizzato per fare pratica e divertirmi, non percepisco da esso alcun guadagno.</p>
                </div>
                <div className="content-contacts">
                    <h3>Contatti</h3>
                    <nav>
                        <ul id="about-contacts-nav">
                            <li><a href="https://github.com/riccardo-ottavi?tab=repositories">GitHub</a></li>
                            <li><a href="https://github.com/riccardo-ottavi?tab=repositories">instagram</a></li>
                            <li><a href="https://github.com/riccardo-ottavi?tab=repositories">Gmail</a></li>
                        </ul>
                    </nav>
                </div>

            </div>


        </div>

    )
}