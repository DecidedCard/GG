const numberChangeArr = (star: number) => {
  const starArr: number[] = [];
  starArr.length = star;
  starArr.fill(0);

  return starArr;
};

export default numberChangeArr;
