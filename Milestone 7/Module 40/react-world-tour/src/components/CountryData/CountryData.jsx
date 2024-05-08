
const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log(handleVisitedCountry);
    console.log(handleVisitedFlags);
    return (
        <div>
            <p><small>Country Data: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;