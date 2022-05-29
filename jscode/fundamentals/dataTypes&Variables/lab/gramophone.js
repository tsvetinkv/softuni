function gramophone(band, albume, song){
    let albNum = albume.length
    let bandNum = band.length
    let songNum = song.length
    let duration = (albNum * bandNum) * songNum / 2;
    let durNum = Number(duration);
    let rotation = durNum / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`);
}
gramophone('Rammstein', 'Sehnsucht',

'Engel')