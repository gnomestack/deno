import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("basename", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("basename", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("basename", args, options);
}
