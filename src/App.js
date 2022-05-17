import React, { Component } from 'react';
import './App.css';
import Job from './Job/Job';
import pic from './image/bc.png'
import fvt from './image/fiveta.png'
import { Link } from 'react-router-dom';
class App extends Component {
  state = {
    jobs: [
    { option: 'Akıllı Kontrat (ERC20)', name: 'Furkan Aydın', contact: '0555',  sector: 'Ticaret', date: "23/3/2020" },

  ],
}
//iş ekle
addJob = (event) => {
  event.preventDefault();
  const jobs = [...this.state.jobs];
  const newjob = {};
    
  //yeni iş eklemek için
  newjob.option = this.newJobOption.value;
  newjob.name = this.newJobName.value;
 
  newjob.sector = this.newJobSector.value;
  newjob.contact = this.newJobContact.value;
  

  var date = new Date();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();;
  newjob.date = (day + '/' + monthIndex + '/' + year);
  
    jobs.push(newjob);
    this.setState( { jobs: jobs } )
  
  
  
  
  
  this.newJobOption.value = null;
  this.newJobName.value = null;
  this.newJobSector.value = null;
  this.newJobContact.value = null;
} 


render() {

  const style = {
  border: '2px solid white',
  borderRadius: '0px',
  width: '100px',
  height: '60px',
  fontSize: '30px'
  };

 
 let jobs = (
       <div>
        {this.state.jobs.map((job) => {
          return <Job
          option={job.option}
          name={job.name}

          contact={job.contact}
          sector={job.sector}
          date={job.date}/>
        })

        .reverse()} 
       
      </div> 
    );



    return (
      <div className="App">

        <header className="App-header">
        <img src={pic} />
         

<div>
  <h1 >Blockchain Askıda İlan</h1>
  <h2 className='by'>Created By Fiveta</h2>
 
  <a href='https://twitter.com/FivetaEnt' target={'_blank'}> <img  className='fiveta' src={fvt} /></a>

</div>


        <form
        className="form"
        onSubmit={(event) => this.addJob(event)}>   
        <h2>İsteğinizi bildirip formu doldurun..</h2> 


          <select
          className="textfield"
          ref={(input) => {this.newJobOption = input}}>
              <option value="İletişime Geçin" disabled selected>İş Türünü Seçin</option>
              <option value="Akıllı Kontrat (ERC20)">Akıllı Kontrat (ERC20)</option>
              <option value="Akıllı Kontrat (ERC721)">Akıllı Kontrat (ERC721)</option>
              <option value="Oy Verme Uygulaması">Oy Verme Uygulaması</option>
              
          </select>
          
          <input 
            type="text"
            className="textfield"
            placeholder="Alıcı Adı"
            ref={(input) => {this.newJobName = input}} 
            required />

          <input 
            type="text"
            className="textfield"
            placeholder="İletişim bilgisi"
            ref={(input) => {this.newJobContact = input}} 
            required />
         

          <input 
            type="text"
            className="textfield"
            placeholder="Kullanılacağı Sektör"
            ref={(input) => {this.newJobSector = input}}
            required />
         
          <input
            className="mainbtn" 
            type="submit"
            value="Askıya İş Ekle" />
          
        </form>
        </header>

        <ul>
          {jobs}
        </ul>

      </div>
    );
  }
}

export default App;