function RazztanSportsIcon({ style,onClick}) {
    console.log("🚀 => RazztanSportsIcon => style:", style)
    // Primero, obtén el tamaño de fuente raíz del elemento html
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Define el estilo predeterminado del SVG
    const defaultStyle = {
        fill: '#eeebe3', // Color predeterminado
        height: '70px', // Altura predeterminada
    };

    // Combinar el estilo predeterminado con el estilo pasado como prop
    const svgStyle = { ...defaultStyle, ...style };

    // Si se proporciona fontSize en rem, conviértelo a píxeles y agrega al estilo
    if (svgStyle.fontSize) {
        const fontSizeInPx = svgStyle.fontSize.includes('rem') ? parseFloat(svgStyle.fontSize) * rootFontSize + 'px' : svgStyle.fontSize;
        svgStyle.height = fontSizeInPx;
        
    }
    if(svgStyle.color){
      console.log("🚀 => RazztanSportsIcon => svgStyle.color:", svgStyle.color)
      
        svgStyle.fill = svgStyle.color ;
    }

    return (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="70.000000pt" height="70.000000pt" style={svgStyle} viewBox="0 0 200.000000 200.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
          fill="#eeebe3" style={svgStyle} stroke="none">
                <path d="M880 1822 c0 -5 31 -42 70 -83 51 -54 69 -69 69 -54 0 11 -26 48 -58
                83 -53 57 -81 75 -81 54z"/>
                <path d="M996 1815 c4 -8 7 -15 9 -15 2 0 5 7 9 15 3 9 0 15 -9 15 -9 0 -12
                -6 -9 -15z"/>
                <path d="M1077 1823 c-14 -13 -6 -47 19 -90 14 -24 22 -48 18 -55 -5 -7 -3 -8
                6 -3 7 4 16 2 20 -5 4 -7 26 -16 48 -20 38 -6 39 -6 29 11 -14 22 -23 24 -31
                7 -5 -14 -44 26 -67 69 -10 19 -9 26 6 43 18 20 18 21 1 38 -16 16 -17 16 -10
                0 3 -10 3 -26 -1 -35 -6 -17 -7 -17 -20 0 -8 11 -11 25 -8 33 5 15 1 18 -10 7z"/>
                <path d="M770 1792 c0 -10 7 -28 16 -40 8 -12 12 -27 9 -32 -3 -6 0 -10 7 -10
                18 0 41 -38 32 -52 -5 -8 -1 -9 10 -5 10 4 28 7 41 7 19 0 22 4 17 23 -5 18
                -7 19 -10 5 -6 -31 -21 -20 -68 52 -26 39 -49 70 -50 70 -2 0 -4 -8 -4 -18z"/>
                <path d="M1236 1794 c-24 -23 -20 -44 16 -81 28 -29 31 -36 20 -53 -13 -22 -3
                -27 16 -8 22 22 14 63 -18 86 -34 26 -38 46 -12 61 9 6 12 11 5 11 -6 0 -19
                -7 -27 -16z"/>
                <path d="M1290 1793 c0 -4 5 -15 10 -23 8 -13 10 -13 10 2 0 9 -4 20 -10 23
                -5 3 -10 3 -10 -2z"/>
                <path d="M665 1780 c-17 -6 -16 -7 8 -12 15 -3 27 -2 27 3 0 13 -14 17 -35 9z"/>
                <path d="M1360 1758 c0 -13 -11 -49 -24 -80 -13 -32 -20 -58 -16 -58 5 0 16
                -3 24 -6 11 -4 15 -2 11 8 -3 8 5 44 18 81 20 55 22 67 10 71 -22 9 -23 8 -23
                -16z"/>
                <path d="M614 1764 c-8 -3 -3 -26 13 -71 13 -36 21 -73 18 -80 -4 -11 1 -13
                18 -7 30 9 30 9 18 31 -20 35 -50 121 -44 127 7 7 -6 7 -23 0z"/>
                <path d="M1150 1744 c0 -14 3 -14 15 -4 8 7 15 14 15 16 0 2 -7 4 -15 4 -8 0
                -15 -7 -15 -16z"/>
                <path d="M1418 1751 c22 -14 10 -54 -18 -62 -22 -6 -20 -7 11 -8 35 -1 49 11
                49 39 0 13 -30 40 -43 40 -8 0 -8 -3 1 -9z"/>
                <path d="M553 1735 c-9 -24 1 -27 15 -5 8 13 8 20 2 20 -6 0 -13 -7 -17 -15z"/>
                <path d="M1052 1738 c-27 -27 -7 -78 30 -78 16 0 16 2 -3 21 -14 14 -19 28
                -15 45 7 27 5 29 -12 12z"/>
                <path d="M504 1722 c-7 -4 -15 -49 -19 -101 -7 -84 -9 -93 -21 -76 -14 18 -14
                18 -14 0 0 -10 -12 -32 -27 -48 -26 -28 -25 -28 26 7 35 24 55 45 56 59 2 12
                6 55 9 95 4 39 6 72 4 72 -2 0 -8 -4 -14 -8z"/>
                <path d="M1465 1685 c-32 -31 -33 -83 -4 -116 19 -23 20 -23 10 -2 -6 12 -11
                30 -11 41 0 29 42 85 70 93 23 6 22 7 -8 8 -23 1 -41 -7 -57 -24z"/>
                <path d="M1574 1682 c17 -19 18 -27 8 -60 -14 -45 -36 -68 -72 -75 -18 -3 -15
                -5 13 -6 79 -2 118 88 60 140 -25 22 -26 22 -9 1z"/>
                <path d="M421 1681 c-9 -6 -11 -16 -6 -27 6 -16 8 -16 13 -4 2 8 9 21 15 28
                11 14 -1 16 -22 3z"/>
                <path d="M736 1654 c-8 -20 0 -32 14 -18 5 5 5 15 1 22 -6 11 -10 10 -15 -4z"/>
                <path d="M353 1634 c-3 -8 -3 -50 1 -93 3 -43 3 -80 0 -84 -3 -3 -39 10 -80
                28 -55 25 -74 30 -74 20 0 -8 16 -22 36 -30 33 -13 35 -17 23 -33 -13 -15 -12
                -16 4 -3 14 11 23 12 43 2 15 -7 22 -16 18 -23 -4 -6 8 1 27 16 l34 27 -3 94
                c-3 88 -14 118 -29 79z"/>
                <path d="M1660 1625 c0 -20 -69 -115 -83 -115 -6 0 -2 -6 8 -14 17 -12 21 -10
                43 23 64 94 63 94 79 78 21 -21 8 -57 -20 -57 -20 0 -22 -5 -22 -49 0 -28 6
                -56 13 -62 10 -10 12 -3 12 39 0 38 4 52 14 52 22 0 39 28 32 52 -7 29 -76 76
                -76 53z"/>
                <path d="M296 1597 c-16 -13 -25 -26 -20 -29 5 -3 19 8 32 23 28 35 26 36 -12
                6z"/>
                <path d="M580 1611 c0 -8 -8 -23 -17 -34 -17 -18 -17 -18 10 -6 30 13 31 17
                17 39 -8 12 -10 13 -10 1z"/>
                <path d="M683 1545 c-34 -14 -73 -67 -73 -97 0 -22 3 -22 40 -3 34 17 80 74
                80 98 0 20 -5 20 -47 2z"/>
                <path d="M1270 1541 c0 -25 44 -77 82 -97 38 -20 43 -14 28 30 -12 36 -46 67
                -87 80 -19 6 -23 3 -23 -13z"/>
                <path d="M537 1533 c-23 -22 13 -123 44 -123 15 0 10 68 -6 100 -15 30 -26 36
                -38 23z"/>
                <path d="M1426 1511 c-17 -33 -22 -101 -7 -101 22 0 52 55 49 89 -4 45 -23 50
                -42 12z"/>
                <path d="M1776 1532 c-2 -4 4 -8 14 -8 10 0 16 4 14 8 -3 4 -9 8 -14 8 -5 0
                -11 -4 -14 -8z"/>
                <path d="M905 1480 c-91 -44 -190 -72 -223 -63 -13 3 -41 -2 -62 -12 -40 -18
                -46 -32 -40 -88 1 -10 -7 -25 -17 -32 -17 -13 -17 -14 1 -28 17 -13 17 -14 -8
                -30 -34 -22 -33 -37 1 -37 l28 0 -38 -31 c-44 -36 -41 -50 8 -39 39 9 49 -4
                10 -14 -26 -7 -63 -52 -51 -63 3 -3 23 -1 43 5 45 14 54 9 17 -10 -30 -14 -63
                -62 -52 -74 4 -3 25 2 48 13 45 23 56 12 11 -11 -27 -14 -60 -70 -48 -82 7 -7
                46 13 75 39 19 18 22 18 22 4 0 -9 -5 -17 -10 -17 -19 0 -60 -52 -60 -76 0
                -32 12 -30 53 6 19 16 37 27 40 24 3 -4 -7 -17 -23 -31 -27 -22 -51 -86 -37
                -99 9 -9 53 24 67 51 7 13 17 22 22 19 5 -4 1 -16 -10 -28 -28 -30 -42 -61
                -42 -91 0 -38 29 -29 59 17 13 21 28 35 33 32 5 -4 -1 -17 -13 -30 -15 -16
                -23 -37 -23 -66 -1 -57 22 -57 51 0 12 24 24 38 28 32 3 -5 -1 -20 -9 -32 -17
                -24 -22 -103 -7 -113 11 -6 51 41 51 61 0 29 21 22 74 -24 30 -26 71 -57 90
                -67 36 -19 36 -19 73 0 20 11 63 44 94 73 31 28 58 52 61 52 2 0 4 -10 5 -22
                2 -25 36 -74 49 -71 17 5 16 84 -1 109 -9 14 -13 29 -10 35 4 5 16 -9 28 -33
                26 -51 51 -57 55 -13 2 20 -6 44 -22 68 -14 20 -21 39 -16 42 5 3 16 -7 24
                -23 21 -41 44 -58 58 -44 16 16 -7 87 -33 106 -12 8 -18 19 -14 26 5 8 13 3
                25 -15 19 -30 58 -60 67 -51 13 13 -10 77 -37 99 -16 14 -26 27 -23 31 3 3 21
                -8 40 -24 41 -36 53 -38 53 -6 0 24 -41 76 -60 76 -5 0 -10 8 -10 17 0 14 3
                14 23 -4 32 -30 65 -45 72 -33 10 16 -22 65 -49 78 -14 6 -26 16 -26 21 0 4
                18 -1 40 -12 23 -11 44 -16 48 -13 11 12 -22 60 -52 74 -37 19 -28 24 17 10
                20 -6 40 -9 43 -6 10 11 -28 58 -52 64 -38 10 -28 23 11 14 49 -11 52 3 8 39
                l-38 31 28 0 c34 0 35 15 1 37 -25 16 -25 17 -8 30 18 14 18 15 1 28 -10 7
                -18 22 -17 32 6 56 0 70 -39 88 -25 11 -50 15 -66 11 -29 -7 -172 37 -255 79
                -27 14 -55 25 -62 24 -7 0 -49 -18 -93 -39z m75 -192 l0 -142 -57 -56 c-37
                -35 -73 -60 -99 -68 -51 -15 -150 -16 -159 -1 -9 14 -30 297 -23 305 3 3 47
                14 97 24 51 10 120 32 154 48 34 17 68 31 75 31 9 1 12 -34 12 -141z m160
                -301 c29 -13 68 -20 112 -21 80 0 79 5 16 -125 -42 -87 -152 -216 -217 -254
                l-31 -18 0 254 0 254 37 -35 c21 -19 58 -44 83 -55z"/>
                <path d="M1785 1450 c-27 -27 -56 -50 -64 -50 -11 0 -11 -4 3 -19 18 -19 19
                -19 68 37 27 31 54 59 59 60 5 2 15 -11 23 -28 9 -23 15 -28 19 -17 5 13 -39
                67 -54 67 -3 0 -27 -22 -54 -50z"/>
                <path d="M484 1466 c-15 -39 20 -116 53 -116 29 0 6 88 -31 119 -13 11 -17 10
                -22 -3z"/>
                <path d="M1488 1463 c-37 -43 -53 -113 -25 -113 34 0 69 80 50 114 -8 15 -11
                15 -25 -1z"/>
                <path d="M75 1389 l-26 -32 23 -15 c13 -8 42 -33 65 -55 40 -38 41 -39 52 -18
                9 16 9 21 -1 21 -22 1 -112 85 -104 98 18 30 75 -1 62 -33 -3 -9 -2 -13 4 -10
                5 3 26 1 46 -4 31 -8 41 -7 59 8 l23 17 -20 13 c-18 11 -20 11 -15 -3 5 -12 1
                -16 -16 -15 -23 1 -78 16 -64 18 4 1 3 10 -3 21 -16 30 -54 25 -85 -11z"/>
                <path d="M1880 1395 c-8 -9 -11 -30 -7 -55 7 -55 -21 -86 -53 -57 -12 10 -12
                9 -1 -5 17 -23 54 -23 74 0 13 14 16 29 11 64 -7 50 6 69 32 47 10 -8 13 -21
                9 -38 -5 -21 -4 -23 9 -12 16 14 14 23 -12 54 -19 21 -45 22 -62 2z"/>
                <path d="M440 1366 c0 -36 37 -86 65 -86 27 0 12 63 -25 100 -29 29 -40 25
                -40 -14z"/>
                <path d="M1515 1374 c-23 -25 -42 -80 -32 -91 12 -11 48 10 62 37 17 33 20 80
                5 80 -6 0 -22 -12 -35 -26z"/>
                <path d="M1802 1337 c-6 -7 -7 -19 -3 -26 6 -9 10 -5 13 13 6 30 5 31 -10 13z"/>
                <path d="M404 1288 c6 -35 56 -88 81 -88 18 0 18 2 1 44 -16 38 -53 76 -74 76
                -11 0 -13 -8 -8 -32z"/>
                <path d="M1551 1299 c-25 -23 -56 -88 -47 -97 10 -9 54 16 70 40 8 13 18 35
                21 51 9 34 -11 37 -44 6z"/>
                <path d="M380 1220 c0 -35 27 -76 60 -90 17 -7 34 -10 38 -6 12 13 -32 80 -65
                99 -33 19 -33 19 -33 -3z"/>
                <path d="M1582 1220 c-32 -20 -72 -84 -59 -96 3 -4 20 -1 37 6 34 14 63 60 58
                91 -3 19 -4 19 -36 -1z"/>
                <path d="M502 1170 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
                <path d="M1492 1165 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/>
                <path d="M360 1124 c0 -26 65 -84 94 -84 36 0 33 16 -13 61 -40 40 -81 52 -81
                23z"/>
                <path d="M1559 1101 c-46 -45 -49 -61 -13 -61 29 0 94 58 94 84 0 29 -41 17
                -81 -23z"/>
                <path d="M495 1020 c2 -58 11 -127 19 -155 21 -67 20 -72 -6 -47 -28 26 -70
                42 -109 42 -38 0 -37 -11 6 -49 37 -32 79 -40 115 -21 16 8 20 5 30 -24 25
                -78 226 -342 245 -324 4 4 -16 33 -45 65 -164 179 -231 320 -250 528 l-9 90 4
                -105z"/>
                <path d="M1497 1028 c-13 -195 -91 -358 -247 -520 -28 -28 -50 -55 -50 -60 0
                -21 24 -2 81 64 71 82 128 168 160 238 19 41 25 48 40 40 35 -19 77 -11 114
                21 43 38 44 49 6 49 -39 0 -81 -16 -108 -42 -27 -25 -28 -20 -7 47 14 48 32
                255 22 255 -3 0 -8 -42 -11 -92z"/>
                <path d="M350 1044 c0 -13 33 -61 49 -71 31 -19 81 -26 81 -11 0 22 -29 57
                -60 73 -29 15 -70 20 -70 9z"/>
                <path d="M1573 1030 c-31 -19 -53 -48 -53 -70 0 -13 53 -4 81 13 16 10 49 58
                49 71 0 13 -47 5 -77 -14z"/>
                <path d="M365 950 c-18 -29 46 -80 100 -80 42 0 44 8 8 42 -41 39 -96 58 -108
                38z"/>
                <path d="M1580 949 c-27 -11 -80 -58 -80 -71 0 -4 18 -8 39 -8 29 0 47 7 71
                30 46 43 29 72 -30 49z"/>
                <path d="M418 763 c-25 -6 -22 -18 7 -42 34 -26 75 -34 108 -22 38 15 34 26
                -16 50 -42 20 -64 23 -99 14z"/>
                <path d="M1483 749 c-50 -25 -53 -36 -15 -50 34 -13 91 2 117 31 22 24 18 29
                -26 36 -23 3 -48 -2 -76 -17z"/>
                <path d="M458 674 c-27 -8 -22 -22 15 -44 37 -23 81 -25 116 -6 l24 13 -27 18
                c-27 18 -97 28 -128 19z"/>
                <path d="M1441 669 c-14 -5 -31 -15 -39 -21 -11 -10 -9 -14 10 -24 13 -8 37
                -13 53 -14 31 0 95 33 95 49 0 20 -78 27 -119 10z"/>
                <path d="M518 589 c-16 -6 -28 -15 -28 -20 0 -14 56 -39 89 -39 33 0 81 19 81
                31 0 25 -99 44 -142 28z"/>
                <path d="M1381 587 c-43 -15 -49 -30 -16 -45 35 -16 80 -15 115 3 38 20 38 30
                -1 44 -39 14 -54 13 -98 -2z"/>
                <path d="M581 507 c-14 -6 -26 -17 -28 -23 -4 -13 48 -34 84 -34 29 0 83 26
                83 41 0 26 -97 38 -139 16z"/>
                <path d="M1303 510 c-13 -5 -23 -14 -23 -19 0 -15 54 -41 83 -41 36 0 88 21
                84 34 -10 30 -95 46 -144 26z"/>
                </g>
</svg>
    )
}

export default RazztanSportsIcon
