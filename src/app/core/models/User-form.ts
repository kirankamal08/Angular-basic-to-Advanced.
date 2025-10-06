export interface Skill {
  skill: string;
}

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  designation: string;
  skills: Skill[];
}
