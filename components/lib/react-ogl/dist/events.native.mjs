import Pressability from "react-native/Libraries/Pressability/Pressability.js";
import { createEvents } from "./utils.mjs";
const EVENTS = {
  onPress: "onClick",
  onPressIn: "onPointerDown",
  onPressOut: "onPointerUp",
  onPressMove: "onPointerMove"
};
const events = {
  connected: false,
  connect(canvas, state) {
    var _a, _b;
    (_b = (_a = state.events).disconnect) == null ? void 0 : _b.call(_a, canvas, state);
    const { handleEvent } = createEvents(state);
    const handleTouch = (event, type) => {
      event.persist();
      event.nativeEvent.offsetX = event.nativeEvent.locationX;
      event.nativeEvent.offsetY = event.nativeEvent.locationY;
      return handleEvent(event.nativeEvent, type);
    };
    state.events.handlers = Object.entries(EVENTS).reduce(
      (acc, [name, type]) => ({
        ...acc,
        [name]: (event) => handleTouch(event, type)
      }),
      {}
    );
    state.events.connected = new Pressability(state.events.handlers);
  },
  disconnect(_, state) {
    var _a, _b;
    ;
    (_b = (_a = state.events.connected) == null ? void 0 : _a.reset) == null ? void 0 : _b.call(_a);
  }
};
export {
  EVENTS,
  events
};
//# sourceMappingURL=events.native.mjs.map
