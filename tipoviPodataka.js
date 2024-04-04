//primitivni tipovi
var godine = 25;
var ime = "Andjela";
var studira = true;
//nizovi
var predmeti = ["epos", "klijentske", "cloud"]; //niz stringova
var ocene = [10, 9, 8]; //niz brojeva
//tuples
var tuple = ["Andjela", 25];
//enum
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeelektronskogPoslovanja"] = 0] = "TehnologijeelektronskogPoslovanja";
    Modul[Modul["SoftverskoInzenjerstvo"] = 1] = "SoftverskoInzenjerstvo";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeelektronskogPoslovanja;
//objekti
var student = {
    ime: "Andjela",
    godine: 21,
    studira: true
};
//unija tipova
var brojIliString = 10;
//any tip
var biloKojiTip = "Moze biti bilo koji tip";
//void tip
function cao() {
    console.log("cao");
}
//null i undefined
var n = null;
var u = undefined;
//type assertions
var nekaVrednost = "Neki string";
var duzinaStringa = nekaVrednost.length;
console.log("Duzina stringa je:", duzinaStringa);
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n, u);
