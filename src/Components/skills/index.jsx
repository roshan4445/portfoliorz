 import "./index.css";
const Skills = (props) => {
    const {item}=props
    const {imageURL,title}=item;
    return(
        <div className="flex flex-col justify-center items-center bg-white border-2 border-blue-600 rounded-xl w-100% p-4 m-4 shadow-lg hover:scale-105 transition-transform duration-300 w-100%">
            <img src={imageURL} alt={title} className="w-20 h-20" />
            <h1 className="text-black text-lg mt-2">{title}</h1>
        </div>
    )
}
 export default Skills;