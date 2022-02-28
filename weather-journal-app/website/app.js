
// global variables
const generate = document.getElementById('generate');

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=6e71cc86d272205abd73f3cd77945cf1';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

generate.addEventListener('click', function performAction(e) {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    retrieveData(baseURL, zipCode, apiKey)
    .then(function(weatherData){
        postData('/add', {temp: weatherData.main.temp, date: newDate, content: feelings})
    })
    .then(()=>
        updateUI()
    )    
});

const retrieveData = async (baseURL, zipCode, apiKey) =>{
    const request = await fetch(`${baseURL}${zipCode}${apiKey}`);
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById('date').innerHTML =allData.date;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
   }


const  postData = async(url = '', data = {}) => {
    //console.log(data);
    const response= await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log("error", error);
    }
  }


  const updateUI = async() =>{
      const req = await fetch('/add');
      try{
        const allData = await req.json();
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temp: ${allData.temp}`;
        document.getElementById('content').innerHTML = `Temp: ${allData.content}`;

      }catch(error){
        console.log("error", error);
      }
  }


  