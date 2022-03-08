// Personal API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=6e71cc86d272205abd73f3cd77945cf1';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 + '.' + d.getDate() + '.' + d.getFullYear();

/* Function called by event listener */
const generate = document.getElementById('generate');

// Event listener to add function to existing HTML DOM element
generate.addEventListener('click', function performAction() {
  const zip = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;

  getData(baseURL, zip, apiKey)
    .then(function (data) {
      postData('/addData', { temperature: data.main.temp.toString(), date: newDate, feel: feelings })
    })
    .then(() => retrieveData());

})

/* Function to GET Web API Data*/
const getData = async (baseURL, zip, apiKey) => {
  const url = baseURL + zip + apiKey;
  const res = await fetch(url);
  try {
    const data = await res.json();
    //console.log(data);
    return data;

  } catch (error) {
    console.log("error", error);
  }
}


/* Function to POST data */
const postData = async (url = '', data = {}) => {
  //console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // because any element from body is returned as string .. so we transform the type to json       
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    // console.log(newData);
    //getData('/all');
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}


/* Function to GET Project Data */
const retrieveData = async () => {
  const request = await fetch('/all');
  try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temperature) + 'degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById("date").innerHTML = allData.date;
  }
  catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
