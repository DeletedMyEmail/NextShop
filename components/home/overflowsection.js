import CategoryButton from "@/components/home/categorybutton";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaCalendar } from "@react-icons/all-files/fa/FaCalendar";
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";

function OverflowSection() {
    return (
        <div className="bg-white w-1/2 h-1/5 rounded-3xl z-5 overflow-visible mb--100 self-center m-auto flex justify-center items-center space-x-3 gap-x-10">
            <CategoryButton category="Development" description="Adversarium latine usu laoreet dolorum expetenda." icon={<FaCode className="text-gray-700 scale-400"/>}/>
            <CategoryButton category="Trading" description="Expetendis imperdiet sadipscing pri aeque postea." icon={<FaShoppingBasket className="text-gray-700 scale-400"/>}/>
            <CategoryButton category="Events" description="Adversarium latine usu laoreet dolorum expetenda." icon={<FaCalendar className="text-gray-700 scale-400"/>}/>
        </div>
    )
}

export default OverflowSection