let tempVar;

/*
1. Utgå ifrån array nedanför. Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?
*/
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];

tempVar = names[3];
console.log("#1: " + tempVar);
/*
#1: Maradona

En array börjar på index-position 0.
*/

/*
2. I samma array, lägg till namnet "Drogba" i slutet av arrayen med hjälp av push(). Vad är returvärdet av den metoden?
*/
tempVar = names.push("Drogba");
console.log("#2: " + tempVar);
// #2: 7

/*
3. Lägg nu till namnet "Figo" i börja av arrayen. Vilken metod använder du för att gära det och vad är returnvärdet av den metoden?
*/
tempVar = names.unshift("Figo");
console.log("#3: " + tempVar);
/*
Unshift, som lägger till ett element i början av en array.

#3: 8
*/

/*
4. Ta nu bort det sista namnen från array med pop(). Logga ut returvärdet av den metoden.
*/
tempVar = names.pop();
console.log("#4: " + tempVar);
// #4: Drogba

/*
5. Vid det här laget så bör du ha motsvarande array nedan. Hur kan du flytta namnet "Ronaldo" från sluten av arrayen till början av arrayen? Visa i kod samt förklara varför du gör som du gör.
*/
console.log(names);

tempVar = names.pop();
console.log("#5: " + tempVar);
tempVar = names.unshift("Ronaldo");
console.log("#5: " + tempVar);
/*
#5: Ronaldo
#5: 7

Pop tar bort ett element i slutet av en array.
Unshift lägger sedan till det i början.
*/

/*
6. Vid det här laget hoppas jag att du märkt att de metoderna som du har använt påverkar ursprungs-arrayn, alltså den modifierar den befintliga arrayen. Detta kallas för att en metod är "destruktiv". Så även fast vi definierar arrayen med en const-variabel så tillåts vi ändå att modifiera arrayn. Vad kan detta bero på?
*/
console.log(
  '#6: I JavaScript betyder att använda "const" med en array att referensen till arrayen är konstant, innehållet. Du kan ändra elementen i arrayen, men du kan inte tilldela arrayen till en ny referens.'
);
// #6: I JavaScript betyder att använda "const" med en array att referensen till arrayen är konstant, innehållet. Du kan ändra elementen i arrayen, men du kan inte tilldela arrayen till en ny referens.

/*
7. Utgå från arrayen nedan. Använd metoden includes() för att kontrollera om "Messi" finns i arrayen. Vad blir resultatet, och vad innebär det?
*/
const players = [
  "Zlatan",
  "Beckham",
  "Zidane",
  "Ronaldo",
  "Romario",
  "Maradona",
];

tempVar = players.includes("Messi");
console.log("#7: " + tempVar);
/*
#7: false

"Messi" finns inte med i arrayen.
*/

/*
8. Kontrollera om "Zlatan" finns i "players"-arrayen med includes(). Om han finns, logga ut en bekräftande text, t.ex. "Zlatan är med i listan!" Annars loggar du ut "Zlatan är inte med i listan."
*/
tempVar = players.includes("Zlatan");
if (tempVar) {
  console.log("#8: Zlatan är med i listan!");
} else {
  console.log("#8: Zlatan är inte med i listan.");
}
// #8: Zlatan är med i listan!

/*
9. Skriv ut indexet för "Maradona" i arrayen "players" med hjälp av indexOf(). Vad är resultatet och varför?
*/
tempVar = players.indexOf("Maradona");
console.log("#9: " + tempVar);
/*
#9: 5

En array börjar på index-position 0.
*/

/*
10. Använd indexOf() för att försöka hitta indexet för "Messi" i "players". Vad returnerar indexOf() när elementet inte finns i arrayen, och hur kan den informationen vara användbar?
*/
tempVar = players.indexOf("Messi");
console.log("#10: " + tempVar);
/*
#10: -1

Med den informationen kan man kontrollera om någonting existerar i en array.
*/

/*
11. Kombinera alla namn i "players" till en sträng där varje namn är separerat med ett kommatecken och ett mellanslag (, ). Använd join() för att göra detta och logga resultatet.
*/
tempVar = players.join(", ");
console.log("#11: " + tempVar);
// #11: Zlatan, Beckham, Zidane, Ronaldo, Romario, Maradona

/*
12. Använd join() för att skapa en sträng av alla namn i "players", separerade med ett " - ". Vilket resultat får du?
*/
tempVar = players.join(" - ");
console.log("#12: " + tempVar);
// #12: Zlatan - Beckham - Zidane - Ronaldo - Romario - Maradona

