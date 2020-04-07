const CC = require('cie-rgb-color-converter');

export default function(xy, bri){
    const x = xy[0];
    const y = xy[1];
    const rgb = CC.xyBriToRgb(x, y, bri); 
    return rgb;
}