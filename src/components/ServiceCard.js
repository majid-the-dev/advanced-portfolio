import Code from "./icons/Code"

const ServiceCard = ({ icon, header, body }) => {
    return (
        <div className="bg-secondary rounded-md shadow-md max-w-md h-72 px-7 py-8">
            <div className="bg-red-400/25 inline-flex rounded-md p-2">  
                {icon}
            </div>
            {/* <Code className="w-10" /> */}
            <h1 className="font-bold mt-5">{header}</h1>
            <p className="mt-2">
                {body}
            </p>
        </div>
    )
}

export default ServiceCard