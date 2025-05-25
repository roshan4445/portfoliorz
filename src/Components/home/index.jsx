import "./index.css";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {  
return(
    <div id="Home">
    <div className="bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] min-h-screen pt-[80px] flex flex-col justify-center items-center text-center">
        <div className="mb-[20px] text-center">
        <h1 className="text-black  font-bold text-[48px]">Hi, I am  <span className="text-blue-600 text-[48px]">Roshan</span></h1>
        <h2 className="text-black  text-[18px] font-semibold mt-[10px]">Devolper</h2>
        <p className="text-black text-[18px]  mt-[10px] ">Designing Dreams in Every Pixel</p>
        <button className="bg-blue-600 text-white rounded-lg mt-[20px] px-[8px] py-[8px] mr-[10px] hover:bg-blue-800  transition duration-300">Know More</button>
        <div className="animate-bounce flex justify-center mt-[30px]"><span className="text-center"><FaArrowDown /></span></div>

</div>

    </div>
    </div>
)
}
export default Home;