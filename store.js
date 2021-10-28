import reducer from "./reducer.js";
import { creatStorage } from "./core.js";
import logger from "./Logger.js";

const {attach, connect, dispatch} = creatStorage(logger(reducer));

window.dispatch = dispatch;

export {
    attach,
    connect
}