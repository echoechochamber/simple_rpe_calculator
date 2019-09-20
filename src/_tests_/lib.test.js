import { calculateE1RM } from "../lib";

test("should calculate 1RM", () => {
  const rpe = 10;
  const weight = 196;
  expect(calculateE1RM(weight, 1, rpe)).toEqual(196);
});
