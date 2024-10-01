const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Latihan Pengujian Fungsi Matematika', function () {
    // Latihan 1: Pengujian negative case untuk fungsi kurang dan bagi
    describe('Fungsi kurang', function () {
        it('seharusnya menangani angka negatif dengan benar', function () {
            expect(kurang(5, -3)).to.equal(8);
            expect(kurang(-5, 3)).to.equal(-8);
            expect(kurang(-5, -3)).to.equal(-2);
        });
    });

    describe('Fungsi bagi', function () {
        it('seharusnya mengembalikan error saat membagi dengan 0', function () {
            expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
        });

        it('seharusnya menangani pembagian dengan angka negatif', function () {
            expect(bagi(6, -2)).to.equal(-3);
            expect(bagi(-6, 2)).to.equal(-3);
            expect(bagi(-6, -2)).to.equal(3);
        });
    });

    // Latihan 2: Pengujian negative case untuk fungsi tambah dan kali
    describe('Fungsi tambah', function () {
        it('seharusnya mengembalikan NaN saat input adalah string', function () {
            expect(tambah(2, 'a')).to.be.NaN;
            expect(tambah('a', 2)).to.be.NaN;
            expect(tambah('a', 'b')).to.be.NaN;
        });

        it('seharusnya mengembalikan NaN saat input adalah null', function () {
            expect(tambah(2, null)).to.be.NaN;
            expect(tambah(null, 2)).to.be.NaN;
            expect(tambah(null, null)).to.be.NaN;
        });
    });

    describe('Fungsi kali', function () {
        it('seharusnya mengembalikan NaN saat input adalah string', function () {
            expect(kali(2, 'a')).to.be.NaN;
            expect(kali('a', 2)).to.be.NaN;
            expect(kali('a', 'b')).to.be.NaN;
        });

        it('seharusnya mengembalikan 0 saat input adalah null', function () {
            expect(kali(2, null)).to.equal(0);
            expect(kali(null, 2)).to.equal(0);
            expect(kali(null, null)).to.equal(0);
        });
    });
});