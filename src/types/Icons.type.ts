export type pngIconType = {
    children: React.ReactNode;
    svg?: never;
    png: boolean;
}

export type svgIconType = {
    children: React.ReactNode;
    svg: boolean;
    png?: never;
};

export type IconProps = pngIconType | svgIconType;