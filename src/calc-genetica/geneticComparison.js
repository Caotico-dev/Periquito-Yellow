import { ColoresMap, PatronMMap, PatronPMap } from "../Db/DbMut.js";

function ColorComparison(colorM, colorF) {

    const result = {
        MutationF: "Sin coincidencia especial",
        MutationM: "Sin coincidencia especial",
        PorcentageF: "0%",
        PorcentageM: "0%",
        Message: "Sin coincidencia especial"
    }

    if (colorM === undefined || colorF === undefined) {
        throw new Error("Both colors must be defined.");
    }
    const tipoF = ColoresMap.get(colorF);
    const tipoM = ColoresMap.get(colorM);

    if (
        colorM === "Azul" &&
        (colorF === "Cara Negra" || colorF === "Cara Amarilla")
    ) {
        result.MutationF = colorF;
        result.MutationM = colorM;
        result.PorcentageF = "0%";
        result.PorcentageM = "0%";
        result.Message = `No hay coincidencia entre los colores de los padres, pero hay posibilidades de que los hijos sean portadores de las mutacion ${colorM}.`;
        return result;
    }

    if (
        colorF === "Azul" &&
        (colorM === "Cara Negra" || colorM === "Cara Amarilla")
    ) {
        result.MutationF = colorF;
        result.MutationM = colorM;
        result.PorcentageF = "0%";
        result.PorcentageM = "0%";
        result.Message = `No hay coincidencia entre los colores de los padres, pero hay posibilidades de que los hijos sean portadores de las mutacion ${colorF}.`;
    }
    if (
        colorM === "Verde" &&
        (colorF === "Cara Negra" || colorF === "Cara Amarilla")
    ) {
        result.MutationF = colorF;
        result.MutationM = colorM;
        result.PorcentageF = "0%";
        result.PorcentageM = "0%";
        result.Message = `No hay coincidencia entre los colores de los padres.`;
        return result;
    }

    if (
        colorF === "Verde" &&
        (colorM === "Cara Negra" || colorM === "Cara Amarilla")
    ) {
        result.MutationF = colorF;
        result.MutationM = colorM;
        result.PorcentageF = "0%";
        result.PorcentageM = "0%";
        result.Message = `No hay coincidencia entre los colores de los padres.`;
        return result;
    }
    if (tipoM === "Do" && tipoF === "Do") {
        result.MutationM = colorM;
        result.MutationF = colorF;
        result.PorcentageF = "50%";
        result.PorcentageM = "50%";
        result.Message = `Ambos hijos seran ${colorM} y ${colorF}.`;
        return result;
    }
    if (tipoF === "Do" && tipoM === "Rec") {
        result.MutationM = colorM;
        result.MutationF = colorF;
        result.PorcentageF = "100%";
        result.PorcentageM = "0%";
        return result;
    }
    if (tipoM === "Do" && tipoF === "Rec") {
        result.MutationM = colorM;
        result.MutationF = colorF;
        result.PorcentageF = "0%";
        result.PorcentageM = "100%";
        return result;
    }
    if (tipoM === "Rec" && tipoF === "Rec") {
        result.MutationM = colorM;
        result.MutationF = colorF;
        result.PorcentageF = "50%";
        result.PorcentageM = "50%";
        return result;
    }


    return result;
}

//test 
// (() => {
//     const color1 = "Cara Amarilla";
//     const color2 = "Verde";

//     try {
//         const result = ColorComparison(color1, color2);
//         console.log(result);
//     } catch (error) {
//         console.error(error.message);
//     }
// })();

