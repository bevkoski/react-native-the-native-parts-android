package com.example.rn.thenativeparts;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class CounterViewManager extends SimpleViewManager<CounterView> {

  private static final String REACT_CLASS = "RCTCounterView";

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  protected CounterView createViewInstance(ThemedReactContext reactContext) {
    return new CounterView(reactContext, reactContext.getCurrentActivity());
  }

}
