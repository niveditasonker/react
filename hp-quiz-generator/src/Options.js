const Options = ({
    options,
    selectedOption,
    onOptionChange,
}) => {

    return (
        <div className="options-container">
            {options.map((option, idx) => {
                return(<div key={idx}>
                    <input
                        type="radio"
                        name="option"
                        value={option}
                        checked={selectedOption === option}
                        onChange={onOptionChange}
                    />
                    <label>{option}</label>
                </div>
                )
            })}
        </div>
    )
}

export default Options;