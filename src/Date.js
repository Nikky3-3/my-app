import ReactDOM from 'react-dom';
import './App.css';

function tick() {
    const element = (
      <div className='My-Date'>
        <br></br>
        <p>ขณะนี้เวลา</p>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
    );
    
    ReactDOM.render(
        element,
        document.getElementById('Date1')
      );
          
      
  }

  
  setInterval(tick, 0)
  
  
  
  export default Date;