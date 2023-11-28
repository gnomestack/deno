import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("tar", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("tar", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("tar", args, options);
}
