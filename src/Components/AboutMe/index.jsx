import "./index.css"
const AboutMe = () => {
    return(
        <div id="Aboutme">
        <div className="bg-blue-100 min-h-screen flex items-center justify-center px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-x-10 gap-y-8">
            <div className="h-[240px] w-[240px] rounded-[120px] bg-white relative shadow-md">
<img src="https://media.licdn.com/dms/image/v2/D4E03AQHKsDeJuBTz6w/profile-displayphoto-shrink_800_800/B4EZQMgmMnHsAc-/0/1735376660102?e=1751500800&v=beta&t=m_Q60Q8P45IyRSYH5-jKjuHCp991Gz-GWU9TP_Tu7Ok" className="w-[230px] h-[230px] rounded-[115px] absolute top-[5px] left-[5px]"/>
            </div>
        <div className="bg-white max-w-xl rounded-lg shadow-md p-6">
                <h1 className="text-blue-600 text-2xl text-center font-bold font-poppins mb-4">About Me</h1>
    
                <p className="text-black">I'm a passionate
                    <span className="text-blue-600 font-bold">first-year student at NIAT</span>,
                    exploring the fascinating world of technology through programming
                    and web development.
                <br className="mt-[10px]"></br>
                    My journey into tech began with a curiosity about how digital
                    solutions shape our daily lives.
                    <br className="mt-[10px]"></br>
                    My technical skills include{" "}
                    <span className="text-blue-600 font-bold">
                    Python, JavaScript, React.js, HTML, CSS, and SQLite 
                    </span>
                    databases.
                    <br className="mt-[10px]"></br>
                    I'm constantly expanding my knowledge by working on projects that
                    challenge me to apply and enhance these skills in practical
                    scenarios.
                    <br className="mt-[10px]"></br>
                    When I'm not coding, I enjoy researching emerging technologies,
                    collaborating with fellow students on innovative projects, and
                    seeking opportunities to contribute to the tech community.
                    <br className="mt-[10px]"></br>
                    I'm excited to continue growing as a developer and eventually create
                    impactful solutions that make a difference.
                
                        </p>
                        </div>
                        

            </div>
            </div>
            </div>
        
    )
}
export default AboutMe;