import { which } from "../../deps.ts";
import { assert, test } from "../../dev_deps.ts";
import { git, refName } from "./mod.ts";

const hasGit = undefined != await which("git");

test("git", async () => {
    if (hasGit) {
        const o = await git(["--version"]);
        assert.exists(o);
        assert.equals(o.code, 0);
    }
});

test("refName", async () => {
    if (hasGit) {
        const r = await refName();
        assert.exists(r);
        console.log(r);
    }
});
