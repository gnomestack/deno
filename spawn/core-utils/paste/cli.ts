import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("paste", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("paste", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("paste", args, options);
}
