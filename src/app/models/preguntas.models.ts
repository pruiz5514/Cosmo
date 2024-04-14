export interface Preguntas{
    grado: string,
    codigo: string
    id: number,
    competencia: string,
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
    completed: boolean
}3