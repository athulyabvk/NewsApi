//const wheather = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8a3c608973460b0acf39462b1df40e6e"
///events...
var search = document.getElementById("search");
/// events
search=addEventListener("keyup", (e) => {
    // e.preventDefault(); -- use along with form(for refresh)
    if(e.keyCode===13){
        var getCityName =e.target.value;
    }
    getWeather(getCityName);

});
function getWeather(getCityName){
    const weatherApi =`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=8a3c608973460b0acf39462b1df40e6e`;
    window
    .fetch(weatherApi)
    .then(data => {data.json()
        .then(weather => {
            var output = "";
           /* console.log(weather);
            console.log(weather.coord.lon);
            console.log(weather.coord.lat);*/
        

            //Array here
            var weatherData = weather.weather;
            //var output=[];
            for (let x of weatherData){
                output+=`
                <div class="weatherclass mt-4">
                    <div class="card-body1">
                      <h1>${weather.name}</h1>  
                      <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"></span>
                      <p>
                      <span>temp :</span>
                      <span class="temp">${weather.main.temp}&deg;c</span></p>
                      <span class="des float-left">${x.description}</span>
                      <span class="des float-right">${x.main}</span>
                      
                    </div>
                </div>`;
            document.getElementById("template").innerHTML=output;
                /*console.log(x);
                console.log(x.id);
                console.log(x.main);
                console.log(x.description);
                console.log(x.icon);*/
                
            }
        })
        .catch(err => console.log(err));
    })
        
    
    .catch(err => console.log(err));
}
