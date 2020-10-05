import { takeEvery, put, call, select, fork, all } from 'redux-saga/effects'

/* 
 * put: dispatch 호출
 * call: 함수호출(예. API 호출)
 * select: redux 상태값 가져오기
 * fork: 전달된 함수를 비동기적으로 실행
 * all: Promise.all() 병렬적인 비동기 처리

 * takeEvery: 캐치딘 모든 액션에 대해서 핸들러 실행
*/

/*
function* fetchData(action) {
  yield put(baseActions.loading());
  results = yield all({
    bpStatus: call(api.bpStatus, currentChannel),
    blockActivity: call(api.blockActivity, currentChannel),
  });
  console.log(results)
  yield all([
    put(chartActions.getBpStatus(results.bpStatus)),
    put(chartActions.getBlockActivity(results.blockActivity)),
  ]);
}

function* getInitData() {
  try {
    const response = yield call(api.channel);
    yield put({ type: GET_CHANNEL_SUCCESS, payload: response });
    yield fork(fetchData, { payload: response });
  } catch (e) {
    console.log(e)
    yield put({ type: SET_ERROR, payload: e });
  }
}

export function* rootSaga() {
  yield takeEvery(INIT_DATA_REQUEST, getInitData);
}
*/

import { 
  ASYNC_INCREMENT_REQUEST, ASYNC_DECREMENT_REQUEST,
  ASYNC_INCREMENT_SUCCESS, ASYNC_DECREMENT_SUCCESS,
  ASYNC_INCREMENT_FAIL, ASYNC_DECREMENT_FAIL,
} from '../modules/counter'

function* async_increment() {
  try {
    yield put({type: ASYNC_INCREMENT_SUCCESS})
  } catch (err) {
    yield put({type: ASYNC_INCREMENT_FAIL})
  }
}
function* async_decrement() {
  try {
    yield put({type: ASYNC_DECREMENT_SUCCESS})
  } catch (err) {
    yield put({type: ASYNC_DECREMENT_FAIL})
  }
}

function* counterSaga() {
  yield takeEvery(ASYNC_INCREMENT_REQUEST, async_increment)
  yield takeEvery(ASYNC_DECREMENT_REQUEST, async_decrement)
}

export default counterSaga