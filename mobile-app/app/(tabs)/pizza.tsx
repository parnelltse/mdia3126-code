import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View className='m-4'> 
        <Text className='border-green-700 border-2 text-yellow-300'>This is a page about the Zza. </Text>
        <Link href="/">Index Page</Link>
        <Link href="/sandwich" style={styles.test}>Sandwich Page</Link>

        </View>
    )
}

const styles = StyleSheet.create({
    test: {
        borderWidth: 2,            
        borderColor: 'green',       
        color: 'yellow',           
    },
});
