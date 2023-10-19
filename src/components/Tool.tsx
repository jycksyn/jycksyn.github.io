import { Tool } from "@/lib/tools";
import clsx from "clsx";
import { FC } from "react";

const Tool: FC<{
    tool: Tool | undefined
}> = ({tool}) => {

    const imageElement = (
        <img className={clsx(tool?.href && "hover:brightness-75 transition")} src={"/tools/"+tool?.image} />
    );

    const icon = tool?.href ? <a target="_blank" href={tool?.href}>{imageElement}</a> : imageElement;
    
    return (
        <div className="has-tooltip">
            <div className="tooltip bg-amber-100 rounded-lg p-2">{tool?.name}</div>
            {icon}
        </div>
    )
};

export default Tool;