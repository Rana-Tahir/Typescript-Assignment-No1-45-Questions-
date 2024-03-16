function make_shirts(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript."; }
    console.log("size: ".concat(size, ", message: ").concat(message));
}
// Large shirt with default message
make_shirts("large");
// Medium shirt with default message
make_shirts("medium");
// Smail with any message
make_shirts("small", "Governor IT initiative program by Kamran Tessrori.");
