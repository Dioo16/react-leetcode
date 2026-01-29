/**
 * useCounter Hook
 * 
 * Difficulty: Easy
 * Recommended Time: 10 minutes
 * 
 * Implement a useCounter hook that manages a counter state with additional 
 * convenience utility methods.
 * 
 * Arguments:
 * - initialValue: number - Initial value of the counter state. Defaults to 0 if not provided.
 * 
 * Returns:
 * An object with the following properties:
 * - count: number - The current counter value
 * - increment: () => void - A function to increment the counter value
 * - decrement: () => void - A function to decrement the counter value
 * - reset: () => void - A function to reset the counter value to initialValue, or 0 if not provided
 * - setCount: (value: number) => void - A function to set the counter value to value, 
 *   it has the same signature as setState
 * 
 * Example Usage:
 * const { count, increment, decrement, reset, setCount } = useCounter();
 */

import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
}

export default function useCounter(initialValue?: number): UseCounterReturn {
  const [count, setCounter] = useState(initialValue ?? 0);

  const increment = () => setCounter(count + 1);
  const decrement = () => setCounter(count - 1);
  const reset = () => setCounter(initialValue ?? 0);
  const setCount = (value: SetStateAction<number>) => setCounter(value);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
}
