import TaskList from './../task-list';
import Menu from './../menu';

const CLASSES = {
    theme: 'light-theme'
}

export default class Todos {
    constructor(elem) { 
        this._elem = elem;

        this._listWrapperElem = document.querySelector('.list-wrapper');
        this._listNewTaskElem = document.querySelector('.new-task');
        this._changeThemeElem = document.querySelector('.header__theme-btn');

        this._listNewTaskElem.addEventListener('keyup', this.newTaskOnInput.bind(this));
        this._listNewTaskElem.addEventListener('blur', this.newTaskOnInput.bind(this));
        this._changeThemeElem.addEventListener('click', this.changeThemeOnClick.bind(this));

        this.init();
    }

    init() {
        this._taskList = new TaskList();
        this._listWrapperElem.appendChild(this._taskList.taskListElem);
        this._menu = new Menu(this._taskList);
        this._listWrapperElem.appendChild(this._menu.elem);
    }

    newTaskOnInput(event) {
        if ((event.keyCode && event.keyCode === 13) || !event.keyCode) {
            let text = event.target.value;
            event.target.blur();
            event.target.value = "";
            this._taskList.addTaskToList(text);
            
        }
    }

    changeThemeOnClick() {
        document.body.classList.toggle(CLASSES.theme);
    }

}