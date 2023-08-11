import { getDatabase, ref, set } from "firebase/database";
import { fbApp } from "./firebase";
export function writeUserData(key, value) {
  const db = getDatabase(fbApp);
  set(ref(db, "data/" + key), value);
  console.log(value);
}
