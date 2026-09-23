export const subjects = [
  { value: "devis", label: "Demande de devis" },
  { value: "regravure", label: "Regravure d'un cylindre ou d'un cadre" },
  { value: "infographie", label: "Prestation d'infographie" },
  { value: "technique", label: "Question technique" },
  { value: "autre", label: "Autre demande" },
] as const;

export const MAX_FILE_MB = 8;
export const ACCEPTED_EXT = ["pdf", "jpg", "jpeg", "png", "tif", "tiff", "psd", "ai", "zip"];
