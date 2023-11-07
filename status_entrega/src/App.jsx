import React, { useState } from 'react';
import './App.css'

const DeliveryStatus = () => {
 const [status, setStatus] = useState('Pendente');

 const updateStatus = (newStatus) => {
    setStatus(newStatus);
 };

 return (
    <div className='tudo'>
      <h2>Status da entrega:</h2>
      <h1>{status}</h1>
      <button onClick={() => updateStatus('Pendente')}>Pendente</button>
      <button onClick={() => updateStatus('Em trânsito')}>Em trânsito</button>
      <button onClick={() => updateStatus('Entregue')}>Entregue</button>
    </div>
 );
};

export default DeliveryStatus;