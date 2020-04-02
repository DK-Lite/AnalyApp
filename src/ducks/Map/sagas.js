import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import * as types from './types'
import * as mapActions from './actions'
import * as analyActions from 'ducks/Analyzer/actions'
import { instance } from 'utils/api'


function* updateAptSaga(action){
    try{
        const { data } = yield call(instance.post, "/api/data-warehouse/apt-unique-info/apt-info", action.payload)
        
        yield put(analyActions.updateTradeTable(data.info))

        //const data = yield call(instance.post, "host:port", action.payload)
        //yield put(templateActions.success)
    } catch (e){
        console.error(e);
        //yield put(templateActions.fail)
    }
}

function* loadAptInfo(){
    try{
        const { data } = yield call(instance.get, "/api/data-warehouse/apt-unique-info")
        yield put(mapActions.setAptInfos(data.info))
    } catch (e){
        console.error(e);
        //yield put(templateActions.fail)
    }
}

export function* watchSaga(){
    yield takeLatest(types.UPDATE_APT, updateAptSaga);
    yield takeEvery(types.LOAD_APT_INFOS, loadAptInfo);
}