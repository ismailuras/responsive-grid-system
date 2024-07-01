# Responsive Grid System

This package provides a simple and flexible responsive grid system. It allows you to manage your design according to different screen sizes.

## Installation

Add the package to your project via npm:

# Basic Usage

```
<!-- HTML -->
<div class="container">
  <div class="row">
    <div class="col" data-col-sm="12" data-col-md="6" data-col-lg="4">
      <!-- İçerik -->
    </div>
    <div class="col" data-col-sm="12" data-col-md="6" data-col-lg="4">
      <!-- İçerik -->
    </div>
    <div class="col" data-col-sm="12" data-col-md="6" data-col-lg="4">
      <!-- İçerik -->
    </div>
  </div>
</div>

import ResponsiveGrid from 'responsive-grid-system';

document.addEventListener("DOMContentLoaded", () => {
  new ResponsiveGrid();
});
```
