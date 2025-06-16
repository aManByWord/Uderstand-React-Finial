import { useState } from "react";
import Letter from "./Letter"

export default function HaneyComb({ centerLetter, outerLetters, validLetters, addLetter, removeLetter, checkGuess }) {
    var [randomArray, setRandomArray] = useState([0, 1, 2, 3, 4, 5]);

    return (
        <>
            <article className="honeycomb">
                <Letter letter={centerLetter} isCenter={true} addLetter={addLetter} />
                <Letter letter={outerLetters[randomArray[0]]} isCenter={false} addLetter={addLetter} />
                <Letter letter={outerLetters[randomArray[1]]} isCenter={false} addLetter={addLetter} />
                <Letter letter={outerLetters[randomArray[2]]} isCenter={false} addLetter={addLetter} />
                <Letter letter={outerLetters[randomArray[3]]} isCenter={false} addLetter={addLetter} />
                <Letter letter={outerLetters[randomArray[4]]} isCenter={false} addLetter={addLetter} />
                <Letter letter={outerLetters[randomArray[5]]} isCenter={false} addLetter={addLetter} />
            </article>
            <section className="buttons">
                <button className="button"
                    onClick={function Shuffle() {
                        setRandomArray([...randomArray].sort(
                            function sorting() {
                                return Math.random() - 0.5;
                            }
                        ));
                    }}>
                    Shuffle
                </button>
                <button className="button"
                    onClick={removeLetter}>
                    Delete
                </button>
                <button className="button"
                    onClick={checkGuess}>
                    Check Guess
                </button>
            </section>
        </>
    )
}