let team = new Set();

team.add("Player 1");
team.add("Player 2");
team.add("Player 3");

console.log(team);
console.log(team.has("Player 2"));
team.delete("Player 3");
team.add("Player 4")
console.log(team)