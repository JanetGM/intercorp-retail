import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css'
const Home = () => {
  return(
      <>
      <div className="navigation">
            <div className="item">
            <span>
              <i className="fas fa-user-plus"></i>
            </span>
             <Link className="link" to="/newclient" ><label>Nuevo Cliente</label></Link>
            </div>
            <div className="item">
            <span>
              <i class="fas fa-poll"></i>
            </span>
              <Link className="link" to="/statistic"><label>Estadisticas</label></Link>
            </div>
            <div className="item">
              <span>
                <i class="fas fa-address-card"></i>
              </span>
             <Link className="link" to="/information"><label>Información del Cliente</label></Link>
            </div>
        </div>
      </>
  )
}
export default Home;