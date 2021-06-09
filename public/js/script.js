// based on: https://gomakethings.com/how-to-play-a-video-in-full-screen-mode-when-its-thumbnail-is-clicked-with-vanilla-js/

document.addEventListener(
    'click',
    function (event) {
        var videoId = event.target.getAttribute('data-video')
        if (!videoId) return

        var iframe = document.createElement('div')
        iframe.innerHTML =
            '<p>x</p><iframe width="100%" height="100%" src="https://www.youtube.com/embed/' +
            videoId +
            '?rel=0&autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        var video = iframe.childNodes[1]

        event.target.parentNode.replaceChild(video, event.target)

        video.requestFullscreen()
    },
    false
)
