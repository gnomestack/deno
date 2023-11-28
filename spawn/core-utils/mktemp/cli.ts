import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("mktemp", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("mktemp", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("mktemp", args, options);
}
