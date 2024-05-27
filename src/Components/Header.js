

import Slika from './grb.png';



function Header() {
  return (
    <div className="header">
        <p className="ime">Andreo Huljić</p>
        <div className="grbic">
          <a href='https://hajduk.hr/'>
          <img src={Slika} alt="Grb" />
          </a>
            
        </div>
        
        <p className="tema">HNK HAJDUK SPLIT</p>
        
        
        
    </div>
  );
}


export default Header;