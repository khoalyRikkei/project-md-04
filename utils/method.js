export function convertQueryToCodition(query) {
  const conditions = query.split("&").map((condition) => {
    const data = condition.split("=");
    return { key: data[0], value: data[1] };
  });

  return conditions;
}
