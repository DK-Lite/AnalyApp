import { all, fork } from 'redux-saga/effects'
import { sagas as templateSaga } from './Template'


function combineSagas(...sagas) {
    return function* rootSaga(){
        yield all(sagas.reduce( (prevSagas, saga) => [
            ...prevSagas,
            ...Object.keys(saga).map( key => fork(saga[key]))
            ] , [])
        )
    }
}

export default combineSagas(
    templateSaga,
)