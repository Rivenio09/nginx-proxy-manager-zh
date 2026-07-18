const gravatarAvatarUrl = /^(?:https?:)?\/\/(?:[^/]+\.)?gravatar\.com\/avatar\//i;

export const getAvatarUrl = (url?: string): string => {
	return url?.replace(gravatarAvatarUrl, "https://cravatar.cn/avatar/") || "";
};
