const time = document.querySelectorAll('.time');
time.forEach(time => time.addEventListener('click',markTime ));
function markTime(){
    let hasMarked = false;
    this.classList.add('mark');
    if (!hasMarked) {
        // first click
        hasMarked = true;
        return;
      }
}