import React, {useState, useEffect} from 'react';
import './Lesson4.scss';
import StarsDisplay from './StarsDisplay';
import utils from './Util';
import PlayNumber from './PlayNumber';
import PlayAgain from './PlayAgain';

// Custom Hooks
// it is basically grouping all your state into single place
const useGameState = () => {
    // Hooks and side effects
    const [stars, setStars] = useState(utils.random(1,9));
    const [availableNums, setAvailableNums] = useState(utils.range(1,9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    // Side effects are a function that will be available when the state changes.
    // return a function from side effect that will be called after the second state change happens
    useEffect(()=> {
        if(secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => { clearTimeout(timerId); }
        }
    });

    const setGameState = (newCandidateNums) => {
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

    return { stars, availableNums, candidateNums, secondsLeft, setGameState };
}

const Game = (props) => {
    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState
    } = useGameState();

    // Conditions
    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const gameStatus = availableNums.length === 0
        ? 'won'
        : secondsLeft === 0 ? 'lost' : 'active';

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
        if(gameStatus !== 'active' || status === 'used') {
            return;
        }
        const newCandidateNums =
            status === 'available'
                ? candidateNums.concat(number)
                : candidateNums.filter( n => n !== number );
        
        setGameState(newCandidateNums);
    }

    return (
        // <> is called react fragment. It combines your dom children under one parent without creating parent
        <>
            <div className="game">
                <div className="help">
                    Pick 1 or more numbers that sum to the number of stars
                </div>
                <div className="body">
                    <div className="left">
                        {gameStatus !== 'active'
                            ? <PlayAgain onClick={props.resetGame} gameStatus={gameStatus}/>
                            : <StarsDisplay count={stars}/>
                        }
                    </div>
                    <div className="right">
                        {utils.range(1,9).map(number => 
                            // key attribute is used to unmount and remount a component in React
                            <PlayNumber 
                                key={number} 
                                number={number} 
                                status={numberStatus(number)}
                                onClick={onNumberClick}
                            />
                        )}
                    </div>
                </div>
                <div className="timer">Time Remaining: {secondsLeft }</div>
            </div>
        </>
    );
}

const Lesson4 = (props) => {
    const [gameId, setGameId] = useState(1);

    return (
        <>
            <h3>{props.title}</h3>
            <Game key={gameId} resetGame={() => setGameId(gameId + 1)}/>
        </>
    );
}

export default Lesson4;