/*
13. Använd splice() för att ta bort "Beckham" och "Zidane" från "players". Logga resultatet och beskriv hur splice() fungerar i detta fall.
*/
tempVar = players.splice(1, 2);
console.log("#13: " + tempVar.join(", "));
/*
#13: Beckham, Zidane

Splice börjar på index-position 1 och tar bort 2 element.
*/

/*
14. Lägg till spelaren "Ronaldinho" på indexposition 2 i "players" med splice(). Vilken förändring sker i arrayen och vad returnerar splice()?
*/
tempVar = players.splice(2, 0, "Ronaldinho");
console.log("#14: " + tempVar);
/*
#14: 

Splice returnerar borttagna element och i det här fallet lägger vi till 1 element.
*/

/*
15. Kombinera indexOf() och splice() för att ta bort "Ronaldo" från arrayen, oavsett var i listan han befinner sig.
*/
tempVar = players.indexOf("Ronaldo");
console.log("#15: " + tempVar);
tempVar = players.splice(tempVar, 1);
console.log("#15: " + tempVar);
console.log("#15: " + players.join(", "));
/*
#15: 1
#15: Ronaldo
#15: Zlatan, Ronaldinho, Romario, Maradona
*/

/*
16. Använd slice() för att skapa en ny array från "players" som innehåller de tre första spelarna. Logga ut den nya arrayen och förklara varför slice() inte påverkar den ursprungliga arrayen.
*/
tempVar = players.slice(0, 3);
console.log("#16: " + tempVar.join(", "));
/*
#16: Zlatan, Ronaldinho, Romario

Slice returnerar en ny array.
*/

/*
17. Skapa en ny array med slice() som innehåller alla spelare från index 2 och framåt i "players". Vad innehåller den nya arrayen, och vad blir kvar i "players"?
*/
tempVar = players.slice(2);
console.log("#17: " + tempVar.join(", "));
/*
#17: Romario, Maradona

Slice påverkar inte den ursprungliga arrayen "players".
*/

/*
18. Använd metoden with() för att ersätta spelaren på indexposition 1 i "players" med "Mbappé". Vad returnerar with()-metoden och påverkas den ursprungliga arrayen?
*/
tempVar = players.with(1, "Mbappé");
console.log("#18: " + tempVar.join(", "));
/*
#18: Zlatan, Mbappé, Romario, Maradona

With returnerar en ny array och påverkar inte den ursprungliga arrayen.
*/

/*
19. Utgå från arrayen nedan. Skriv en for-loop som skriver ut varje tal i arrayen.
*/
const numbers = [5, 8, 12, 20, 3];

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log("#19: " + element);
}
/*
#19: 5
#19: 8
#19: 12
#19: 20
#19: 3
*/

/*
20. Använd en for-loop för att summera alla tal i arrayen numbers ovan. Logga ut summan efter att loopen har körts klart.
*/
tempVar = 0;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  tempVar += element;
}
console.log("#20: " + tempVar);
// #20: 48

/*
21. Skriv en for-loop som letar efter det största talet i numbers. Logga det största värdet.
*/
tempVar = 0;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element > tempVar) {
    tempVar = element;
  }
}
console.log("#21: " + tempVar);
// #21: 20

/*
22. Skapa en ny array som heter doubledNumbers. Använd en for-loop för att fylla doubledNumbers med varje tal i numbers multiplicerat med 2.
*/
tempVar = 0;
const doubledNumbers = [];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  doubledNumbers[index] = element * 2;
}
console.log("#22: " + doubledNumbers.join(", "));
// #22: 10, 16, 24, 40, 6

/*
23. Använd en for-loop för att räkna ut medelvärdet av talen i numbers. Logga ut medelvärdet.
*/
tempVar = 0;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  tempVar += element;
}
tempVar = tempVar / numbers.length;
console.log("#23: " + tempVar);
// #23: 9.6

/*
24. Skriv en for-loop som hittar och loggar ut det minsta talet i numbers.
*/
tempVar = numbers[0];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element < tempVar) {
    tempVar = element;
  }
}
console.log("#24: " + tempVar);
// #24: 3

/*
25. Skapa en ny array som heter positiveNumbers och fyll den med endast de positiva talen från arrayen nedan. Använd en for-loop och en if-sats.
*/
const mixedNumbers = [3, -5, 12, -1, 8, -6];

