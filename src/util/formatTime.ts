const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60); // 분 계산
  const remainingSeconds = seconds % 60; // 나머지 초 계산

  // 두 자릿수로 맞춰주기 위해 padStart 사용
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${formattedMinutes}분 ${formattedSeconds}초`;
};

export default formatTime;
