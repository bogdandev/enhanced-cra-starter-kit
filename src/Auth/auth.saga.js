import { takeLatest, call, put } from 'redux-saga/effects'
import { message } from 'antd'

import * as authTypes from './auth.constants'
import * as authAPI from './auth.dataservice'
import * as authActions from './auth.actions'

function* loginFlow(action) {
  const { email, password } = action.payload
  try {
    const {ok, data} = yield call(authAPI.loginUser, email, password)

    if (ok && data) {
      const { token } = data
      yield put(authActions.loginSuccess(token))
      yield call(authAPI.setAuthToken, token)
      message.success('Logged in!')
    } else {
      yield put(authActions.loginFailure(data.error))
      message.warning(data.error)
    }
  } catch (err) {
    message.error('Server error!')
  }
}

export default function* root() {
  yield takeLatest(authTypes.LOGIN_REQUEST, loginFlow)
}
