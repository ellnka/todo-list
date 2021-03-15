import Helpers from '../helpers'
import template from './template';

const CLASSES = {
    activeCount: '.uncompleted-count',
    selected: 'filter--selected',
    completed: 'filter--completed',
    active: 'filter--active',
    all: 'filter--all'
}

export default class Menu {
    constructor(taskList) { 
        this._taskList = taskList;
        this.render();

        this._taskList.taskListElem.addEventListener('completed', this.completedTasksChanged.bind(this));
        this.elem.querySelectorAll('.filter button').forEach( buttonElem => buttonElem.addEventListener('click', this.filterTasks.bind(this)));
        this.elem.querySelector('.actions__clear').addEventListener('click', this.clearCompleted.bind(this));
    }

    get elem() {
        return this._elem;
    }

    render() {
        this._elem = Helpers.createElementFromHTML(template(this._taskList.getUncompletedCount()));   
    }

    completedTasksChanged() {
        this._elem.querySelector(CLASSES.activeCount).innerHTML = this._taskList.getUncompletedCount();
    }

    filterTasks(event) {
        const button = event.target.closest('button');
        if (button.classList.contains(CLASSES.selected)){
            return;
        }
        this._taskList.filter = button.classList.contains(CLASSES.completed) ? true :
                                    button.classList.contains(CLASSES.active) ? false : null;

        this.elem.querySelectorAll('.filter button').forEach( buttonElem => buttonElem.classList.remove(CLASSES.selected));
        event.target.closest('button').classList.add(CLASSES.selected);
        this._taskList.reRenderTasks();
    }

    clearCompleted() {
        this._taskList.deleteAllCompleted();
        this._taskList.reRenderTasks();
    }

    resetFilter() {
        this.elem.querySelectorAll('.filter button').forEach( buttonElem => {
            buttonElem.classList.remove(CLASSES.selected);
            if (buttonElem.classList.contains(CLASSES.all)) {
                buttonElem.classList.add(CLASSES.selected);
            }
        });
    }
}