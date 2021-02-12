const liveHost = "https://us-central1-mealstogo-66f59.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-66f59/us-central1";
import { Platform } from "react-native";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";

export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
