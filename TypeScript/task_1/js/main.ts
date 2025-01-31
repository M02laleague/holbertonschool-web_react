// **Task 1 : Définition de l'interface Teacher**
interface Teacher {
	readonly firstName: string;  // ne peut être défini qu’à l’initialisation
	readonly lastName: string;   // ne peut être défini qu’à l’initialisation
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;  // optionnel
	location: string;
	[key: string]: any;          // permet d’ajouter des propriétés dynamiques
  }
  
  // Exemple d’objet utilisant l’interface Teacher
  const teacher3: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: false,
	location: 'London',
	contract: false,  // exemple de propriété supplémentaire
  };
  
  // Ajout d'autres propriétés dynamiques
  teacher3.contract = true;
  teacher3.subjects = ['Math', 'History'];
  
  // Affichage de l’objet pour vérification
  console.log(teacher3);
  
  // **Task 2 : Ajout de l'interface Directors qui hérite de Teacher**
  interface Directors extends Teacher {
	numberOfReports: number;  // nouveau champ obligatoire
  }
  
  // Exemple d’objet Directors
  const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: true,
	location: 'London',
	numberOfReports: 17,
  };
  
  // Affichage de l’objet pour vérification
  console.log(director1);
  
  // **Task 3 : Ajout d'une fonction printTeacher**
  function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
  }
  
  // Définition d’une interface pour la fonction
  interface printTeacherFunction {
	(firstName: string, lastName: string): string;
  }
  
  // Exemple d’utilisation de printTeacher
  console.log(printTeacher("John", "Doe")); // J. Doe
  
  // **Task 4 : Création de la classe StudentClass**
  interface StudentConstructor {
	new (firstName: string, lastName: string): StudentInterface;
  }
  
  interface StudentInterface {
	workOnHomework(): string;
	displayName(): string;
  }
  
  class StudentClass implements StudentInterface {
	constructor(public firstName: string, public lastName: string) {}
  
	workOnHomework(): string {
	  return "Currently working";
	}
  
	displayName(): string {
	  return this.firstName;
	}
  }
  
  // Exemple d’utilisation de StudentClass
  const student = new StudentClass("Jane", "Doe");
  console.log(student.displayName()); // Jane
  console.log(student.workOnHomework()); // Currently working
  