

let weather = {
    "apikey":"48518f36defa81866cf218c7d95cef58",

    fetchWeather:function(city){

        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        
        + city 
        + "&units=metric&appid="
        +this.apikey
        )





        .then((Response)=>Response.json())
        .then((data)=> this.displayWeather(data));
    },

    displayWeather:function(data){

        const{name}=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed)

        document.querySelector(".city").innerText= "Weather in " + name;
        document.querySelector(".icon").src=
        "https://openweathermap.org/img/wn/"+ icon +".png"

        document.querySelector(".description").innerText= description;
        document.querySelector(".temp").innerText = temp +"°C";
        document.querySelector(".humidity").innerText= "Humidity" + humidity + "%";
        document.querySelector(".wind").innerText="Wind speed :" + speed + "km/ph";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" +name +"')"

    },

    search: function(){

       this.fetchWeather(document.querySelector(".searchbar").value);

    }

};


document.querySelector(".search button")
.addEventListener("click" , function(){

    weather.search();

});
document.querySelector(".searchbar").addEventListener("keyup" , function(event){
    if (event.key == "Enter"){
        weather.search();
    }
})
weather.fetchWeather("cuttack");