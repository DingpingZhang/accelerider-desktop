export function throttle(action, timeSpan) {
  let context, args, result;
  let timeoutHandle = 0;
  let latestExecutedTime = 0;
  let delayExecute = () => {
    latestExecutedTime = 0;
    timeoutHandle = 0;
    result = action.apply(context, args);
    if (!timeoutHandle) context = args = null;
  };

  return () => {
    let currentTime = Date.now();
    if (!latestExecutedTime) latestExecutedTime = currentTime;
    let remaining = timeSpan - (currentTime - latestExecutedTime);
    [context, args] = [this, arguments];
    if (remaining <= 0 || remaining > timeSpan) {
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
        timeoutHandle = 0;
      }
      result = action.apply(context, args);
      latestExecutedTime = currentTime;
      if (!timeoutHandle) context = args = null;
    } else if (!timeoutHandle) {
      timeoutHandle = setTimeout(delayExecute, remaining);
    }

    return result;
  };
}
