import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const HomePage = () => {
  const [login, setLogin] = useState('');
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/${login}`);
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  }

  return (
    <div className="HomePage">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}/>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default HomePage;
