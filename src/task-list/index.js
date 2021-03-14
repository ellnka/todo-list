import Task from '../task';
import Helpers from '../helpers'
import template from './template';

export default class TaskList {
    constructor() { 
        this.init();
        this.render();
    }

    get taskListElem() {
        return  this._taskListElem;
    }

    init() {
        let restoredTasks = JSON.parse(window.localStorage.getItem('tasks')) || [];
        this.tasks = restoredTasks.map((taskData) =>  new Task(taskData));
        this.filter = null;
    }

    render() {
        this._taskListElem = Helpers.createElementFromHTML(template());
        this.renderTasks(this.tasks);    
    }

    reRenderTasks() {
        this._taskListElem.innerHTML = '';
        const tasks = this.tasks.filter(task => task.isCompleted === this.filter || this.filter === null);
        this.renderTasks(tasks);    
    }

    renderTasks(tasks) {
        tasks.forEach((task) => {
            this._taskListElem.appendChild(task.elem);
            task.elem.addEventListener('completed', this.completeTask.bind(this));
            task.elem.addEventListener('remove', this.removeTask.bind(this));
        });
    }

    addTaskToList(text) {
        if (!text) {
            return;
        }

        const task = new Task({text});
        this.tasks.push(task);
        this._taskListElem.appendChild(task.elem);

        this.saveTaskInLocalStorage();
    }

    getUncompletedCount() {
        return this.tasks.filter(task => !task.isCompleted).length;
    }

    getAllTasks() {
        return this.tasks;
    }

    completeTask() {
        this. reRenderTasks();
        this.saveTaskInLocalStorage();
        this.taskListElem.dispatchEvent(new CustomEvent("completed"));
    }

    removeTask(event) {
        this.tasks = this.tasks.filter ((task) => task.id !== event.detail.id);
        this.saveTaskInLocalStorage();
        this.reRenderTasks(this.tasks);
        this.taskListElem.dispatchEvent(new CustomEvent("completed"));
    }

    setAllUncompleted() {
        this.tasks.forEach(task => { task.isCompleted = false });
        this.completeTask();
    }

    saveTaskInLocalStorage() {
        window.localStorage.setItem("tasks", JSON.stringify(this.tasks.map( task => task.getData())));
    }

}