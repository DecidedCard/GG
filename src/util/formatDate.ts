const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1을 해줍니다.
  const day = date.getDate().toString().padStart(2, "0"); // 날짜도 두 자리로 맞춰줍니다.

  return `${year}-${month}-${day}`;
};

export default formatDate;
