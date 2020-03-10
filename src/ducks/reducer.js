import { combineReducers } from 'redux'
import { reducer as template } from './Template'
import { reducer as map } from './Map'

const rootReducer = combineReducers({
    template,
    map,
})
export default rootReducer;