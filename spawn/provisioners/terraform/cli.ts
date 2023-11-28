import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("terraform", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("terraform", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("terraform", args, options);
}
