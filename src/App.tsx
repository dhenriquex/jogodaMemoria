import { useEffect, useState } from "react";
import * as C from "./App.styles";
import logoImage from "./assets/devmemory_logo.png";
import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import resart from "./svgs/restart.svg";
import { GridItemType } from "./types/GridItemType";
import { Items } from "./data/items";
import { GridItem } from "./components/GridItem";
import { clear } from "console";
import { FormatTime } from "./helpers/formatTime";

const App = () => {
  const [playing, setPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [shownCount, setShownCount] = useState(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);
useEffect(() => {
  if (moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
    alert("Parabéns! Você terminou o jogo!");
    setPlaying(false);
  }
}, [moveCount, gridItems]);

useEffect(() => {
  if (shownCount === 2) {
    let opened = gridItems.filter(item => item.shown === true);
    let tmpGrid = [...gridItems];

    if (opened[0].item === opened[1].item) {
      // ✅ São iguais → deixa viradas permanentemente
      for (let i in tmpGrid) {
        if (tmpGrid[i].shown) {
          tmpGrid[i] = { ...tmpGrid[i], permanentShown: true, shown: false };
        }
      }
      setGridItems(tmpGrid);
      setShownCount(0);
      setMoveCount(moveCount => moveCount + 1);
    } else {
      // ❌ Diferentes → dá um tempo antes de virar de novo
      setTimeout(() => {
        let tmpGrid = [...gridItems];
        for (let i in tmpGrid) {
          if (tmpGrid[i].shown) {
            tmpGrid[i] = { ...tmpGrid[i], shown: false };
          }
        }
        setGridItems(tmpGrid);
        setShownCount(0);
        setMoveCount(moveCount => moveCount + 1);
      }, 1000); // 1 segundo de delay
    }
  }
}, [shownCount, gridItems]);

  useEffect(() => {
    resetAll();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed((prev) => prev + 1); 
      }
    }, 1000);

    return () => clearInterval(timer); 
  }, [playing, timeElapsed]);
  const itemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      if (!gridItems[index].permanentShown && !gridItems[index].shown) {
        let tmpGrid = gridItems.map((item, i) =>
          i === index ? { ...item, shown: true } : item
        );

        setGridItems(tmpGrid);
        setShownCount(shownCount + 1);
      }
    }
  };

  const resetAll = () => {
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < Items.length * 2; i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    }
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < Items.length; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * Items.length * 2);
        }
        tmpGrid[pos].item = i;
      }
    }
    setGridItems(tmpGrid);

    setPlaying(true);
  };
  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width={200} />
        </C.LogoLink>
        <C.InfoArea>
          <InfoItem label="Tempo" value={FormatTime(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()}/>
        </C.InfoArea>
        <Button label="Reiniciar" onClick={resetAll} icon={resart} />
      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => itemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
};
export default App;
