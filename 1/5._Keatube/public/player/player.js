const fullUrl = window.location.href;
const videoId = fullUrl.substr(fullUrl.lastIndexOf("/") + 1);

$.get(`/videos/${videoId}`, (data) => {
    const video = data.response;
    $("#title").text(`${video.title}`);
    $(".description").text(`${video.description}`);

    const player = `<video id="video" width="340" height="240" controls autoplay>
                    <source src="/${videoId}" type="video/mp4">
                    </video>`;
$("#video").append(player);
});