

const AcordionItem = ({faq, onToggle, active}) => {
    const {question, answer} = faq;

    return (
        <li className="acordion-item">
            <button className="button" onClick={onToggle}>
                {question}
                <span className="control">{active ? "—" : "+"}</span>
            </button>
            <div className={`answer_wrapper ${active ? "open" : ""}`}>
                <div className="answer">{answer}</div>
            </div>
        </li>
        
    )
}

export default AcordionItem;