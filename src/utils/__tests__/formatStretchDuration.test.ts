import { formatStretchDuration } from "../formatStretchDuration";

const m = (n: number) => n * 60_000;
const h = (n: number) => n * 3_600_000;
const d = (n: number) => n * 86_400_000;

describe("formatStretchDuration", () => {
  it("renders sub-minute and invalid input as 0m", () => {
    expect(formatStretchDuration(0)).toBe("0m");
    expect(formatStretchDuration(59_999)).toBe("0m");
    // Negative = future anchor (acted today, unknown last time)
    expect(formatStretchDuration(-h(3))).toBe("0m");
  });

  it("renders minutes under an hour", () => {
    expect(formatStretchDuration(m(1))).toBe("1m");
    expect(formatStretchDuration(m(47))).toBe("47m");
    expect(formatStretchDuration(m(59))).toBe("59m");
    expect(formatStretchDuration(h(1) - 1)).toBe("59m");
  });

  it("renders hours and minutes under a day", () => {
    expect(formatStretchDuration(h(1))).toBe("1h");
    expect(formatStretchDuration(h(9) + m(40))).toBe("9h 40m");
    expect(formatStretchDuration(h(23) + m(59))).toBe("23h 59m");
    expect(formatStretchDuration(d(1) - 1)).toBe("23h 59m");
  });

  it("drops a zero minor unit", () => {
    expect(formatStretchDuration(h(9))).toBe("9h");
    expect(formatStretchDuration(h(9) + 30_000)).toBe("9h");
    expect(formatStretchDuration(d(2))).toBe("2d");
  });

  it("renders days and hours from 24h up", () => {
    expect(formatStretchDuration(d(1))).toBe("1d");
    expect(formatStretchDuration(d(2) + h(6))).toBe("2d 6h");
    expect(formatStretchDuration(d(30) + h(23) + m(59))).toBe("30d 23h");
  });

  it("floors rather than rounds", () => {
    expect(formatStretchDuration(m(47) + 59_000)).toBe("47m");
    expect(formatStretchDuration(h(9) + m(40) + 59_000)).toBe("9h 40m");
  });
});
