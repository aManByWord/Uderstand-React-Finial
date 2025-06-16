import { useContext } from "react";
import { CounterContext } from "../contexts/contexts.js";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import Counter from "./Counter.jsx";


export default function CounterList() {
    var counterData = useContext(CounterContext);
    /*const updateTitle = */
    useDocumentTitle("Clicks: " +
        counterData.map(function gettingTotalForTitle(counter) {
            return counter.total;
        }).join(", ")
    );
    return (
        <section>
            {counterData.map(function insideMap(counter) {
                return <Counter
                    counter={counter}
                    key={counter.id}
                />
            })}
        </section>
    );
}