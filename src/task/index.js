import Helpers from '../helpers';
import template from './template';

const CLASSES = {
    check: '.task__check',
    label: '.task__label',
    remove: '.task__remove-btn'
};

export default class Task {
    constructor({id, text, isCompleted}) {
        this.init(id, text, isCompleted);

        this.renderTask();
        this._elem.querySelector(CLASSES.check).addEventListener('change', this.clickCompleteTask.bind(this));
        this._elem.querySelector(CLASSES.label).addEventListener('click', this.clickCompleteTask.bind(this)); 
        this._elem.querySelector(CLASSES.remove).addEventListener('click', this.clickRemoveTask.bind(this)); 
    }

    init(id, text, isCompleted) {
        this.text = text;
        this.isCompleted = !!isCompleted;
        this._id = id || Helpers.generateId();
    }

    get id() {
        return this._id;
    }

    get text() {
        return this._text;
    }
    
    set text(value) {
        if (!value) {
          return;
        }

        this._text = value;
    }

    get isCompleted() {
        return this._isCompleted;
    }
    
    set isCompleted(value) {
        this._isCompleted = value;
        if (this._elem) {
            this._elem.querySelector(CLASSES.check).checked = this.isCompleted;
        }
    }

    get elem() {
        return this._elem;
    }

    renderTask() {
        this._elem = Helpers.createElementFromHTML(template(this._id, this.text, this.isCompleted));
        //this._removeButton = removeTaskButton;
    }

    clickCompleteTask() {
        this.isCompleted = !this.isCompleted;
        this.elem.dispatchEvent(new CustomEvent("completed"));
    }

    clickRemoveTask() {
        this.elem.dispatchEvent(new CustomEvent("remove", {detail: {id: this._id}}));
    }

    getData() {
        return {text: this._text, id: this._id, isCompleted: this._isCompleted};
    }

    

}