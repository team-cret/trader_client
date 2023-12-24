export function formatRate(rate) {
  if (rate > 0) return "+" + rate.toFixed(2) + "%";
  else return rate.toFixed(2) + "%";
}

export function formatPrice(price) {
  return price.toLocaleString("ko-KR");
}
