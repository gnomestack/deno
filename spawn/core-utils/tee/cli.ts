import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("tee", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("tee", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("tee", args, options);
}
