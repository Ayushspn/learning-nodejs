const mission = 'learn';
console.log(process.argv[2])
if(mission === 'learn') {
  console.log('Time to learn Node js');
} else {
    console.log('IS ' + mission + ' a valid mission?');
}