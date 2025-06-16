import { useEffect, useState } from "react";
import Header from "./components/Header";
import Guess from "./components/Guess";
import HoneyComb from "./components/HoneyComb";
import CorrectGuesses from "./components/CorrectGuesses";
import Score from "./components/Score";
import "./App.css";


export default function App() {
  // getting the data we need from the api
  var [data, setData] = useState(null);
  var [guess, setGuess] = useState("");
  var [correctGuesses, setCorrectGuesses] = useState([]);

  function addLetter(letter) {
    setGuess((guess) => guess + letter);
  }
  function removeLetter() {
    setGuess((guess) => guess.slice(0, -1));
  }

  function addCorrectGuess(guess) {
    setCorrectGuesses([...correctGuesses, guess]);
  }
  function checkGuess() {
    if (correctGuesses.includes(guess))
      console.log("Already Found");
    else if (data.answers && data.answers.includes(guess)) {
      addCorrectGuess(guess);
      console.log("Correct Word");
    } else
      console.log("Wrong Guess");

    setGuess("");
  }

  // getting the data from the api
  useEffect(function fetchData() {
    readingApiJson();

    async function readingApiJson() {
      var response = await fetch("../public/api/data.json");
      var { data } = await response.json();
      setData(data.today);
    }
  }, []);

  return (
    <>
      {data ? (
        <>
          <Header date={data.displayDate} editor={data.editor} />
          <Score correctGuesses={correctGuesses} />
          <CorrectGuesses correctGuesses={correctGuesses} />
          <Guess guess={guess} centerLetter={data.centerLetter} outerLetters={data.outerLetters} />
          <section className="container">
            <div className="inputs">
              <div className="center">
                <HoneyComb centerLetter={data.centerLetter} outerLetters={data.outerLetters}
                  validLetters={data.validLetters} guess={guess} addLetter={addLetter}
                  removeLetter={removeLetter} checkGuess={checkGuess} />
              </div>
            </div>
          </section>
        </>
      )
        : <h2>...Loading</h2>}
    </>
  );
}