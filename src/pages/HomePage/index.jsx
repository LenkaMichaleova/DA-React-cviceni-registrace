import { useState, useEffect } from 'react';
import './style.css';

export const HomePage = () => {
  const [userName, setUserName] = useState("")
  const [country, setCountry] = useState("Česká republika")
  const [newsletterAccepted, setNewsletterAccepted] = useState(false)

  const zajem = newsletterAccepted ? "dostávat pravidelně novinky" : "o novinky nemá zájem" 

  return (
    <div className="container">
      <form onSubmit={() => 
        alert(`Uživatel "${userName}" ze země ${country} se chce registrovat a ${zajem}.`)
      }>
        
        <label>Uživatelské jméno: {` `}
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </label>
        {userName.length === 0 && <div className='error'>Uživatelské jméno je povinný údaj</div>}
        
        <label>
          Země původu: {` `}
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="Chorvatsko">Chorvatsko</option>
            <option value="Česká republika">Česká republika</option>
            <option value="Polsko">Polsko</option>
            <option value="Slovenská republika">Slovenská republika</option>
          </select>
        </label>

        <label>
          <input 
            type="checkbox" 
            value={newsletterAccepted} 
            onChange={() => setNewsletterAccepted(!newsletterAccepted)}
          />
          Chci pravidelně dostávat novinky do mé e-mailové schránky.
        </label>

        <button type='submit' disabled={userName.length === 0 ? true : false}>Registrovat</button>
      </form>
    </div>
  );
};
