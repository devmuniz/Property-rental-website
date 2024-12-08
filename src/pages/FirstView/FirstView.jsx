import React, { useState, useEffect } from 'react';
import './FirstView.css';
import RegisterForms from '../../components/Register Forms/RegisterForms';

function FirstView() {
  
  return (
    <div id="bodyContent">
      <section className="firstFormContainer">
        <RegisterForms />
      </section>
    </div>
  );
}

export default FirstView;
