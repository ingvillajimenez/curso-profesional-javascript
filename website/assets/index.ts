import MediaPlayer from "@ing.villa.jimenez/platzimediaplayer";
import AutoPlay from "@ing.villa.jimenez/platzimediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@ing.villa.jimenez/platzimediaplayer/lib/plugins/AutoPause";
import Ads from "@ing.villa.jimenez/platzimediaplayer/lib/plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton: HTMLElement = document.querySelector(
  "#playButton"
) as HTMLElement;
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector(
  "#muteButton"
) as HTMLElement;
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
