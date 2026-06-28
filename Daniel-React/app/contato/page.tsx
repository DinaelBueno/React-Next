import Image from "next/image";
import Link from "next/link";
import NavBar from "../functions/nav";


export default function Contato() {

  return (
    <div>    
        <div className = "">
            <NavBar/>
        </div>
        
        <div className="flex flex-col items-center justify-center m-[120px] text-center shadow-xl p-10 bg-olive-100 items-center">
          <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80" 
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-20" 
        />
          <h2 className="">Horario de atendimento: Segunda a Sexta</h2>
          <p>Entraremos em contato quando possivel</p>
          <label className="pt-4">Email:</label>
          <input className="border rounded-xl" type="text" id="email"></input>
          <label className="pt-4">Numero:</label>
          <input className="border rounded-xl" type="text" id="numero"></input>
          <label className="pt-8"></label>
          <input className="border rounded-xl px-21 cursor-pointer" type="submit" id="numero"></input>
        </div>
        
        
    </div>    
  )

  

}
