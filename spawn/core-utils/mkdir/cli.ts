import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("mkdir", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("mkdir", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("mkdir", args, options);
}
