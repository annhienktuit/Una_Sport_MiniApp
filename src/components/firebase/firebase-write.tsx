import { getDatabase, ref, set } from "firebase/database";
import { firebaseDB } from "./firebase";
export function writeUserData(key, value) {
  const db = getDatabase(firebaseDB);
  set(ref(db, "data/" + key), value);
  console.log(value);
}
