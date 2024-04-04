//primitivni tipovi

let godine:number=25;
let ime:string="Andjela";
let studira:boolean=true;

//nizovi

let predmeti:string[]=["epos", "klijentske", "cloud"]; //niz stringova

let ocene:number[]=[10, 9, 8]; //niz brojeva

//tuples

let tuple:[string, number]=["Andjela", 25];

//enum

enum Modul{
    TehnologijeelektronskogPoslovanja,
    SoftverskoInzenjerstvo,
    InformacioniSistemi
}

let modul:Modul=Modul.TehnologijeelektronskogPoslovanja;

//objekti

let student:{ime:string, godine:number, studira:boolean}={
    ime:"Andjela",
    godine:21,
    studira:true
};

//unija tipova

let brojIliString:number | string =10;

//any tip

let biloKojiTip:any="Moze biti bilo koji tip";

//void tip

function cao():void{
    console.log("cao");
}

//null i undefined

let n:null=null;
let u:undefined=undefined;

//type assertions

let nekaVrednost:any="Neki string";
let duzinaStringa:number=(nekaVrednost as String).length;

console.log("Duzina stringa je:", duzinaStringa);
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n, u);