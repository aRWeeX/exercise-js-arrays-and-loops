let tempVar;

// 1. Utgå ifrån array nedanför. Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log(names[3]);
// Maradona skrivs ut för att en array startar på index-position 0.

// 2. I samma array, lägg till namnet "Drogba" i slutet av arrayen med hjälp av push(). Vad är returvärdet av den metoden?
tempVar = names.push("Drogba");
console.log(tempVar);
// Metoden returnerar den nya längden "7" på arrayen.

// 3. Lägg nu till namnet "Figo" i börja av arrayen. Vilken metod använder du för att gära det och vad är returnvärdet av den metoden?
tempVar = names.unshift("Figo");
console.log(tempVar);
// Metoden unshift lägger till ett värde i början av en array, och returnerar den nya längden "8" på arrayen.

// 4. Ta nu bort det sista namnen från array med pop(). Logga ut returvärdet av den metoden.
tempVar = names.pop();
console.log(tempVar);
// Metoden returnerar värdet "Drogba".

// 5. Vid det här laget så bör du ha motsvarande array nedan. Hur kan du flytta namnet "Ronaldo" från sluten av arrayen till början av arrayen? Visa i kod samt förklara varför du gör som du gör.
tempVar = names.pop();
console.log(tempVar);
tempVar = names.unshift(tempVar);
console.log(tempVar);
// Pop tar bort ett värde i slutet av en array och unshift lägger till det i början.

// 6. Vid det här laget hoppas jag att du märkt att de metoderna som du har använt påverkar ursprungs-arrayn, alltså den modifierar den befintliga arrayen. Detta kallas för att en metod är "destruktiv". Så även fast vi definierar arrayen med en const-variabel så tillåts vi ändå att modifiera arrayn. Vad kan detta bero på?
// I JavaScript skickas primitiva typer (som siffror, strängar, booleans, null, undefined och symboler) av värde, vilket betyder att en kopia av värdet skickas. Objekt (inklusive arrayer och funktioner) skickas genom referens, vilket innebär att en referens till samma objekt skickas, vilket tillåter modifieringar av själva objektet.

// 7. Utgå från arrayen nedan. Använd metoden includes() för att kontrollera om "Messi" finns i arrayen. Vad blir resultatet, och vad innebär det?
const players = [
  "Zlatan",
  "Beckham",
  "Zidane",
  "Ronaldo",
  "Romario",
  "Maradona",
];
tempVar = players.includes("Messi");
console.log(tempVar);
// Resultatet blir "false" och det betyder att värdet inte finns med i arrayen.

// 8. Kontrollera om "Zlatan" finns i "players"-arrayen med includes(). Om han finns, logga ut en bekräftande text, t.ex. "Zlatan är med i listan!" Annars loggar du ut "Zlatan är inte med i listan."
tempVar = players.includes("Zlatan");
if (tempVar) {
  console.log("Zlatan är med i listan!");
} else {
  console.log("Zlatan är inte med i listan.");
}
// "Zlatan är med i listan!".

// 9. Skriv ut indexet för "Maradona" i arrayen "players" med hjälp av indexOf(). Vad är resultatet och varför?
tempVar = players.indexOf("Maradona");
console.log(tempVar);
// Resultatet blir 5 eftersom att en array börjar på index-position 0.

// 10. Använd indexOf() för att försöka hitta indexet för "Messi" i "players". Vad returnerar indexOf() när elementet inte finns i arrayen, och hur kan den informationen vara användbar?
tempVar = players.indexOf("Messi");
console.log(tempVar);
// -1 returneras när ett värde inte finns med i en array. Med det returnerade värdet kan man bestämma om ett element inte är närvarande.

// 11. Kombinera alla namn i "players" till en sträng där varje namn är separerat med ett kommatecken och ett mellanslag (, ). Använd join() för att göra detta och logga resultatet.
tempVar = players.join(", ");
console.log(tempVar);
// "Zlatan, Beckham, Zidane, Ronaldo, Romario, Maradona".