function PatronComparison(patronM, patronF) {
    if (patronM === undefined || patronF === undefined) {
        throw new Error("Both patterns must be defined.");
    }
    const tipoF = PatronMMap.get(patronF);
    const tipoM = PatronMMap.get(patronM);
    const result = {
        MutationF: "Sin coincidencia especial",
        MutationM: "Sin coincidencia especial",
        PorcentageF: "0%",
        PorcentageM: "0%",
        Message: "Sin coincidencia especial"
    }

    // Dominant and Dominant
    if (tipoM === "Doc" && tipoF === "Doc") {
        result.MutationM = patronM;
        result.MutationF = patronF;
        result.PorcentageM = "50%";
        result.PorcentageF = "50%";
        result.Message = `Los hijos seran ${patronM} y ${patronF}.`;
        return result;
    }
    // Dominant and Recessive
    if (tipoM === "Doc" && tipoF === "Rec") {
        result.MutationM = patronM;
        result.MutationF = patronF;
        result.PorcentageM = "100%";
        result.PorcentageF = "0%";
        result.Message = `Los hijo sera ${patronM} y portadores de ${patronF}.`;
        return result;
    }
    if (tipoF === "Doc" && tipoM === "Rec") {
        result.MutationM = patronF;
        result.MutationF = patronM;
        result.PorcentageM = "100%";
        result.PorcentageF = "0%";
        result.Message = `Los hijo sera ${patronF} y portadores de ${patronM}.`;
        return result;
    }
    // Dominant and LiSex
    if (tipoF === "Doc" && tipoM === "LSex") {
        result.MutationM = patronM;
        result.MutationF = patronF;
        result.PorcentageF = "80%";
        result.PorcentageM = "30%";
        result.Message = `Los hijo sera ${patronF} y ${result.PorcentageM} ${patronM}, portadores de ${patronM} (Solo los machos).`;

        return result;
    }
    if (tipoM === "Doc" && tipoF === "LSex") {
        result.MutationM = patronM;
        result.MutationF = patronF;
        result.PorcentageM = "100%";
        result.PorcentageF = "0%";
        result.Message = `Los hijo sera ${patronM} y portadores de ${patronF} (Solo los machos).`;
        return result;
    }

    // Recessive and LiSex
    if (tipoM === "LSex" && tipoF === "LSex") {
        result.MutationM = patronM;
        result.MutationF = patronF;
        result.PorcentageM = "50%";
        result.PorcentageF = "50%";
        result.Message = `Los hijos seran ${patronM} y ${patronF}.`;
        return result;
    }
    if (tipoM === "LSex" && tipoF === "Rec") {
        result.MutationM = patronM;
        result.MutationF = patronF;
        result.PorcentageM = "30%";
        result.PorcentageF = "0%";
        result.Message = `Los hijo sera ${PorcentageM} ${patronM} y portador de ${patronF},${patronM} (Solo los machos).`;
        return result;
    }
    if (tipoF === "LSex" && tipoM === "Rec") {
        result.MutationF = patronF;
        result.MutationM = patronM;
        result.PorcentageF = "0%";
        result.PorcentageM = "0%";
        result.Message = `Los hijos seran portadores de  ${patronM} y ${patronF} (Solo los machos).`;
        return result;
    }
    if (tipoM === "Rec" && tipoF === "Rec") {
        result.MutationM = patronM;
        result.MutationF = patronF;
        result.PorcentageF = "50%";
        result.PorcentageM = "50%";
        result.Message = `Los hijos seran ${patronM} y ${patronF}.`;
        return result;
    }

    // return result;

}
// test
// (() => {
//     const patron1 = "Pio Dominante";
//     const patron2 = "Opalino";

