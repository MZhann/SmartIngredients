import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";
import loading from '../../public/loading.gif'
import GenerationResult from "./GenerationResult";

const Choose = () => {
    
    const apikey = import.meta.env.VITE_API_KEY;
    const apiurl = import.meta.env.VITE_API_URL;
    const [infoFromOptions, setInfoFromOptions] = useState();
    const [responseText, setResponseText] = useState('');

    const [gptPromptText, setGptPromptText] = useState([]);

    const [imageUrl, setImageUrl] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [showResult, setShowResult] = useState(false);

    

    const ingredientsData = [
        { name: "Meat", imageSrc: "/images/meat.png" },
        { name: "Apple", imageSrc: "/images/apple.png" },
        { name: "Banana", imageSrc: "/images/banana.png" },
        { name: "Carrot", imageSrc: "/images/carrot.png" },
    ];

    const createPromptText = () => {
        let text = 'Generate breakfast using these ingredients: ' + gptPromptText.toString() + 'other settings:' + infoFromOptions; 
        console.log('promt text: ', text)
        return text;
    }

    const handleIngredientClick = (ingredient) => {
        setGptPromptText([...gptPromptText, ingredient.name]);
    };

    const generateText = async () => {
        

        const ingredientsString =
            "ingredients are: " + gptPromptText.map((obj) => obj.name).join(", ");

        console.log(ingredientsString);
        let prompt = `genereate me dish recipe with these ingredients: ` + gptPromptText.toString();

        try {
            const response = await fetch(apiurl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${apikey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    prompt: prompt,
                    max_tokens: 350,
                }),
            });

            const data = await response.json();
            const text = data.choices[0].text;
            console.log(text);
            setResponseText(text);

            console.log('Gtp response text: ', responseText);

            // await generateImage(responseText.substring(0, 100));

            setIsLoading(false);
        } catch (error) {
            console.error(error.response?.data ?? error.toJSON?.() ?? error);
            console.error("API error", error);
        }

    };

    const generateImage = async (promtText) => {
        setIsLoading(true);
        console.log('generate image')
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apikey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: promtText,
                n: 1,
                size: "512x512",
            }),
        };
    
        try {
            const response = await fetch(
                "https://api.openai.com/v1/images/generations",
                options
            );
            const data = await response.json();
            console.log('data: ', data);
            setImageUrl(data.data[0].url);
            
            await generateText();
            
            setIsLoading(false);
            setShowResult(true);
            
        } catch (error) {
            setIsLoading(false);
            alert('sorry, generation failed')
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap pt-[120px]">
                {ingredientsData.map((ingredient, index) => (
                    <Ingredient
                        key={index}
                        imageSrc={ingredient.imageSrc}
                        onClick={() => handleIngredientClick(ingredient)}
                    />
                ))}
                <div>
                    <h3>Selected Ingredients:</h3>
                    <ul>
                        {gptPromptText.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={() => generateImage(createPromptText())}
                    className="px-4 h-[50px] m-4 rounded-2xl bg-indigo-200"
                    disabled = {isLoading}
                >
                    { isLoading ? <img src={loading} alt='loading' width={30} height={30}/> : 'generate dish' }
                    
                </button>

                <p>isLoading status: {isLoading + ''}</p>
            </div>
            <div className="flex w-full flex-col items-center xl:flex-row">
                
                {/* { responseText ? 'hello' : 'bye' } */}
                {/* { responseText ? <p>generated text: {responseText}</p> : ''} */}
                <Options setInfoFromOptions={setInfoFromOptions} />
                {/* <div>
                    <p>Generated image will be here:</p>
                    <img src={imageUrl} width={200} height={200} className="bg-emerald-200 rounded-2xl border-2 border-black w-[300px] h-[300px] mr-10 mb-10" alt="generated image will be pasted here" />
                    
                </div> */}


            </div>
            <GenerationResult responseText={responseText} imageUrl={imageUrl} showResult={showResult} />

        </div>
    );
};

export default Choose;