// 12. Använd join() för att skapa en sträng av alla namn i "players", separerade med ett " - ". Vilket resultat får du?
tempVar = players.join(" - ");
console.log(tempVar);
// "Zlatan - Beckham - Zidane - Ronaldo - Romario - Maradona".

// 13. Använd splice() för att ta bort "Beckham" och "Zidane" från "players". Logga resultatet och beskriv hur splice() fungerar i detta fall.
tempVar = players.splice(1, 2);
console.log(tempVar);
// "(2) ['Beckham', 'Zidane']". Metoden börjar på index-position 1 och tar bort 2 element.

// 14. Lägg till spelaren "Ronaldinho" på indexposition 2 i "players" med splice(). Vilken förändring sker i arrayen och vad returnerar splice()?
tempVar = players.splice(2, 0, "Ronaldinho");
console.log(tempVar);
console.log(players);
// Splice returnerar borttagna element och i det här fallet lägger vi till ett element på index-position 2.

// 15. Kombinera indexOf() och splice() för att ta bort "Ronaldo" från arrayen, oavsett var i listan han befinner sig.
tempVar = players.indexOf("Ronaldo");
console.log(tempVar);
tempVar = players.splice(tempVar, 1);
console.log(tempVar);
// "1" och "['Ronaldo']".

// 16. Använd slice() för att skapa en ny array från "players" som innehåller de tre första spelarna. Logga ut den nya arrayen och förklara varför slice() inte påverkar den ursprungliga arrayen.
tempVar = players.slice(0, 3);
console.log(tempVar);
// Slice returnerar en ny array.

// 17. Skapa en ny array med slice() som innehåller alla spelare från index 2 och framåt i "players". Vad innehåller den nya arrayen, och vad blir kvar i "players"?
tempVar = players.slice(2);
console.log(tempVar);
console.log(players);
// Den nya arrayen innehåller "(2) ['Romario', 'Maradona']" och den ursprungliga arrayen innehåller "(4) ['Zlatan', 'Ronaldinho', 'Romario', 'Maradona']".

// 18. Använd metoden with() för att ersätta spelaren på indexposition 1 i "players" med "Mbappé". Vad returnerar with()-metoden och påverkas den ursprungliga arrayen?
tempVar = players.with(1, "Mbappé");
console.log(tempVar);
console.log(players);
// With()-metoden returnerar en ny array, "(4) ['Zlatan', 'Mbappé', 'Romario', 'Maradona']". Den ursprungliga arrayen påverkas inte.

// 19. Utgå från arrayen nedan. Skriv en for-loop som skriver ut varje tal i arrayen.
const numbers = [5, 8, 12, 20, 3];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
}
// 5, 8, 12 & 20.

// 20. Använd en for-loop för att summera alla tal i arrayen numbers ovan. Logga ut summan efter att loopen har körts klart.
tempVar = null;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  tempVar += element;
}
console.log(tempVar);
// "48".

// 21. Skriv en for-loop som letar efter det största talet i numbers. Logga det största värdet.
tempVar = numbers[0];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > tempVar) {
    tempVar = numbers[index];
  }
}
console.log(tempVar);
// "20".

// 22. Skapa en ny array som heter doubledNumbers. Använd en for-loop för att fylla doubledNumbers med varje tal i numbers multiplicerat med 2.
const doubledNumbers = [];
for (let index = 0; index < numbers.length; index++) {
  doubledNumbers[index] = numbers[index] * 2;
}
console.log(doubledNumbers);
// "(5) [10, 16, 24, 40, 6]".

// 23. Använd en for-loop för att räkna ut medelvärdet av talen i numbers. Logga ut medelvärdet.
tempVar = null;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  tempVar += element;
}
tempVar = tempVar / numbers.length;
console.log(tempVar);
// "9.6".

// 24. Skriv en for-loop som hittar och loggar ut det minsta talet i numbers.
tempVar = numbers[0];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < tempVar) {
    tempVar = numbers[index];
  }
}
console.log(tempVar);
// "3".

