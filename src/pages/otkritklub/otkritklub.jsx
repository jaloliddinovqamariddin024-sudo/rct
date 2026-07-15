import './Otkritklub.css';

import club from '../../assets/images/club.png'

function Otkritklub() {
  return (
    <div className="club-page">
      <div className="club-header">
        <p className="club-subtitle">TRUE FITNESS</p>

        <h1>ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE</h1>
      </div>

      <div className="club-image">
        <img src={club} alt="Открыть клуб" />
      </div>
    </div>
  );
}

export default Otkritklub;