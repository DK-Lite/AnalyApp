import { combineReducers } from 'redux'
import { reducer as template } from './Template'

const rootReducer = combineReducers({
    template,
})
export default rootReducer;