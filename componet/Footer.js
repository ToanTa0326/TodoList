import html from "../core.js";
import { connect } from "../store.js"

function Footer({todos, filter, filters}){
    return html`
    <footer class="footer">
        <span class="todo-count"><strong>${todos.filter(filters.Active).length}</strong> item left</span>
        <ul class="filters">
            ${Object.keys(filters).map(type => html`
                <li>
                    <a onclick = "dispatch('switchFilter', '${type}')" class="${filter === type && 'selected'}" href="#/${type}">${type}</a>
                </li>
            `)}
        </ul>
        ${todos.some(filters.Completed) && 
            `<button onclick = "dispatch('clearCompleted')" class="clear-completed">
                Clear completed
            </button>` }
    </footer>
    `;
}

export default connect()(Footer);