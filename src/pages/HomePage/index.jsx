import { use, useState } from 'react';
import './style.css';

export const HomePage = () => {
  const [userName, setUserName] = useState("")
  const [country, setCountry] = useState("Česká Republika")

  return (
    <div className="container">
      <form onSubmit={() => alert(`Uživatel "${userName}" ze země ${country} se chce registrovat.`)}>
        <label>Uživatelské jméno: {` `}
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </label>
        {userName.length === 0 && <div className='error'>Uživatelské jméno je povinný údaj</div>}
        <label>
          Země původu:
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="Chorvatsko">Chorvatsko</option>
            <option value="Česká republika">Česká republika</option>
            <option value="Polsko">Polsko</option>
            <option value="Slovenská republika">Slovenská republika</option>
          </select>
        </label>
        <button type='submit' disabled={userName.length === 0 ? true : false}>Registrovat</button>
      </form>
    </div>
  );
};
