import * as React from "react";
import useMeasure from "react-use-measure";
import { useContextBridge, FiberProvider } from "its-fine";
import { useIsomorphicLayoutEffect } from "./hooks.mjs";
import { ErrorBoundary, Block } from "./utils.mjs";
import { events } from "./events.mjs";
import { render, unmountComponentAtNode } from "./renderer.mjs";
const CanvasImpl = React.forwardRef(function Canvas2({
  resize,
  children,
  style,
  renderer,
  dpr,
  camera,
  orthographic,
  frameloop,
  events: events$1 = events,
  onCreated,
  ...props
}, forwardedRef) {
  const Bridge = useContextBridge();
  const canvasRef = React.useRef(null);
  const [div, { width, height }] = useMeasure({
    scroll: true,
    debounce: { scroll: 50, resize: 0 },
    ...resize
  });
  const [canvas, setCanvas] = React.useState(null);
  const [block, setBlock] = React.useState(false);
  const [error, setError] = React.useState(false);
  React.useImperativeHandle(forwardedRef, () => canvasRef.current);
  if (block)
    throw block;
  if (error)
    throw error;
  if (canvas && width > 0 && height > 0) {
    render(
      /* @__PURE__ */ React.createElement(Bridge, null, /* @__PURE__ */ React.createElement(ErrorBoundary, {
        set: setError
      }, /* @__PURE__ */ React.createElement(React.Suspense, {
        fallback: /* @__PURE__ */ React.createElement(Block, {
          set: setBlock
        })
      }, children))),
      canvas,
      {
        size: { width, height },
        orthographic,
        frameloop,
        renderer,
        dpr,
        camera,
        events: events$1,
        onCreated
      }
    );
  }
  useIsomorphicLayoutEffect(() => {
    setCanvas(canvasRef.current);
  }, []);
  React.useEffect(() => {
    if (canvas)
      return () => unmountComponentAtNode(canvas);
  }, [canvas]);
  return /* @__PURE__ */ React.createElement("div", {
    ...props,
    ref: div,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      ...style
    }
  }, /* @__PURE__ */ React.createElement("canvas", {
    ref: canvasRef,
    style: { display: "block" }
  }));
});
const Canvas = React.forwardRef(function CanvasWrapper(props, ref) {
  return /* @__PURE__ */ React.createElement(FiberProvider, null, /* @__PURE__ */ React.createElement(CanvasImpl, {
    ...props,
    ref
  }));
});
export {
  Canvas
};
//# sourceMappingURL=Canvas.mjs.map
