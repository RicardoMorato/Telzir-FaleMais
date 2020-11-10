import {
  calculatePriceWithPlan,
  calculatePriceWithoutPlan,
} from "../global/funcs";

const setup = () => {
  const fakeData = {
    key: 1,
    from: "011",
    to: "016",
    time: "30",
    plan: "FaleMais 30",
    withPlan: calculatePriceWithPlan("011", "016", "FaleMais 30", "30"),
    withoutPlan: calculatePriceWithoutPlan("011", "016", "30"),
  };

  return fakeData;
};

test("Check price with a plan output comparing with function", () => {
  const { withPlan } = setup();
  const received = calculatePriceWithPlan("011", "016", "FaleMais 30", "30");
  expect(withPlan).toBe(received);
});

test("Check price with a plan output comparing with string", () => {
  const { withPlan } = setup();
  expect(withPlan).toMatch(/0.00/);
});

test("Check price without a plan comparing with function", () => {
  const { withoutPlan } = setup();
  const received = calculatePriceWithoutPlan("011", "016", "30");
  expect(withoutPlan).toBe(received);
});

test("Check price without a plan output comparing with string", () => {
  const { withoutPlan } = setup();
  expect(withoutPlan).toMatch(/57.00/);
});

test("Check function calculatePriceWithPlan() with numbers bigger than 100", () => {
  const result = calculatePriceWithPlan("011", "016", "FaleMais 30", "300");
  expect(result).toMatch(/564/);
});

test("Check function calculatePriceWithoutPlan() with numbers bigger than 100", () => {
  const result = calculatePriceWithoutPlan("011", "016", "300");
  expect(result).toMatch(/570/);
});

test("Check function calculatePriceWithoutPlan() 011 to 017", () => {
  const result = calculatePriceWithoutPlan("011", "017", "300");
  expect(result).toMatch(/510/);
});

test("Check function calculatePriceWithoutPlan() 011 to 018", () => {
  const result = calculatePriceWithoutPlan("011", "018", "300");
  expect(result).toMatch(/270/);
});

test("Check function calculatePriceWithoutPlan() 016 to 011", () => {
  const result = calculatePriceWithoutPlan("016", "011", "300");
  expect(result).toMatch(/870/);
});

test("Check function calculatePriceWithoutPlan() 017 to 011", () => {
  const result = calculatePriceWithoutPlan("017", "011", "300");
  expect(result).toMatch(/810/);
});

test("Check function calculatePriceWithoutPlan() 018 to 011", () => {
  const result = calculatePriceWithoutPlan("018", "011", "300");
  expect(result).toMatch(/570/);
});
