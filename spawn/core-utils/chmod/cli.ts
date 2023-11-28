import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("chmod", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("chmod", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("chmod", args, options);
}
