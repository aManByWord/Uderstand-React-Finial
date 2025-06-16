import { memo, useContext } from "react";
import { TabDispatchContext } from "../contexts/contexts";

export const CounterSummaryHeader = memo(function CounterSummaryHeader({ setClassName }) {
    console.log("Rendering CounterSummaryHeader: " + setClassName());
    var tabDispatch = useContext(TabDispatchContext);
    return (
        <header className="summary__header">
            <a
                href="#"
                className={setClassName() ? "active" : ""}
                onClick={function changeTab(event) {
                    tabDispatch({ type: "change-tab", tab: 1 });
                    event.preventDefault()
                }}
            >
                Tab 1
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
                href="#"
                className={setClassName() ? "" : "active"}
                onClick={function changeTab(event) {
                    tabDispatch({ type: "change-tab", tab: 2 });
                    event.preventDefault()
                }}
            >
                Tab 2
            </a>
        </header>
    );
})