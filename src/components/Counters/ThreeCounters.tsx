import CounterA from "./CounterA"
import CounterB from "./CounterB"
import CounterC from "./CounterC"

function ThreeCounters() {
  return (
    <div>
      <div className="w-full text-center p-5 text-2xl">Custom hooks</div>
    <div className="flex justify-center items-center *:flex *:flex-col *:items-center *:justify-center">
      <CounterA />
      <CounterB />
      <CounterC />
    </div>
    </div>
  )
}

export default ThreeCounters
