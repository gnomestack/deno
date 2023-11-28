import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("unzip", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("unzip", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("unzip", args, options);
}
