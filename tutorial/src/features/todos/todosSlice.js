import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { id: 1, title: "todo1", completed: false },
        { id: 2, title: "todo2", completed: false },
        { id: 3, title: "todo3", completed: true },
    ],
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: { 
        addTodo:(state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
        state.push(newTodo);
        },
        toggleTodos: (state, action) => {
            const selectedItem = state.todos.find((todo) => todo.id === action.payload.id);
            selectedItem.completed = !selectedItem.completed
        },
        deleteTodos: (state, action) => {
            const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
            state.todos = filteredTodos
        }
    }
})

export const {addTodo, toggleTodos, deleteTodos} = todosSlice.actions;
export default todosSlice.reducer;