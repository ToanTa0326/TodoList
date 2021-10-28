const TODOS_STORAGE_KEY = 'TODOSAPP';

export default {
    get(){
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
    },
    set(todos){
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    }
}