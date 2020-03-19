const fullUrl = window.location.href;
const videoId = fullUrl.substr(fullUrl.lastIndexOf("/") + 1);

const player = `<source src="/videos/${videoId}" type="video/mp4">`
$("#video").append(player);