import torcidaSlika from './torcida.jpg';
import { Link } from 'react-router-dom';
import bernardSlika from './bernard.jpg';
import bearaSlika from './beara.jpg';
import matosicSlika from './frane.jpg';



function Glavna() {
    return (
        <div className="glavna">
            
            <h1>HNK Hajduk Split</h1>
           
            
            <p>
                HNK Hajduk Split je nogometni klub iz Splita, Hrvatske. Osnovan je 1911. godine
                i jedan je od najstarijih i najtrofejnijih klubova u Hrvatskoj. Klub je poznat po
                svojoj bogatoj povijesti, strastvenim navijačima i uspjesima u domaćim i
                međunarodnim natjecanjima. Domaće utakmice igra na stadionu Poljud, koji je jedan
                od najpoznatijih stadiona u regiji. Hajduk Split ima dugu tradiciju razvijanja
                mladih talenata i ponosi se svojim omladinskim pogonom.
            </p>
            <p>
                Klub je osvojio mnoge titule, uključujući prvenstva Hrvatske, Jugoslavije, te
                brojne kupove. Navijači Hajduka, poznati kao "Torcida", jedan su od najstrastvenijih
                i najodanijih navijačkih skupina u Europi. Hajdukov slogan "Hajduk živi vječno" odražava
                vjernost i ljubav prema klubu koja se prenosi s generacije na generaciju.
            </p>
            <h1>Torcida Split</h1>
            <Link to="/Torcida">
                <img src={torcidaSlika} className="torcida-slika" alt='Torcida' />
            </Link>
            <h1>Tri najbolja igrača HNK Hajduka svih vremena</h1>
            <div className="igraci">
                <div>
                    <Link to="/Vukas">
                    <img src={bernardSlika} alt="Bernard Vukas" className="slike" />
                    </Link>
                    <p>Bernard Vukas</p>
                </div>
                <div>
                    <Link to="/Beara">
                    <img src={bearaSlika} alt="Vladimir Beara" className="slike" />
                    </Link>
                    <p>Vladimir Beara</p>
                </div>
                <div>
                    <Link to="/Matosic">
                    <img src={matosicSlika} alt="Frane Matošić" className="slike" />
                    </Link>
                    <p>Frane Matošić</p>
                </div>
            </div>

        </div>
    );
}

export default Glavna;
