import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("join", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("join", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("join", args, options);
}
