export default class CaiCaiPlayer {
    constructor({width,height}) {
        this.width = width;
        this.height = height;
        this.Player = document.getElementById("video");
        this.progress = document.getElementById("progress");
        this.playBtn = document.getElementById("play");
        this.pauseBtn = document.getElementById("pause");
        this.soundBtn = document.getElementById("sound");
        this.muteBtn = document.getElementById("mute");
        this.soundIcon= document.getElementById("sound-icon")
        this.fullscreen= document.getElementById("fullscreen");
        this.fullscreenExit= document.getElementById("fullscreen-exit")
        this.set= document.getElementById("set");
        this.timestamp= document.getElementById("timestamp")
        this.videoWindowPause= document.getElementById("video-window-pause")
        this.videoWindowPlay= document.getElementById("video-window-play")
        this.videoContainer= document.querySelector('#cai-video-container')
    }

    init = () => {
        this.playBtn.style.display = 'block'
        this.pauseBtn.style.display = 'none'
        this.soundBtn.style.display = 'none'
        this.muteBtn.style.display = 'blocks'
        this.videoWindowPlay.style.display = "none"
        this.videoWindowPause.style.display = "block"
        this.progress.value = 0
        this.fullscreenExit.style.display = 'none'
        this.fullscreen.style.display = 'block'
        this.videoContainer.style.height = this.height
        this.videoContainer.style.width = this.width

    };
    play = () => this.Player.play();
    pause = () => this.Player.pause();
    mute = () => this.Player.muted = true;
    cancelMute = () => this.Player.muted = false;
    openFullscreen = () => {
        var element = this.videoContainer;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullScreen();
        }
    };
    exitFullscreen = () => {
        var element = document;
        if (element?.exitFullscreen) {
            element.exitFullscreen();
        } else if (element?.mozCancelFullScreen) {
            element.mozCancelFullScreen();
        } else if (element?.webkitCancelFullScreen) {
            element.webkitCancelFullScreen();
        }
    };
    canPlay = (fn) => this.Player.addEventListener('canplay', function () {
        fn(this)
    });
    timeUpdate = (fn) => this.Player.addEventListener('timeupdate', function () {
        fn(this)
    });
    onPlay = (fn) => this.Player.addEventListener('play', function () {
        fn(this)
    });
    onPause = (fn) => this.Player.addEventListener('pause', function () {
        fn(this)
    });
    volume = (volume) => this.Player.volume = volume
}
