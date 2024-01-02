import './App.css';
import {useState, useEffect} from 'react';

export default function Autocomplete ({data}) {
  const [search, setSearch] = useState({
    'text': '',
    'suggestions': [],
  });

  const { text, suggestions } = search;

  const [isVisible, setIsVisible] = useState(false);

  const handleInputText = (event) => {
    const userText = event.target.value;
    if (userText.length >= 0) {
        
        const filteredList = data.filter((item) => {
            if (item.name.toLowerCase().includes(userText.toLowerCase()) ) {
                    return item.name;
            }
        });
        setSearch({
            suggestions: filteredList,
            text: userText
        });
        setIsVisible(true);
    }
  }

  const suggestionsSelected = (item) => {
    setIsVisible(false);

    setSearch({
        text: item.name,
        suggestions: []
    });

    console.log('=====> In suggestionsSelected: ', text);
  }

  return (
    <div>
        {/* <div className='input-bar'> */}
            <label htmlFor='search-bar'></label>
            <input className='input' type='text' onChange={handleInputText} placeholder='Search' value={text}></input>
        {/* </div> */}

        <div>
            {isVisible && suggestions.length > 0 ?
                suggestions.map((item) => {
                    return(
                        <div key={item.code} className= 'list-container'>
                            <li
                                key={`${item.code}-${Math.floor(Math.random * 100)}`}
                                onClick={() => suggestionsSelected(item)}
                                className='list'>
                                {item.name}
                            </li>
                    </div>
                   )
                })
            : ''}
        </div>
    </div>
  )
}
