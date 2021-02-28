function spnEpisode(){
    const seasonEpisodeCount = [22,22,16,22,22,22,23,23,23,23,23,23,23,20,20];
    const season = Math.floor(Math.random()*14);
    const episode = Math.floor(Math.random()*seasonEpisodeCount[season]);
    console.log(`Season ${season}, Episode ${episode}`);
}
  
spnEpisode();