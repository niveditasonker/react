import Options from './Options';

const Question = ({
    id,
    question,
    selectedOption,
    onOptionChange,
    onSubmit
}) => {

    const submitCurrentQuestion = (event, id) => {
        onSubmit(event, id);
    }

    const selection = (event, id) => {
        selectedOption(event, id);
    }

    return (
        <div className="question-container">
            <h3>{id}</h3>
            <h3>{question.question}</h3>
            <form onSubmit={((event) => {submitCurrentQuestion(event, id)})}>
                <Options
                    options={question.options}
                    // selectedOption={((e)=> selection(e, question.id))}
                    selectedOption={selectedOption}
                    onOptionChange={onOptionChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Question;