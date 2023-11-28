import { cli, cliSync } from "./cli.ts";
import { findBinFile, findBinFileSync } from "../npm/cli.ts";
import { IExecOptions, IExecSyncOptions, ISplatOptions, splat } from "../../core/mod.ts";

export function pnpm(args: string[] | Record<string, unknown>, options?: IExecOptions) {
    if (Array.isArray(args)) {
        return cli(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cli(splat(args, o), options);
}

export function pnpmSync(args: string[] | Record<string, unknown>, options?: IExecSyncOptions) {
    if (Array.isArray(args)) {
        return cliSync(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cliSync(splat(args, o), options);
}

export const findNpmBinFile = findBinFile;
export const findNpmBinFileSync = findBinFileSync;
