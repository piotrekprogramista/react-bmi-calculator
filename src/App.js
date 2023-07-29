import './App.css';

function Form(){
    const age = document.getElementById('age').value;
    if(age<2 && age<121){
       if(!alert("enter the correct age")){
        window.location.reload();  
    }
    }
    
    const height = document.getElementById('height').value;
    const correctheight = height / 10;

    const weight = document.getElementById('weight').value;
    
    const man = document.getElementById("man").checked;
    const woman = document.getElementById("woman").checked;
    
    if(man==false && woman==false){
      if(!alert("select gender")){
        window.location.reload();  
    }
    }
        const bmi = weight / (correctheight * correctheight) * 100;

        document.getElementById('write').innerHTML = bmi.toFixed(2);
      
        if(bmi < 16) {
          document.getElementById('write').innerHTML = "You are too skinny"
        }
        if(bmi>16 && bmi <25 ) {
          document.getElementById('write').innerHTML = "Your weight is normal"
        }
        if(bmi > 25.1) {
          document.getElementById('write').innerHTML = "You are overweight"
        }
   
  
}


function App() {
  return (
    <div className="App">
     <div id="content">
         <div id="title"> BMI CALCULATOR </div>
         
            <form>
            <div>  <label for="age"> Age </label>
            <input id="age"
             placeholder="2-120"
              type="number"/> </div>
            
           <div> <label for="height"> Height </label> 
            <input id="height" 
            placeholder="in cm"
              type="number" /> </div>
           
           <div> <label for="weight"> Weight </label> 
            <input id="weight" 
            placeholder="in kg"
              type="number" /> </div>
         
           
           <div>
          <input type="radio" id="man" name="gender" value="man"/>
          <label for="man"> Man </label>
         {/* IK THAT GENDER DOES NOT MATTER IN BMI FORMULA */}
          <input type="radio" id="woman" name="gender" value="woman"/>
          <label for=""> Woman </label>
         </div>
         </form>   <div> <button onClick={Form} id="butt"> Submit </button> </div>         
        
       <div>  <p id="write"> </p> </div>
        
      </div>

    </div>
  );
}

export default App;

    
         