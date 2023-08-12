import { getDatabase, ref, set } from "firebase/database";
import { realTimeDB } from "./firebase";

export function writeUserData(key, value) {
  set(ref(realTimeDB, "data/" + key), value);
  console.log(value);
}
