import banderas from "src/data/banderas";
import opcionMultiple from "src/data/opcionMultiple";
export async function loadData({ commit }) {
	commit("updateBanderas", banderas);
	commit("updateOpcionMultiple", opcionMultiple);
}
