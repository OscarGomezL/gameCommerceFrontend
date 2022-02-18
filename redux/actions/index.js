export const searcher = (platform, text) => {
	return {
		type: platform,
		payload: text,
	}
}