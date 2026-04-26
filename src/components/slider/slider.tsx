import React from "react";
import Slider from "@mui/material/Slider";

interface CustomSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  onChange,
}) => {
  const handleChange = (_: Event, value: number | number[]) => {
    if (onChange && typeof value === "number") {
      onChange(value);
    }
  };

  return (
    <div style={{ width: 300, margin: "20px auto" }}>
      <Slider
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={handleChange}
        aria-label="Custom slider"
      />
    </div>
  );
};

export default CustomSlider;
