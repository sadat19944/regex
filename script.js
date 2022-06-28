"use strict";
/* Les REGEX ou Expression Réguliér , permettent la recherche dans une chaine
de *caractére la preésence de caractére en particulier. */
// Une regex commencer par un / et  par un / ou un flag(caractére supplémentair.) 
const r1 = /ou/;
const r2 = /[ou]/
// recherche la présence de "ou" dans les mots suivants :
console.log(r1,r1.test("Bonjour"), r1.test("Salut"));
// recherche la présence de "o" ou "u" dans les mots suivants :
console.log(r2,r2.test("Bonjour"), r2.test("Salut"));

const r3 = /^ou/;
// Vérifie que cela commence par "ou"
console.log(r3,r3.test("Bonjour"),r3.test("outre"));

const r4 = /ou$/;
// vérifie que cela termine par "ou"
console.log(r4,r4.test("Bonjour"),r4.test("mou"));
const r5 = /ou|oi/;
// vérifie que cela contient "ou" ou "oi"
console.log(r5,r5.test("Bonjour"),r5.test("Bonsoir")); 
const r6 = /[a-z]/;
// vérifie que cela contient des lettres de a a z
console.log(r6,r6.test("Bonjour"),r6.test("0654254125")); 
const r7 = /[^a-z]/;
// vérifie que cela ne contienne pas de lettre de a a z
console.log(r7,r7.test("Bonjour"),r7.test("01254554")); 
const r8 = /[ou?]/;
// vérifie que les caractéres précdent apparaissent 0 fois ou plus.
// mais au moins un doit apparaitre.
console.log(r8,r8.test("Bonjour"),r8.test("objet"),r8.test("pizza")); 
const r9 = /ou+/;
// vérifie que les caractéres apparaissent une foir ou plus.
console.log(r9,r9.test("Bonjour"),r9.test("objet"),r9.test("pizza")); 
const r10 = /ou*/;
// vérifie que les caractéres precédent apparaissent 0 ou plus.
// mais ou moins un doit apparaitre.
console.log(r10,r10.test("Bonjour"),r10.test("objet"),r10.test("pizza")); 
const r11 = /ou{2}/;
// vérifie que les caractéres "ou" 2 fois
console.log(r11,r11.test("Bonjour"),r11.test("Bonjouur"),r11.test("Bonjouuur")); 
const r12 = /ou{2,4}/;
// vérifie que les caractéres "ou"  apparaisent 2 fois
console.log(r12,r12.test("Bonjour"),r12.test("Bonjouur"),r12.test("Bonjouuur")); 
const r13 = /u{2,4}/;
// vérifie que les caractéres "u"  apparaisent entre 2 ou 4 fois
console.log(r13,r13.test("Bonjour"),r13.test("Bonjouur"),r13.test("Bonjouuur")); 
const r14 = /(ou){2,}/;
// vérifie que le caractére "u" apparaisent entre 2 et plus de foir
console.log(r14,r14.test("Bonjour"),r14.test("Bonjouur"),r14.test("Bonjouuur")); 
const r15 = /\^/;
// vérifie que le caréctére "^" apparaisse.
// \ permet échaper un caractére utitlisé dans les regex
console.log(r15,r15.test("Bonjour"),r15.test("Bonjouur"),r15.test("Bonjouuur")); 
const r16 = /\s/;
// vérifie que la preésence d'espace.
// \ permet aussi de donner un role a un caractére n'en a normalemetn pas.
console.log(r16,r16.test("Bonjour"),r16.test("Bonjouur"),r16.test("Bonjouuur")); 
const r17 = /\d/;
// vérifie que la
// \ permet échaper un caractére utitlisé dans les regex
console.log(r17,r17.test("Bonjour"),r17.test("Bonjouur"),r17.test("Bonjouuur")); 
