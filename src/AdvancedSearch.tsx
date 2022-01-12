import React from "react";
import { useForm } from 'react-hook-form'
import { Types } from './interfaces'
const AdvancedSearch = () => {
    return (

        <div className="mx-3 my-3 flex  flex-col justify-center items-center text-black text-xl">
            matching Pokémon must match ALL of the criteria, but can match ANY selections within a group (e.g., type)
            <form className="mt-3 bg-pokered flex flex-col rounded-lg p-5 items-center ">
                <div className="mb-6">
                    <label >
                        Name:
                        <input className={"mx-2"} type="text" name={"name"} />
                    </label>
                </div>
                <div className="mb-6">
                    <label >
                        Id:
                        <input className={"mx-2"} type="number" name={"id"} />
                    </label>
                </div>
                <div className="mb-6">
                    <label >
                        Ability:
                        <input className={"mx-2"} type="text" name={"ability"} />
                    </label>
                </div>
                <div className="mb-6">
                    <label >
                        Growth Rate:
                        <input className={"mx-2"} type="text" name={"ability"} />
                    </label>
                </div>
                <div className="mb-6">
                    <label >
                        Type:
                        <select className={"mx-2"}>
                            {Object.keys(Types).map((types, idx)=>(
                                <option key={idx} value={types}>
                                    {types}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="mb-6 self-center">
                    <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Search
                    </button>
                </div>

                
            </form>
        </div>
    );
}

export default AdvancedSearch;
