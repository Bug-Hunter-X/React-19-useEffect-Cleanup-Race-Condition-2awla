# React 19 useEffect Cleanup Race Condition

This repository demonstrates a subtle race condition that can occur in React 19's `useEffect` hook, potentially leading to memory leaks. The issue stems from the interaction between concurrent rendering and the cleanup function's execution timing.

## Problem Description

The example showcases a simple counter component using `setInterval` within a `useEffect` hook.  In certain situations (rapid component unmounting or concurrent rendering), the `clearInterval` function within the cleanup might not execute before the component is unmounted, potentially leaving an active interval behind. This leads to the interval continuing to run even after the component is no longer on the screen resulting in a memory leak.

## Solution

The provided solution addresses the issue by using a useRef hook to manage the interval ID, ensuring that `clearInterval` is only called if the interval is still active when the component unmounts.  This prevents potential race conditions and memory leaks.