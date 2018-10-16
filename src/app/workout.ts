

// je creer ma classe workout et ExerciceType

export class Workout {
    id: number;
    name: string;
    exercices: Exercice [] = [];
}

export class ExerciceType {
    id: number;
    name: string;
}

export class Exercice {

    id: number;
    set: number;
    rep: number;
    exerciceType: ExerciceType;
}

export class Performance {
id: number;
exercice: string;
max: number;
date: Date;
}
