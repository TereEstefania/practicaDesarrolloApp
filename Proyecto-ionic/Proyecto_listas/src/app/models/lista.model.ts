import { Actividad } from "./actividades.model";
/**
 * @interface Lista modelo de lista que sera exportado al servicio
 */
export class Lista {
    [x: string]: any;
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn?: Date;
    completada: boolean;
    item: Actividad[];

    constructor(titulo: string) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.completada = false;
        this.item = [];
        this.id = new Date().getTime();
        }
       
}