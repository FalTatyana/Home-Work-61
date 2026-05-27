import { useEffect, useState } from 'react'
import './App.css'
import List from './components/countryList/List'
import axios from 'axios'
import Info from './components/countryInfo/Info';

type Country = {
  name: string
  alpha3Code: string
  capital: [string]
};

interface CountryInfo {
  flags: {
    png: string
  }
  name: {
    common: string
  }
  region: string
  population: number
  area: number
  borders: string
  capital: string
}

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryInfo, setCountryInfo] = useState<CountryInfo>();

  const url = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

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
        capital: countryWay.capital
      }

      setCountryInfo(country)
    } catch (error) {
      console.log(error(error));
    }
  };

  return (
    <div className="container d-flex">
      <div className="listWrapper me-3">
        <ul className="list-group">
          {countries.map((country) =>
            <List
              name={country.name}
              key={country.alpha3Code}
              onclick={() => handleShow(country.alpha3Code)}
            />
          )}
        </ul>
      </div>
      <div className="infoWrapper">
        {countryInfo && (
          <Info
            png={countryInfo.flags.png}
            name={countryInfo.name.common}
            capital={countryInfo.capital}
            area={countryInfo.area}
            region={countryInfo.region}
            population={countryInfo.population}
            borders={countryInfo.borders}
          />
        )}
      </div>
    </div>
  )
};

export default App
