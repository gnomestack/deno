import { cli, cliSync, keygen, keygenSync } from "./cli.ts";
import { IExecOptions, IExecSyncOptions, ISplatOptions, splat } from "../../core/mod.ts";

export function age(args: string[] | Record<string, unknown>, options?: IExecOptions) {
    if (Array.isArray(args)) {
        return cli(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cli(splat(args, o), options);
}

export function ageSync(args: string[] | Record<string, unknown>, options?: IExecSyncOptions) {
    if (Array.isArray(args)) {
        return cliSync(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cliSync(splat(args, o), options);
}

export function ageKeygen(args: string[] | Record<string, unknown>, options?: IExecOptions) {
    if (Array.isArray(args)) {
        return keygen(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return keygen(splat(args, o), options);
}

export function ageKeygenSync(args: string[] | Record<string, unknown>, options?: IExecSyncOptions) {
    if (Array.isArray(args)) {
        return keygenSync(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return keygenSync(splat(args, o), options);
}
