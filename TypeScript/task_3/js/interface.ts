// Définit un type pour l'ID d'une ligne
export type RowID = number;

// Définit une interface pour un élément de ligne
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // facultatif
}
