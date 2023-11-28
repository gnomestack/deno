import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("yes", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("yes", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("yes", args, options);
}
