import Image from "next/image";
import Link from "next/link";
import NavBar from "./functions/nav";
import WhatsIcon from "./functions/what";

export default function Home() {

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className="flex justify-center pt-16">
        <div className="flex flex-col items-center justify-center m-[10px] text-center shadow-xl p-10 bg-olive-100 ">
          <h1 className="text-3xl font-bold mb-4">Transforme seu ambiente com a gente</h1>
            <p className="max-w-2xl text-gray-600 leading-relaxed text-justify">
              Seja para encarar os dias mais quentes do ano com frescor absoluto ou para manter o aconchego ideal nos dias frios, a ESFRIAR tem a solução perfeita para você. Nós não apenas instalamos aparelhos; nós cuidamos do ar que você respira e do bem-estar da sua família ou da sua equipe. 
              Com anos de experiência no mercado, unimos tecnologia de ponta, eficiência energética e um atendimento que entende exatamente o que você precisa.
            </p>
            <div className="pt-8">
              <img className="shadow-xl rounded-lg" src="https://i.pinimg.com/736x/2d/9c/ad/2d9cad9009f8e7ff6cabdc12f805a13e.jpg"/>
            </div>
              <p className="max-w-2xl text-gray-600 leading-relaxed text-justify pt-8">
                Há mais de 10 anos no mercado, nossa empresa é especializada na venda, instalação, manutenção e assistência técnica de sistemas de ar-condicionado. Trabalhamos com marcas reconhecidas mundialmente, como LG, Fujitsu e Samsung, oferecendo equipamentos de alta qualidade e soluções eficientes para residências e empresas. Nosso compromisso é proporcionar conforto, confiança e excelência em cada atendimento.
              </p>        
        </div>
      </div>
      <WhatsIcon/>
    </div>
  )

  

}
