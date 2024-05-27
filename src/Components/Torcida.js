


import torcida2Slika from './torcida2.jpg'; 

function Torcida() {
  return (
    <div className="torcida-container">
      <h1 className="torcida-heading">TORCIDA SPLIT</h1>
      <div className="torcida-content">
        <img src={torcida2Slika} alt="Torcida2" className="torcida-img" />
        <div className="torcida-info">
          <p>
            Torcida je navijačka skupina HNK Hajduk Splita, osnovana 28. listopada
            1950. godine. Smatra se jednom od najstarijih navijačkih skupina u
            Europi. Torcida je poznata po svojoj strasti, lojalnosti i podršci klubu
            tijekom mnogih desetljeća.
          </p>
          <p>
            Aktivna je na mnogim sportskim događanjima, ne samo u Hrvatskoj, već i
            diljem Europe, gdje pruža podršku Hajduku na njegovim gostujućim
            utakmicama.
          </p>
         
        </div>
      </div>
      <h1>Torcida na zadnjoj utakmici</h1>
      <div className='video'>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j9SvdOMRePM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        </div>
    </div>
  );
}

export default Torcida;
