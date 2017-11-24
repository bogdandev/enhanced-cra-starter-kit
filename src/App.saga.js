import { all } from 'redux-saga/effects'

import AuthSaga from './Auth/auth.saga'
import CommonSaga from './Common/common.saga'

export default function* root() {
  yield all([
      AuthSaga(),
      CommonSaga()
    ])
}
