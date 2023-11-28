import { ISplatOptions, NotFoundOnPathError, splat } from "../../deps.ts";
import { exec, execSync, IExecOptions, IExecSyncOptions } from "../../core/mod.ts";
import { findNpmBinFile, findNpmBinFileSync } from "../npm/mod.ts";

export async function tsc(args?: string[] | Record<string, unknown>, options?: IExecOptions) {
    const cli = tsc.path || await findNpmBinFile("tsc");
    if (!cli) {
        throw new NotFoundOnPathError("tsc");
    }

    if (Array.isArray(args) || !args) {
        return exec(cli, args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return exec(cli, splat(args, o), options);
}

export function tscSync(args?: string[], options?: IExecSyncOptions) {
    const cli = tsc.path || findNpmBinFileSync("tsc");
    if (!cli) {
        throw new NotFoundOnPathError("tsc");
    }

    if (Array.isArray(args) || !args) {
        return execSync(cli, args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return execSync(cli, splat(args, o), options);
}

tsc.path = null as string | null;
