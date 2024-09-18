import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View>
        <Text>This is a page about the Zza. </Text>
        <Link href="/">Index Page</Link>
        <Link href="/sandwich">Sandwich Page</Link>

        </View>
    )
}
