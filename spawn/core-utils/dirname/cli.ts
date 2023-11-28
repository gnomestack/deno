import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("dirname", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("dirname", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("dirname", args, options);
}
