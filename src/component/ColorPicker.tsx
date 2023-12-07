import { COLORS, ColorName } from "../constants";
import Icon from "./Icon";

interface ColorProps {
    color: string;
    size: number;
    selectedColor: ColorName;
}

function COLOR({ color, size, selectedColor }: ColorProps) {
    const isSelected = color === COLORS[selectedColor];
    if (isSelected) {
        return (
            <Icon type="CHECK" size={size} fill={color} />
        )
    }

    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "100%",
                backgroundColor: color,
            }}
        />
    )
}

function ColorPicker({ selectedColor }: { selectedColor: ColorName }) {
    const colors = Object.values(COLORS);
    return (
        <div
            style={{
                width: '400px',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            {colors.map((color) => (
                <COLOR key={color} color={color} size={24} selectedColor={selectedColor} />
            ))}
        </div>
    );
}

export default ColorPicker;
