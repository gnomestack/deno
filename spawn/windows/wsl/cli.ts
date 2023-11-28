import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("wsl", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("wsl", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("wsl", args, options);
}
