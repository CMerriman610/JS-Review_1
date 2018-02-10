// Author: Christopher Merriman  Date: 2.9.18
// Creates the arrays for the people, hours, and pay
var people = ['Jonathan "DreamKazper" Sanchez', 'Félix "XqC" Lengyel', 'Kevin "TviQ" Lindström', 'Matt "Coolmatt" Iorio', 'Jun-Young "Profit" Park', 'Lane "Surefour" Roberts', 'Stefano "Verbo" Disalvo', 'Do-Hyeon "Pine" Kim', 'Georgii "ShaDowBurn" Gushcha', 'André "iddqd" Dahlström', 'Je-Hong "ryujeghong" Ryu', 'Chao "Undead" Fang'];
var hours = [32, 48, 22, 39, 43, 27, 36, 50, 40, 19, 49, 13];
var pay = [6.95, 7.25, 8.25, 7.35, 9.15, 7.25, 6.25, 9.55, 7.35, 6.45, 8.95, 5.75];
// Creates function to calculate total and display sentences
function display() {
  for (var i = 0; i < people.length; i++) {
    // Calculates the total salary by multiplying hours and pay, also rounded
    var total = Math.round((hours[i] * pay[i]), 1);
    // Displays the sentence using strings and calling the index value (i) of each array for every iteration
    document.write('Employee ' + people[i] + ' worked ' + hours[i] + ' hours during the previous week, for a total of $' + total + ' at $' + pay[i] + ' per hour. </br>');
  }
}
// Runs and displays the function
display();