//     try {
//         const result = PatronComparison(patron1, patron2);
//         console.log(result);
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// )();
function PatronPlumaComparison(PlumaM, PlumaF) {
    if (PlumaM === undefined || PlumaF === undefined) {
        throw new Error("Both patterns must be defined.");
    }
    const tipoF = PatronPMap.get(PlumaF);
    const tipoM = PatronPMap.get(PlumaM);
    const result = {
        MutationF: "Sin coincidencia especial",
        MutationM: "Sin coincidencia especial",
        PorcentageF: "0%",
        PorcentageM: "0%",
        Message: "Sin coincidencia especial"
    }

    // Recessive and Recessive    
    // Alas Claras 
    if (tipoM === "ACRec" && tipoF === "ACRec") {
        result.MutationM = PlumaM;
        result.MutationF = PlumaF;
        result.PorcentageM = "50%";
        result.PorcentageF = "50%";
        result.Message = `Los hijos seran ${PlumaM} y ${PlumaF}.`;
        return result;
    }
    // Alas Grises
    if (tipoM === "AGRec" && tipoF === "AGRec") {
        result.MutationM = PlumaM;
        result.MutationF = PlumaF;
        result.PorcentageM = "50%";
        result.PorcentageF = "50%";
        result.Message = `Los hijos seran ${PlumaM} y ${PlumaF}.`;
        return result;
    }
    // Diluido
    if (tipoM === "DRec" && tipoF === "DRec") {
        result.MutationM = PlumaM;
        result.MutationF = PlumaF;
        result.PorcentageM = "50%";
        result.PorcentageF = "50%";
        result.Message = `Los hijos seran ${PlumaM} y ${PlumaF}.`;
        return result;
    }
    // Fallow
    if (tipoM === "FRec" && tipoF === "FRec") {
        result.MutationM = PlumaM;
        result.MutationF = PlumaF;
        result.PorcentageM = "50%";
        result.PorcentageF = "50%";
        result.Message = `Los hijos seran ${PlumaM} y ${PlumaF}.`;
        return result;
    }
    // Alas Negras
    if (tipoM === "ANRec" && tipoF === "ANRec") {
        result.MutationM = PlumaM;
        result.MutationF = PlumaF;
        result.PorcentageM = "50%";
        result.PorcentageF = "50%";
        result.Message = `Los hijos seran ${PlumaM} y ${PlumaF}.`;
        return result;
    }
    //LSex and LSex or LSex and Rec
    // Ino
    if (tipoM === "LSex" && tipoF === "LSex") {
        result.MutationM = PlumaM;
        result.MutationF = PlumaF;
        result.PorcentageM = "50%";
        result.PorcentageF = "50%";
        result.Message = `Los hijos seran ${PlumaM} y ${PlumaF}.`;
        return result;
    }

    // Lacewing
    if (tipoM === "GLSex" && tipoF === "GLSex") {
        result.MutationM = PlumaM;
        result.MutationF = PlumaF;
        result.PorcentageM = "50%";
        result.PorcentageF = "50%";
        result.Message = `Los hijos seran ${PlumaM} y ${PlumaF}.`;
        return result;
    }
    // Canela
    if (tipoM === "CLSex" && tipoF === "CLSex") {
        result.MutationM = PlumaM;
        result.MutationF = PlumaF;
        result.PorcentageM = "50%";
        result.PorcentageF = "50%";
        result.Message = `Los hijos seran ${PlumaM} y ${PlumaF}.`;
        return result;
    }
    // Texas
    if (tipoM === "TSex" && tipoF === "TSex") {
        result.MutationM = PlumaM;
        result.MutationF = PlumaF;
        result.PorcentageM = "50%";
        result.PorcentageF = "50%";
        result.Message = `Los hijos seran ${PlumaM} y ${PlumaF}.`;
        return result;
    }
    // nothing in common
    if (tipoM !== tipoF) {
        result.MutationM = PlumaM;
        result.MutationF = PlumaF;
        result.PorcentageM = "0%";
        result.PorcentageF = "0%";
        result.Message = `No hay coincidencia entre los patrones de pluma.Hay posibilidades de que los hijos sean portadores de las mutaciones de sus padres.`;
        return result;
    }

    return result;
}
// test
// (()=>{
//     const Pluma1 = "Albino";
//     const Pluma2 = "Cara Amarilla";

//     try {
//         const result =  PatronPlumaComparison(Pluma1, Pluma2);
//         console.log(result);
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// )();

export { ColorComparison, PatronComparison, PatronPlumaComparison };