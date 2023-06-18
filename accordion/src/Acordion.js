import { useState } from 'react';
import AcordionItem from './AcordionItem.js';


const Acordion = ({faqs}) => {
    const [clicked, setClicked] = useState(0);

    const handleToggle = (clickedIdx) => {
        if (clicked === clickedIdx){
            return setClicked("0");
        }

        setClicked(clickedIdx);
    }

    return (
        <ul className="acordion">
            {faqs.map((faq, idx)=> (
                <AcordionItem key={idx} faq={faq} onToggle={() => handleToggle(idx)} active={clicked == idx} />
            ))}
        </ul>
    )

}


export default Acordion;