import clsx from "clsx";
import { FC, ReactNode } from "react";

const Icons: FC<{
    children: ReactNode,
    sm: boolean
}> = ({children, sm}) => {
    return (
        <div className={clsx("flex flex-row gap-4 flex-wrap", sm ? "[&_img]:h-6" : "[&_img]:h-8")}>
            {children}
        </div>
    );
};

export default Icons;