# **TypeScript Learning Project**

Bienvenue dans ce projet d’apprentissage TypeScript ! Ce guide vous permettra de découvrir et de pratiquer les concepts fondamentaux et avancés de TypeScript, tout en construisant progressivement des fonctionnalités de plus en plus complexes.

---

## **Présentation du projet**
Ce projet est organisé en plusieurs tâches (Tasks), chacune ayant pour but de mettre en lumière un aspect spécifique de TypeScript (interfaces, classes, namespaces, typage nominal, etc.). Les dossiers sont séparés afin de faciliter l’exploration et la compréhension.

---

## **Tâches du projet**

1. **Task 0 : Creating an Interface for a Student**  
   - Création d’une interface `Student`.
   - Affichage des données de deux étudiants dans un tableau HTML avec JavaScript Vanilla.

2. **Task 1 : Building a Teacher Interface**  
   - Mise en place d’une interface `Teacher` contenant des propriétés obligatoires, facultatives et dynamiques.

3. **Task 2 : Extending the Teacher Interface**  
   - Création de l’interface `Directors`, héritant de `Teacher` et ajoutant un champ `numberOfReports`.

4. **Task 3 : Ambient Namespaces**  
   - Introduction d’un type `RowID` et d’une interface `RowElement`.
   - Mise en place d’un module d’ambiance (`crud.d.ts`) afin de déclarer des fonctions externes (ex : `insertRow`, `updateRow`, `deleteRow`).

5. **Task 4 : Namespaces & Declaration Merging**  
   - Utilisation du namespace `Subjects` pour organiser des classes et des interfaces.
   - Déclaration fusionnée sur `Teacher` pour y ajouter des champs spécifiques.
   - Création de classes concrètes (`Cpp`, `Java`, `React`) héritant d’une classe de base.

6. **Task 5 : Brand Convention & Nominal Typing**  
   - Introduction des interfaces `MajorCredits` et `MinorCredits`.
   - Emploi d’une propriété `brand` pour mettre en place un typage nominal et éviter les erreurs d’assignation.

---

## **Concepts abordés**
- **Interfaces TypeScript :** Vous apprendrez à définir des schémas pour vos objets, à y inclure des champs obligatoires, facultatifs et dynamiques.
- **Classes et Héritage :** Vous verrez comment modéliser des entités réutilisables avec TypeScript, en profitant de l’héritage et du polymorphisme.
- **Namespaces :** Découvrez comment segmenter et organiser votre code afin d’améliorer sa lisibilité et sa maintenabilité.
- **Typing Nominal :** Explorez la notion de `brand` pour renforcer la sécurité des types en TypeScript.
- **Déclarations Ambiantes :** Connectez des bibliothèques ou des modules JavaScript non-typés grâce à des fichiers `.d.ts`.

---

## **Installation et configuration**
1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/M02laleague/holbertonschool-web_react.git
   cd holbertonschool-web_react/TypeScript
