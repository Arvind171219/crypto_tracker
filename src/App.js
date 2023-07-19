import React,{useState} from "react"; 


const App = () => {
   const [latitude, setLatitude] = useState("");
   const [longitude, setLongitude] = useState("");
   const [hemisphere, setHemisphere] = useState("");
   const [month, setMonth] = useState(1);



      function getLocation(){
           if(navigator.geolocation){
                 navigator.geolocation.getCurrentPosition( (location) => {
                    //  console.log(location);
                    setLatitude(location.coords.latitude);
                    setLongitude(location.coords.longitude);

                    if(location.coords.latitude>0){
                        setHemisphere("Northen Hemisphere");
                   }
                   else if(location.coords.latitude<0){
                     setHemisphere("Southern Hemisphere");
                   }
                   else{
                        setHemisphere("Equator");
                    }
              });
           }

               
      }



    return(
    <div>
        <h1>Latitude: {latitude}</h1>
        <h1>Longitude: {longitude}</h1>
           
            <button onClick={getLocation}>Get Location</button>
            {
                (hemisphere=="Northen Hemisphere" && month>=2 && month<=9) || 
                (hemisphere=="Southern Hemisphere" && (month<2 || month>9))
                 ? 
                (
                    <div>
                        <h1>It's Summer in the {hemisphere}</h1>
                        <p>आया मौसम थंडे थंडे पावसाळे का</p>
                        <img src="https://i.ytimg.com/vi/HzErgJjLN0A/maxresdefault.jpg"
                        alt="summer"
                        />
                    </div>
                ) : (
                   ( hemisphere=="Northen Hemisphere" && (month<2 || month>9))
                     ||  (hemisphere=="Southern Hemisphere" && month>=2 && month<=9)
                    ? (
                    <div>
                        <h1>It's Winter in the {hemisphere}</h1>
                        <p>आया मौसम ठंडा ठंडा पावसाळे का</p>
                        <img src="https://pbs.twimg.com/media/DpePTTuWsAAxmhT.jpg" 
                        alt="winter"
                        />
                    </div>
                    ) : ( <h1>Relax we are fetching ... </h1>)

                )
            }
    </div>
    )
}

export default App;



// if(hemisphere == "Northen Hemisphere" && month>=2 && month<=9){
//     console.log("Summer");
// }
// else if(hemisphere == "Northen Hemisphere" && (month<2 || month>9)){
//     console.log("Winter");
// }
// else {
//     console.log("Relax we are fetching ... ");
// }