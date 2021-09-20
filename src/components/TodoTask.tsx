import React from "react";
import { Task } from "../Interfaces";

interface Props {
    task: Task;
    completeTask(taskName: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <section className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button
                onClick={() => {
                    completeTask(task.taskName);
                }}
            >
                X
            </button>
        </section>
    );
};

export default TodoTask;
