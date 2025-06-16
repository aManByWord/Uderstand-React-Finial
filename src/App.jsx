import CounterObj from './models/counterObj';
import { CounterContext, CounterDispatchContext, TabContext, TabDispatchContext } from './contexts/contexts';
import { useReducer } from "react";
import counterReducer from "./reducers/counterReducer";
import tabReducer from "./reducers/tabReducer";
import CounterList from "./components/CounterList";
import CounterTools from "./components/CounterTools";
import Countersummary from "./components/CounterSummary";
import AddCounter from "./components/AddCounter";
import "./App.css";

export default function App() {
  console.log("Rerendering The App Function Itself.");
  var [counterData, counterDispatch] = useReducer(counterReducer, [
    new CounterObj(0, { longName: "Counter A", shortName: "A" }, 1, 0),
  ]);
  var [visibleTab, TabDispatch] = useReducer(tabReducer, 1);
  return (
    <>
      <CounterContext.Provider value={counterData}>
        <CounterDispatchContext.Provider value={counterDispatch}>
          <TabContext.Provider value={visibleTab}>
            <TabDispatchContext.Provider value={TabDispatch}>
              <h1>Counters</h1>
              <section>
                <AddCounter />
              </section>
              <section>
                <CounterList />
                <CounterTools>
                  <Countersummary />
                </CounterTools>
              </section>
            </TabDispatchContext.Provider>
          </TabContext.Provider>
        </CounterDispatchContext.Provider>
      </CounterContext.Provider>
    </>
  );

}