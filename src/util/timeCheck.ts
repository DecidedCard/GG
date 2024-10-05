const timeCheck = (dateString: string, timeString: string): string => {
  // 입력된 날짜와 시간을 Date 객체로 변환
  const date = new Date(dateString);
  const [inputHour, inputMinute] = timeString.split("-").map(Number); // 시간과 분을 각각 정수로 변환

  // 현재 시간을 가져옴
  const currentDate = new Date();

  // 입력된 날짜와 현재 날짜가 같고, 현재 시간이 입력된 시간보다 이전이면 하루를 뺌
  if (date.toDateString() === currentDate.toDateString()) {
    // 시간과 분 비교
    if (
      currentDate.getHours() < inputHour ||
      (currentDate.getHours() === inputHour &&
        currentDate.getMinutes() < inputMinute)
    ) {
      date.setDate(date.getDate() - 1); // 하루 전 날짜로 변경
    }
  }

  // yyyy-mm-dd 형식으로 날짜 반환
  const adjustedDate = date.toISOString().split("T")[0];
  return adjustedDate;
};

export default timeCheck;
