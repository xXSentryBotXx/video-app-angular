(function () {
  App.controller('playerController', ['$scope', '$state', 'movieService', 'storageService', function ($scope, $state, movieService, storageService) {
    $scope.activeMovie = {};
    $scope.pauseAndPlay = pauseAndPlay;
    $scope.triggerFullScreen = triggerFullScreen;
    $scope.pauseAndPlay = pauseAndPlay;
    $scope.toggleMute = toggleMute;
    $scope.changeVolume = changeVolume;
    $scope.updateVideoTime = updateVideoTime;

    $scope.paused = true;
    $scope.currentTime = 0;

    let $video = document.getElementById('video');
    let $seekBar = document.getElementById('seek-bar');

    $video.addEventListener('timeupdate', updateProgressBarTime);
    $video.addEventListener('ended', navigateToMain);

    function getActiveMovie () {
      $scope.activeMovie = movieService.getActiveMovie();
      storageService.addMovieId($scope.activeMovie.id);
    }

    function triggerFullScreen () {
      let isInFullScreen =
        (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

      let docElm = document.documentElement;

      if (!isInFullScreen) {
        if ($video.requestFullscreen) {
          $video.requestFullscreen();
        } else if ($video.mozRequestFullScreen) {
          $video.mozRequestFullScreen();
        } else if ($video.webkitRequestFullscreen) {
          $video.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }

      $scope.isFullScreen = !isInFullScreen;
    }

    function pauseAndPlay () {
      if ($video.paused) {
        $video.play();
      } else {
        $video.pause();
      }
      $scope.paused = $video.paused;
    }

    function toggleMute () {
      $video.muted = !$video.muted;
      $scope.muted = $video.muted;
    }

    function changeVolume () {
      $video.volume = $scope.volume;
    }

    function updateVideoTime () {
      $video.currentTime = $video.duration * ($seekBar.value / 100);
    }

    function updateProgressBarTime () {
      $seekBar.value = (100 / $video.duration) * $video.currentTime;
    }

    function navigateToMain () {
      $state.go('main');
    }

    function navigateToMain () {
      $state.go('main');
    }

    function init () {
      getActiveMovie();
    }

    init();
  }]);
})();
