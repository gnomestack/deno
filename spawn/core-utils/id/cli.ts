import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("id", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("id", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("id", args, options);
}
