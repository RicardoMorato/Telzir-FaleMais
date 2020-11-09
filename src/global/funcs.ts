export function calculatePriceWithoutPlan(
  from: string,
  to: string,
  time: string
) {
  const callTime = Number(time);

  if (from === "011") {
    if (to === "016") {
      return calculatePrice(callTime, 1.9, false);
    } else if (to === "017") {
      return calculatePrice(callTime, 1.7, false);
    } else if (to === "018") {
      return calculatePrice(callTime, 0.9, false);
    }
  } else if (from === "016") {
    return calculatePrice(callTime, 2.9, false);
  } else if (from === "017") {
    return calculatePrice(callTime, 2.7, false);
  } else {
    return calculatePrice(callTime, 1.9, false);
  }
}

export function calculatePriceWithPlan(
  from: string,
  to: string,
  plan: string,
  time: string
) {
  const numbersOnlyRegex = /\d+/g;
  const freeMinutes = Number(plan.match(numbersOnlyRegex)![0]);
  const timeLeft = Number(time) - freeMinutes;

  if (timeLeft <= 0)
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(0);

  if (from === "011") {
    if (to === "016") {
      return calculatePrice(timeLeft, 1.9, true);
    } else if (to === "017") {
      return calculatePrice(timeLeft, 1.7, true);
    } else if (to === "018") {
      return calculatePrice(timeLeft, 0.9, true);
    }
  } else if (from === "016") {
    return calculatePrice(timeLeft, 2.9, true);
  } else if (from === "017") {
    return calculatePrice(timeLeft, 2.7, true);
  } else {
    return calculatePrice(timeLeft, 1.9, true);
  }
}

function calculatePrice(time: number, pricePerMinute: number, plan: boolean) {
  let price = 0;
  const tax = plan ? 1.1 : 1;

  for (let i = 0; i < time; i++) {
    price += pricePerMinute * tax;
  }

  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}
