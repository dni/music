var wavesurfer = [];
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
  return new Promise(function(done) {
    wavesurfer[id] = WaveSurfer.create({
      container: '#track'+id,
      waveColor: 'chartreuse',
      barHeight: 2,
      barWidth: 1,
      mediaControls: true,
      progressColor: '#eee',
      responsive: true,
      hideScrollbar: true
    })
    wavesurfer[id].load(url);
    wavesurfer[id].on('ready', function(e){
      document.getElementById("track-controls-"+id).style.display = "block";
      done();
    });
  });
};

render(0, {
  title: "HEADS ON FIRE",
  style: "Dubstep",
  artwork: "https://i1.sndcdn.com/artworks-nYMm8ETxSOhOWEXq-X7CZWg-t500x500.jpg",
  description: "Winters Morning having fun with super vintage Equipment",
  url: "dni.mp3"
});
