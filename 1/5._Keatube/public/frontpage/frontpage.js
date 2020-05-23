$.get(`videos${location.search}`, (data) => {
    data.response.map((video) => {
        $("#video-gallery")
            .append(`<a href="player/${video.fileName}">${video.title}</a>`);
    });
});