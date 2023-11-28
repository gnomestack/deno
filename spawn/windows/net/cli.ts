import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("net", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("net", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("net", args, options);
}
