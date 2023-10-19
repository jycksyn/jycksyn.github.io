import { Tool } from "@/lib/tools";
import clsx from "clsx";
import { FC } from "react";

const Tool: FC<{
    tool: Tool
}> = ({tool}) => {
    const {name, image, href} = tool;

    const imageElement = (
        <img className={clsx(href && "hover:brightness-75 transition")} src={"/tools/"+image} />
    );

    const icon = href ? <a target="_blank" href={href}>{imageElement}</a> : imageElement;
    
    return (
        <div className="has-tooltip">
            <div className="tooltip bg-amber-100 rounded-lg p-2">{name}</div>
            {icon}
        </div>
    )
};

export default Tool;