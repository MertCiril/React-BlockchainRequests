import React from 'react';

const job = ( props ) => {

  const outputstyle = {
  textAlign: 'center',
  fontSize: '20px',
  color: 'black',
  margin: '15px'
  };

  const divstyle = {
  textAlign: 'center',
  fontSize: '20px',
  backgroundColor: 'pink',
  minWidth: '100px',
  padding: '20px',
  margin: '10px',
  display: 'inline-block'
  };

 return (

<div
  style={divstyle}>
    <ul>
      
      <li style={outputstyle}>İş Türü: {props.option}</li>
      <li style={outputstyle}>İsim: {props.name}</li>
      <li style={outputstyle}>İletişim: {props.contact}</li>
      
      <li style={outputstyle}>Sektör: {props.sector}</li>
      <li style={outputstyle}>Tarih: {props.date}</li>
      
    </ul>
  </div>

  );
};

export default job;






















