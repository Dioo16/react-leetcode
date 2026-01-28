/**
 * useBoolean Hook
 * 
 * Difficulty: Easy
 * Recommended Time: 10 minutes
 * Author: Phillmont Muktar
 * 
 * Implement a useBoolean hook that manages a boolean state with additional 
 * convenience utility methods.
 * 
 * Arguments:
 * - initialValue: boolean - Initial value of the boolean state. Defaults to false if not provided.
 * 
 * Returns:
 * An object with the following properties:
 * - value: boolean - The current boolean state
 * - setTrue: () => void - A function to set the boolean state to true
 * - setFalse: () => void - A function to set the boolean state to false
 * - toggle: () => void - A function to toggle the boolean state
 * 
 * Example Usage:
 * const { value, setTrue, setFalse, toggle } = useBoolean();
 */

import { useState } from "react";

export default function useBoolean(initialValue: boolean) {

    const [value, setValue] = useState<boolean>(initialValue);


    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);


    return {
        value,
        setTrue,
        setFalse,
    };
}