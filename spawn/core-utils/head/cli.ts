import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("head", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("head", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("head", args, options);
}
