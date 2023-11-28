import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("wt", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("wt", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("wt", args, options);
}
