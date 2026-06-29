import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

function WhatsIcon() {
    return(
        <Link
        href="/contato"        
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition duration-300"
        >
            <FaWhatsapp size={30}/>            
        </Link>







);
}

export default WhatsIcon