import React from "react";

const linkPreviewGenerator = require("link-preview-generator");

const previewData = await linkPreviewGenerator(
  "https://www.youtube.com/watch?v=8mqqY2Ji7_g"
);
console.log(previewData);

export default previewData;
