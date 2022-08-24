import { all } from '@redux-saga/core/effects';
import { usersSaga } from './usersModul';

export default function* rootSaga() {
  yield all([usersSaga()]);
}
