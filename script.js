

function getName(){
        const cityName = document.getElementById('cityName').value;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=54cd9063a0a21bbe71d4e1725269bff8`)
        .then(res => res.json())
        .then(data=>{
                work(data)
        });
    };
   function work(data){
        document.getElementById('contryName').innerText = data.name;
        const tempnum= data.main.temp-273.15;
        document.getElementById('temp').innerText=tempnum.toPrecision(4);
        document.getElementById('discription').innerText = data.weather[0].description;
        document.getElementById('icon').src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`; 
    };