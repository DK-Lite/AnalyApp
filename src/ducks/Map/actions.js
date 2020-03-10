import * as types from './types'

export const updateAptName = (data) => ({
    type: types.UPDATE_APT,
    payload: data,  
})

export const loadAptInfos = (data) => ({
    type: types.LOAD_APT_INFOS,
    payload: data,  
})

export const setAptInfos = (data) => ({
    type: types.SET_APT_INFOS,
    payload: data,
})