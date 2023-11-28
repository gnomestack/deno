import { readTextFile } from "https://x.nest.land/gs-std@0.0.1/fs/fs.ts";
import { YAML } from "../../deps.ts";

export async function collection(yamlFile: string) {
    const content = await readTextFile(yamlFile);
}
