const makeSound = () => process.stdout.write("\x07");
const userAlarms = process.argv.slice(2);

const scheduleAlarms = (alarms) => {
  for (const alarm of alarms) {

    // Disregard any numbers that are negative, cannot schedule alarms in the past
    // This also forces type coersion on any non-number user inputs, turning it into NaN
    if (alarm >= 0) {
      setTimeout(() => {

        // console.log(`This is the ${alarm} second alarm! ⏰`);
        makeSound();

        // Convert user input to milliseconds
      }, alarm * 1000);
    }
  }
};

scheduleAlarms(userAlarms);

// Test code
// node timer1.js 10 3 5 15 9