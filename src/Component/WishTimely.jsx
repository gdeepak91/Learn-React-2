import React from 'react'

const WishTimely = () => {
  const curDate = new Date(2022,5,15,21);
  const time = curDate.getHours();
  let greet = " ";
  let cssStyle = { };
  if(time > 5 && time <=12){ 
    greet = 'Good Morning';
    cssStyle.color = "green";
  }
  else if(time > 12 && time <=18){ 
    greet = 'Good AfterNoon';
    cssStyle.color = "grey";
  
  }
  else if(time > 18 && time <=20){ 
    greet = 'Good Evening';
    cssStyle.color = "orange";
  }
  else{
     greet = 'Good Night';    
     cssStyle.color = "red";
  }
  return (
    <>
      <h1>Hello Sir ,<span style={cssStyle}>{greet}</span></h1>
    </>
  )
}

export default WishTimely