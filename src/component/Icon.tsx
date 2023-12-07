import { ICONS, IconName } from "../constants";

interface IconProps {
    type: IconName;
    size: number;
    fill: string;
}

function Icon({ type, size, fill }: IconProps) {
    const path = ICONS[type];

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 ${size + 1} ${size + 1}`} fill="none">
            <path d={path} fill={fill} />
        </svg>
    );
}

export default Icon;
