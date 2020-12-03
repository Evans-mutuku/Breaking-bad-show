
import './App.css';
import Header from './Header';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import CharacterGrid from './CharacterGrid';
import Search from './Search';

const  App = () => {

  const[items, setItems] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result.data)
      setItems(result.data);
      setIsLoading(false)
    }

    fetchItems();
  })
  return (
    <div className="app">
      <Header/>
      <Search getQuery={(q) =>setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
