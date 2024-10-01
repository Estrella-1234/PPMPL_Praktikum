// math.js
function tambah(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        return NaN;
    }
    return a + b;
}

function kali(a, b) {
    return a * b;
}

function kurang(a, b) {
    return a - b;
}

function bagi(a, b) {
    if ((b === 0) || (a === 0)) {
        throw new Error('Tidak bisa membagi dengan nol');
    }
    return a / b;
}

module.exports = { tambah, kali, kurang, bagi };
