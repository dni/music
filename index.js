var wavesurfer = [];
var opts = {
  waveColor: 'chartreuse',
  progressColor: '#eee',
  barHeight: 2,
  barWidth: 1,
  mediaControls: true,
  responsive: true,
  hideScrollbar: true
};

var el = document.getElementById("tracks");
var template = document.getElementById("track-template").innerHTML;

var render = function(id, data) {
    el.insertAdjacentHTML( 'beforeend', template
      .replaceAll("%id%", id)
      .replaceAll('%title%', data.title)
      .replaceAll('%date%', data.date)
      .replaceAll('%artwork%', data.artwork)
      .replaceAll('data-src', "src")
      .replaceAll('%style%', data.style)
      .replaceAll('%description%', data.description)
      .replaceAll('%url%', data.url)
    );
};

var loadTrack = function(button, id, url) {
  button.style.display = "none";
  opts.container = '#track'+id;
  wavesurfer[id] = WaveSurfer.create(opts);
  wavesurfer[id].load(url);
  wavesurfer[id].on('ready', function(e){
    document.getElementById("track-controls-"+id).style.display = "block";
  });
};

fetch("tracks.json")
  .then(response => response.json())
  .then(json => {
    var i = 0;
    json.tracks.forEach(track => {
      render(i, track);
      i++;
    })
  });
