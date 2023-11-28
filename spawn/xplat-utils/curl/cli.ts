import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("curl", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("curl", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("curl", args, options);
}