// 25. Skapa en ny array som heter positiveNumbers och fyll den med endast de positiva talen från arrayen nedan. Använd en for-loop och en if-sats.
const positiveNumbers = [];
const mixedNumbers = [3, -5, 12, -1, 8, -6];
for (let index = 0; index < mixedNumbers.length; index++) {
  if (mixedNumbers[index] > 0) {
    positiveNumbers.push(mixedNumbers[index]);
  }
}
console.log(positiveNumbers);
// "(3) [3, 12, 8]".

// 26. Utgå från arrayen mixedNumbers nedan. Skriv en for-loop utan att använda index, där du loggar varje positivt tal.
for (let number of mixedNumbers) {
  if (number > 0) {
    console.log(number);
  }
}
// 3, 12 & 8.

// 27. Använd en while-loop för att logga alla tal i arrayen numbers från och med index 0. Avbryt loopen om talet är större än 10.
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
  if (numbers[i] > 10) {
    break;
  }
}
// 5 & 8.

// 28. Utgå från arrayen mixedNumbers ovan. Använd en while-loop för att räkna hur många negativa tal det finns i arrayen. Logga antalet.
i = 0;
tempVar = [];
while (i < mixedNumbers.length) {
  i++;
  if (mixedNumbers[i] < 0) {
    tempVar.push(mixedNumbers[i]);
  }
}
console.log(tempVar.length);
// "3".

// 29. Skapa en array words med några ord i den, (exempel nedan). Använd en for-loop för att logga varje ord tillsammans med dess längd (antal bokstäver).
const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
for (let index = 0; index < words.length; index++) {
  console.log(words[index] + " - " + words[index].length);
}
// banana - 6, apple - 5, kiwi - 4, strawberry - 10 & peach - 5.

// 30. Använd words-arrayen ovan och en for-loop för att bygga en ny sträng som består av de första bokstäverna i varje ord. Logga ut den nya strängen.
tempVar = "";
for (let index = 0; index < words.length; index++) {
  tempVar += words[index].charAt(0);
}
console.log(tempVar);
// "baksp".

// 31. Skriv en while-loop som itererar genom arrayen numbers och loggar varje tal tills summan av de loggade talen överstiger 25.
i = 0;
tempVar = 0;
while (i < numbers.length) {
  tempVar += numbers[i];
  if (tempVar > 25) {
    break;
  } else {
    console.log(numbers[i]);
  }
  i++;
}
// 5, 8 & 12.

// 32. Använd en for-loop utan index för att summera alla värden i arrayen mixedNumbers. Logga ut summan.
tempVar = 0;
for (let number of mixedNumbers) {
  tempVar += number;
}
console.log(tempVar);
// "11".

// 33. Skapa en array temperatures (exempel nedan) med några temperaturer i Celsius. Använd en for-loop för att hitta den högsta temperaturen. Därefter, logga både högsta temperaturen och dess index i arrayen.
const temperatures = [15, 22, 19, 30, 28, 18, 25];
tempVar = 0;
let tempVar2;
for (let index = 0; index < temperatures.length; index++) {
  if (temperatures[index] > tempVar) {
    tempVar = temperatures[index];
    tempVar2 = temperatures.indexOf(tempVar);
  }
}
console.log(
  "Highest temperature: " + tempVar + " - Index position: " + tempVar2
);
// Highest temperature: 30 - Index position: 3.

// 34. Använd en for-loop för att räkna antalet ord i words-arrayen som innehåller fler än fem bokstäver.
tempVar = 0;
for (let index = 0; index < words.length; index++) {
  if (words[index].length > 5) {
    tempVar++;
  }
}
console.log(tempVar);
// "2".

// 35. Skriv en while-loop som räknar upp talen från numbers-arrayen ovan tills ett udda tal hittas. Avbryt loopen vid första udda talet och logga resultatet.
i = 0;
tempVar = 0;
while (i < numbers.length) {
  i++;
  if (numbers[i] % 2 !== 0) {
    break;
  } else {
    console.log(numbers[i]);
    tempVar += numbers[i];
  }
}
console.log(tempVar);
// 8, 12, 20 & 40.
