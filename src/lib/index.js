// Inmemory datastore for caching / storing information.

const lib = {};

const setLib = (key, value) => {
    lib[key] = value;
};

const getLib = (key) => {
    return lib[key];
}

export {
    setLib,
    getLib
}
