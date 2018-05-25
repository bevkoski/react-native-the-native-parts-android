package com.example.rn.thenativeparts;

import android.app.Activity;
import android.content.Context;
import android.widget.FrameLayout;

public class CounterView extends FrameLayout {

  public CounterView(Context context) {
    super(context);
  }

  public CounterView(Context context, Activity activity) {
    super(context);
    FrameLayout counterLayout = (FrameLayout) activity.getLayoutInflater().inflate(R.layout.counter, null);
    this.addView(counterLayout);
  }

}
