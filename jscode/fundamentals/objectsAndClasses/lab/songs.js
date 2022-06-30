function songs(array) {
  class Song {
    constructor(album, song, time) {
      this.album = album;
      this.song = song;
      this.time = time;
    }
  }
  let n = array.shift();
  let songs = []
  for (let i = 0; i < n; i++) {
    let info = array[i].split('_');
    let album = info[0];
    let song = info[1];
    let time = info[2];
    let newSong = new Song(album, song, time);
    songs.push(newSong);
  }
  let typeAlbum = array.pop();
  if (typeAlbum == 'all'){
    songs.map(i => console.log(i.song));
  }else{
    let filter = songs.filter(i => i.album == typeAlbum); 
    filter.map(i => console.log(i.song));
  }
}
songs([
  4,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "hgjjh_naqme_3:18",
  "all",
]);
