import { useState } from "react";

export default function CorrectGuesses({ correctGuesses }) {
    var [isOpen, setIsOpen] = useState(false);
    const openGuesses = function openGuesses(event) {
        event.preventDefault();
        setIsOpen(true);
    };
    const closeGuesses = function openGuesses(event) {
        event.preventDefault();
        setIsOpen(false);
    };

    return (
        <section className="correctGuesses">
            {
                isOpen ? <ul>
                    {
                        correctGuesses.map(function mapping(guess) {
                            return <li key={guess}>{guess}</li>
                        })
                    }
                </ul> : <p>{correctGuesses.length} Words Found</p>
            }{
                isOpen ? <a className="openClose" href="#" onClick={closeGuesses}>
                    Close
                </a>
                    : correctGuesses.length > 0 ? <a className="openClose" href="#" onClick={openGuesses}>
                        Open
                    </a> : null
            }
        </section>
    )
}