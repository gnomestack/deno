import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("tail", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("tail", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("tail", args, options);
}
