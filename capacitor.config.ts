import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.plastikaweb.app',
  appName: 'ionic-photos',
  webDir: 'dist/ionic-photos',
  server: {
    androidScheme: 'https'
  }
};

export default config;
