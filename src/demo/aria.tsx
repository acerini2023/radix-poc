import { useState } from "react";

import { Radio, RadioGroup, Switch } from "@adobe/react-spectrum";

import "../App.scss";
import "../assets/sass/abstracts/variables/colors.scss";
import "../assets/sass/abstracts/variables/fonts.scss";
import "../assets/sass/abstracts/variables/grid.scss";
import "../assets/sass/abstracts/variables/interactive.scss";
import "../assets/sass/abstracts/variables/theme-tokens.scss";
import "../assets/sass/base/disabled.scss";
import "../assets/sass/base/interactive.scss";
import "../assets/sass/base/semantic.scss";
import { ButtonRow, type Size } from "../components/aria/button";
import "../components/aria/button/button.scss";
import Button from "../components/aria/button/button.tsx";

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
          <Button isDisabled={disabled} size={size} variant="borderless">
            Cancel
          </Button>
          <Button isDisabled={disabled} size={size} variant="outline">
            Cancel
          </Button>
          <Button isDisabled={disabled} size={size} variant="default">
            Add Employee
          </Button>
        </ButtonRow>
      </div>
    </main>
  );
};

export default Aria;
