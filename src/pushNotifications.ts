import { PushNotifications } from "@capacitor/push-notifications";
import { Capacitor } from "@capacitor/core";

export async function initPushNotifications() {
  if (!Capacitor.isNativePlatform()) return;

  PushNotifications.addListener("registration", (token) => {
    console.log("FCM TOKEN:", token.value);
  });

  PushNotifications.addListener("registrationError", (err) => {
    console.error("Registration error:", err);
  });

  PushNotifications.addListener("pushNotificationReceived", (notification) => {
    console.log("Push received:", notification);
  });

  PushNotifications.addListener("pushNotificationActionPerformed", (action) => {
    console.log("Push tapped:", action.notification);
  });

  const perm = await PushNotifications.requestPermissions();
  if (perm.receive !== "granted") return;

  await PushNotifications.register();
}
