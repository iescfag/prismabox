import { generateTypeboxOptions } from "../annotations/options";
import { getConfig } from "../config";

export function stringEnumType() {
  return `import {
    ${getConfig().typeboxImportVariableName}
  } from "${getConfig().typeboxImportDependencyName}"
  export const ${getConfig().stringEnumName} = <T extends string[]>(items: [...T]) =>
    ${getConfig().typeboxImportVariableName}.Unsafe<T[number]>({ type: "string", enum: items })\n`;
}

export function stringEnumImport() {
  return `import { ${getConfig().stringEnumName} } from "./${getConfig().stringEnumName}${getConfig().importFileExtension}"\n`;
}

export function makeStringEnum(
  inputModels: string[],
  options = generateTypeboxOptions({ exludeAdditionalProperties: true }),
) {
  return `${getConfig().stringEnumName}([${inputModels.map(s => `"${s}"`).join(", ")}])`
}