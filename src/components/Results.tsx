type ResultsPropsType = {
    results: {
        country:string;
        cityName:string;
        temperature:string;
        conditionText:string;
        icon:string;
    }

}

const Results = ({results}:ResultsPropsType) => {
    const{country,temperature,conditionText,icon} = results;
    return(
        <>
            {country && <div className="results-country">{country}</div> }
            {temperature && <div className="results-city">{temperature}<span>度</span></div>}
            {conditionText &&
                <div className="results-condition"> 
                <img src={icon} alt="icon"/>
                <span>{conditionText}</span>
                </div>}
        </>
        
    );
};

export default Results;