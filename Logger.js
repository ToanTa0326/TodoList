export default function logger(reducer){
    return (prevState, action, args) => {
        const newState = reducer(prevState, action, args);
        return newState;
    }
}