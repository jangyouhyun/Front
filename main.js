

function menu1(){
  document.getElementById('sellingbar').className = 'active';
  document.getElementById('soldbar').classList.remove('active');
  
  var list =  document.querySelector('.list');
  var sold = document.querySelector('.sold');
  var selling = document.querySelector('.selling');

  selling.style.display = 'block';
  sold.style.display = 'none';
  
  list.appendChild(sold);
}

function menu2(){
      document.getElementById('sellingbar').classList.remove('active');
      document.getElementById('soldbar').className = 'active';
      
      var list =  document.querySelector('.list');
      var sold = document.querySelector('.sold');
      var selling = document.querySelector('.selling');

      selling.style.display = 'none';
      sold.style.display = 'block';

      list.appendChild(selling);

}


function like1(){
  const element = document.getElementById('likebtn1');
  if(element.innerText == '♡'){
    element.innerText = '❤';
  }else{
   element.innerText = '♡';
    }
  }
  function like2(){
    const element = document.getElementById('likebtn2');
    if(element.innerText == '♡'){
      element.innerText = '❤';
    }else{
     element.innerText = '♡';
      }
  }
  function like3(){
    const element = document.getElementById('likebtn3');
    if(element.innerText == '♡'){
      element.innerText = '❤';
    }else{
     element.innerText = '♡';
      }
  }
  function like4(){
    const element = document.getElementById('likebtn4');
    if(element.innerText == '♡'){
      element.innerText = '❤';
    }else{
     element.innerText = '♡';
      }
  }


  function like5(){
    const element = document.getElementById('likebtn5');
    if(element.innerText == '♡'){
      element.innerText = '❤';
    }else{
     element.innerText = '♡';
      }
  }
  function like6(){
    const element = document.getElementById('likebtn6');
    if(element.innerText == '♡'){
      element.innerText = '❤';
    }else{
     element.innerText = '♡';
      }
  }
  function like7(){
    const element = document.getElementById('likebtn7');
    if(element.innerText == '♡'){
      element.innerText = '❤';
    }else{
     element.innerText = '♡';
      }
  }
  function like8(){
    const element = document.getElementById('likebtn8');
    if(element.innerText == '♡'){
      element.innerText = '❤';
    }else{
     element.innerText = '♡';
      }
  }

  function like9(){
    const element = document.getElementById('likebtn9');
    if(element.innerText == '♡'){
      element.innerText = '❤';
    }else{
     element.innerText = '♡';
      }
  }
  function like10(){
    const element = document.getElementById('likebtn10');
    if(element.innerText == '♡'){
      element.innerText = '❤';
    }else{
     element.innerText = '♡';
      }
  }
  function like11(){
    const element = document.getElementById('likebtn11');
    if(element.innerText == '♡'){
      element.innerText = '❤';
    }else{
     element.innerText = '♡';
      }
  }
  function like12(){
    const element = document.getElementById('likebtn12');
    if(element.innerText == '♡'){
      element.innerText = '❤';
    }else{
     element.innerText = '♡';
      }
  }
