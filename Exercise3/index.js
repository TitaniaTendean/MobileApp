//1. Class
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    bekerja() {
        console.log(`Orang dengan nama ${this.nama} sedang bekerja seperti biasa`);
    }
}

const user1 = new Orang("Titania", "21");
user1.bekerja();

//2. Inheritance
class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
            super(nama, umur);
            this.nama = nama;
            this.umur = umur;
            this.namaSekolah = namaSekolah;
        }
        //Overridding
    tidur() {
        console.log(`Orang dengan nama ${this.nama} sedang tidur`);
    }
    makan() {
        console.log(`Orang dengan nama ${this.nama} sedang makan`);
    }
    belajar() {
        console.log(`Orang dengan nama ${this.nama} dengan namaSekolah ${this.namaSekolah} belajar di `);

    }
}

const user = new Pelajar("John", "17", "Unklab")

user.tidur();
user.makan();
user.belajar();