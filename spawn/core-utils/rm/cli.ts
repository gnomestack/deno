import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("rm", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("rm", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("rm", args, options);
}
