function queryFilter(queryObj, data) {
  return data.filter((item) => {
    let isValid = true;
    for (let key in queryObj) {
      item[key] = item[key].toString();
      isValid = isValid && item[key].toLowerCase().includes(queryObj[key]);
    }
    return isValid;
  });
}

export { queryFilter };
