import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const videoplayerCurrentTime = 'videoplayer-current-time';

const onPlay = event => {
  localStorage.setItem(videoplayerCurrentTime, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(videoplayerCurrentTime) || 0);