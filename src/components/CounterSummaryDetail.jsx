import { memo } from "react";


// This wouldn't work with Context as Context avoid props drilling unless you are passing them together
// memo is used when you want to Rerender the entire companat based on changes of its own props
export const CounterSummaryDetail = memo(function CounterSummaryDetail({ name, total }) {
    console.log("Counter: ", name);
    return (
        <p className="summary">
            {name.shortName}: ({total})
        </p>
    )
});