import { currentTimeFormat } from '../libs/format.js'
import CaiCaiPlayer from '../libs/CaiCaiPlayer.js'


// 通过js修改填充进度条颜色
var progress = document.getElementById("progress");
progress.value = 0
progress.style.backgroundSize = progress.value + '% 100%';
var volumePanel = document.getElementById("volume-panel");
volumePanel.style.backgroundSize = volumePanel.value + '% 100%';

// /!* 获取节点 *!/
const soundIcon = document.getElementById("sound-icon")
const fullscreenExit = document.getElementById("fullscreen-exit")
const videoWindowPause = document.getElementById("video-window-pause")
const videoWindowPlay = document.getElementById("video-window-play")
const videoContainer = document.querySelector('#cai-video-container')

const iPlayer = new CaiCaiPlayer({width: '800px', height: '600px'})

iPlayer.init()
iPlayer.canPlay((e) => {
  timestamp.innerHTML = currentTimeFormat(e.currentTime)
})
iPlayer.timeUpdate((e) => {
  timestamp.innerHTML = currentTimeFormat(e.currentTime)
  progress.value = e.currentTime
  progress.style.backgroundSize = e.currentTime + '% 100%';
})
//点击视频暂停or播放
video.addEventListener('click', function (e) {
  this.paused ? this.play() : this.pause()
})
//进度拖动
progress.oninput = function (e) {
  video.currentTime = parseFloat(this.value)
  progress.value = parseFloat(this.value)
  progress.style.backgroundSize = parseFloat(this.value) + '% 100%';
}
/* 添加事件监听事件 */
//播放
iPlayer.onPlay((e) => {
  videoWindowPause.style.display = 'none'
  videoWindowPlay.style.display = 'none'
  play.style.display = 'none'
  pause.style.display = 'block'
})
iPlayer.onPause((e) => {
  videoWindowPause.style.display = 'block'
  videoWindowPlay.style.display = 'none'
  play.style.display = 'block'
  pause.style.display = 'none'
})
//播放按钮
play.addEventListener('click', () => {
  iPlayer.play()
})
//暂停按钮
pause.addEventListener('click', () => {
  iPlayer.pause()
})

//静音
soundIcon.addEventListener('click', () => {
  iPlayer.mute()
  sound.style.display = 'none'
  mute.style.display = 'block'
})

//取消静音
mute.addEventListener('click', () => {
  iPlayer.cancelMute()
  sound.style.display = 'block'
  mute.style.display = 'none  '
})

//进入全屏
fullscreen.addEventListener('click', function (e) {
  iPlayer.openFullscreen()
})

//退出全屏
fullscreenExit.addEventListener('click', function (e) {
  iPlayer.exitFullscreen()
})

videoContainer.addEventListener('fullscreenchange', function (e) {
  if (document.webkitFullscreenElement) {
    fullscreenExit.style.display = 'block'
    fullscreen.style.display = 'none'
    video.classList.add('fullscreen')
  } else {
    video.classList.add('auto')
    video.classList.remove('fullscreen')
    fullscreenExit.style.display = 'none'
    fullscreen.style.display = 'block'
  }
})

//调整音量
volumePanel.oninput = function () {
  iPlayer.volume(this.value / 100)
  volumePanel.style.backgroundSize = volumePanel.value + '% 100%';
}