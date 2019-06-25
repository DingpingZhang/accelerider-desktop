export function range(start, count, map) {
  let result = [];
  for (let index = start; index < count; index++) {
    result.push(map(index));
  }

  return result;
}
