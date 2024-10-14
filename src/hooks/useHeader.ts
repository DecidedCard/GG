import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const useHeader = () => {
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
    setIsSelectView((prev) => !prev);
  }, []);

  // 게임 설정 클릭 핸들러 메모이제이션
  const onClickGameSet = useCallback(
    (game: string) => {
      if (selectGame === game) {
        onClickIsSelectViewToggleHandler();
        return;
      }

      if (game === "메이플스토리") {
        navigation.push("/maple");
      }

      setSelectGame(game);
      onClickIsSelectViewToggleHandler();
    },
    [selectGame, navigation, onClickIsSelectViewToggleHandler]
  );

  return {
    selectGame,
    isSelectView,
    gameArr,
    onClickIsSelectViewToggleHandler,
    onClickGameSet,
  };
};

export default useHeader;
