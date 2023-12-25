import { shuffle } from "../src/utils/utils";
import { describe, it, expect } from "vitest";

describe("shuffle", () => {
  it("should shuffle the elements in the array", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);

    // Check that the shuffled array has the same elements as the original array
    expect(shuffledArray).toHaveLength(array.length);
    expect(shuffledArray).toEqual(expect.arrayContaining(array));

    // Check that the shuffled array is different from the original array
    expect(shuffledArray).not.toEqual(array);
  });
});
