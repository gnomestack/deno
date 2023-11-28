import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("du", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("du", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("du", args, options);
}
