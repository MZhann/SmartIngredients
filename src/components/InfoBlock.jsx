import dish from '../../public/images/dish.png'

const InfoBlock = () => {
    return (
        <div className="w-full flex flex-col pt-[100px] lg:flex-row items-center justify-evenly bg-blue-700 min-h-[200px] pr-5 pl-5" >
            <div>
                <h1 className="text-3xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aspernatur.{" "}
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quisquam aut veniam, sed animi perferendis.
                </p>
                <button className="px-3 h-[30px]  bg-pink-400 rounded-3xl text-white">
                    dosik
                </button>
                <button className="px-3 h-[30px] bg-green-500 rounded-3xl text-white">
                    beka
                </button>
            </div>
            <div><img src={dish} className='' alt="" /></div>


            <div></div>

        </div>
    );
};


export default InfoBlock;
