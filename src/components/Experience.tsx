import { robotoSlab } from "@/lib/fonts";
import clsx from "clsx";
import { title } from "process";
import { FC, ReactNode } from "react";

const Experience: FC<{
    children: ReactNode,
    organization: string,
    image: string,
    title: ReactNode,
    description?: ReactNode
}> = ({children, organization, image, title, description}) => {
    return (
        <article className="flex flex-col sm:flex-row items-start rounded-xl border-dashed gap-4 border-4 border-amber-900 p-4">
            {image && <img className="rounded-lg aspect-4/3 object-cover w-60" src={image} />}
            <div className="flex-1 px-2 flex flex-col gap-1 justify-start items-start">
                <h3 className={clsx('text-2xl font-bold', robotoSlab.className)}>{organization}</h3>
                <h4 className='text-lg italic'>{title}</h4>
                {description && <p>{description}</p>}
                {children}
            </div>
        </article>
    );
};

export default Experience;