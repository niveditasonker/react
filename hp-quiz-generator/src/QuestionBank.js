import {useEffect, useState} from 'react';
import Question from './Question';
import Score from './Score';

const QuestionBank = () => {
    const [questionBank, setQuestionBank] = useState([]);
    const [score, setScore] = useState(0);
    const [currentQ, setCurrentQ] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);
    const [selection, setSelection] = useState('');

    const fetchQuestion = async() => {
        await fetch('/questions.json')
        .then((res) => res.json())
        .then(async (data) => {
            console.log(data);
            await setQuestionBank(data);
        }).catch((err) => {
            console.log(err);
        });
    }

    const checkAnswer = (id) => {;
        if (selection === questionBank[id].answer) {
            setScore((prev) => prev+1);
        }
    }

    const changeSelection = (event, id) => {
        setSelection(event.target.value);
    }

    const submitChoice = (event, id) => {
        event.preventDefault();
        checkAnswer(id);
        handleNextQuestion(id);
    }

    const handleNextQuestion = (id) => {
        if (id+1 < questionBank.length){
            setCurrentQ((prev) => prev+1);
        } else {
            setQuizEnd(true);
        }
    }

    useEffect(() => {
        fetchQuestion();
    }, []);

    return (
        <div className="question-bank-container">
            {!quizEnd ? (
                <Question
                    key={currentQ}
                    question={questionBank[currentQ]}
                    selectedOption={selection}
                    onOptionChange={changeSelection}
                    // // onOptionChange={((event)=>changeSelection(event, q.id))}
                    onSubmit={(event) => submitChoice(event, currentQ)}
                />
                ) : (
                <Score
                    score={score}
                    onNextQuestion={handleNextQuestion}
                    className="score"
                ></Score>
                )
            }
        </div>
    )
}

export default QuestionBank;