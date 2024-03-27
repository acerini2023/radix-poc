import { useState } from "react";

import { Radio, RadioGroup, Switch } from "@adobe/react-spectrum";

import "../App.scss";
import "../assets/sass/base/disabled.scss";
import "../assets/sass/base/interactive.scss";
import "../assets/sass/base/semantic.scss";
import { ButtonRow, type Size } from "../components/aria/button";
import Button from "../components/aria/button/button.tsx";
import BorderlessButton from "../components/aria/button/Borderless/BorderlessButton.tsx";
import OutlineButton from "../components/aria/button/Outline/OutlineButton.tsx";
import DefaultButton from "../components/aria/button/Default/DefaultButton.tsx";

const Aria = (): React.JSX.Element => {
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<Size>("standard");

  return (
    <main className="main">
      <div style={{ backgroundColor: "#666", marginRight: 100, padding: 10 }}>
        <Switch isSelected={disabled} onChange={setDisabled}>
          Disabled
        </Switch>
        <RadioGroup label="Button size" onChange={setSize} value={size}>
          <Radio value="small">Small</Radio>
          <Radio value="standard">Standard</Radio>
          <Radio value="large">Large</Radio>
        </RadioGroup>
      </div>
      <div className="content">
        <ButtonRow>
          <BorderlessButton isDisabled={disabled} size={size}>
            borderless
          </BorderlessButton>
          <OutlineButton isDisabled={disabled} size={size}>
            outline
          </OutlineButton>
          <DefaultButton isDisabled={disabled} size={size}>
            default
          </DefaultButton>
        </ButtonRow>
      </div>
    </main>
  );
};

export default Aria;
