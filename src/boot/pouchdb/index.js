import create from "./create";

class Database {
  local = void 0;
  syncHandler = void 0;
  async configure({ onchange }) {
    this.local = create("learn_n_play_db");
    this.local
      .changes({
        since: "now",
        live: true,
        include_docs: true,
      })
      .on("change", onchange);
  }
}

let events = {
  perfil: {
    name: "perfiles",
    eliminar: "perfiles/eliminarPerfil",
    guardar: "perfiles/guardarPerfil",
  },
};

const db = new Database();
export default async ({ Vue, store }) => {
  await db.configure({
    onchange(change) {
      let { data, _id, _rev, _deleted, _attachments } = change.doc;
      let parsed = db.local.rel.parseDocID(_id);
      let event = events[parsed.type];
      if (_deleted) {
        if (event) {
          store.dispatch(event.eliminar, parsed.id);
        }
      } else {
        data.id = parsed.id;
        data.rev = _rev;
        if (!!_attachments) data.attachments = _attachments;
        if (event) {
          store.dispatch(event.guardar, data);
        }
      }
    },
  });
  Vue.prototype.$db = db;
};

export { db };
