
import vukasSlika from './vukas.jpg';


function Vukas() {
    return (
      <div className="Vukas">
      <h1>Bernard Vukas</h1>
      <div className="Vukas-sadrzaj">
        <img src={vukasSlika} alt="Bernard Vukas" className="Vukas-slika"/>
        <table className="Vukas-tablica">
          <thead>
            <tr>
              <th>Statistika</th>
              <th>Vrijednost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Odigrane utakmice</td>
              <td>615</td>
            </tr>
            <tr>
              <td>Postignuti golovi</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Asistencije</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Žuti kartoni</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Crveni kartoni</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="biografija">
        <h2>Biografija i Karijera</h2>
        <p>
          Bernard Vukas, poznat i kao "Bajdo", rođen je 1. svibnja 1927. godine u Zagrebu.
          Bio je hrvatski nogometaš i jedan od najvećih igrača u povijesti HNK Hajduka.
          Tijekom svoje karijere, Vukas je igrao za Hajduk Split, Bolognu i austrijski klub
          Austria Klagenfurt. Bio je poznat po svojoj tehničkoj vještini, brzini i golgeterskim
          sposobnostima. Nakon završetka igračke karijere, Vukas je ostao povezan s nogometom
          kao trener i sportski djelatnik.
        </p>
      </div>
      <div className="biografija">
        <h2>Nagrade i Postignuća</h2>
        <ul>
          <li>Najbolji igrač Hrvatske 1955. godine</li>
          <li>Najbolji igrač Balkanskog kupa 1956. godine</li>
          <li>Član FIFA 100 - popisa najvećih živućih igrača koje je odabrao Pelé</li>
          <li>Tri puta proglašen najboljim sportašem Hrvatske</li>
        </ul>
      </div>
      <div className="biografija">
        <h2>Zanimljivosti</h2>
        <p>
          Bernard Vukas je bio poznat po svojoj svestranosti na terenu, igrao je na
          nekoliko različitih pozicija uključujući napadača, veznog igrača i krilo.
          Njegova ljubav prema Hajduku bila je legendarna, a navijači su ga obožavali
          zbog njegove predanosti i strasti. Vukas je također bio poznat po svom
          sportskom duhu i fer igri, rijetko je ulazio u konflikte na terenu.
        </p>
      </div>  
       
      </div>
    );
  }
  
  export default Vukas;