const positiveNumbers = [];
for (let index = 0; index < mixedNumbers.length; index++) {
  const element = mixedNumbers[index];
  if (element > 0) {
    positiveNumbers.push(mixedNumbers[index]);
  }
}
console.log("#25: " + positiveNumbers.join(", "));
// #25: 3, 12, 8

/*
26. Utgå från arrayen mixedNumbers nedan. Skriv en for-loop utan att använda index, där du loggar varje positivt tal.
*/
tempVar = [];
for (const element of mixedNumbers) {
  if (element > 0) {
    tempVar.push(element);
  }
}
console.log("#26: " + tempVar.join(", "));
// #26: 3, 12, 8

/*
27. Använd en while-loop för att logga alla tal i arrayen numbers från och med index 0. Avbryt loopen om talet är större än 10.
*/
tempVar = [];
let index = 0;
while (index < numbers.length) {
  tempVar.push(numbers[index]);
  index++;
  if (numbers[index] > 10) {
    break;
  }
}
console.log("#27: " + tempVar.join(", "));
// #27: 5, 8

/*
28. Utgå från arrayen mixedNumbers ovan. Använd en while-loop för att räkna hur många negativa tal det finns i arrayen. Logga antalet.
*/
tempVar = 0;
index = 0;
while (index < mixedNumbers.length) {
  index++;
  if (mixedNumbers[index] < 0) {
    tempVar++;
  }
}
console.log("#28: " + tempVar);
// #28: 3

/*
29. Skapa en array words med några ord i den, (exempel nedan). Använd en for-loop för att logga varje ord tillsammans med dess längd (antal bokstäver).
*/
const words = ["banana", "apple", "kiwi", "strawberry", "peach"];

for (let index = 0; index < words.length; index++) {
  const element = words[index];
  console.log("#29: " + element + " - " + element.length);
}
/*
#29: banana - 6
#29: apple - 5
#29: kiwi - 4
#29: strawberry - 10
#29: peach - 5
*/

/*
30. Använd words-arrayen ovan och en for-loop för att bygga en ny sträng som består av de första bokstäverna i varje ord. Logga ut den nya strängen.
*/
tempVar = "";
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  tempVar += element[0];
}
console.log("#30: " + tempVar);
// #30: baksp

/*
31. Skriv en while-loop som itererar genom arrayen numbers och loggar varje tal tills summan av de loggade talen överstiger 25.
*/
index = 0;
tempVar = 0;
while (index < numbers.length) {
  tempVar += numbers[index];
  if (tempVar > 25) {
    break;
  } else {
    console.log("#31: " + numbers[index]);
  }
  index++;
}
/*
#31: 5
#31: 8
#31: 12
*/

/*
32. Använd en for-loop utan index för att summera alla värden i arrayen mixedNumbers. Logga ut summan.
*/
tempVar = 0;
for (const element of mixedNumbers) {
  tempVar += element;
}
console.log("#32: " + tempVar);
// #32: 11

/*
33. Skapa en array temperatures (exempel nedan) med några temperaturer i Celsius. Använd en for-loop för att hitta den högsta temperaturen. Därefter, logga både högsta temperaturen och dess index i arrayen.
*/
const temperatures = [15, 22, 19, 30, 28, 18, 25];

tempVar = 0;
let tempVar2;
for (let index = 0; index < temperatures.length; index++) {
  const element = temperatures[index];
  if (element > tempVar) {
    tempVar = element;
    tempVar2 = temperatures.indexOf(tempVar);
  }
}
console.log("#33: " + tempVar + " - " + tempVar2);
// #33: 30 - 3

/*
34. Använd en for-loop för att räkna antalet ord i words-arrayen som innehåller fler än fem bokstäver.
*/
tempVar = 0;
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length > 5) {
    tempVar++;
  }
}
console.log("#34: " + tempVar);
// #34: 2

/*
35. Skriv en while-loop som räknar upp talen från numbers-arrayen ovan tills ett udda tal hittas. Avbryt loopen vid första udda talet och logga resultatet.
*/
index = 0;
tempVar = 0;
while (index < numbers.length) {
  index++;
  if (numbers[index] % 2 !== 0) {
    break;
  } else {
    console.log("#35: " + numbers[index]);
    tempVar += numbers[index];
  }
}
console.log("#35: " + tempVar);
/*
#35: 8
#35: 12
#35: 20
*/
// #35: 40
