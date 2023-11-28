import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("netsh", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("netsh", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("netsh", args, options);
}
