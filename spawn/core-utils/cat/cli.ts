import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("cat", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("cat", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("cat", args, options);
}
