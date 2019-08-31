export function orderByName(a, b) {
  const elementA = a.name.toUpperCase();
  const elementB = b.name.toUpperCase();

  let comparison = 0;
  if (elementA > elementB) {
    comparison = 1;
  } else if (elementA < elementB) {
    comparison = -1;
  }
  return comparison;
}
