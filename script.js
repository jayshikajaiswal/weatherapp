const cityName = document.getElementById('cityName');
const submit = document.getElementById('submit');
const city = document.getElementById('city');

const name = document.getElementById('name');
const temprature = document.getElementById('temp');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const region = document.getElementById('region');
const lat = document.getElementById('lat');
const lon = document.getElementById('lon');
const tz_id = document.getElementById('tz_id');
const localtime_epoch = document.getElementById('localtime_epoch');
const localtime = document.getElementById('localtime');


const xhr = new XMLHttpRequest();


xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        try {
          
            const response = JSON.parse(this.responseText);
            console.log("API Response Object:", response); 

            
            if (response.location) {
                if (name) name.innerHTML = response.location.name || "N/A";
                if (temprature)temprature.innerHTML = response.current?.temp_c || "N/A";
								const iconImg = document.getElementById('weather-icon');
                if (iconImg && response.current?.condition?.icon) {
                iconImg.src = "https:" + response.current.condition.icon;
                 iconImg.alt = response.current.condition.text;
                }
                if (min_temp)min_temp.innerHTML = response.current?.feelslike_c || "N/A";
								if (max_temp)max_temp.innerHTML = response.current?.humidity || "N/A";
								if (region) region.innerHTML = response.location.region|| "N/A";
                if (lat) lat.innerHTML = response.location.lat || "N/A";
                if (lon) lon.innerHTML = response.location.lon || "N/A";
                if (tz_id) tz_id.innerHTML = response.location.tz_id || "N/A";
                if (localtime_epoch) localtime_epoch.innerHTML = response.location.localtime_epoch || "N/A";
                if (localtime) localtime.innerHTML = response.location.localtime || "N/A";
            }
        } catch (error) {
            console.error("Failed to parse API response:", error);
        }
    }
});


const getweather = (city) => {
    if (cityName) cityName.innerHTML = `Weather For ${city}`;

    
    xhr.open('GET', `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`);
    
    // Request Headers
    xhr.setRequestHeader('x-rapidapi-key', '3ef78f2a13msh44d70b3c5876c3dp12dd7bjsnb90c24294e31');
    xhr.setRequestHeader('x-rapidapi-host', 'weatherapi-com.p.rapidapi.com');
    xhr.setRequestHeader('Content-Type', 'application/json');

    
    xhr.send(null); 
};

if (submit && city) {
    submit.addEventListener("click", (e) => {
        e.preventDefault(); 
        getweather(city.value);
    });
}


getweather("Delhi");

 function toggleDarkMode() {
    const htmlElement = document.documentElement;
    const toggleLabel = document.getElementById('toggleLabel');
    const isChecked = document.getElementById('darkModeToggle').checked;

    if (isChecked) {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        if (toggleLabel) {
            toggleLabel.innerText = "Light Mode";
            toggleLabel.classList.remove('text-dark');
            toggleLabel.classList.add('text-white');
        }
    } else {
        htmlElement.removeAttribute('data-bs-theme');
        if (toggleLabel) {
            toggleLabel.innerText = "Dark Mode";
            toggleLabel.classList.remove('text-white');
            toggleLabel.classList.add('text-dark');
        }
    }
}

