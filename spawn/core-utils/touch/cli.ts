import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("touch", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("touch", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("touch", args, options);
}
