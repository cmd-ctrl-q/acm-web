import React from 'react';
import './Officers.css';
import OfficerCard from './OfficerCard/OfficerCard.js';

const Officers = () => {
      return (
          <div className="officersPage">
              <div className="officersPara">
                  <h1>Officers</h1>
                  <div className="officersContainer">
                      <OfficerCard />
                  </div>
              </div>
          </div>
      )
}
export default Officers;