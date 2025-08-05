module.exports = {
  project: {
    ios: {},
    android: {},
  },
  dependencies: {
    // Vector icons are manually linked in android/app/build.gradle using fonts.gradle
    "react-native-vector-icons": {
      platforms: {
        ios: null,
        android: {
          sourceDir: "./android",
          packageImportPath: "import com.oblador.vectoricons.VectorIconsPackage;",
          packageInstance: "new VectorIconsPackage()"
        }
      },
    },
  },
  assets: ["./assets/fonts/"],
};