// @ts-nocheck
import * as EmotionStyled from "@emotion/styled";
import * as React from "react";
import * as ReactDom from "react-dom";

const globalObj = window;

guard("EmotionStyled", EmotionStyled);
guard("React", React);
guard("ReactDom", ReactDom);

globalObj["EmotionStyled"] = EmotionStyled;
globalObj["React"] = React;
globalObj["ReactDom"] = ReactDom;

function guard(property, expected) {
  var existing = globalObj[property];

  if (existing === expected && expected !== undefined)
    console.warn('[expose-peers] "' + property + '" already exists in global scope, but with correct value');
  else if (existing !== undefined)
    throw new Error('[expose-peers] "' + property + '" already exists in the global scope, cannot overwrite');
}
