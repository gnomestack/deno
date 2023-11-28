import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("printenv", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("printenv", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("printenv", args, options);
}
