import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const useGameSelector = () => {
  const [selectGame, setSelectGame] = useState("");
  const [isSelectView, setIsSelectView] = useState(false);
  const navigation = useRouter();

  // 게임 배열을 useMemo로 메모이제이션
  const gameArr = useMemo(() => [{ game: "메이플스토리" }], []);

  const checkGame = usePathname();

  useEffect(() => {
    if (checkGame.includes("maple")) {
      setSelectGame("메이플스토리");
    } else if (checkGame === "/") {
      setSelectGame("");
    }
  }, [checkGame]);

  // isSelectView 상태 토글 함수 메모이제이션
  const onClickIsSelectViewToggleHandler = useCallback(() => {
    setIsSelectView((prev) => {
      const newValue = !prev;
      return newValue;
    });
  }, []);

  // 게임 설정 클릭 핸들러 메모이제이션
  const onClickGameSet = useCallback(
    (game: string) => {
      if (selectGame === game) {
        return;
      }

      if (game === "메이플스토리") {
        setSelectGame(game);
        navigation.push("/maple");
      }
    },
    [selectGame, navigation]
  );

  return {
    selectGame,
    isSelectView,
    gameArr,
    onClickIsSelectViewToggleHandler,
    onClickGameSet,
  };
};

export default useGameSelector;
