import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { Task } from "./Interfaces";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<Task[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    };

    const addTask = (): void => {
        const newTask = {
            taskName: task,
            deadline: deadline,
        };
        setTodoList([...todoList, newTask]);
        setTask("");
        setDeadline(0);
        console.log(todoList);
    };

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(
            todoList.filter((task) => {
                return task.taskName !== taskNameToDelete;
            })
        );
    };

    return (
        <div className="App">
            <header>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Task"
                        name="task"
                        value={task}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="Deadline (in days)"
                        name="deadline"
                        value={deadline}
                        onChange={handleChange}
                    />
                </div>

                <button onClick={addTask}>Add Task</button>
            </header>
            <main>
                {todoList.map((task: Task, key: number) => (
                    <TodoTask
                        key={key}
                        task={task}
                        completeTask={completeTask}
                    />
                ))}
            </main>
        </div>
    );
};

export default App;
