export type  TechnologiesType = {
    id: string,
	title: string,
	studeid: boolean, 
	deadline: Date, 
	created_at: Date
};
export type BodyType = {
    id: string;
    name: string;
    username: string;
    technologies: TechnologiesType[];
};
export const dataBase: BodyType[] = [];