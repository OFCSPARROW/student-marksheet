var na=prompt("Enter Your Name");
var ta=prompt("Enter Tamil Mark");
var en=prompt("Enter English Mark" );
var ma=prompt("Enter Maths Mark");
var sc=prompt("Enter Science Mark");
var so=prompt("Enter Social Mark");



console.log("NAME=" + na);
ta <35 ? console.log("TAMIL=" + ta + "F"):console.log("TAMIL=" + ta + "P");
en <35 ? console.log("ENGLISH=" + en + "F"):console.log("ENGLISH=" + en + "P");
ma <35 ? console.log("MATHS=" + ma + "F"):console.log("MATHS=" + ma + "P");
sc <35 ? console.log("SCIENCE=" + sc + "F"):console.log("SCIENCE=" + sc + "P");
so <35 ? console.log("SOCIAL=" + so + "F"):console.log("SOCIAL=" + so + "P");

var to=Number(ta) + Number(en) + Number(ma) + Number(sc) + Number(so);
console.log("TOTAL" + to);
to >=490 && to <500  ? console.log("A+"):console.log("A");
to >=400 && to <480  ? console.log("B+"):console.log("B");
to >=350 && to <400  ? console.log("C+"):console.log("C");
to >=280 && to <350  ? console.log("D+"):console.log("D");