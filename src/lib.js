import RPE from './RPE';

export function calculateE1RM(weight, reps, rpe) {
	const rpeVal = RPE[rpe][reps];
	return weight / rpeVal;
}