export default (id, text, isCompleted) => {
  return `
      <li class="task">
          <input type="checkbox" class="task__check" id="${id}" ${isCompleted ? "checked" : ""}/>
          <label for="${id}" class="task__toggle"></label>
          <span class="task__label">${text}</span>
          <div class="task__remove-btn"></div>
      </li>
    `;
}