export default (count) => {
    return `
    <div class="menu">
            <div class="menu__status"><span><span class="uncompleted-count">${count || 0}</span> items left</span></div>
            <div class="menu__filters filter">
                <button  class="filter--all filter--selected">All</button>
                <button  class="filter--active">Active</button>
                <button  class="filter--completed">Completed</button>
            </div>

            <div class="menu__actions action">
                <button  class="actions__clear">Clear completed</button>
            </div>
        </div>
    `;
  }