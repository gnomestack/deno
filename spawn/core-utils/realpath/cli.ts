import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("realpath", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("realpath", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("realpath", args, options);
}
