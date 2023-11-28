import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("cksum", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("cksum", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("cksum", args, options);
}
