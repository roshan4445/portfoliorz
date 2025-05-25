import "./index.css";
const Projects=(props)=>{
    const {item}=props
    const {imageURL,title,description,tech}=item;
    return(
        <div className="bg-white w-full max-w-xs md:w-[340px] m-[15px] rounded-[12px] shadow-[0px 15px 25px rgba(0, 0, 0, 0.06)] flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
<img src={imageURL} alt={title} className="w-[340px]"/>
<div className="flex flex-col justify-center items-center p-[20px]">
    <h1 className="text-black text-xl mt-[10px] mb-[10px]">{title}</h1>
    <p className="text-black">{description}</p>
        </div>
    <h4 className="text-black">Technologies:</h4>
    <div>
        <ul className="flex flex-wrap justify-center items-center">
            {tech.map((item) => (
                <li key={item} className="text-black font-bold text-[14px] m-[5px] p-[5px] bg-white rounded-[8px] border-black border-[1px]">{item}</li>
            ))}
        </ul>
    </div>
        </div>

    )
}
export default Projects;