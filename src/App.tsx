import { useState } from "react";
import Title from "./components/Title";
import Results from "./components/Results";
import Form from "./components/Form";
import './App.css';
import Loading from './components/Loading'

type ResultStateType = {
  country:string;
  cityName:string;
  temperature:string;
  conditionText:string;
  icon:string;
}
function App() {
  const [loading,setLoading] = useState<boolean>(false);
  const [city,setCity] = useState<string>("");
  const[results,setResults] = useState<ResultStateType>({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  });

    const getWeather = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        fetch(`https://api.weatherapi.com/v1/current.json?key=029f165b29bc4f3e829181727240101&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(data => {
              setResults({
                country : data.location.country,
                cityName: data.location.name,
                temperature:data.current.temp_c,
                conditionText:data.current.condition.text,
                icon:data.current.condition.icon
              })
              setCity("");
              setLoading(false);
            })
            .catch(err => alert("エラーが発生しました"))
    }
  return (
    <div className="wrapper">
      <div className="container">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} city={city}/>
      {loading ? <Loading /> : <Results results={results}/>}
      </div>
    </div>
  );
}

export default App;
