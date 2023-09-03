

type Props = {
    name: string;
    description?: string;
    image: string;
}

const overLayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-white opacity-0 transition duration-500 hover:opacity-90`;

const Class = ({name, description, image, }: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overLayStyles}>
            <p className="text-2xl ">{name}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img className="w-5/6 " src={image} alt="" />
    </li>  
)
}

export default Class