interface Data {
    id: number;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
}

// 등록된 직원정보 addedEmployee값
const CreatedEmplList = (id: number, name: string, calories: number, fat: number, carbs: number, protein: number)=>{
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
    };


}
export default CreatedEmplList