import RPE from "./RPE";

const barWeight = 45;
const plateValues = [45, 25, 10, 5, 2.5]; // TODO : make it possible to calculate when we have access to 1.25s

export function calculateE1RM(weight, reps, rpe) {
  const rpeVal = RPE[rpe][reps];
  return weight / rpeVal;
}

export function roundToNearestWeight(weight, hasTwoPointFives = false) {
  // find the weights on one side (simplifies the calculation )
  const weightPerSide = (Math.round(weight) - barWeight) / 2;
  let tmp = weightPerSide;
  let storageValue = 0;

  const availablePlates = hasTwoPointFives
    ? plateValues
    : plateValues.slice(0, plateValues.length - 1);

  // loop until we find the largest weight we can find with the plates available to us
  while (tmp >= 0) {
    const largestPlateThatFits = availablePlates.filter(val => val <= tmp)[0];
    if (largestPlateThatFits === undefined) {
      break; // exit this loop if there are no weights small enough to get the
    }
    tmp -= largestPlateThatFits;
    storageValue += largestPlateThatFits;
  }
  return storageValue * 2 + 45; // weight on each side plus the barweight
}
