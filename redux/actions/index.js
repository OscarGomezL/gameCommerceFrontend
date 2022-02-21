export const searcher = (platform, text) => {
	return {
		type: platform,
		payload: text,
	}
}
export const logger = (type,payload) => {
	return {
		type,
		payload
	}
}
export const cartPricer = (type,payload) => {
	return {
		type,
		payload
	}
}