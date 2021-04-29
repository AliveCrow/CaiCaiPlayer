

//格式化播放时间
export const currentTimeFormat = (time) => {
  let ss = Math.round(time>60?Math.round(time % 60):time)
  let mm = Math.round(time / 60)
  let hh = Math.round(time>3600?Math.round(time % 3600):0)
  if (ss < 10) {
    ss = `0${ss}`
  }
  if (mm < 10) {
    mm = `0${mm}`
  }
  if(hh>=1){
    return `${hh}:${mm}:${ss}`
  }else{
    return `${mm}:${ss}`
  }
}

