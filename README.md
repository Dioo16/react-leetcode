# React LeetCode Daily Practice

This project is dedicated to practicing React and front-end LeetCode problems daily. It serves as a structured approach to improving React skills through consistent problem-solving.

## Project Purpose

- **Daily Practice**: This repository is updated daily with new React problems and solutions
- **Skill Development**: Focus on React hooks, state management, and component patterns
- **Interview Preparation**: Problems are designed to simulate real interview scenarios

## Project Structure

All problems are located in the `src/problems/` directory. Each problem file includes a description comment at the top explaining:
- Problem title and difficulty
- What needs to be implemented
- Function signatures and expected return values
- Example usage

## Problems Solved

### useBoolean

**Difficulty**: Easy  
**Recommended Time**: 10 minutes  
**Author**: Phillmont Muktar

Implement a `useBoolean` hook that manages a boolean state with additional convenience utility methods.

**Example Usage**:

```tsx
export default function Component() {
  const { value, setTrue, setFalse, toggle } = useBoolean();

  return (
    <div>
      <p>{value ? 'enabled' : 'disabled'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```

**Arguments**:
- `initialValue: boolean` - Initial value of the boolean state. Defaults to `false` if not provided.

**Returns**:
The `useBoolean` hook returns an object with the following properties:
- `value: boolean` - The current boolean state
- `setTrue: () => void` - A function to set the boolean state to `true`
- `setFalse: () => void` - A function to set the boolean state to `false`
- `toggle: () => void` - A function to toggle the boolean state

---

## Tech Stack

- React + TypeScript
- Vite
- ESLint
