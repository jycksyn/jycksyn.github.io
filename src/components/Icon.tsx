import clsx from "clsx";
import { FC } from "react";

const Icon: FC<{
    image: string,
    href: string | undefined
}> = ({image: src, href}) => {
    const image = (
        <img className={clsx(href && "hover:brightness-75 transition")} src={src} />
    );

    if (href) return <a target="_blank" href={href}>{image}</a>;
    return image;
};

export default Icon;