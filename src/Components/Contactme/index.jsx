import "./index.css";

const Contactme = () => {
    return(
        <div id="Contact">
<div className="bg-white w-full p-4 mb-5">
    <h1 className="text-blue-600 text-xl mt-[10px] mb-[10px] text-center font-bold">Connect With Me</h1>
    <div className="flex flex-col justify-center items-center space-y-6 bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] w-[200px] md:w-[300px] lg:w-[400px] xl:w-[400px] 2xl:w-[500px] m-auto p-4 rounded-lg shadow-lg">
        <div className="flex space-x-4">
<a href="https://github.com/roshan4445" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2175/2175377.png" alt="github" className="w-[50px]"/></a>

<p className="text-black mt-[12px] font-bold">GitHub</p>
</div>
<div className="flex space-x-4">
<a href="https://www.linkedin.com/in/shaik-roshan-zameer6/"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="linkedin" className="w-[50px]"/></a>
<p className="text-black mt-[12px] font-bold">Linkedin</p>
</div>
<div className="flex space-x-4">
<img src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png" alt="gmail" className="w-[50px]"/>
<p className="text-black mt-[12px] font-bold">rzameerr115@gmail.com</p>
</div>


</div>

</div>
</div>

    );
}
export default Contactme;