import { capture, captureSync, ps, exec, execSync } from "https://x.nest.land/gnomestack-std@0.0.1/ps/mod.ts";

export const shell = {
    capture,
    captureSync,
    ps,
    exec,
    execSync,
}
export { 
    chmod, 
    chmodSync, 
    ensureDirectory,
    ensureDirectorySync,
    ensureFile,
    ensureFileSync,
    exists, 
    existsSync, 
    isDirectory,
    isDirectorySync,
    readTextFile,
    readTextFileSync,
    rm, 
    rmSync,
    makeTempFile, 
    makeTempFileSync, 
    writeTextFile, 
    writeTextFileSync 
} from "https://x.nest.land/gnomestack-std@0.0.1/fs/mod.ts";
export { 
    cwd,
    chdir,
    exec,
    execSync,
    which, 
    whichSync, 
    registerExe, 
    findExe, 
    findExeSync, 
    getEntry,
    splat,
    splitArguments,
} from "https://x.nest.land/gnomestack-std@0.0.1/ps/mod.ts";

export {
    PlatformNotSupportedError,
    NotFoundOnPathError,
    ArgumentError,
} from "https://x.nest.land/gnomestack-std@0.0.1/errors/mod.ts";

export {
    join,
    resolve,
    basename,
    basenameWithoutExtension,
    dirname,
} from "https://x.nest.land/gnomestack-std@0.0.1/path/mod.ts"
export {
    homeConfigDir,
    homeDataDir,
} from "https://x.nest.land/gnomestack-std@0.0.1/path/os.ts"
export {
    isCi
} from "https://x.nest.land/gnomestack-std@0.0.1/ci/mod.ts"
export { IS_WINDOWS, IS_DARWIN, NEW_LINE, homeDir, set, expand, get, getOrDefault, getRequired } from "https://x.nest.land/gnomestack-std@0.0.1/os/mod.ts";
export type { ExecArgs, ISplatOptions, PsOutput, IExecOptions, IExecSyncOptions } from "https://x.nest.land/gnomestack-std@0.0.1/ps/mod.ts"