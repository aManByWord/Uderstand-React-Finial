export default function Score({ correctGuesses }) {
    var score = 0;
    correctGuesses.map(function (gueses) {
        if (gueses.length == 4)
            score = 1;
        else
            score += gueses.length;
    });

    return (
        <p className="score">score: {score}</p>
    )
}