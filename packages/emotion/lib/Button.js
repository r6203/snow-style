"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
exports.Button = function () { return core_1.jsx("h1", null, "Test"); };
console.log('TESt');
/*
export const Button: React.FC<ButtonProps & SystemProps> = props => (
  <button
    //css={theme => css(systemStyles({...props, theme}, 'button'))}
    css={{color: 'white'}}
    {...props}
  />
);
   */
//export const Button = styled.button<ButtonProps & SystemProps>(props =>
//systemStyles(props, 'button'),
//);
