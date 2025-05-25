import "./index.css";
const SkillItem = (props) => {
    const {item,receive,isActive}=props;
    const {tabId,displayText}=item;

    const selected = () => {
       
       receive(tabId);
    }
    return(
        <div className={!(isActive)?"text-black text-lg  mt-4 mb-10 flex gap-x-2 items-center justify-center w-100% border-2 border-blue-600 rounded-xl p-4":"bg-blue-600 text-white rounded-xl p-4 text-lg mb-10 mt-4 flex gap-x-2 items-center justify-center w-100%"}>
            <button  onClick={selected}>{displayText}</button>
        </div>
    )
}
export default SkillItem;