export function Card({ src, preco, descri }) {
  return(
    <div className="w-90 h-[400px] rounded-xl shadow-lg bg-white p-6 max-w-full overflw-hidden justify-end">
      <div className="pt-4">
        <img className="w-full h-48 object-contain" src={src}/>
      </div>
        <div className="">
            <div className="pt-2 text-center text-gray-600 flex-1 mt-2">
                <p>
                {descri}
                </p>
            </div>
            <h1 className="text-2xl font-bold text-blue-600 text-center">
                {preco}
            </h1>
            <div className="pt-2 text-center ">
                <button className="cursor-pointer bg-blue-300 max-w-sm rounded-xl shadow-lg px-21 py-2 hover:bg-blue-400" type="button">Inspecionar</button>
            </div>
        </div>
    </div>
  );
}

export default Card
