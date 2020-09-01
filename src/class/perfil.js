import { db } from "boot/pouchdb/index";
import store from "src/store/index";
export default class Perfil {
	genero = void 0;
	fotoPerfil = {
		nombre: "",
		foto: null,
	};
	fotos = [];
	nombre = void 0;
	apellido = void 0;
	fecha = void 0;
	nivel = 1;
	exp = 0;
	tiempo = 0;
	logros = [];
	estadisticas = {
		basico: {
			tiempo: 0,
			correctas: 0,
			incorrectas: 0,
			poderes: 0,
			logros: [],
		},
		intermedio: {
			tiempo: 0,
			correctas: 0,
			incorrectas: 0,
			poderes: 0,
			logros: [],
		},
		avanzado: {
			tiempo: 0,
			correctas: 0,
			incorrectas: 0,
			poderes: 0,
			logros: [],
		},
	};
	attachments = void 0;
	id = void 0;
	rev = void 0;
	constructor(
		genero,
		nombre,
		apellido,
		fecha,
		fotoPerfil,
		fotos,
		nivel,
		exp,
		tiempo,
		logros,
		estadisticas,
		attachments,
		id,
		rev
	) {
		this.genero = genero;
		this.nombre = nombre;
		this.apellido = apellido;
		this.fecha = fecha;
		if (!!fotoPerfil) {
			this.fotoPerfil = fotoPerfil;
		}
		if (!!fotos) {
			this.fotos = fotos;
		}
		if (!!nivel) {
			this.nivel = nivel;
		}
		if (!!exp) {
			this.exp = exp;
		}
		if (!!tiempo) {
			this.tiempo = tiempo;
		}
		if (!!logros) {
			this.logros = logros;
		}
		if (!!estadisticas) {
			this.estadisticas = estadisticas;
		}
		if (!!attachments) {
			this.attachments = attachments;
		}
		if (!!id) {
			this.id = id;
		}
		if (!!rev) {
			this.rev = rev;
		}
	}
	async setFotoPerfil(fotoPerfil) {
		this.fotoPerfil = fotoPerfil;
	}
	setRutaFoto(ruta) {
		this.fotoPerfil.foto = ruta;
	}
	setNivel(nivel) {
		if (
			!!store.state.perfiles.perfil &&
			store.state.perfiles.perfil.id === this.id
		) {
			store.commit("perfiles/updateNivel", nivel);
		} else {
			this.nivel = nivel;
		}
	}
	setExp(exp) {
		if (
			!!store.state.perfiles.perfil &&
			store.state.perfiles.perfil.id === this.id
		) {
			store.commit("perfiles/updateExp", exp);
		} else {
			this.exp = exp;
		}
	}
	setCorrectas(dificultad, value) {
		if (
			!!store.state.perfiles.perfil &&
			store.state.perfiles.perfil.id === this.id
		) {
			store.commit("perfiles/increaseCorrectasPerfil", {
				dificultad,
				value,
			});
		} else {
			switch (dificultad) {
				case 0:
					this.estadisticas.basico.correctas = value;
					break;
				case 1:
					this.estadisticas.intermedio.correctas = value;
					break;
				case 1:
					this.estadisticas.avanzada.correctas = value;
					break;
			}
		}
	}
	setIncorrectas(dificultad, value) {
		if (
			!!store.state.perfiles.perfil &&
			store.state.perfiles.perfil.id === this.id
		) {
			store.commit("perfiles/increaseIncorrectasPerfil", {
				dificultad,
				value,
			});
		} else {
			switch (dificultad) {
				case 0:
					this.estadisticas.basico.incorrectas = value;
					break;
				case 1:
					this.estadisticas.intermedio.incorrectas = value;
					break;
				case 1:
					this.estadisticas.avanzada.incorrectas = value;
					break;
			}
		}
	}
	setAttachments(attachments) {
		this.attachments = attachments;
	}
	async setId(id) {
		this.id = id;
		await this.guardarPerfil();
	}
	async setRev(rev) {
		this.rev = rev;
		await this.guardarPerfil();
	}
	async guardarPerfil() {
		let resultado;
		try {
			resultado = await db.local.rel.save("perfil", this.toObject());
			if (
				!!store.state.perfiles.perfil &&
				store.state.perfiles.perfil.id === this.id
			) {
				store.commit("perfiles/updateIdPerfil", resultado.id);
				store.commit("perfiles/updateRevPerfil", resultado.rev);
			} else {
				this.id = resultado.id;
				this.rev = resultado.rev;
			}
		} catch (e) {
			console.log("no se pudo guardar el perfil: ", e);
			resultado = null;
		} finally {
			return resultado;
		}
	}
	async guardarFoto(foto) {
		let resultado;
		try {
			resultado = await db.local.rel.putAttachment(
				"perfil",
				{ id: this.id, rev: this.rev },
				foto.name,
				foto,
				foto.type
			);
			const busqueda = await db.local.rel.find("perfil", this.id);
			if (
				!!store.state.perfiles.perfil &&
				store.state.perfiles.perfil.id === this.id
			) {
				store.commit("perfiles/updateRevPerfil", resultado);
				store.commit("perfiles/agregarFotosPerfil", foto.name);
			} else {
				this.rev = resultado;
				this.fotos.push(foto.name);
				this.setAttachments(busqueda.perfiles[0].attachments);
			}
			await this.guardarPerfil();
		} catch (e) {
			console.log("ha ocurrido un error al guardar la foto: " + e);
			resultado = null;
		} finally {
			return resultado;
		}
	}
	async eliminarFoto(indice) {
		let foto = this.fotos[indice];
		let resultado;
		try {
			resultado = await db.local.rel.removeAttachment(
				"perfil",
				{ id: this.id, rev: this.rev },
				foto
			);
			if (
				!!store.state.perfiles.perfil &&
				store.state.perfiles.perfil.id === this.id
			) {
				store.commit("perfiles/updateRevPerfil", resultado);
				store.commit("perfiles/eliminarFotosPerfil", indice);
			} else {
				this.rev = resultado;
				this.fotos.splice(indice, 1);
			}
			await this.guardarPerfil();
		} catch (e) {
			console.log("ha ocurrido un error al eliminar la foto: " + e);
			resultado = null;
		} finally {
			return resultado;
		}
	}
	async establecerFotoPerfil(nombreFoto) {
		let resultado;
		try {
			const foto = await db.local.rel.getAttachment(
				"perfil",
				this.id,
				nombreFoto
			);
			if (
				!!store.state.perfiles.perfil &&
				store.state.perfiles.perfil.id === this.id
			) {
				store.commit("perfiles/establecerFotosPerfil", {
					nombre: nombreFoto,
					foto: URL.createObjectURL(foto),
				});
			} else {
				this.setFotoPerfil({
					nombre: nombreFoto,
					foto: URL.createObjectURL(foto),
				});
			}
			resultado = await this.guardarPerfil();
		} catch (e) {
			console.log(
				"ha ocurrido un error al establecer la foto de perfil: " + e
			);
			resultado = null;
		} finally {
			return resultado;
		}
	}
	async actualizarRutaFoto(nombreFoto) {
		try {
			const foto = await db.local.rel.getAttachment(
				"perfil",
				this.id,
				nombreFoto
			);
			this.setRutaFoto(URL.createObjectURL(foto));
		} catch (e) {
			console.log(
				"ha ocurrido un error al acutalizar la ruta de la foto de perfil: " +
					e
			);
		}
	}
	toObject() {
		return {
			genero: this.genero,
			nombre: this.nombre,
			apellido: this.apellido,
			fecha: this.fecha,
			fotoPerfil: this.fotoPerfil,
			fotos: this.fotos,
			nivel: this.nivel,
			exp: this.exp,
			tiempo: this.tiempo,
			logros: this.logros,
			estadisticas: this.estadisticas,
			attachments: this.attachments,
			id: this.id,
			rev: this.rev,
		};
	}
}
