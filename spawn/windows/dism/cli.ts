import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("dism", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("dism", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("dism", args, options);
}
