import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("split", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("split", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("split", args, options);
}
