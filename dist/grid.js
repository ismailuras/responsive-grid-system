class ResponsiveGrid {
  constructor() {
    this.columns = 12;
    this.breakpoints = {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    };
    this.init();
  }

  init() {
    this.updateGrid();
    window.addEventListener("resize", () => this.updateGrid());
  }

  updateGrid() {
    const width = window.innerWidth;
    document.querySelectorAll(".col").forEach((col) => {
      const sizes = this.getSizes(col);
      const newSize = this.getSizeForCurrentWidth(sizes, width);
      col.style.flex = `0 0 ${(100 / this.columns) * newSize}%`;
      col.style.maxWidth = `${(100 / this.columns) * newSize}%`;
    });
  }

  getSizes(col) {
    const sizes = {};
    Object.keys(this.breakpoints).forEach((bp) => {
      const size = col.getAttribute(`data-col-${bp}`);
      if (size) {
        sizes[bp] = parseInt(size, 10);
      }
    });
    return sizes;
  }

  getSizeForCurrentWidth(sizes, width) {
    let newSize = sizes.default || this.columns;
    Object.keys(this.breakpoints).forEach((bp) => {
      if (width >= this.breakpoints[bp] && sizes[bp]) {
        newSize = sizes[bp];
      }
    });
    return newSize;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  new ResponsiveGrid();
});
