const CC = require('cie-rgb-color-converter');

// export default function(xy, bri){
//     const x = xy[0];
//     const y = xy[1];
//     const rgb = CC.xyBriToRgb(x, y, bri);
//     console.log(rgb)
//     return rgb;
// }

// export default function(xy, bri){
//     const x = xy[0];
//     const y = xy[1];
//     let r,g,b,z,X,Y,Z,maxValue;
//     z = 1.0 - x - y;
//     Y = bri / 255.0; // Brightness of lamp
//     X = (Y / y) * x;
//     Z = (Y / y) * z;
//     r = X * 1.612 - Y * 0.203 - Z * 0.302;
//     g = -X * 0.509 + Y * 1.412 + Z * 0.066;
//     b = X * 0.026 - Y * 0.072 + Z * 0.962;
//     r = r <= 0.0031308 ? 12.92 * r : (1.0 + 0.055) * Math.pow(r, (1.0 / 2.4)) - 0.055;
//     g = g <= 0.0031308 ? 12.92 * g : (1.0 + 0.055) * Math.pow(g, (1.0 / 2.4)) - 0.055;
//     b = b <= 0.0031308 ? 12.92 * b : (1.0 + 0.055) * Math.pow(b, (1.0 / 2.4)) - 0.055;
//     maxValue = Math.max(r,g,b);
//     r /= maxValue;
//     g /= maxValue;
//     b /= maxValue;
//     r = r * 255;   if (r < 0) { r = 255 };
//     g = g * 255;   if (g < 0) { g = 255 };
//     b = b * 255;   if (b < 0) { b = 255 };
//     const rgb = {
//         r :r,
//         g :g,
//         b :b
//     };
//     console.log(rgb)
//     return rgb; 
// }

export default function (h, s, v) {
    h = (h / 65535);
    s = (s / 255);
    v = (v / 255);
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s;
        v = h.v;
        h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q; 
            g = v; 
            b = p;
            break;
        case 2:
            r = p; 
            g = v; 
            b = t;
            break;
        case 3:
            r = p; 
            g = q; 
            b = v;
            break;
        case 4:
            r = t; 
            g = p; 
            b = v;
            break;
        case 5:
            r = v; 
            g = p; 
            b = q;
            break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}