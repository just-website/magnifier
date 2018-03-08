var imgMin = document.querySelector('.img-wrap.min');
var imgFull = document.querySelector('.img-wrap.full');
imgMin.addEventListener('mousemove', function(event) {
    var metrics = getMetrics(event);
    var sizes = getSizes(metrics, event);
    imgFull.style.backgroundPosition = sizes;
})

function getMetrics(ev) {
    var x = ev.offsetX;
    var y = ev.offsetY;
    return new Array(x, y);
}

function getSizes(arr, ev) {
    var el = ev.target.closest('img');
    if (el) {
        heigthPercent = arr[1] / (el.clientHeight / 100) ;
        widthPercent = arr[0] / (el.clientWidth / 100);
    }
    return widthPercent + '% ' +  heigthPercent + '%';
}
