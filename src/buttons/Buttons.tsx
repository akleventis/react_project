import React from "react";
import "./Buttons.css";

interface IProps {
  move: (arg0: string) => void;
  reset: () => void;
}

const Buttons = (props: IProps) => {
  const keys: string[] = ['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown', ' ']

  let keyPressHandler = ((event: { key: string; preventDefault: () => void; }) => {
    keys.forEach(e => event.key===e && event.preventDefault())
    switch (event.key) {
        case keys[0]:
        props.move("move-up");
        break;
        case keys[1]:
        props.move("move-right");
        break;
        case keys[2]:
        props.move("move-left");
        break;
        case keys[3]:
        props.move("move-down");
        break;
        case keys[4]:
        props.reset();
        break
        default:
        break;
    }
  });

  React.useEffect(() => {
    document.addEventListener('keydown', keyPressHandler);
    return () => {
        document.removeEventListener('keydown', keyPressHandler)
    };
  });
      
  return (
    <div className="button-container" >
      <div>
        <button className="up" onClick={() => props.move("move-up")}>-</button>
      </div>
      <div>
        <button className="left" onClick={() => props.move("move-left")}>-</button>
        <button className="reset" onClick={props.reset}>
          Reset
        </button>
        <button className="right" onClick={() => props.move("move-right")}>-</button>
      </div>
      <div>
        <button className="down" onClick={() => props.move("move-down")}>-</button>
      </div>
      <div className="info">
          Use keyboard arrow keys (spacebar to reset), or click the buttons above for images
      </div>
    </div>
  );
};

export default Buttons;
