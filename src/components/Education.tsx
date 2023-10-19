import { robotoSlab } from "@/lib/fonts";
import clsx from "clsx";
import { FC, ReactNode } from "react";

const Education: FC<{
    children: ReactNode,
    school: string,
    image: string,
    degree: ReactNode,
    description?: ReactNode
}> = ({children, school, image, degree, description}) => {
    return (
        <article className="flex flex-col sm:flex-row items-center sm:items-start rounded-xl border-dashed gap-4 border-4 border-amber-900 p-4">
            {image && <img className="w-32" src={image} />}
            <div className="flex-1 px-2 flex flex-col gap-1 justify-start items-center sm:items-start">
                <h3 className={clsx('text-2xl font-bold', robotoSlab.className)}>{school}</h3>
                <h4 className='text-lg italic'>{degree}</h4>
                {description && <p>{description}</p>}
                {children}
            </div>
        </article>
    );
};

export default Education;