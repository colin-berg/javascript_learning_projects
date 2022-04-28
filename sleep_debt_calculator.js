function getSleepHours(day) {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 9;
  } else if (day === 'thursday') {
    return 6;
  } else if (day === 'friday') {
    return 14;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  } else {
    return 'Invalid day entered!'
  }
}

function getActualSleepHours() {
  return getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday') 
}

function getIdealSleepHours() {
  let idealHours = 8
  return idealHours * 7
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  let sleepHoursDiff = Math.abs(idealSleepHours - actualSleepHours)
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep')
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You overslept by ${sleepHoursDiff} hours. You got more sleep than needed!`)
  } else {
    console.log(`You underslept by ${sleepHoursDiff} hours. You should get some rest!`)
  }
}

calculateSleepDebt()
