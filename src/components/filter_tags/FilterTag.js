import { useState } from 'react';
import './FilterTag.css'
function FilterTag({name, tags}) {
    const [tagStatus, setTagStatus] = useState("");
    console.log(tags);
    console.log(name);
    const selectTag= (e)=>{
        const index = Array.of(document.querySelectorAll(".tags button"));

        index[e].style.backgroundColor = 'salmon';

    }
    return (
      <div className="keyword">
        <h2>{name}</h2>
        <div className="tags grid">
            {tags.map((value,index)=>{
                return (
                  <button
                    className="selected"
                    id={index}
                    onClick={(e) => selectTag(index)}
                    value={value}
                    key={index}
                  >
                    {value}
                  </button>
                );
            })}
          {/* <button>Ghana</button>
          <button>Ghana</button>
          <button>Ghana</button> */}
        </div>
      </div>
    );
}

export default FilterTag