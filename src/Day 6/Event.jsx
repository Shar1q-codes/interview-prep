import React from 'react';
  
function Event() {
  function eventHandler(){
    alert('Prepbytes is the best platform to learn coding!');
  }
  
  
  return (
    <div className='App'>
      <h1>Welcome to Prepbytes</h1>
      <button onClick={eventHandler}>Click for alert!</button>
    </div>
  );
}
  
export default Event;