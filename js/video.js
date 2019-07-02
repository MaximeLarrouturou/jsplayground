    const player = document.querySelector('#player');
    const speedSlider = document.querySelector('#speedSlider');
    const speed = document.querySelector('#speed');
    const btnPlay = document.querySelector('#btnPlay');
    const videoDuration = player.duration;

    const seekbar = document.querySelector('#seekbar');

    btnPlay.addEventListener('click', playVideo);
    btnStop.addEventListener('click', stopVideo);
    speedSlider.addEventListener('change', adjustSpeed);

    player.addEventListener('durationchange', setupSeekbar);
    player.addEventListener('canplay', setUpPlayer);
    player.addEventListener('ended', clean);

    seekbar.addEventListener('change', seekVideo);
    seekbar.addEventListener('timeupdate', updateUI);

    function setUpPlayer() {
        setupSeekbar();
        player.volume = 0.5;
      }

    function clean() {
      if(player.paused) {
        btnPlay.innerText = 'play';
      }
    }

    function setupSeekbar() {
        console.log('durationchange');
        seekbar.max = player.duration;
      }

    function seekVideo() {
        player.currentTime = seekbar.value;
      }  

    function updateUI() {
        seekbar.value = video.currentTime;
      }

    function playVideo(evt) {
        console.log(evt);
        if(player.paused) {
          player.play();
          btnPlay.innerText = 'pause';
        } else {
          player.pause();
          btnPlay.innerText = 'play';
        }
      }

      function stopVideo(evt) {
        console.log(evt);
        player.currentTime = 0;
      }

      function adjustSpeed(evt) {
        console.log(evt.target.value);
        const currentPlaybackRate = evt.target.value;
        speed.innerHTML = `${currentPlaybackRate}X`;
        player.playbackRate = currentPlaybackRate;
      }  