let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 0;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am as number ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am as number ${raceNumber}.`);
} else if (runnerAge <18) {
  console.log(`Youth registrants run at 12:30 pm \(regardless of registration\). You are number ${raceNumber}`);
} else {
  console.log('Please visit the registration desk');
}
