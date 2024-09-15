import axios from "axios";


const url = "https://api.spotify.com/v1";

interface configs {
	tokens: [
		{
			name: string;
			token: string;
		},
	];
}

export const api = axios.create({
	baseURL: url,
});

const getToken = async () => {
	const res = (await window.Main.readJson("config.json")) as configs;

	const data = res.tokens.find((token) => token.name === "spotify");

	return data?.token;
};

export const getUser = async () => {
	try {
		const token = await getToken();
		const { data } = await api.get("/me", {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
		});

		return data;
	} catch (err) {
		return { err };
	}
};

export const track = async () => {
	try {
		const token = await getToken();
		const { data } = await api.get("/me/player/currently-playing", {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
		});
		if (data) {
			return data;
		} else {
			throw new Error("Nem uma musica tocando");
		}
	} catch (err: any) {
		return { msg: err };
	}
};

export const playlist = async () => {
	try {
		const token = await getToken();
		const response = await api.get(`/me/player/recently-played`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const playlists = response.data.items;
		console.log(playlists)
		return playlists;
	} catch (error) {
		console.error("Erro ao pesquisar playlists:", error);
		throw error;
	}
};

export const playlistRecommended = async () => {
	try {
		const token = await getToken();
		const response = await api.get(`/search?q=lofi&type=track`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const playlists = response.data.tracks.items;

		return playlists;
	} catch (error) {
		console.error("Erro ao pesquisar playlists:", error);
		throw error;
	}
};

export const playlistQueue = async () => {
	try {
		const token = await getToken();
		const response = await api.get(`/me/player/queue`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const playlists = response.data.queue;

		return playlists;
	} catch (error) {
		console.error("Erro ao pesquisar playlists:", error);
		throw error;
	}
};

export const pause = async () => {
	try {
		const token = await getToken();
		await api.put("/me/player/pause", null, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} catch (err) {
		return { err };
	}
};

export const play = async () => {
	try {
		const token = await getToken();
		await api.put("/me/player/play", null, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} catch (err) {
		return { err };
	}
};

export const playUri = async (uri: string | undefined) => {
	try {
		const token = await getToken();
		await api.put(
			"/me/player/play",
			{ context_uri: uri },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	} catch (err) {
		return { err };
	}
};

export const prev = async () => {
	try {
		const token = await getToken();
		await api.post("/me/player/previous", null, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} catch (err) {
		return { err };
	}
};

export const next = async () => {
	try {
		const token = await getToken();
		await api.post("/me/player/next", null, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} catch (err) {
		return { err };
	}
};
