export {
    chmod,
    chmodSync,
    exec,
    execSync,
    exists,
    existsSync,
    findExe,
    findExeSync,
    IS_DARWIN,
    IS_WINDOWS,
    makeTempFile,
    makeTempFileSync,
    registerExe,
    rm,
    rmSync,
    splat,
    writeTextFile,
    writeTextFileSync,
} from "../deps.ts";
export type { IExecOptions, IExecSyncOptions, PsOutput } from "../deps.ts";

import { makeTempFile, makeTempFileSync, writeTextFile, writeTextFileSync } from "../deps.ts";

export function generateScriptFileSync(script: string, ext: string, tpl?: string) {
    const scriptFile = makeTempFileSync({ prefix: "quasar_scripts", suffix: ext });
    if (tpl) {
        writeTextFileSync(scriptFile, tpl.replace("{{script}}", script));
    } else {
        writeTextFileSync(scriptFile, script);
    }

    return scriptFile.replaceAll("\\", "/");
}

export async function generateScriptFile(script: string, ext: string, tpl?: string) {
    const scriptFile = await makeTempFile({ prefix: "quasar_scripts", suffix: ext });
    if (tpl) {
        await writeTextFile(scriptFile, tpl.replace("{{script}}", script));
    } else {
        await writeTextFile(scriptFile, script);
    }

    return scriptFile.replaceAll("\\", "/");
}
