import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("zip", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("zip", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("zip", args, options);
}
