package com.example.rn.thenativeparts.communication;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

public class AlertModule extends ReactContextBaseJavaModule {

  private static final String MODULE_NAME = "Alert";
  private static final String SHOW_ALERT_EVENT_KEY = "EVENT_SHOW";
  private static final String SHOW_ALERT_EVENT_NAME = "@alert/show";
  private static final String ALERT_MESSAGE = "This is triggered from the native side!";

  private ReactApplicationContext reactContext;

  public AlertModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return MODULE_NAME;
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(SHOW_ALERT_EVENT_KEY, SHOW_ALERT_EVENT_NAME);
    return constants;
  }

  @ReactMethod
  public void trigger() {
    reactContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
      .emit(SHOW_ALERT_EVENT_NAME, ALERT_MESSAGE);
  }

}
