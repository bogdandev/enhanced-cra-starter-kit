import { takeLatest, call, put, all } from 'redux-saga/effects'
import { message } from 'antd'

import * as commonTypes from './common.constants'
import * as commonActions from './common.actions'
import * as authAPI from '../Auth/auth.dataservice'

function* appStartUpFlow(action) {
  try {
    yield all([call(authAPI.mockDelayed)])
    yield put(commonActions.appStartupSuccess())
    message.success('App loaded!')
  } catch (error) {
    message.error('Server error!')
  }
}

export default function* root() {
  yield takeLatest(commonTypes.APP_STARTUP_REQUEST, appStartUpFlow)
}
