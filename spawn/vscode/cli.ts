import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../core/mod.ts";

registerExe("code", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("code", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("code", args, options);
}
