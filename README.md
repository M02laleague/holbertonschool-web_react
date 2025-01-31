TypeScript Learning Project

Bienvenue dans ce projet d’apprentissage TypeScript ! Ce guide vous permettra de découvrir et de pratiquer les concepts fondamentaux et avancés de TypeScript, tout en construisant progressivement des fonctionnalités de plus en plus complexes.

Présentation du projet

Ce projet est organisé en plusieurs tâches (Tasks), chacune ayant pour but de mettre en lumière un aspect spécifique de TypeScript (interfaces, classes, namespaces, typage nominal, etc.). Les dossiers sont séparés afin de faciliter l’exploration et la compréhension.

Tâches du projet

Task 0 : Creating an Interface for a Student

Création d’une interface Student.

Affichage des données de deux étudiants dans un tableau HTML avec JavaScript Vanilla.

Task 1 : Building a Teacher Interface

Mise en place d’une interface Teacher contenant des propriétés obligatoires, facultatives et dynamiques.

Task 2 : Extending the Teacher Interface

Création de l’interface Directors, héritant de Teacher et ajoutant un champ numberOfReports.

Task 3 : Ambient Namespaces

Introduction d’un type RowID et d’une interface RowElement.

Mise en place d’un module d’ambiance (crud.d.ts) afin de déclarer des fonctions externes (ex : insertRow, updateRow, deleteRow).

Task 4 : Namespaces & Declaration Merging

Utilisation du namespace Subjects pour organiser des classes et des interfaces.

Déclaration fusionnée sur Teacher pour y ajouter des champs spécifiques.

Création de classes concrètes (Cpp, Java, React) héritant d’une classe de base.

Task 5 : Brand Convention & Nominal Typing

Introduction des interfaces MajorCredits et MinorCredits.

Emploi d’une propriété brand pour mettre en place un typage nominal et éviter les erreurs d’assignation.

Concepts abordés

Interfaces TypeScript : Vous apprendrez à définir des schémas pour vos objets, à y inclure des champs obligatoires, facultatifs et dynamiques.

Classes et Héritage : Vous verrez comment modéliser des entités réutilisables avec TypeScript, en profitant de l’héritage et du polymorphisme.

Namespaces : Découvrez comment segmenter et organiser votre code afin d’améliorer sa lisibilité et sa maintenabilité.

Typing Nominal : Explorez la notion de brand pour renforcer la sécurité des types en TypeScript.

Déclarations Ambiantes : Connectez des bibliothèques ou des modules JavaScript non-typés grâce à des fichiers .d.ts.

Installation et configuration

Cloner le dépôt :

git clone https://github.com/M02laleague/holbertonschool-web_react.git
cd holbertonschool-web_react/TypeScript

Installer les dépendances :

npm install

Compiler et exécuter :

Production : npm run build

Développement : npm run start-dev

Structure des fichiers

TypeScript/
├── task_0/
│   ├── js/main.ts
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── package.json
├── task_1/
│   ├── js/main.ts
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── package.json
├── task_2/
│   ├── js/main.ts
│   ├── js/interface.ts
│   ├── js/crud.d.ts
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── package.json
├── task_3/
│   ├── js/subjects/Cpp.ts
│   ├── js/subjects/React.ts
│   ├── js/subjects/Java.ts
│   ├── js/subjects/Subject.ts
│   ├── js/subjects/Teacher.ts
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── package.json
├── task_4/
│   ├── js/main.ts
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── package.json
├── task_5/
│   ├── js/main.ts
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── package.json

Ressources conseillées

TypeScript Documentation : Guide officiel sur la syntaxe, les fonctionnalités avancées et les bonnes pratiques.

Webpack Documentation : Pour configurer et optimiser le bundling de votre projet.

MDN JavaScript Guide : Pour revoir les bases de JavaScript et approfondir certaines notions.

Bonnes pratiques

Respect de la typage : Profitez pleinement de la sécurité offerte par TypeScript en définissant clairement vos interfaces et vos fonctions.

Organisation du code : Séparez vos classes, vos interfaces et vos types dans des fichiers dédiés. Cela facilite la lecture et la maintenance.

Utilisation de l’outil de build : Faites appel à npm run build pour vérifier que tout compile sans erreur. Le linter et le compiler TypeScript vous aideront à repérer les problèmes.

Contribuer

Les contributions sont les bienvenues ! Pour proposer des modifications :

Fork du projet

Créez une branche pour votre fonctionnalité ou correction

Envoyez un Pull Request en expliquant clairement ce que vous avez changé

Avec ce projet, vous pourrez écrire un code TypeScript robuste et maintenable, tout en utilisant des outils modernes comme Webpack pour automatiser et simplifier vos builds. Bonne exploration et apprentissage !

