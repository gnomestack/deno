import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("rmdir", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("rmdir", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("rmdir", args, options);
}
