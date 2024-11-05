class TodoList {
    constructor() {
        this.tasks = []; 
    }

    addTask(description) {
        const task = { description, completed: false };
        this.tasks.push(task);
        console.log(`Task added: "${description}"`);
    }

    markComplete(taskIndex) {
        if (this.tasks[taskIndex]) {
            this.tasks[taskIndex].completed = true;
            console.log(`Task marked as complete: "${this.tasks[taskIndex].description}"`);
        } else {
            console.log(`Task at index ${taskIndex} does not exist.`);
        }
    }


    listTasks() {
        console.log('Todo List:');
        this.tasks.forEach((task, index) => {
            const status = task.completed ? '✓' : '✗';
            console.log(`${index + 1}. [${status}] ${task.description}`);
        });
    }
}

export default TodoList; 
