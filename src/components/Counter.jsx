import { useContext, useId } from "react";
import { CounterDispatchContext, TabDispatchContext } from "../contexts/contexts.js";

export default function Counter({ counter }) {
    var counterDispatch = useContext(CounterDispatchContext);
    var tabDispatch = useContext(TabDispatchContext);
    const id = useId();

    return (
        <fieldset className="counter" id={id}>
            <legend className="counter__name" id={id + "-legned"}>{counter.name.longName}</legend>

            {counter.total > 0 ?
                <button className="button"
                    id={id + "-decrement"} aria-label="Decrease Counter"
                    onClick={HandleDecrement}
                >
                    -
                </button> : <div className="counter__empty"></div>
            }
            <p className="counter__total" aria-labelledby={id + "-legend"}>{counter.total}</p>
            <button className="button"
                id={id + "-increment"} aria-label="Increase Counter"
                onClick={HandleIncrement}
            >
                +
            </button>
        </fieldset>
    )

    function HandleIncrement(event) {
        counterDispatch({ type: "increment", id: counter.id });
        tabDispatch({ type: "change-tab", tab: counter.tab });
        event.preventDefault();
    }
    function HandleDecrement(event) {
        counterDispatch({ type: "decrement", id: counter.id });
        tabDispatch({ type: "change-tab", tab: counter.tab });
        event.preventDefault();
    }
}