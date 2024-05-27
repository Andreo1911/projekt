

import bearaSlika1 from './beara1.avif';

function Beara() {
  return (
    <div className="Beara">
      <h1>Vladimir Beara</h1>
      <div className="beara-sadrzaj">
        <img src={bearaSlika1} alt="Vladimir Beara" className="beara-slika" />
        <table className="beara-tablica">
          <thead>
            <tr>
              <th>Statistika</th>
              <th>Vrijednost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Odigrane utakmice</td>
              <td>410</td>
            </tr>
            <tr>
              <td>Postignuti golovi</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Asistencije</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Žuti kartoni</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Crveni kartoni</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="biografija1">
        <h2>Biografija i Karijera</h2>
        <p>
          Vladimir Beara, rođen 2. studenog 1928. godine, bio je poznati hrvatski
          nogometni vratar. Igrao je za Hajduk Split, Crvenu Zvezdu i nekoliko
          klubova u Njemačkoj. Bio je poznat po svojim brzim refleksima, hrabrosti
          i izvanrednim obranama koje su ga svrstale među najbolje vratare svoje
          generacije.
        </p>
      </div>
      <div className="biografija1">
        <h2>Nagrade i Postignuća</h2>
        <ul>
          <li>Najbolji vratar Europe 1953. godine</li>
          <li>Član reprezentacije Jugoslavije na Svjetskom prvenstvu 1954. i 1958.</li>
          <li>Višestruki prvak Jugoslavije s Hajdukom i Crvenom Zvezdom</li>
        </ul>
      </div>
      <div className="biografija1">
        <h2>Zanimljivosti</h2>
        <p>
          Vladimir Beara je često bio nazivan "Vratar s čeličnim rukavicama" zbog
          svoje nevjerojatne sposobnosti da brani teške udarce. Nakon igračke
          karijere, postao je uspješan trener i radio je s mnogim klubovima diljem
          Europe. Beara je ostao upamćen kao jedan od najboljih vratara u povijesti
          nogometa.
        </p>
      </div>
    </div>
  );
}

export default Beara;
