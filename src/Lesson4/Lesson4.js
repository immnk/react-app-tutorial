import React, {useState} from 'react';
import './Lesson4.scss';
import StarsDisplay from './StarsDisplay';
import utils from './Util';
import PlayNumber from './PlayNumber';
import PlayAgain from './PlayAgain';

const Lesson4 = (props) => {
    // Hooks and side effects
    const [stars, setStars] = useState(utils.random(1,9));
    const [availableNums, setAvailableNums] = useState(utils.range(1,9));
    const [candidateNums, setCandidateNums] = useState([]);

    // Conditions
    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const gameIsDone = availableNums.length === 0;

    const resetGame = () => {
        setStars(utils.random(1,9));
        setAvailableNums(utils.range(1,9));
        setCandidateNums([]);
    }

    const numberStatus = number => {
        if(!availableNums.includes(number)) {
            return 'used';
        }
        if(candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        return 'available';
    }

    const onNumberClick = (number, status) => {
        if(status === 'used') {
            return;
        }
        const newCandidateNums =
            status === 'available'
                ? candidateNums.concat(number)
                : candidateNums.filter( n => n !== number );
        
        if(utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div className="game">
                <div className="help">
                    Pick 1 or more numbers that sum to the number of stars
                </div>
                <div className="body">
                    <div className="left">
                        {gameIsDone
                            ? <PlayAgain onClick={resetGame}/>
                            : <StarsDisplay count={stars}/>
                        }
                    </div>
                    <div className="right">
                        {utils.range(1,9).map(number => 
                            <PlayNumber 
                                key={number} 
                                number={number} 
                                status={numberStatus(number)}
                                onClick={onNumberClick}
                            />
                        )}
                    </div>
                </div>
                <div className="timer">Time Remaining: 10</div>
            </div>
        </div>
    );
}

export default Lesson4;