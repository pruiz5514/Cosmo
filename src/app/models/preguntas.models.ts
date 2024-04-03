export interface Preguntas{
    id: number,
    competencia: string,
    enunciado: string,
    pregunta: string,
    a: string | number,
    b: string | number,
    c: string | number,
    d: string | number,
    completed: boolean
}