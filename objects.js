var playlist = {Porno: "Saboten"};

function updatePlaylist (
newObject, artistName, songTitle){
  return Object.assign (newObject, {[artistName]: songTitle})
}

function removeFromPlaylist (anotherPlaylist, anotherArtistName){
  delete anotherPlaylist[anotherArtistName];
  return anotherPlaylist;
}