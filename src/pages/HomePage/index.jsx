import { use, useState } from 'react';
import './style.css';

export const HomePage = () => {
  const [userName, setUserName] = useState("")

  return (
    <div className="container">
      <form onSubmit={() => alert(`Uživatel "${userName}" se chce přihlásit`)}>
        <label>Uživatelské jméno: {` `}
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </label>
        <button type='submit' disabled={userName.length === 0 ? true : false}>Registrovat</button>
        {userName.length === 0 && <div>Uživatelské jméno je povinný údaj</div>}
      </form>
    </div>
  );
};
