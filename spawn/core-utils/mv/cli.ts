import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("mv", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("mv", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("mv", args, options);
}
