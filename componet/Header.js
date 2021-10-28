import html from "../core.js";

function Header(){
    return html`
        <header class="header">
        <h1>Todo List</h1>
            <input 
                class="new-todo" 
                placeholder="What needs to be done?" 
                autofocus="true"
                onkeyup = "event.keyCode === 13 && dispatch('Add', this.value.trim())"
            >
        </header>
    `;
}

export default Header;