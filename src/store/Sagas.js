import { fork, all } from "redux-saga/effects";
import LinkSaga from "../services/Area/LinkSaga";

export default function* rootSaga() {
  yield all(
    [
      fork(LinkSaga),
    ]);
}
