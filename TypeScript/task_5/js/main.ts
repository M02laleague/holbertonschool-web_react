// Définition des interfaces MajorCredits et MinorCredits
interface MajorCredits {
	credits: number;
	brand: "major";
  }
  
  interface MinorCredits {
	credits: number;
	brand: "minor";
  }
  
  // Fonctions pour additionner des crédits majeurs et mineurs
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return {
	  credits: subject1.credits + subject2.credits,
	  brand: "major",
	};
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {
	  credits: subject1.credits + subject2.credits,
	  brand: "minor",
	};
  }
  
  // Exemple d’utilisation
  const major1: MajorCredits = { credits: 20, brand: "major" };
  const major2: MajorCredits = { credits: 30, brand: "major" };
  
  const minor1: MinorCredits = { credits: 10, brand: "minor" };
  const minor2: MinorCredits = { credits: 15, brand: "minor" };
  
  const totalMajorCredits = sumMajorCredits(major1, major2); // { credits: 50, brand: "major" }
  const totalMinorCredits = sumMinorCredits(minor1, minor2); // { credits: 25, brand: "minor" }
  
  console.log(totalMajorCredits); // Affiche : { credits: 50, brand: "major" }
  console.log(totalMinorCredits); // Affiche : { credits: 25, brand: "minor" }
  