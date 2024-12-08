import React, { useState, useEffect } from 'react';
import './SecondView.css';
import RegisterForms from '../../components/Register Forms/RegisterForms';

function SecondView() {
  
  return (
    <div id="bodyContent">
      <section className="firstFormContainer">
        <RegisterForms />
      </section>
    </div>
  );
}

export default SecondView;
