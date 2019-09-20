import { calculateE1RM, roundToNearestWeight } from "../lib";

test("should calculate 1RM", () => {
  const rpe = 10;
  const weight = 196;
  expect(calculateE1RM(weight, 1, rpe)).toEqual(196);
});

describe("roundToNearestWeight", () => {
  test("should return 0 when input is 0", () => {
    expect(roundToNearestWeight(0, false)).toEqual(0);
  });

  test("should return different weights if 2.5s are available", () => {
    //  100lbs would require 2.5s in order to have work exactly
    expect(roundToNearestWeight(100, false)).not.toEqual(
      roundToNearestWeight(100, true)
    );
  });

  test("should round to 1 decimal place", () => {
    expect(roundToNearestWeight(50, true)).toEqual(50);
  });
});
