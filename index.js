const cp = require("child_process");

function getJreVerSync() {
    let _return = [];
    let _returnStr;
    try {
        _returnStr = cp.spawnSync("java", ["-version"]).stderr.toString();
    } catch (RUSH_E) {
        _return.push("");
        return _return;
    }
    let _version = _returnStr.split("\"", 2)[1];
    _return.push(_version);
    let _decodedArray = _version.split(".");
    _return.push(parseInt(_decodedArray[0]));
    _return.push(parseInt(_decodedArray[1]));
    _return.push(parseInt(_decodedArray[2]));
    return _return;
}

function isJrePresent() {
    try {
        return cp.execSync("java --version", {encoding: "utf8"}).includes("untime");
    } catch (oops) {
        return false;
    }
}

async function getJreVer() {
    return getJreVerSync();
}

async function isJrePresentSync() {
    return isJrePresent();
}

module.exports = {
    getJreVer,
    getJreVerSync,
    isJrePresentSync,
    isJrePresent
}