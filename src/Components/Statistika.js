function Statistika({pro}) {
    return (
      <div className="Statistika">
          <table className="matosic-tablica">
          <thead>
            <tr>
              <th>Statistika</th>
              <th>Vrijednost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Odigrane utakmice</td>
              <td>{pro.odigrane_utakmice}</td>
            </tr>
            <tr>
              <td>Postignuti golovi</td>
              <td>{pro.postignuti_golovi}</td>
            </tr>
            <tr>
              <td>Asistencije</td>
              <td>{pro.asistencije}</td>
            </tr>
            <tr>
              <td>Žuti kartoni</td>
              <td>{pro.zuti_kartoni}</td>
            </tr>
            <tr>
              <td>Crveni kartoni</td>
              <td>{pro.crveni_kartoni}</td>
            </tr>
          </tbody>
        </table>
          
          
          
      </div>
    );
  }
  
  
  export default Statistika;

