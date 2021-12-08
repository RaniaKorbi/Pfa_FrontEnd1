import { Emploi } from '../models/Emploi'
export class Candidature{
    id: number;
    name: String;
    lastName:String;
    email:String;
    phone:String;
    position:String;
    availableStart:String;
    emploi: Emploi;
}