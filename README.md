# Incorrect NaN Comparison in TypeScript

This repository demonstrates a subtle bug related to NaN comparisons in TypeScript. The `buggyCompare` function uses a concise ternary operator for comparison, but it fails to correctly handle `NaN` values.  The `compare` function shows the correct implementation.

The bug is highlighted in the console output where `buggyCompare(NaN, NaN)` returns 1 instead of the expected 0.  This is because `NaN` is not equal to itself (`NaN === NaN` is false).