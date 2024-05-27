
import Statistika from './Statistika';
import matosicSlika from './matosic.jpg';

function Matosic(params) {
    let obj = {odigrane_utakmice:"739", postignuti_golovi:"729", asistencije:"180", zuti_kartoni:"25", crveni_kartoni:"3"}
  return (
    <div className="Matosic">
      <h1>Frane Matošić</h1>
      <div className="matosic-sadrzaj">
        <img src={matosicSlika} alt="Frane Matošić" className="matosic-slika" />
        <Statistika pro={obj}></Statistika>
           
      </div>
      <div className="biografija2">
        <h2>Biografija i Karijera</h2>
        <p>
          Frane Matošić, rođen 25. studenog 1918. godine, bio je legendarni hrvatski
          nogometaš i kapetan Hajduka Split. Tijekom svoje karijere, Matošić je bio
          poznat po svojoj nevjerojatnoj sposobnosti postizanja golova, a njegov
          vječni rekord broja postignutih golova za Hajduk još uvijek stoji.
        </p>
      </div>
      <div className="biografija2">
        <h2>Nagrade i Postignuća</h2>
        <ul>
          <li>Najbolji strijelac Hajduka svih vremena</li>
          <li>Višestruki prvak Jugoslavije s Hajdukom</li>
          <li>Član jugoslavenske reprezentacije</li>
        </ul>
      </div>
      <div className="biografija2">
        <h2>Zanimljivosti</h2>
        <p>
          Frane Matošić je bio poznat po svojoj predanosti klubu i nevjerojatnoj
          golgeterskoj sposobnosti. Nakon igračke karijere, Matošić je ostao
          povezan s Hajdukom kao trener i sportski direktor. Njegov utjecaj na
          klub i navijače ostao je neizbrisiv i dan danas.
        </p>
      </div>
    </div>
  );
}

export default Matosic;
