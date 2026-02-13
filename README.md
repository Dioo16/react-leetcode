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

### useCounter

**Difficulty**: Easy  
**Recommended Time**: 10 minutes

Implement a `useCounter` hook that manages a counter state with additional convenience utility methods.

**Example Usage**:

```tsx
export default function Component() {
  const { count, increment, decrement, reset, setCount } = useCounter();

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

**Arguments**:
- `initialValue: number` - Initial value of the counter state. Defaults to `0` if not provided.

**Returns**:
The `useCounter` hook returns an object with the following properties:
- `count: number` - The current counter value
- `increment: () => void` - A function to increment the counter value
- `decrement: () => void` - A function to decrement the counter value
- `reset: () => void` - A function to reset the counter value to `initialValue`, or `0` if not provided
- `setCount: (value: number) => void` - A function to set the counter value to `value`, it has the same signature as `setState`

### Accordion

**Difficulty**: Medium  
**Recommended Time**: 20 minutes

Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet.

**Requirements**:
- By default, all sections are collapsed and hidden from view
- Clicking on a section title toggles the contents:
  - If the section is collapsed, it will be expanded and the contents will be displayed
  - If the section is expanded, it will be collapsed and the contents will be hidden
- The sections are independent of each other

**Example Structure**:

```tsx
<Accordion sections={[
  {
    title: 'Section 1',
    content: 'Content for section 1'
  },
  {
    title: 'Section 2', 
    content: 'Content for section 2'
  }
]} />
```

**Notes**:
- The focus is on functionality, not styling
- You may modify the markup (e.g., adding ids, data attributes, replacing tags, etc.)
- Think about ways to improve the user experience (bonus credit in interviews)

### Todo List

**Difficulty**: Easy  
**Recommended Time**: 15 minutes

Build a Todo List app with the ability to add and remove tasks.

**Requirements**:
- Add new tasks on clicking the "Submit" button
- The `<input>` field should be cleared upon successful addition
- Remove tasks from the Todo List upon clicking the "Delete" button

**Example Structure**:

```tsx
<div>
  <h1>Todo List</h1>
  <input type="text" placeholder="Add your task" />
  <button>Submit</button>
  <ul>
    <li>
      <span>Task 1</span>
      <button>Delete</button>
    </li>
  </ul>
</div>
```

**Notes**:
- The focus is on functionality, not styling
- You may modify the markup (e.g., adding ids, data attributes, replacing tags, etc.)
- Think about ways to improve the user experience (bonus credit in interviews)

---

## Tech Stack

- React + TypeScript
- Vite
- ESLint
