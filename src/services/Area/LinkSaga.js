import { takeLatest, all, put } from 'redux-saga/effects'

import { LinkActions } from './LinkSlice'
import Api from '../../common/api/Api'

/* function* getMunicipalityByDepartment({ payload }) {
  const muns = yield Api.get(`/municipality/department/${payload}`)
  if (muns.ok) {
    yield put(LinkActions.setMunicipalitys(muns.payload))
  }
  yield put(LinkActions.setLoading(false))
} */

function* createShortLink({ payload }) {
  const short = yield Api.get(`/shorten?url=${payload.url}`)
  console.log(short);
  const array = {
    "short": short.payload.result.original_link,
    "long": short.payload.result.short_link
  }
  yield put(LinkActions.setShortLinks(array))
}

function* createLongLink({ payload }) {
  const long = yield Api.get(`/info?code=${payload.code}`)
  console.log(long);
  if(long.ok){
    const array = {
      "url": long.payload.result.url,
    }
    yield put(LinkActions.setLongLinks(array))
  }
}


function* actionWatcher() {
  // 3) se relaciona lo que está en el LinkSlice con el saga function* createShortLink({ payload })
  yield takeLatest(LinkActions.createShortLink, createShortLink);
  yield takeLatest(LinkActions.createLongLink, createLongLink);
}

export default function* LinkSaga() {
  yield all([actionWatcher()])
}