export function getValueWithPlan(
  from: string,
  to: string,
  plan: string,
  time: string
) {
  const numbersOnlyRegex = /\d+/g;
  const freeMinutes = Number(plan.match(numbersOnlyRegex)![0]);
  const timeLeft = Number(time) - freeMinutes;

  if (timeLeft <= 0) return 0;

  if (from === "011") {
    if (to === "016") {
      return calculatePriceTimeLeft(timeLeft, 1.9);
    } else if (to === "017") {
      return calculatePriceTimeLeft(timeLeft, 1.7);
    } else if (to === "018") {
      return calculatePriceTimeLeft(timeLeft, 0.9);
    }
  } else if (from === "016") {
    return calculatePriceTimeLeft(timeLeft, 2.9);
  } else if (from === "017") {
    return calculatePriceTimeLeft(timeLeft, 2.7);
  } else {
    return calculatePriceTimeLeft(timeLeft, 1.9);
  }
}

function calculatePriceTimeLeft(timeLeft: number, pricePerMinute: number) {
  let price = 0;
  for (let i = 0; i < timeLeft; i++) {
    price += pricePerMinute * 1.1;
  }

  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}
