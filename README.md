List Products
Get ProductList from context
list products in useEffect
show products in main section


function mountState(initialState) {
  var hook = mountWorkInProgressHook();

  if (typeof initialState === 'function') { // this is the line of code what we are looking 
    initialState = initialState();
  }

  hook.memoizedState = hook.baseState = initialState;
  var queue = hook.queue = {
    last: null,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState
  };
  var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
  return [hook.memoizedState, dispatch];
}