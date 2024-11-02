import { StyleSheet} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { RegistrationScreen } from './Screens/RegistrationScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
      >
        <RegistrationScreen />
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
