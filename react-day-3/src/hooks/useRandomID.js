



export const useRandomValue = (start , end)=>{

    const result = Math.floor(Math.random()* start-end);




    return { result};

}