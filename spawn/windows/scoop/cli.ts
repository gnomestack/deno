import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("scoop", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("scoop", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("scoop", args, options);
}
