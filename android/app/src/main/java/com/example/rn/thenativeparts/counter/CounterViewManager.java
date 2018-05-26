package com.example.rn.thenativeparts.counter;

import android.graphics.Color;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

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

  @ReactProp(name = "numberColor")
  public void setNumberColor(CounterView view, String color) {
    int parsedColor = Color.parseColor(color);
    view.setCountColor(parsedColor);
  }

  @Override
  public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
    return MapBuilder.of(
      "onCountChange",
      (Object) MapBuilder.of("registrationName", "onCountChange")
    );
  }

}
