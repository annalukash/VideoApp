package com.videoapp

import android.app.Application
import com.BV.LinearGradient.LinearGradientPackage
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.flipper.ReactNativeFlipper
import com.facebook.soloader.SoLoader
import com.brentvatne.react.ReactVideoPackage
import com.facebook.react.shell.MainReactPackage
import com.horcrux.svg.SvgPackage
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage
import com.swmansion.rnscreens.RNScreensPackage
import com.th3rdwave.safeareacontext.SafeAreaContextPackage
import com.videoapp.BuildConfig.*
import com.videoduration.VideoDurationPackage
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage
import io.invertase.firebase.analytics.ReactNativeFirebaseAnalyticsPackage
import io.invertase.firebase.config.ReactNativeFirebaseConfigPackage
import java.util.Arrays

class MainApplication : Application(), ReactApplication {

    override val reactNativeHost: ReactNativeHost =
            object : DefaultReactNativeHost(this) {
                override fun getPackages(): List<ReactPackage> =
                        PackageList(this).packages.apply {
                            // Packages that cannot be autolinked yet can be added manually here, for example:
                            // add(MyReactNativePackage())
                            return Arrays.asList(
                                    MainReactPackage(),
                                    ReactVideoPackage(),
                                    ReactNativeFirebaseAppPackage(),
                                    ReactNativeFirebaseConfigPackage(),
                                    ReactNativeFirebaseAnalyticsPackage(),
                                    SvgPackage(),
                                    RNScreensPackage(),
                                    SafeAreaContextPackage(),
                                    LinearGradientPackage(),
                                    VideoDurationPackage(),
                                    AsyncStoragePackage()
                            );
                        }

                override fun getJSMainModuleName(): String = "index"

                override fun getUseDeveloperSupport(): Boolean = DEBUG

                override val isNewArchEnabled: Boolean = IS_NEW_ARCHITECTURE_ENABLED
                override val isHermesEnabled: Boolean = IS_HERMES_ENABLED
            }

    override val reactHost: ReactHost
        get() = getDefaultReactHost(this.applicationContext, reactNativeHost)

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)
        if (IS_NEW_ARCHITECTURE_ENABLED) {
            // If you opted-in for the New Architecture, we load the native entry point for this app.
            load()
        }
        ReactNativeFlipper.initializeFlipper(this, reactNativeHost.reactInstanceManager)
    }
}
