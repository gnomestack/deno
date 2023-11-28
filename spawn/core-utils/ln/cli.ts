import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("ln", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("ln", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("ln", args, options);
}
