import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("env", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("env", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("env", args, options);
}
