/**
 * Created by Pradatta on 4/24/2015.
 */
if(document.getElementById("mirrorStyle")===null) {
    var css = 'body{-webkit-transform: matrix(-1, 0, 0, 1, 0, 0);' +
            '-moz-transform: matrix(-1, 0, 0, 1, 0, 0);' +
            'transform: matrix(-1, 0, 0, 1, 0, 0);' +
            '-o-transform: skew(0deg, 180deg) scale(-1, 1);' +
            'position: absolute;' +
            'filter: progid:DXImageTransform.Microsoft.BasicImage(mirror=1);' +
            'width: 100%;' +
            'height: 100%;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.id = "mirrorStyle";
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}