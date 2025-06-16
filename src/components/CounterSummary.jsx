import { useContext, useMemo, useCallback } from "react";
import { CounterContext, TabContext } from "../contexts/contexts.js";
import { CounterSummaryHeader } from "./CounterSummaryHeader.jsx";
import { CounterSummaryDetail } from "./CounterSummaryDetail.jsx";

export default function Countersummary() {
    console.log("Rendering CounterSummary");
    var counterData = useContext(CounterContext);
    var visibleTab = useContext(TabContext);
    // useMemo is used when you want to Rerender the entire companat based change of a value inside it,
    // used when the copuataion cost is expensive
    const tabData = useMemo(function checkVisibleTab() {
        console.log("Rendering CounterSummary Tab");
        return counterData.filter(function filtersummary(counter) {
            return counter.tab == visibleTab;
        })
    }, [counterData, visibleTab]);
    // using [...] because .sort() is changing counterData by reference which traggers the useState
    const sortedData = [...tabData].sort(function sorting(a, b) {
        return b.total - a.total;
    });

    const setClassName = useCallback(function setClassName() {
        return visibleTab == 1 ? true : false;
    }, [visibleTab]);
    return (
        <section className="summary">
            <h1>
                <CounterSummaryHeader setClassName={setClassName} />

                {sortedData.map(function fillSummary(counter) {
                    return <CounterSummaryDetail name={counter.name}
                        total={counter.total}
                        key={counter.id} />;
                })}
            </h1>
        </section >
    )
}