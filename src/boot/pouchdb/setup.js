import PouchDB from "pouchdb";
import RelationalPouch from "relational-pouch";
import PouchDBFind from "pouchdb-find";

PouchDB.plugin(RelationalPouch);
PouchDB.plugin(PouchDBFind);

export default PouchDB;
