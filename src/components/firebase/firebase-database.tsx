import { getDatabase } from "firebase/database";
import firebase from "./firebase";

const database = getDatabase(firebase);
export default database;
