import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const useHeader = () => {
  const [selectGame, setSelectGame] = useState("");
  const [isSelectView, setIsSelectView] = useState(false);
  const navigation = useRouter();

  const gameArr = [{ game: "메이플스토리" }];
  const checkGame = usePathname();

  useEffect(() => {
    if (checkGame.indexOf("maple") !== -1) {
      setSelectGame("메이플스토리");
    }

    if (checkGame === "/") {
      setSelectGame("");
    }
  }, [checkGame]);

  const onClickIsSelectViewToggleHandler = () => {
    setIsSelectView(!isSelectView);
  };

  const onClickGameSet = (game: string) => {
    if (selectGame === game) {
      onClickIsSelectViewToggleHandler();
      return;
    }

    if (game === "메이플스토리") {
      navigation.push("/maple");
    }

    setSelectGame(game);
    onClickIsSelectViewToggleHandler();
  };

  return {
    selectGame,
    isSelectView,
    gameArr,
    onClickIsSelectViewToggleHandler,
    onClickGameSet,
  };
};

export default useHeader;
