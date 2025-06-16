import { useState, useContext } from "react"
import { CounterDispatchContext } from "../contexts/contexts.js";

export default function AddCounter() {
    var [counterShorttName, setCounterShortName] = useState("");
    var [counterLongtName, setCounterLongName] = useState("");
    var [tab, setTab] = useState(1);
    var [startingValue, setStartingValue] = useState(0);
    var counterDispatch = useContext(CounterDispatchContext);

    return (
        <>
            <form method="post" onSubmit={handleSubmition}>
                <h2 className="add-counter">Add a Counter Name: {counterLongtName}</h2>
                <p>
                    <label className="active" htmlFor="counterName">Short Name</label>
                    <input type="text" id="counterShorttName"
                        name="counterShorttName"
                        value={counterShorttName}
                        onChange={function changeCounterName(event) {
                            setCounterShortName(event.target.value);
                        }} />
                </p>
                <p>
                    <label className="active" htmlFor="counterLongName">Long Name</label>
                    <textarea type="text" id="counterLongtName"
                        name="counterLongtName"
                        value={counterLongtName}
                        onChange={function changeCounterName(event) {
                            setCounterLongName(event.target.value);
                        }} />
                </p>
                <p>
                    <label className="active" htmlFor="tab">Tap</label>
                    <select id="tab"
                        name="tab"
                        value={tab}
                        onChange={function changeCounterName(event) {
                            setTab(event.target.value);
                        }} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </p>
                <p>
                    <label className="active" htmlFor="StartingValue">Starting Value</label>
                    <input type="number" id="StartingValue"
                        name="StartingValue"
                        value={startingValue}
                        onChange={function changeStartingValue(event) {
                            setStartingValue(event.target.value);
                        }} />
                </p>
                <button className="button" type="submit">Add</button>
            </form>
        </>
    )

    function handleSubmition(event) {
        event.preventDefault()

        counterDispatch({
            type: "add",
            data: {
                longName: counterLongtName,
                shortName: counterShorttName,
                tab: tab,
                startingValue: Number(startingValue),
            }
        })
    };
}
