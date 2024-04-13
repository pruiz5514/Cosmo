export interface Preguntas{
    grado: string,
    codigo: string
    id: number,
    competencia: string,
    enunciado: string,
    imgEnunciado: string |null,
    pregunta: string,
    a: string | number,
    b: string | number,
    c: string | number,
    d: string | number,
    completed: boolean
}