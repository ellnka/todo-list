(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(t,e,s){},QfWi:function(t,e,s){"use strict";s.r(e);s("1DEj"),s("lYjL"),s("RtS0"),s("lmye"),s("3dw1"),s("JBxO"),s("9UJh"),s("SgDD");var i=function(){function t(){}return t.generateId=function(){return Math.random().toString(36).substr(2,9)},t.createElementFromHTML=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},t}();function n(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=".task__check",l=".task__label",r=".task__remove-btn",o=function(){function t(t){var e=t.id,s=t.text,i=t.isCompleted;this.init(e,s,i),this.renderTask(),this._elem.querySelector(a).addEventListener("change",this.clickCompleteTask.bind(this)),this._elem.querySelector(l).addEventListener("click",this.clickCompleteTask.bind(this)),this._elem.querySelector(r).addEventListener("click",this.clickRemoveTask.bind(this))}var e,s,o,c=t.prototype;return c.init=function(t,e,s){this.text=e,this.isCompleted=!!s,this._id=t||i.generateId()},c.renderTask=function(){var t,e,s;this._elem=i.createElementFromHTML((t=this._id,e=this.text,s=this.isCompleted,'\n      <li class="task">\n          <input type="checkbox" class="task__check" id="'+t+'" '+(s?"checked":"")+'/>\n          <label for="'+t+'" class="task__toggle"></label>\n          <span class="task__label">'+e+'</span>\n          <div class="task__remove-btn"></div>\n      </li>\n    '))},c.clickCompleteTask=function(){this.isCompleted=!this.isCompleted,this.elem.dispatchEvent(new CustomEvent("completed"))},c.clickRemoveTask=function(){this.elem.dispatchEvent(new CustomEvent("remove",{detail:{id:this._id}}))},c.getData=function(){return{text:this._text,id:this._id,isCompleted:this._isCompleted}},e=t,(s=[{key:"id",get:function(){return this._id}},{key:"text",get:function(){return this._text},set:function(t){t&&(this._text=t)}},{key:"isCompleted",get:function(){return this._isCompleted},set:function(t){this._isCompleted=t,this._elem&&(this._elem.querySelector(a).checked=this.isCompleted)}},{key:"elem",get:function(){return this._elem}}])&&n(e.prototype,s),o&&n(e,o),t}();function c(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(){function t(){this.init(),this.render()}var e,s,n,a=t.prototype;return a.init=function(){var t=JSON.parse(window.localStorage.getItem("tasks"))||[];this.tasks=t.map((function(t){return new o(t)})),this.filter=null},a.render=function(){this._taskListElem=i.createElementFromHTML('<ul class="list"> </ul> '),this.renderTasks(this.tasks)},a.reRenderTasks=function(){var t=this;this._taskListElem.innerHTML="";var e=this.tasks.filter((function(e){return e.isCompleted===t.filter||null===t.filter}));this.renderTasks(e)},a.renderTasks=function(t){var e=this;t.forEach((function(t){e._taskListElem.appendChild(t.elem),t.elem.addEventListener("completed",e.completeTask.bind(e)),t.elem.addEventListener("remove",e.removeTask.bind(e))}))},a.addTaskToList=function(t){if(t){var e=new o({text:t});this.tasks.push(e),this._taskListElem.appendChild(e.elem),this.saveTaskInLocalStorage(),this.taskListElem.dispatchEvent(new CustomEvent("completed"))}},a.getUncompletedCount=function(){return this.tasks.filter((function(t){return!t.isCompleted})).length},a.getAllTasks=function(){return this.tasks},a.completeTask=function(){this.reRenderTasks(),this.saveTaskInLocalStorage(),this.taskListElem.dispatchEvent(new CustomEvent("completed"))},a.removeTask=function(t){this.tasks=this.tasks.filter((function(e){return e.id!==t.detail.id})),this.saveTaskInLocalStorage(),this.reRenderTasks(this.tasks),this.taskListElem.dispatchEvent(new CustomEvent("completed"))},a.setAllUncompleted=function(){this.tasks.forEach((function(t){t.isCompleted=!1})),this.completeTask()},a.saveTaskInLocalStorage=function(){window.localStorage.setItem("tasks",JSON.stringify(this.tasks.map((function(t){return t.getData()}))))},e=t,(s=[{key:"taskListElem",get:function(){return this._taskListElem}}])&&c(e.prototype,s),n&&c(e,n),t}();function d(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var h=".uncompleted-count",m="filter--selected",k="filter--completed",f="filter--active",p="filter--all",v=function(){function t(t){var e=this;this._taskList=t,this.render(),this._taskList.taskListElem.addEventListener("completed",this.completedTasksChanged.bind(this)),this.elem.querySelectorAll(".filter button").forEach((function(t){return t.addEventListener("click",e.filterTasks.bind(e))})),this.elem.querySelector(".actions__clear").addEventListener("click",this.clearCompleted.bind(this))}var e,s,n,a=t.prototype;return a.render=function(){this._elem=i.createElementFromHTML('\n    <div class="menu">\n            <div class="menu__status"><span><span class="uncompleted-count">'+(this._taskList.getUncompletedCount()||0)+'</span> items left</span></div>\n            <div class="menu__filters filter">\n                <button  class="filter--all filter--selected">All</button>\n                <button  class="filter--active">Active</button>\n                <button  class="filter--completed">Completed</button>\n            </div>\n\n            <div class="menu__actions action">\n                <button  class="actions__clear">Clear completed</button>\n            </div>\n        </div>\n    ')},a.completedTasksChanged=function(){this._elem.querySelector(h).innerHTML=this._taskList.getUncompletedCount()},a.filterTasks=function(t){var e=t.target.closest("button");e.classList.contains(m)||(this._taskList.filter=!!e.classList.contains(k)||!e.classList.contains(f)&&null,this.elem.querySelectorAll(".filter button").forEach((function(t){return t.classList.remove(m)})),t.target.closest("button").classList.add(m),this._taskList.reRenderTasks())},a.clearCompleted=function(){this._taskList.setAllUncompleted(),this._taskList.reRenderTasks()},a.resetFilter=function(){this.elem.querySelectorAll(".filter button").forEach((function(t){t.classList.remove(m),t.classList.contains(p)&&t.classList.add(m)}))},e=t,(s=[{key:"elem",get:function(){return this._elem}}])&&d(e.prototype,s),n&&d(e,n),t}(),_="light-theme";new(function(){function t(t){this._elem=t,this._listWrapperElem=document.querySelector(".list-wrapper"),this._listNewTaskElem=document.querySelector(".new-task"),this._changeThemeElem=document.querySelector(".header__theme-btn"),this._listNewTaskElem.addEventListener("keyup",this.newTaskOnInput.bind(this)),this._listNewTaskElem.addEventListener("blur",this.newTaskOnInput.bind(this)),this._changeThemeElem.addEventListener("click",this.changeThemeOnClick.bind(this)),this.init()}var e=t.prototype;return e.init=function(){this._taskList=new u,this._listWrapperElem.appendChild(this._taskList.taskListElem),this._menu=new v(this._taskList),this._listWrapperElem.appendChild(this._menu.elem)},e.newTaskOnInput=function(t){if(t.keyCode&&13===t.keyCode||!t.keyCode){var e=t.target.value;t.target.blur(),t.target.value="",this._taskList.addTaskToList(e)}},e.changeThemeOnClick=function(){document.body.classList.toggle(_)},t}())(document.querySelector(".todos"))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.69a4fa3bf549a824937b.js.map