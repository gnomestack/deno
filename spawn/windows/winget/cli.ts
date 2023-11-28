import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("winget", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("winget", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("winget", args, options);
}
