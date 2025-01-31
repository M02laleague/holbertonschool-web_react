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
  
  // **Task 5 : Interfaces avancées et création d’objets**
  interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
	workFromHome(): string {
	  return "Working from home";
	}
	getCoffeeBreak(): string {
	  return "Getting a coffee break";
	}
	workDirectorTasks(): string {
	  return "Getting to director tasks";
	}
  }
  
  class Teacher implements TeacherInterface {
	workFromHome(): string {
	  return "Cannot work from home";
	}
	getCoffeeBreak(): string {
	  return "Cannot have a break";
	}
	workTeacherTasks(): string {
	  return "Getting to work";
	}
  }
  
  function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
	  return new Teacher();
	}
	return new Director();
  }
  
  // Vérification
  console.log(createEmployee(200));    // Teacher
  console.log(createEmployee(1000));  // Director
  console.log(createEmployee('$500')); // Director
  
  // **Task 6 : Fonctions spécifiques aux employés**
  function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
  }
  
  function executeWork(employee: Director | Teacher): string {
	if (isDirector(employee)) {
	  return employee.workDirectorTasks();
	}
	return employee.workTeacherTasks();
  }
  
  // Vérification
  const director = createEmployee(1000);
  console.log(executeWork(director)); // Getting to director tasks
  
  const teacher = createEmployee(200);
  console.log(executeWork(teacher)); // Getting to work
  
  // **Task 7 : Types littéraux**
  type Subjects = "Math" | "History";
  
  function teachClass(todayClass: Subjects): string {
	if (todayClass === "Math") return "Teaching Math";
	return "Teaching History";
  }
  
  // Vérification
  console.log(teachClass("Math"));    // Teaching Math
  console.log(teachClass("History")); // Teaching History
  console.log("Test : script chargé");
document.body.innerHTML = "<h1>Bonjour, monde !</h1>";
