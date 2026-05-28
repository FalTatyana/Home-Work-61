import { useEffect, useState } from 'react'
import './App.css'
import List from './components/countryList/List'
import axios from 'axios'
import Info from './components/countryInfo/Info';
import type { Country, CountryInfo } from './type';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryInfo, setCountryInfo] = useState<CountryInfo>();
  const [bordersName, setBordersName] = useState<string[]>([]);

  const url = 'https://restcountries.com/v2/all?fields=alpha3Code,name,flags';

  useEffect(() => {
    const countrysRequest = async () => {
      try {
        const countrysData = await axios.get<Country[]>(url)
        setCountries(countrysData.data)
      } catch (error) {
        console.log(error(error));
      }
    }
    void countrysRequest();
  }, []);

  const handleShow = async (code: string) => {
    const foundCountry = countries.find(country => country.alpha3Code === code);

    if (!foundCountry) return;

    try {
      const countryToCode = await axios.get<CountryInfo[]>(`https://restcountries.com/v3.1/alpha/${foundCountry.alpha3Code}`)

      const countryWay = countryToCode.data[0];

      const country = {
        flags: {
          png: countryWay.flags.png
        },
        name: {
          common: countryWay.name.common
        },
        region: countryWay.region,
        population: countryWay.population,
        area: countryWay.area,
        borders: countryWay.borders,
        capital: countryWay.capital?.[0] ?? 'No capital'
      }

      const bordersArray: string[] = countryWay.borders ?? [];

      if (bordersArray.length > 0) {
        const borders = await Promise.all(
          bordersArray.map(async (code) => {
            const response = await axios.get<CountryInfo[]>(
              `https://restcountries.com/v3.1/alpha/${code}`
            );
            return response.data[0].name.common;
          })
        );
        setBordersName(borders);
        console.log(borders);
      } else {
        setBordersName(['No borders'])
      };
      setCountryInfo(country)
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="listWrapper me-3 col-md-4 border p-3">
        <div className="listTitle p-3">
          <h2><i className="bi bi-globe-americas"></i> <b>Countries</b></h2>
          <p className='listTitleP'>Explore all countries of the world</p>
        </div>
        <ul className="list-group list-group-flush scrollable-list">
          {countries.map((country) =>
            <List
              name={country.name}
              key={country.alpha3Code}
              onclick={() => handleShow(country.alpha3Code)}
              png={country.flags.png}
            />
          )}
        </ul>
      </div>
      <div className="infoWrapper col-md-8">
        {countryInfo && (
          <Info
            borders={bordersName}
            png={countryInfo.flags.png}
            name={countryInfo.name.common}
            capital={countryInfo.capital}
            area={countryInfo.area}
            region={countryInfo.region}
            population={countryInfo.population}
          />
        )}
      </div>
    </div>
  )
};

export default App
