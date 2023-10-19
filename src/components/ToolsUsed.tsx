import toolsAvailable from "@/lib/tools";
import clsx from "clsx";
import { FC } from "react";
import Icons from "./Icons";
import Tool from "./Tool";

const ToolsUsed: FC<{
    tools: (keyof typeof toolsAvailable)[]
}> = ({tools}) => {
    
    return (
        <Icons sm>
            {tools.map((tool) => <Tool tool={toolsAvailable[tool]} />)}
        </Icons>
    )
};

export default ToolsUsed;