import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("pwd", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("pwd", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("pwd", args, options);
}
