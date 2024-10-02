import React from "react";

const GenerationResult = ({ responseText, imageUrl, showResul=true }) => {
    console.log();

    return (
       
        <div className="w-full">
            {showResul ? (
                <div className="mx-auto p-4 mt-4 gap-2 bg-emerald-100 w-[90%] lg:w-[70%] border-2 border-black  rounded-3xl flex  justify-center min-h-[600px] mb-20">
                    <div className="w-4/6 border-2 border-black rounded-2xl">
                        {responseText}
                    </div>
                    <div className="w-2/6 border-2 border-black rounded-2xl">
                        <img
                            src={imageUrl}
                            alt="generated image"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default GenerationResult;
