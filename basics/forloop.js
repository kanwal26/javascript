const rows = 4;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < 2 * rows - 1; j++) {
        if (j >= rows - 1 - i && j <= rows - 1 + i) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("\n");
}