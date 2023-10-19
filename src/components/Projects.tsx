import { FC, ReactNode } from "react";

const Projects: FC<{
    children: ReactNode
}> = ({children}) => {
    return (
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 grid-flow-row">
            {children}
        </div>
    );
};

export default Projects;