//Speedlimit = 70. If within speedlimit the returns ok.
//for every 5 over, you get 1 point
//will need to use Math.floor(1.3). Returns greatest integer less than or equal to a given number.
//12 points and your license gets suspended.

checkSpeed(75);

function checkSpeed(speed) {
  const speedLimit = 70;
  const mphPerPoint = 5;
  
  if (speed < speedLimit + mphPerPoint) 
    return console.log('ok');

  const points = Math.floor((speed - speedLimit) / mphPerPoint);  //calc number of points.
  if (points >= 12) 
    console.log("license suspended");
  else
    console.log('points', points);
}