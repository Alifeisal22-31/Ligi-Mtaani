let teams = [
    {
   name:"Alhidaya football club",
   played: 1,
   points: 3
    },

   {
   name: "Talanta fc",
   played: 1,
   points: 0
   },

   {
    name: "Simba fc",
    played: 1,
    points: 1,
   },

   {
    name: "Huruma allstars fc",
    played: 1,
    points: 1
   }
];
  console.log(teams);

 let matches = [
    {
    home: "Alhidaya football club",
    away: "Talanta fc",
    homescore: 2,
    awayscore: 1
    },
   
    {
    home: "Simba fc",
    away: "Huruma allstars fc",
    homescore: 0,
    awayscore: 0
    },
 ];
   

  let scores = document.getElementById("scores");

  if (scores) {
    for (let i =0; i < matches.length; i++) {
 let p = document.createElement("p");
  p.textContent = matches[i].home + " " +
   matches[i].homescore + "-" +
   matches[i].awayscore + " "  +
   matches[i].away;
scores.appendChild(p);

    }
  }
  console.log("Number of matches:", matches.length);