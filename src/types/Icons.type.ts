type PositionType = "center" | "right" | "left" | "top" | "bottom";

export type pngIconType = {
    children: React.ReactNode;
    svg?: never;
    png: boolean;
    position: PositionType;
}

export type svgIconType = {
    children: React.ReactNode;
    svg: boolean;
    png?: never;
    position: PositionType;
};

export type IconProps = pngIconType | svgIconType;