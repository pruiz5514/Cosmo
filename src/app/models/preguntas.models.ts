export interface Preguntas{
    grado: string,
    codigo: string
    id: number,
    competencia: string,
    componente:string,
    enunciado: string,
    imgEnunciado: string |null,
    pregunta: string,
    a: string | number | null,
    imgA: string |null,
    b: string | number | null,
    imgB: string |null,
    c: string | number | null,
    imgC: string |null,
    d: string | number | null,
    imgD: string |null,
    completed: boolean,
    respuesta_correcta:string
}3