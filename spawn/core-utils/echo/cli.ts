import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("echo", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("echo", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("echo", args, options);
}
