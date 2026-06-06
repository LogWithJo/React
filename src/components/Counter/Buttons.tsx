/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../ui/button'

function Buttons({set}: {set: any}) {
  return (
    <div className="w-full justify-center items-center flex gap-5 p-5">
      <Button onClick={() => {set((counts: number) => {return counts - 10})}}>- (10)</Button>
      <Button onClick={() => {set((counts: number) => {return counts - 1})}}>-</Button>
      <Button onClick={() => {set((counts: number) => {return counts + 1})}}>+</Button>
      <Button onClick={() => {set((counts: number) => {return counts + 10})}}>+ (10)</Button>
    </div>
  )
}

export default Buttons
