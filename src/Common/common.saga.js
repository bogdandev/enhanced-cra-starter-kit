import { takeLatest, call, put, all } from 'redux-saga/effects'
import { message } from 'antd'
import { replace } from 'react-router-redux'

import * as commonTypes from './common.constants'
import * as commonActions from './common.actions'
import * as authAPI from '../Auth/auth.dataservice'

function* appStartUpFlow() {
  try {
    yield all([call(authAPI.mockDelayed)])
    const isAuthenticated = yield call(authAPI.getAuthToken)
    if (!isAuthenticated) {
      yield put(replace('/login'))
    }
    message.success('App loaded!')
  } catch (error) {
    message.error('Server error!')
  } finally {
    yield put(commonActions.appStartupSuccess())
  }
}

export default function* root() {
  yield takeLatest(commonTypes.APP_STARTUP_REQUEST, appStartUpFlow)
}
