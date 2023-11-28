import { cli, cliSync } from "./cli.ts";
import { IExecOptions, IExecSyncOptions, ISplatOptions, splat } from "../../core/mod.ts";
import { IChocoInstallArgs, IChocoUninstallArgs } from "./interfaces.ts";

export function choco(args: string[] | Record<string, unknown>, options?: IExecOptions) {
    if (Array.isArray(args)) {
        return cli(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cli(splat(args, o), options);
}

export function chocoSync(args: string[] | Record<string, unknown>, options?: IExecSyncOptions) {
    if (Array.isArray(args)) {
        return cliSync(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cliSync(splat(args, o), options);
}

export function install(args: IChocoInstallArgs | string, options?: IExecOptions) {
    if (typeof args === "string") {
        return choco(["install", args, "-y"], options);
    } else {
        const o = args as IChocoInstallArgs;
        o.yes ??= true;

        const params = splat(o, { prefix: "--", command: ["install"] });
        return choco(params, options);
    }
}

export function uninstall(args: IChocoUninstallArgs | string, options?: IExecOptions) {
    if (typeof args === "string") {
        return choco(["uninstall", args, "-y"], options);
    }

    const o = args;
    o.yes ??= true;

    const params = splat(o, { prefix: "--", command: ["uninstall"] });
    return choco(params, options);
}
