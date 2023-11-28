import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("chown", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("chown", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("chown", args, options);
}
