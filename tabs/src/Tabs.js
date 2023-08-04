import {useState, useEffect} from 'react';

export default function Tabs({data}) {
  const [value, setCurrValue] = useState(data);

  // useEffect(() => {
  //   setTabData(data);
  // }, [])
  
  return (
    <div class="tabs-container">
    <div class="tabs-list">
      {data.map(({label, value: currVal}) => {
        const isActive = currVal === value;
        return (
        <button
          key={currVal}
          type="button"
          className={[
                'tabs-list-item',
                isActive && 'tabs-list-item--active'
              ]}
          onClick={() => {
                setCurrValue(currVal);
              }}>{label}
        </button>)
      })}
    </div>

      <div>
        {data.map(({ text, value: currVal }) => (
          <div key={currVal} hidden={currVal !== value}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
